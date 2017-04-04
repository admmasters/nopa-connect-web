# Zopa's React JS technical test.

## Description
This is a biolerplate for Zopa's React JS technical test.

Please refer to the wiki pages for the details:

Description: https://github.com/ishabo/nopa-connect/wiki

Screens: https://github.com/ishabo/nopa-connect/wiki/Screens

Style guide: https://github.com/ishabo/nopa-connect/wiki/Style-guide

## What's included?
This boilerplate contains a skeleton routes and the needed images for the test.
There is basic configuration for react, react-routes, express, react-redux, sass-loader, jest and other libs. (check package.json)

There's also a simple structure for client, server and static code. The majority of the work you need to do is under src/app/client and src/app/static/stylesheets.

Feel free to use the current structure or change it as you wish. 

## How to run?

Once you fork this branch and git clone it, all you need to do is run:

```sh
npm start -s
```

This will install node_modules the first time, and then it will just start the server.

This will open 
```
http://localhost:3000/ 
```
Which will load the home page of the skeleton React app.

There's also an express route that has dummy data that you can use to fetch transactions for the Statement page:
```
http://localhost:3000/api/transactions
```

