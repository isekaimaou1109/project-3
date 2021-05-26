from flask import Flask, render_template

def create_app():
  app = Flask(__name__)
  # existing code omitted

  # from blueprints import auth
  # app.register_blueprint(auth.bp)

  from middle import ipDetection

  app.wsgi_app = ipDetection.Middleware(app.wsgi_app)

  @app.route('/', methods=['GET','POST'])
  def index():
    return render_template('index.html', title='Trang Chủ')

  return app
