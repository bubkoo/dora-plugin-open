# dora-plugin-open
> Open stuff like websites, files, executables etc. after dora server started.

## Install

```shell
$ npm install --save-dev dora-plugin-opn
```

## Usage

```shell
# open the default target `http://localhost:${dora-port}`
dora --plugins open
dora --plugins open?target=http://localhost:8000
dora --plugins open?target=http://localhost:8000&app[]=chrome&app[]=google-chrome
```