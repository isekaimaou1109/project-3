from flask import Flask, render_template

def create_app():
  app = Flask(__name__)
  # existing code omitted

  from blueprints.login import login
  app.register_blueprint(login)

  from middle import ipDetection
  app.wsgi_app = ipDetection.Middleware(app.wsgi_app)

  @app.route('/', methods=['GET','POST'])
  def index():
    return render_template('index.html', title='Trang Chủ')

  return app

if __name__ == "__main__":
  create_app().run('127.0.0.1', 5000, debug=True)
