# Pandora App

This uses Nativefier (https://github.com/jiahaog/nativefier) to build a native
app for running Pandora on a desktop.  It provides support for playing and
pausing using the play/pause button on the keyboard no matter if the app has
the focus or not.

## Building

Install Nativefier according to its instructions.

```shell
npm install nativefier -g
```

Install Google Chrome if you don't already have it (its Flash plugin is
required).

On OS X, the Flash plugin is located in 
`~/Library/Application Support/Google/Chrome/PepperFlash/<latest version>/PepperFlashPlayer.plugin`.

Edit `build.sh` and update the `FLASH` variable with the location of your Flash
plugin.

```shell
./build.sh
```
