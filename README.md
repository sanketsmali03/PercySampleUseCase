# PERCY - Puppeteer 

## Introduction

This is a percy sample project to perform visual testing using [Percy](https://percy.io) between two environments URL's. 

Prod - https://www.browserstack.com 

Non-Prod - https://ci.bsstag.com/ 

## Setup
 - Node 12+ with npm
 - git
 - Vscode (optional)

## Setup

### Step 1: Clone or Download Project and install dependencies

You can use the **Git Clone** command or **Download Zip** option to download this project to your hard drive.

```bash
git clone git@github.com:sanketsmali/PercyAssignment.git
cd PercyAssignment
npm install
```

### Step 2: Create a Percy Project  

Sign in to Percy and create a new project. You can name the project. After you've created the project, you'll be shown a token environment variable.

### Step 3: Set the Percy Token

Before you can successfully run Percy, the PERCY_TOKEN environment variable must be set:

#### Windows
```bash
$ set PERCY_TOKEN=<your token here>
```

#### Mac OSx / Unix
```bash
$ export PERCY_TOKEN=<your token here>
```

### Step 4:  Run Project

Check out a new branch for your work in this tutorial (we'll call this branch build1), then run tests & take snapshots:

```bash
$ git checkout -b build1
$ npm run test
```


This will run the Puppeteer tests, which contain calls to create Percy snapshots. The snapshots will then be uploaded to Percy for comparison. Percy will use the Percy token you used in Step 3 to know which organization and project to upload the snapshots to.

You can view the screenshots in Percy now if you want, but there will be no visual comparisons yet. You'll see that Percy shows you that these snapshots come from your master branch.


### Step 5: Change the TEST_URL to stageSite 

Update the test.js having const TEST_URL from http://browserstack.com/  to https://ci.bsstag.com/


### Step 6: Commit the Changes

```bash
$ git commit -m "changed the TEST_URL from http://browserstack.com/  to https://ci.bsstag.com/"
```


### Step 7: Run the tests with snapshots again

```bash
$ npm run test
```

This will run the tests again and take new snapshots of our modified application. The new snapshots will be uploaded to Percy and compared with the previous snapshots, showing any visual diffs.


Reference Link - https://docs.percy.io/docs/puppeteer-tutorial


