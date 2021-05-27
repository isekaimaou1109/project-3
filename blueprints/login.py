from flask import Blueprint, render_template

login = Blueprint('login', __name__, url_prefix='/login', template_folder='blueprints')

@login.route('/')
def index():
  return render_template('login.html', title='Trang Đăng nhập')