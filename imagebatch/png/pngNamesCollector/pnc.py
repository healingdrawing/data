import os
import sys
import datetime
# from PIL import Image

if getattr(sys, 'frozen', False):
    mydir = os.path.dirname(sys.executable)
elif __file__:
    mydir = os.path.dirname(os.path.abspath(__file__))

print("------------mydir------------")
print(mydir)
print("------------------------")

usedExt = input(
    "supported collected files extension filter, using \"+\" as separator. Default .png .\nExample:  .+.png+.jpg => no extension + png + jpg \n. Input filter and/or press enter to start  :\n")
try:
    usedExt = usedExt.split("+")
    if(len(usedExt[0]) == 0):
        usedExt = tuple([".png"])
    else:
        usedExt = tuple(usedExt)
except:
    print("bad incoming")
    print(sys.exc_info())
    usedExt = tuple(".png")

print("list.txt file will collect files with next extensions\n" +
      str(usedExt) +
      " in form of \"name1\",\"name2\""
      )

try:
    print("------------------ start ----------------------")
    print(datetime.datetime.now().time())
    fnames = []
    for file in os.listdir(mydir):
        fext = file.split(".")
        if len(fext) == 1 and "." in usedExt \
           or len(fext) > 1 and "."+fext[-1] in usedExt:
            fnames += [file]
    for fname in fnames:
        print(fname)
    adres = mydir+os.sep+"list.txt"
    txt = open(adres, mode="wt", encoding="utf-8")
    txt.writelines("\""+fnames[i] + ("\"", "\",\n")[i < len(fnames)-1]
                   for i in range(len(fnames)))
    txt.close()

    print(datetime.datetime.now().time())
    print("------------------ end ----------------------")

except:
    print(sys.exc_info())
input("done / enter to close")
