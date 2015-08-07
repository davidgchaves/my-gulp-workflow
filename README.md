my-gulp-workflow
================

### Install npm dependencies

```
$ npm install
```

### Aliasing `gulp` and `browserify` commands
In order to easily use the locally installed (node_modules/...) `gulp` and `browserify` commands, add the following lines to your `~/.zshrc`:

```
alias gulp='./node_modules/.bin/gulp'
alias browserify='./node_modules/.bin/browserify'
```

This step is not necessary to run `gulp` or `browserify` commands.
You can globally install both tools:

```
$ node install -g gulp browserify
```

or explicitly use the locally installed versions:

```
$ ./node_modules/.bin/gulp
$ ./node_modules/.bin/browserify
```

but IMHO, aliasing both commands is the best choice.

