import requests

cc=""
correct = False
while cc == "" or not correct:
  cc=input("enter your usercode, generated before\n")
  cc=cc[:10]
  correct=True
  for i in cc:
    if i not in "0123456789":
      correct = False
      break
  if cc == "" or not correct:
    print("this string not allowed, try another")
  else:
    print("your usercode is\n{}\n\n".format(cc))

supercc = ""
while supercc == "":
  supercc=input("enter your supercode, generated before\n")
  if supercc == "":
    print("this string not allowed, try another")
  else:
    print("your supercode is\n{}\n\n".format(supercc))

correct = True
while correct:

  logText = input("input log message, and press enter to send to server\n")

  URL = "http://localhost:8001"

  PARAMS = {'usercode':cc, 'supercode':supercc, 'logtext':logText}

  # sending get request and saving the response as response object
  r = requests.get(url = URL, params = PARAMS)

  supercode = r.text.split("&lt;supercode&gt;",1)[1].split("&lt;/supercode&gt;",1)[0]
  print("server message:\n{}\n\n".format(supercode))

  if supercode != "logged ok":
    correct = False
input("enter to close")