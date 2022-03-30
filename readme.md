# Sample API

## installation

#### requirements

- Node.js
- npm


```
# to install the app run 
npm ci
```

```
# to run it use
npm start
```

#### Usage

The API will run in localhost:3000

you can check it is actually running by just going to the index, you will get a welcome to SampleAPI message

there are 2 endpoints with data the first one is 

`localhost:3000/issues`

which will give you a list of issues, with 3 params:

`id, name, severity`

Then the other endpoint is 

`localhost:3000/issues/<id>`

you can replace `<id>` with the id you got from an object in the first endpoint to get more data for the issue

idea is to make a bit of an interactive web app where you will display the list of issues and with the ids, display some extra information in some way

try to use everything at your disposal


