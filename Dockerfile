FROM node:16-alpine as build

WORKDIR /app

RUN echo 'NODE_ENV=production' > .env

# files which should not be copied have to be listed in .dockerignore
COPY . ./

RUN yarn install
RUN yarn run build

FROM node:16-alpine

WORKDIR /opt/neosolutions

# copy package.json to install only production dependencies
COPY package.json ./
COPY .yarnrc ./
RUN yarn install --production

# copy from previous image only build directory
COPY --from=build /app/build/src .

CMD [ "node" , "index.js" ]
