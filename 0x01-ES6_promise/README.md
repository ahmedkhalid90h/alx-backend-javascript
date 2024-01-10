# 0x01. ES6 Promises

<img src="meme.jpeg">

## Resources
<b>Read or watch:</b>

<li>
    <a href ="https://intranet.alxswe.com/rltoken/8IEjDdrFqrfsXUV9frNmKA">
        Promise
    </a>
</li>
<li>
    <a href ="https://intranet.alxswe.com/rltoken/EnBUkluIIlLr0Z3dRJV4LQ">
        JavaScript Promise: An introduction
    </a>
</li>
<li>
    <a href ="https://intranet.alxswe.com/rltoken/SALOZ-GAD5GVCTnK1iTCdA">
        Await
    </a>
</li>
<li>
    <a href ="https://intranet.alxswe.com/rltoken/QZMWLFR29PO2bVOS4_8j5Q">
        Async
    </a>
</li>
<li>
    <a href ="https://intranet.alxswe.com/rltoken/TXqH5zA1NSVCwCoyr1cNxg">
        Throw / Try
    </a>
</li>

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

<li>Promises (how, why, and what)</li>
<li>How to use the then, resolve, catch methods</li>
<li>How to use every method of the Promise object</li>
<li>Throw / Try</li>
<li>The await operator</li>
<li>How to use an async function</li>

## Requirements

<ul>
    <li>Allowed editors: vi, vim, emacs, Visual Studio Code</li>
    <li>All your files will be interpreted/compiled on Ubuntu 14.04 LTS using python3 (version 3.4.3)</li>
    <li>All your files should end with a new line</li>
    <li>A README.md file, at the root of the folder of the project, is mandatory</li>
    <li>Your code should use the js extension</li>
    <li>Your code will be tested using Jest Testing Framework</li>
    <li>Your code will be verified against lint using ESLint</li>
    <li>Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test</li>
    <li>All of your functions must be exported</li>
</ul>

## Setup

### Install NodeJS 12.11.x

(in your home directory):

<pre><code>
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>

<pre><code>
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>

### Install Jest, Babel, and ESLint

in your project directory:

<li>Install Jest using:<span style="color: red; background-color: #E9E9E9;"> npm install --save-dev jest</span></li>
<li>Install Babel using: <span style="color: red; background-color: #E9E9E9;">npm install --save-dev babel-jest @babel/core @babel/preset-env</span></li>
<li>Install ESLint using: <span style="color: red; background-color: #E9E9E9;">npm install --save-dev eslint</span></li>

## Configuration Files

#### <a href="https://github.com/Tii04/alx-frontend-javascript/blob/main/0x01-ES6_promise/package.json">package.json</a>

#### <a href="https://github.com/Tii04/alx-frontend-javascript/blob/main/0x01-ES6_promise/babel.config.js">babel.config.js</a>

#### <a href="https://github.com/Tii04/alx-frontend-javascript/blob/main/0x01-ES6_promise/utils.js">utils.js</a>

#### <a href="https://github.com/Tii04/alx-frontend-javascript/blob/main/0x01-ES6_promise/.eslintrc.js">.eslintrc.js</a>

<br>

### And ...

Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.

# Response Data Format

<strong>uploadPhoto</strong> returns a response with the format

<pre><code>
{
  status: 200,
  body: 'photo-profile-1',
}
</code></pre>

<strong>createUser</strong> returns a response with the format

<pre><code>
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
</code></pre>