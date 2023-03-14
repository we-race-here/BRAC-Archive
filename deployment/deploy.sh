#!/bin/bash
git clone https://github.com/we-race-here/BRAC-Archive.git /home/jenkins/wrh-brac
cd /home/jenkins/wrh-brac
git checkout master
mkdir -p media

sudo cp -rf ../nginx.conf  /etc/nginx/nginx.conf
sudo cp -rf ../default.conf  /etc/nginx/sites-available/default
cp ../.env /home/jenkins/wrh-brac/wrh_brac/
cp -rf ../dist /home/jenkins/wrh-brac/

#cp ../ca-certificate.crt /home/jenkins/zp-results/
pip install uwsgi
python manage.py collectstatic
#python manage.py migrate

# Restart nginx
sudo /etc/init.d/nginx start || sudo /etc/init.d/nginx start

# Running Celery
#celery -A zp_result worker -l info &
#celery -A zp_result beat &

# Running Server
uwsgi --socket mysite.sock --module wrh_brac.wsgi --buffer-size=100000 --chmod-socket=666 --master --processes 4 --threads 2