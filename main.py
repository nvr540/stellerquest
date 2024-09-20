from flask import Flask, render_template, redirect, url_for, request, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import redirect, secure_filename
import json
import os
import time
import math; from datetime import datetime
# from spoof import sendmail


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///portfolio.db'
app.secret_key = "I don't know anything"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(15), nullable=False)
    password = db.Column(db.String(15), nullable=False)


class Skills(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(15), nullable=False)
    accuracy = db.Column(db.Integer, nullable=False)
    date = db.Column(db.String(), nullable=True, default=datetime.utcnow())


class Certificates(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(15), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    img_name = db.Column(db.String(20), nullable=False)
    date = db.Column(db.String(), nullable=True, default=datetime.utcnow())


class Books(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(15), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    img_name = db.Column(db.String(20), nullable=False)
    date = db.Column(db.String(), nullable=True, default=datetime.utcnow())


class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(15), nullable=False)
    link = db.Column(db.String(120), nullable=False)
    msg = db.Column(db.String(120), nullable=False)
    date = db.Column(db.String(), nullable=True, default=datetime.utcnow())


@app.route('/')
def home():
 skills = Skills.query.order_by(Skills.date.desc()).all()
 cert = Certificates.query.order_by(Certificates.id.desc()).all()
 book = Books.query.order_by(Books.id.desc()).all()
 half = math.ceil(len(skills)/2)
 skills1 = skills[:half]
 skills2 = skills[half:]
 return render_template("index.html", skills=skills, skills1=skills1, skills2=skills2, cert=cert,book=book, slide1=len(cert),slide2=len(book))


app.app_context().push()
add = Users(name='nivrita', password='kali')
db.session.add(add)
db.session.commit()


@app.route('/terminal')
def terminal():
    return render_template("terminal.html")


@app.route('/contact', methods=["POST"])
def contact():
    if request.method == "POST":
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        name = f"{first_name} {last_name}"
        msg = request.form.get("msg")
        email = request.form.get("email")
        sendmail(from_email=email, name=name, message=msg)
        return redirect('/')


@app.route('/about')
def about():
    return render_template("about.html")
@app.route('/quest') #FOR NOW, LATER WILL MAKE A QUEST SECTION.
def quest():
    return render_template("quest.html")
@app.route('/test') #FOR NOW, LATER WILL MAKE A QUEST SECTION.
def test():
    return render_template("test.html")


@app.route("/dashboard", methods=['GET',  'POST'])
def dashboard():
    # if session['admin']== params['username'] and 'admin' in session:
    if ('user_id' in session and session['user_id'] == 1):

        return render_template('dashboard.html')
    if request.method == 'POST':
        users = Users.query.filter_by(id='1').first()
        username = request.form.get('uname')
        password = request.form.get('pass')
        if username == users.name and password == users.password:
            session['user_id'] = users.id
            return render_template('dashboard.html')
    return redirect('/login')


@app.route('/skills/<string:sno>', methods=['GET', 'POST'])
def skills(sno):
    if ('user_id' in session and session['user_id'] == 1):
        if request.method == 'GET':
            if str(sno).isnumeric():
                if int(sno) == 0:
                    skills = Skills.query.all()
                else:
                    skills = Skills.query.filter_by(id=sno).first()
                return render_template("skills.html", skills=skills, sno=str(sno))
            else:
                return redirect("/skills/0")
        if request.method == 'POST':
            skill = request.form.get("skill")
            accuracy = request.form.get("accuracy")
            if str(sno).isnumeric():
                if int(sno) == 0:
                    skills = Skills(name=skill, accuracy=accuracy)
                    db.session.add(skills)
                    db.session.commit()
                    return redirect(f'/skills/0')
                else:
                    skills = Skills.query.filter_by(id=sno).first()
                    skills.name = skill
                    skills.accuracy = accuracy
                    db.session.commit()
                    return redirect(f'/skills/0')


@app.route('/cert/<string:sno>', methods=['GET', 'POST'])
def cert(sno):
    if ('user_id' in session and session['user_id'] == 1):
        if request.method == 'GET':
            if str(sno).isnumeric():
                if int(sno) == 0:
                    commons = Certificates.query.all()
                else:
                    commons = Certificates.query.filter_by(id=sno).first()
                return render_template("cert.html", commons=commons, sno=str(sno), var='cert')
            else:
                return redirect("/book/0")
        if request.method == 'POST':
            cert_name = request.form.get("cert_name")
            img_name = request.form.get("img_name")
            description = request.form.get("description")
            f = request.files['file']

            if str(sno).isnumeric():
                if int(sno) == 0:
                    cert = Certificates(
                        name=cert_name, img_name=img_name, description=description)
                    if f.filename != '':
                        f.save(os.path.join('static/img/',
                               secure_filename(img_name)))
                    db.session.add(cert)
                    db.session.commit()
                    return redirect(f'/cert/0')
                else:
                    cert = Certificates.query.filter_by(id=sno).first()
                    cert.name = cert_name
                    cert.img_name = img_name
                    cert.description = description
                    if f.filename != '':
                        f.save(os.path.join('static/img/', secure_filename(img_name)))
                    db.session.commit()
                    return redirect(f'/cert/{sno}')
            else:
                return redirect('/cert/0')
@app.route('/book/<string:sno>', methods=['GET', 'POST'])
def book(sno):
    if ('user_id' in session and session['user_id'] == 1):
        if request.method == 'GET':
            if str(sno).isnumeric():
                if int(sno) == 0:
                    commons = Books.query.all()
                else:
                    commons = Books.query.filter_by(id=sno).first()    
                return render_template("cert.html",commons=commons,sno=str(sno),var='book')
            else:
                return redirect("/book/0")
        if request.method == 'POST':
            book_name = request.form.get("book_name")
            img_name = request.form.get("img_name")
            description = request.form.get("description")
            f=request.files['file']
            
            if str(sno).isnumeric():
                if int(sno) == 0:
                    book = Books(name=book_name, img_name=img_name, description=description)
                    if f.filename != '':
                        f.save(os.path.join('static/img/', secure_filename(img_name)))
                    db.session.add(book)
                    db.session.commit()
                    return redirect(f'/book/0')
                else:
                    book = Books.query.filter_by(id=sno).first()
                    book.name = book_name
                    book.img_name = img_name
                    book.description = description
                    if f.filename != '':
                        f.save(os.path.join('static/img/', secure_filename(img_name)))
                    db.session.commit()
                    return redirect(f'/book/{sno}')
            else:
                return redirect('/book/0')
@app.route('/skills/delete/<string:sno>', methods=['GET', 'POST'])
def skills_delete(sno):
    if ('user_id' in session and session['user_id'] == 1):
        skill = Skills.query.filter_by(id=sno).first()
        db.session.delete(skill)
        db.session.commit()
        return redirect("/skills/0")
@app.route('/cert/delete/<string:sno>', methods=['GET', 'POST'])
def cert_delete(sno):
    if ('user_id' in session and session['user_id'] == 1):
        cert = Certificates.query.filter_by(id=sno).first()
        db.session.delete(cert)
        db.session.commit()
        return redirect("/cert/0")
@app.route('/book/delete/<string:sno>', methods=['GET', 'POST'])
def book_delete(sno):
    if ('user_id' in session and session['user_id'] == 1):
        book =Books.query.filter_by(id=sno).first()
        db.session.delete(cert)
        db.session.commit()
        return redirect("/book/0")
@app.route("/login")
def login():
    return render_template("login.html")
if __name__ == '__main__':
    app.run(host='0.0.0.0')
