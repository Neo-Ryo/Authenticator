FROM node:14-alpine

ARG SERVICENAME

RUN mkdir -p /opt/neosolutions/$SERVICENAME
WORKDIR /opt/neosolutions/$SERVICENAME

# Add there echo commands to build config files, etc

# files which should not be copied have to be listed in .dockerignore
COPY . ./

RUN yarn install
RUN yarn run build

CMD [ "yarn" , "start" ]

