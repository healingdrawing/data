#!usr/bin/python
import sys,os
import urllib.parse

try:
  if getattr(sys, 'frozen', False):
    mydir = os.path.dirname(sys.executable)
  elif __file__:
    mydir = os.path.dirname(os.path.abspath(__file__))
except:
  print("something wrong with file directory detection\n", sys.exc_info())
  input("try restart the programm")

class FileSaver:
  def __init__(self):
    self.mydir = mydir

  def saveToFile(self, usercode, supercode):
    fDir = self.mydir + os.sep + supercode
    file = open(fDir, mode="wt", encoding="utf-8")
    file.write(usercode)
    file.close()

  def checkFromFile(self, request):
    text = str(request)
    s1 = "uri=/?usercode="
    s2 = "&supercode="
    s3 = "&logtext="
    s4 = " clientproto="
    usercode = text.split(s1,1)[1].split(s2,1)[0]
    supercode = text.split(s2,1)[1].split(s3,1)[0]
    logText = text.split(s3,1)[1].split(s4,1)[0]
    logText = urllib.parse.unquote_plus(logText)

    correct = False
    if supercode in os.listdir(mydir):
      fDir = self.mydir + os.sep + supercode
      file = open(fDir, mode="rt", encoding="utf-8")
      fileusercode = file.readline()
      file.close()
      if usercode == fileusercode:
        correct = True
        self.saveToLog(logText)
    return correct

  def saveToLog(self, logText):
    fDir = self.mydir + os.sep + "log"
    file = open(fDir, mode="at", encoding="utf-8")
    file.writelines(("\n",logText))
    file.close()
