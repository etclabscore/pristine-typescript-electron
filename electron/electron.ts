import { app } from "electron";
import { createAppWindow } from "./createAppWindow";

async function showWindow() {
  try {
    return createAppWindow();
  } catch (err) {
    console.error(err);
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", showWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  app.quit();
});
