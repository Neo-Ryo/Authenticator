# Service boilerplate template

### Introduction
This is a simple boilerplate for services, you will find several feature that will help you get running with your service. It is far from perfect, so don't make any hesitation to make PR with your improved and usefull feature.
#### Environment variables :
- SECRET=Funny chicken
- NODE_ENV=dev
- LOCAL_PORT=9999
- LOCAL_URL=http://localhost:9999
- NEO_SERVER_URL=http://localhost:3000
- NEO_HELPER_URL=http://localhost:3001
- JWT_SECRET=Miraculous platypus

#### Exposed Port:
- 8080

#### Internal Service Name:
- boilerplateservice

## Scripts

Before all you can run `nvm use`, it will change your node version to lts based on `.nvmrc`. If you haven't installed it yet follow this steps:
- `nvm install 16.13.0`
- `nvm use`

Currently last lts version is `16.13.0`, it will change sooner or later. So when it does, simply change content in `.nvmrc` then run `nvm install 16.13.0` and `nvm use`

### Start app
- `yarn start`
Server will start with nodemon to allow auto-reload

### Build app
- `yarn build`
It will build in `./build/`

### Husky
#### What to do first to have husky setup
- `yarn husky:setup`
It will setup husky to roll before commit
If you run it multiple times you will add duplicate pre-commit hooks, so if in a doubt simply delete `.husky/` folder and run yarn `husky:setup`

:warn: On windows you could run into some trouble to push your change, if so go to `./.husky/pre-push` and add before `yarn build`:

```bash
if [ -t 1 ]; then
  exec < /dev/tty
fi
```

### Jest
#### Simple test run
- `yarn test`
#### Watch test tun
- `yarn test:watch`

### Swagger
#### Some prerequisites
- `yarn swagger:bundle`
It will then help to bundle all json documentation files into one swagger.json with the command `yarn swagger:bundle`, after that you can just use `yarn swagger:gen` command.
#### Generate swagger documentation
- `yarn swagger:gen`
It will generate a documentation accessible on `/apiDocs` and interface relative to app

#### Generate swagger file + documentation

-   `yarn swagger:full`
    It will combine swaggerBundle and swaggerGen and run a prettier:fix to clean it all

### Prettier
#### Check project format
- `yarn prettier`
#### Fix project format
- `yarn prettier:fix`

### EsLint
#### Check project lint error and warn
- `yarn lint`
#### Fix project lint error and warn
- `yarn lint:fix`

