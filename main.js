const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({frame:false,alwaysOnTop: false, transparent: true, width: 240, height: 160, minWidth: 240, minHeight:160, maxWidth: 240, maxHeight:160, movable : true, show:true,icon: __dirname + '/img/sunshineX.ico' })
 //mainWindow = new BrowserWindow({frame:true, width: 1000, height: 800, minWidth: 1000, minHeight:800, maxWidth: 1000, maxHeight:800 })
 mainWindow.setResizable(false)
  //mainWindow.setResizable(true)
  mainWindow.setSkipTaskbar(true)

  var screenElectron = electron.screen; //initiate screens 
  var mainScreen = screenElectron.getPrimaryDisplay() //get primary display preferences
  var dimensions = mainScreen.size; //get the size of the main display

  var dimensionsWidth = dimensions.width //get the width of the main display 

  var displayWidth = dimensionsWidth - 250 //create the variable of where window will be display minus it's width
  var displayHeight = 0 //create the variable of where window will be display minus it's height + 40 pixels for the Windows 10 taskbar.
  //console.log(process.versions.electron)
  mainWindow.setPosition(displayWidth,displayHeight) //set the window display x,y
  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`); //load the html

  // Open the DevTools.
 // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.