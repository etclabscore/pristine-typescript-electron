import { BrowserWindow } from "electron";
import * as path from "path";

export function createAppWindow() {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:3000/index.html");
    // Open the DevTools.
    win.webContents.openDevTools();
  } else {
    win.loadURL(`file://${__dirname}/index.html`);
  }

  win.on("closed", () => {
    win = null;
  });
}
