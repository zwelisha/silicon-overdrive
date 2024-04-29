# Slack Messaging API

## Description
This API endpoint consumes the Slack messaging methods to 
post a custom message to a passed channel.

## Getting Started

### Requirements

1. node
2. express
3. Text editor (Recommended: VSCode or SublimeText or Atom)
4. Prettier
   
### Installation

#### 1. NodeJs

The installation differs from one operating system to the other, but the documentation which can be found [here](https://nodejs.org/en) have clear instructions for each operating system.

#### 2. Express

Express is a minimalist web framework that makes it easier to create NodeJS api endpoints.
Details [here](https://expressjs.com/)

#### 3. Text Editor
Any text editor of your choice can be used. However Visual Studio Code and Atom are highly recommended. See [VS Code](https://code.visualstudio.com/) and [Atom](https://atom-editor.cc/)

#### 4. Prettier
The installation documentation for Prettier can be found [here](https://prettier.io/) have clear instructions for each text editor.

#### 5. Jest
The installation documentation for Jest can be found [here](https://jestjs.io/docs/getting-started)
You can also install Jest by running ```npm install supertest --save-dev
```

#### Folder Structure

```
silicon-overdirve
    .node_modules
    tests
        test.js
    .gitignore
    app.mjs
    package-lock.js
    package.json
    README.md
```

### Formatting The Code

Use Prettier extension for consistency

### Running The Project

#### 1. Clone the project
```
git clone https://github.com/zwelisha/silicon-overdrive
```

#### 2. Change Directory (To the root folder of the project)

Change directory to the project `cd silicon-overdrive`.
There you will see the folder structure detailed above.



Then to run this app run the following command

```
npm install
```
then 

Create a .env file with the following variables.
I will assume yu already know how to setup the app on slack and 
configure it to have writing permissions etc. Replace the assigned strings
with actually values from your slack api app.

```
SLACK_CHANNEL = "your_slack_channel_name"
SLACK_BOT_TOKEN = "your slack_app_token"
SLACK_SIGNING_SECRET = "your_slack_app_scret"
```
```
node app.mjs
```
then copy the localhost url and open it on your browser

### Testing the code
Run this command 
```npm test```

Have fun

#### Authors

[Zweli Mthethwa](https://www.linkedin.com/in/zweli-mthethwa-244b45a8/)