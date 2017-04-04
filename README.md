# nopa-connect

## Description
As part of our risk scoring at Zopa, we want to invite potential borrowers to share some additional information from their bank account. The screens in the file are a design for a process of connecting a bank account from several major banks to their Zopa Account.

We have provided examples of what this process looks like on mobile but would like for you to create a responsive web version of the process. Use your best interpretation such that it would render well on desktop, tablet and mobile. Information on fonts, colours and assets are provided but exact specifications are not – we want to see how you make this work.

## What you'll find in this branch?
This is a boilerplate with skeleton routes and the needed images.
There is basic configuration for react, react-routes, express, react-redux, sass-loader, jest and other libs.

Feel free to use the current structure or change it as you wish. 

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

