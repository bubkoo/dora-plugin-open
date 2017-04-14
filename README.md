# dora-plugin-open
> Open stuff like websites, files, executables etc. after dora server started.

## Install

```shell
$ npm install --save-dev dora-plugin-opn
```

## Usage

This plugin is base on [opn](https://www.npmjs.com/package/opn), options can be specified with query-string.

```shell
# open the default target `http://localhost:${dora-port}`
dora --plugins opn

# specify target with `http://localhost:8000`
dora --plugins opn?target=http://localhost:8000

# specify target and app
dora --plugins opn?target=http://localhost:8000&app[]=chrome&app[]=google-chrome
```
