# About
A Chrome extension that operates on assessment websites, activating when a user opens a test page. It opens a form for the user to enter their name, email, and test invitation code, and upon clicking the Start Test button, the user's information is sent to the backend server for storage.The extension performs a camera and audio check, and initiates image proctoring, sending images to the server every 10 seconds (configurable). All image and user activity data are stored on the backend server.

# Step to follow
* Download the zip file on local machine and extract all the files in it.
* Load the file on chrome extension by clicking "load unpacked" on chrome://extensions/
* Run the server by writing "node server.js" on terminal.
* The extension is now ready to use.
* After filling form, wait for 20-30 seconds for the webcam to capture some snapshots.
* Admin can see the captured snapshots along with details on http://localhost:3000/admin

# Snapshots
* Form filling on extension

  [![image](https://www.linkpicture.com/q/Screenshot-2023-02-10-114214_1.png)](https://www.linkpicture.com/view.php?img=LPic63e5e30a710dc84613095)
  
* Webcam feed to student
  
  [![image](https://www.linkpicture.com/q/Screenshot-2023-02-10-114532.png)](https://www.linkpicture.com/view.php?img=LPic63e5e3a1146f01708740953)
  
* Admin Page with details and captured snapshots

  [![image](https://www.linkpicture.com/q/Screenshot-2023-02-10-114639.png)](https://www.linkpicture.com/view.php?img=LPic63e5e42b0d46c72837804)
