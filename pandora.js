// Connect the play/pause button to Pandora.
ipc = require('electron').ipcRenderer;
globalShortcut = require('electron').remote.globalShortcut;
BrowserWindow = require('electron').remote.BrowserWindow;

// Ensure a reload event doesn't leave references to garbage collected
// functions.
globalShortcut.unregisterAll();

// Send the key press to the play-pause channel of the Pandora window.
function sendKey() {
    var mainWindow = BrowserWindow.getAllWindows()[0];
    mainWindow.webContents.send('play-pause');
}

globalShortcut.register('MediaPlayPause', sendKey);

// Also use Ctrl-Shift-1 as a backup if the keyboard doesn't have a
// play/pause button.
globalShortcut.register('ctrl+shift+1', sendKey);

// Subscribe to the play-pause channel in the renderer process.
ipc.on('play-pause', function () {
    var pauseBtn = document.getElementsByClassName('pauseButton')[0];
    var child;
    if(pauseBtn.style.display === 'block') {
        child = pauseBtn.childNodes[0];
    } else {
        var playBtn = document.getElementsByClassName('playButton')[0];
        child = playBtn.childNodes[0];
    }
    child.click();
});
