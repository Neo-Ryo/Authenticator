# Service boilerplate template

### Introduction
This is a simple boilerplate for services, you will find several feature that will help you get running with your service. It is far from perfect, so don't make any hesitation to make PR with your improved and usefull feature.
#### Environment variables :
NODE_ENV=development
PORT=8080
FRONT_URL=http://localhost:3000
SECRET="narwhal are beautiful"
JWT_SECRET="platypus to"

#### Exposed Port:
* 8080

#### Internal Service Name:
* boilerplateservice

## Scripts

Before all you can run `nvm use`, it will change your node version to lts based on `.nvmrc`. If you haven't installed it yet follow this steps:
- `nvm install 14.17.6`
- `nvm use`

Currently last lts version is `14.17.6`, it will change sooner or later. So when it does, simply change content in `.nvmrc` then run `nvm install 14.17.6` and `nvm use`

### Start app
* `yarn start`
Server will start with nodemon to allow auto-reload

### Build app
* `yarn build`
It will build in `./build/`

### Husky
#### What to do first to have husky setup
* `yarn husky:setup`
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
* `yarn test`
#### Watch test tun
* `yarn test:watch`

### Swagger
#### Some prerequisites
* `yarn swaggerBundle`
It will then help to bundle all json documentation files into one swagger.json with the command `yarn swaggerBundle`, after that you can just use `yarn swaggerGen` command.
#### Generate swagger documentation
* `yarn swaggerGen`
It will generate a documentation accessible on `/apiDocs` and interface relative to app

### Prettier
#### Check project format
* `yarn prettier`
#### Fix project format
* `yarn prettier:fix`

### EsLint
#### Check project lint error and warn
* `yarn lint`
#### Fix project lint error and warn
* `yarn lint:fix`

