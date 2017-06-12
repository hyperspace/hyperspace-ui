const electron = require('electron')
// Module to control application life.
const app = electron.app

const menubar = require("menubar")
const project = require("hyperspace-cli").getAllProjects;

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
const mb = menubar({
  preloadWindow: true,
  width: 360,
  height: 220,
  transparent: true,
  frame: false
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
mb.on("ready", function ready() {
  console.log("app is ready");

  const FILES = [
      { name:'index.html', type:'HTML', date:'Yesterday', author:'developit' },
      { name:'bundle.js', type:'JavaScript', date:'10:01 am', author:'developit' },
  ];

  ipcMain.on('ping', (event) => {
    event.sender.send('pong', project());
  });

  //mb.window.openDevTools()
});

/*
// Quit when all windows are closed.
mb.window.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
*/