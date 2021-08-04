const { WebRequest } = require("electron/main");

const electron = require("electron");
const url = require("url");
const path = require("path");
const time = require("timers");
const { dialog } = require("electron");

var { mysql } = require("electron");

const { app, BrowserWindow, Menu } = electron;

function createWindow() {
  const mainWindow = new BrowserWindow({
    backgroundColor: "#000000",
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      requirejs: true,
    },
  });

  mainWindow.loadFile("mainWindow.html");
}
app.whenReady().then(createWindow);
