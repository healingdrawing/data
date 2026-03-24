#!usr/bin/python

"""process runner and observer"""
import shlex, re, time, sys, os
from subprocess import Popen, PIPE, run

try:
  if getattr(sys, 'frozen', False):
    mydir = os.path.dirname(sys.executable)
  elif __file__:
    mydir = os.path.dirname(os.path.abspath(__file__))
except:
  print("something wrong with file directory detection\n", sys.exc_info())
  input("try restart the programm")

class PO:
  """
  ProcessObserver.
  Run process and manage information about executed process
  using linux prebuilded "top" software, and "lsof" shell syntax.
  """

  def __init__(self):
    # process
    self.p = False
    # process id, to collect data from system
    self.pid = False
    # return code attribute after process terminated
    self.rca = False
    # observed data from process execution
    self.oData = False
    # log interval in seconds
    self.logTime = 0
    # process execution sytnax
    self.proPath = ""
    print("*" * 61)
    print("* Run process and manage information about executed process *")
    print("*" * 61, "\n")

  def infoCollector(self):
    runtop = "top -b -n 1 -E m -p {}".format(self.pid)
    p = run([runtop], shell=True, stdout=PIPE)
    # need 4 5 8 indexes, sep - spaces
    info = str(p.stdout)
    del p
    info = re.sub('\s+', ' ', info)
    info = info.split("\\n")[-3:-1]
    # headers
    h = info[0].strip().split()
    # data
    d = info[-1].strip().split()

    # print(h[4], "=", d[4], " ", h[5], "=", d[5], " ", h[8], "=", d[8])

    runfd = "lsof -a -p {} | wc -l".format(self.pid)
    p = run([runfd], shell=True, stdout=PIPE)
    # descriptors number
    dm = str(int(p.stdout) - 1)
    # print("file descriptors", dm, "\n\n")

    # time stamp for future manipulations
    ts = str(int(time.time()*1000))

    return (d[8], d[5], d[4], dm, ts)

  def runProcess(self):
    self.p = Popen(shlex.split(self.proPath), shell=False, stdout=PIPE)
    self.pid = self.p.pid
    self.collectorLoop()

  def collectorLoop(self):
    while True:
      if self.p.poll() is not None:
        break
      self.oData = self.infoCollector()
      self.printToFile()
      time.sleep(self.logTime)
    self.rca = self.p.poll()

  def printToFile(self):
    """print data to file in predetermined form"""
    fname = "cpu_res_virt_fd_systimems.txt"
    fDir = mydir + os.sep + fname
    file = open(fDir, mode="at", encoding="utf-8")
    line = self.prepareData()
    file.write(line)
    file.close()

  def prepareData(self):
    sx = "  ".join(self.oData)
    return sx+"\n"

  def run(self):
    """run to process and monitoring"""

    # how often will be collected info
    while self.logTime < 1:
      self.logTime = int(input("input time period for get statistics in integer positive seconds\n"))
      if (self.logTime < 1):
        print("must be integer number of seconds greater than 0")
      else:
        print(
          "statistics about process will be collected with interval {} sec".format(self.logTime))

    # process for execution
    while self.proPath == "":
      self.proPath = input("\ninput executed terminal syntax\n")
      if (self.proPath == ""):
        print("empty input, please input terminal syntax for execution")
      else:
        print("{} will be executed".format(self.proPath))

    self.runProcess()

try:
  po = PO()
  po.run()
except:
  print("sorry, try restart the programm, and be precise\n", sys.exc_info())
  input("press enter")
