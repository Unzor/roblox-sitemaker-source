# roblox-sitemaker-source
The source code of the SiteMaker module and the backend.

# How to build & run
First, run this code in terminal (or in Git if you are using Windows):
```
git clone https://roblox-sitemaker-source
cd roblox-sitemaker-source
cd node
npm init -y
npm install
node node/index.js
```
After that, your page should be running at localhost:8000.
Port your site to NGROK, or use other software, like Replit or Glitch.
When you have your site, copy it, and save it for later.

Create a new ROBLOX game, and turn on HTTP requests.
Then, add the "SiteMaker.lua" file to your game in ReplicatedStorage. (You can paste it in a ModuleScript too)
Change the _url_ variable to your site.

Now you can test your code in ROBLOX! Create a script in Workspace, and use the SiteMaker API like this:

 ```lua
local page_creator=require(game.ReplicatedStorage.SiteCreator)

local h=page_creator.makeSite("<p> Hello World! </p>")
print(h)
```
