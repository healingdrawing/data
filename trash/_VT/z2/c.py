#!usr/bin/python

import sys
import time
import logging

try:
  import dirsync
  print("used dirsync version ", dirsync.__version__)
except:
  print("sorry, you need python3 'dirsync' library installed\n", sys.exc_info())


class SF:
  """sinchronize folder"""

  def __init__(self):
    for arg in sys.argv: print(arg)
    d = sys.argv
    self.interval = d[1]
    self.source = d[2]
    self.target = d[3]
    self.logName = d[4]
    logging.basicConfig(
      level=logging.DEBUG,
      format="%(asctime)s [%(levelname)s] %(message)s",
      handlers=[
        logging.FileHandler(self.logName),
        logging.StreamHandler(sys.stdout)
      ]
    )
    self.myLog = logging.getLogger('dirsync')

  def check(self):
    """syncronization"""
    # remember, tested, not use force=True, it kill folders permission scheme, and not use ctime=True
    dirsync.sync(
      self.source,
      self.target,
      action="sync",
      verbose=True,
      create=True,
      purge=True,
      logger=self.myLog
    )

  def run(self):
    while True:
      self.check()
      time.sleep(int(self.interval))

sf = SF()
sf.run()
input("press to close")