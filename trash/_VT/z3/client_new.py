cc=""
correct = False
while cc == "" or not correct:
  cc=input("choose your usercode, only numbers allowed\n")
  cc=cc[:10]
  correct=True
  for i in cc:
    if i not in "0123456789":
      correct = False
      break
  if cc == "" or not correct:
    print("this string not allowed, try another")
  else:
    print("remember, your usercode is\n{}\n\n".format(cc))

input("press enter to send code to server")

import requests

URL = "http://localhost:8000"

PARAMS = {'usercode':cc}

# sending get request and saving the response as response object
r = requests.get(url = URL, params = PARAMS)

supercode = r.text.split("&lt;supercode&gt;",1)[1].split("&lt;/supercode&gt;",1)[0]
print("rememeber your supercode is\n{}\n\n".format(supercode))

input("enter to close")