#!/bin/sh

case $1 in
--prod)
DOCKER_NAME=$PC_DOCKER_NAME_PROD
DEPLOY_PORT=$PC_DEPLOY_PORT_PROD
;;
*)
DOCKER_NAME=$PC_DOCKER_NAME
DEPLOY_PORT=$PC_DEPLOY_PORT
;;
esac

image=$(docker images | grep ${DOCKER_NAME} | awk '{print $1}')
docker build -t ${DOCKER_NAME}/${CI_PIPELINE_IID} .

docker stop ${DOCKER_NAME}
docker rm ${DOCKER_NAME}
docker run --detach --name ${DOCKER_NAME} --publish 127.0.0.1:${DEPLOY_PORT}:8000 --restart always ${DOCKER_NAME}/${CI_PIPELINE_IID}
docker rmi ${image}
