from werkzeug.wrappers import Request, Response, request

class Middleware():
  ''' Simple middleware '''

  def __init__(self, app):
    self.app = app
    self.username = 'isekai'
    self.password = 'isekai'

  def __call__(self, environ, start_response):
    request = Request(environ)
    username = request.authorization['username']
    password = request.authorization['password']

    print(username)

    if username == self.username and password == self.password:
      environ['user'] = { 'name': 'isekai' }
      return self.app(environ, start_response)

    res = Response(u'Authorization failed', mimetype= 'text/plain', status=401)
    return res(environ, start_response)