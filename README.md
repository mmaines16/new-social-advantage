# New Social Advantage Website Template

[![Greenkeeper badge](https://badges.greenkeeper.io/mmaines16/new-social-advantage.svg)](https://greenkeeper.io/)

Code for the New Social Advantage Website

## Pre-Requisites
This project is based from the mern cli project generator and assumes you have a __mongo database__ instance installed
on the default port

make sure your mongo instance is listening when running or building the server in development or porduction modes

You can do this by running 
```
mongod
```
in mongo's bin directory in the mongo installation's bin folder


You must also have __NodeJS__ installed on your machine as well

## Installation
First clone the repository using 
``` 
git clone https://github.com/mmaines16/new-social-advantage.git 
``` 

change directories to the new-social-advantage directory using 

``` 
cd new-social-advantage 
```

Next install all necessary node modules using 

``` 
npm install  
```

## Configuration
The API driven by the express server is protected by a simple api key only known by the server and client itself,
this file is kept in config/env/api.auth.js

```
module.exports = {
    apiSecret: "Place Your API Secret Key Here"
}
```

__Please Note that this API works best as a encrypty key such as a base64 encoded string__

__The API protection will be upgraded to a OAUTH2 based system at a later date__

## Test the API
The api can be tested in development mode by attaching the api secret key from the step above as a query parameter 
to the localhost url (note the default port is 8000 unless specified otherwise as a environment variable)

you can either type the url into the browser or use a command line utility such as curl
```
curl localhost:{PORT}/api/{endpoint}?api-secret="{Your API Secret Key}"
```

Note that you may also provide the api-secret as a header in the request in both test and production to reach the api
directly

```
curl --header "api-secret: {your secret api key}" localhost/api/{endpoint}
```

## Development: Run the server

You can now run the server and client using 

```
npm run start
```

which will serve the development client on localhost:8000

there is dummy data that is entered into the running mongo database on build in the development environment

test that the build is working by browsing to 

``` 
localhost:8000/pages/optin-page-demo
```


## Production

Once you are satified with how the site looks, run the builders by using 

 ```
 npm run bs
 ```
 
 The final production build will be in the __dist__ folder in the root directory