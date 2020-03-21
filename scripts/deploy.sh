#!/bin/sh
image=$(docker images | grep ${PC_DOCKER_NAME} | awk '{print $1}')
docker build -t ${PC_DOCKER_NAME}/${CI_PIPELINE_IID} .

docker stop ${PC_DOCKER_NAME}
docker rm ${PC_DOCKER_NAME}
docker run --detach --name ${PC_DOCKER_NAME} --publish 127.0.0.1:${PC_DEPLOY_PORT}:8000 --restart always ${PC_DOCKER_NAME}/${CI_PIPELINE_IID}
docker rmi ${image}
