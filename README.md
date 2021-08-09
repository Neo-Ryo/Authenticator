# Service boilerplate template

### Introduction
This is a simple boilerplate for services, you will find several feature that will help you get running with your service. It is far from perfect, so don't make any hesitation to make PR with your improved and usefull feature.

#### What to do first to have husky setup
* `yarn husky:setup`
It will setup husky to roll before commit
If you run it multiple times you will add duplicate pre-commit hooks, so if in a doubt simply delete `.husky/` folder and run yarn `husky:setup`

### Swagger
#### Some prerequisites
* `yarn swaggerBundle`
It will help to bundle all json documentation files into one swagger.json, after that you can just use `yarn swaggerGen` command.
#### Generate swagger documentation
* `yarn swaggerGen`
It will generate a documentation accessible on `/apiDocs` and interface relative to app.
