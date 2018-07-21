# studentlife

> realtime school based social network

## Demo

You can try the demo at: https://sl.jjsweb.site

\- Admin login  
email: admin  
password: pass

\- Normal user login  
email: john  
password: pass

## About

This project uses [Feathers](https://feathersjs.com) and [Next.js](https://github.com/zeit/next.js).   
Icons from: Font Awesome by Dave Gandy - http://fontawesome.io

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/studentlife; npm install
    ```

3. Start your app

    ```
    npm start
    ```

Note: a default login of admin/admin is set initially and should be deleted right after a new account has been created

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Helpful commands

* Skip installing development dependencies  
`npm install --production` 

* Generate production JWT secret  
`npm run genKey`

* Update icons import file
`npm run genIcons`

* Run syntax clean up check 
`npm run format` 

* Run eslint syntax check  
`npm run lint`

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).