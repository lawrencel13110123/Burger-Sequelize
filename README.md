# Burger-Sequelize
----------
## Table of Contents 
1. [Overview](#overview)
2. [Technologies](#technologies)
3. [Local Installation](#installation)
4. [App Display](#display)


<a name="overview"></a>
## Overview 
Burger Sequelize is a node application that allows user to create burger that they love and store them via SQL database. One of the columns on the `burgers` table is `devoured BOOLEAN NOT NULL DEFAULT FALSE`. Once the user click the "Devour It" button on a burger, the devoured boolean on that burger is set to true. Burgers that have not yet been devoured are displayed on the left side of the screen, whereas those that have been devoured are displayed to the right. 

<a name="technologies"></a>
## Technologies
 - Express.js 
 - Bootstrap
 - Sequelize
 - MySQL
  - Local database
 - JawsDB
  - Deployed Heroku database 
 - Handlebars 

<a name="installation"></a>
## Local Installation
### Step 1: Git Clone
Clone Burger-Sequelize to your local git repo like the following:
> git clone https://github.com/lawrencel13110123/Burger-Sequelize 
The Burger-Sequelize project and its files should now be in your project folder.

### Step 2: Install Dependencies
Install the following dependencies listed in the `package.json` file: 

> npm install

Once completed, you will see a `node_modules` folder in your local repo.

The dependencies should now be in the local `node_modules` folder.

### Step 3: Set up MySQL database 

Via terminal type in these bash command once you are in the db directory 

> mysql -u root -p
>
> enter your MySQL password 
>
> source schema.sql 
>
> exit 

If you want to create some burger templates, you may also run the following in the db directory (optional)

> mysql -u root -p
>
> enter your MySQL password 
>
> source seeds.sql
>
> exit 

### Step 4: Launch app 
Via terminal type in these bash command once you are in the Burger-Sequelize root directory 

> node server.js 

Go to your browser and type in `localhost:3000` in your URL bar. Now you should see the application open locally.
To visit deployed application, go to https://morning-chamber-51936.herokuapp.com/burgers

<a name="display"></a>
## App Display
### Demo
![Demo](/public/assets/images/demo.gif)