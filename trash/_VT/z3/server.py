from twisted.internet import reactor
from twisted.web import resource, server
import filesaver
fs = filesaver.FileSaver()

class MyResource0(resource.Resource):
  isLeaf = True
  def render_GET(self, request):
    # print("request is ",request)
    usercode = str(request).split("usercode=",1)[1].split(" clientproto=",1)[0]
    supercode = "super"+usercode
    fs.saveToFile(usercode, supercode)
    # print(supercode)
    return '8000 ok <supercode>{}</supercode>'.format(supercode)

class MyResource1(resource.Resource):
  isLeaf = True
  def render_GET(self, request):

    correct = fs.checkFromFile(request)
    if correct:
      supercode = "logged ok"
    else:
      supercode = "wrong credentials, try again"
    return '8001 ok <supercode>{}</supercode>'.format(supercode)



site0 = server.Site(MyResource0())
site1 = server.Site(MyResource1())


reactor.listenTCP(8000, site0)
reactor.listenTCP(8001, site1)
reactor.run()