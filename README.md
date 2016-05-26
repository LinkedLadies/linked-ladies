# Linked Ladies
The Linked Ladies build innovative software products that connects people together.

## Developer Setup
1. Download Node.js: https://nodejs.org/en/download/
2. Install gulp: ``` npm install -g gulp ```
3. Install json-server: ```npm install json-server -g```
3. To update code, run: ```gulp```. This will run all the build tasks and generate your app in ```linked-ladies/dist``` folder.
4. Copy all the contents in ```linked-ladies/dist``` into ```linked-ladies/json-server/public``` folder.
5. To start the app, cd into ```json-server``` and then run: ```json-server --watch db.json ```
