FROM node:16-alpine

ARG SERVICENAME

RUN mkdir -p /opt/neosolutions/$SERVICENAME
WORKDIR /opt/neosolutions/$SERVICENAME

# Add there echo commands to build config files, etc
RUN echo 'NODE_ENV=production' > .env

# files which should not be copied have to be listed in .dockerignore
COPY . ./

RUN yarn install
RUN yarn run build

CMD [ "yarn" , "start" ]

