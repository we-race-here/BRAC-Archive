#!/bin/sh

docker build -t wrh-brac:prd -f Dockerfile .
if [ `echo $?` == 0 ]; then
	docker rm -f wrh-brac
	docker run -dt --restart=always -p 8010:8010 --name wrh-brac wrh-brac:prd
fi