# ADCAT ReactJs BoilerPlate
​
Frontend boilerplate repository for ADCAT.
​
## Technology used
​
​

*  [React](https://www.npmjs.com/package/React)
*  [redux](https://www.npmjs.com/package/redux)
*  [crypto-js](https://www.npmjs.com/package/crypto-js)
*  [axios](https://www.npmjs.com/package/axios)
*  [node-sass](https://www.npmjs.com/package/node-sass)
*  [sass-loader](https://www.npmjs.com/package/sass-loader)

## Getting application up and running
​
### Install dependencies
​
Kindly checkout the repo and in terminal run the following command
​
```
$ npm install
```
​
### Env file
​
Sample env file is provided in codebase under the name `.sample.env`.
Make a copy and rename it to deploy.sh and get the proper values of each env variable.
​
### Run application
​
```
$ npm start
```
​​
### Run linting and indentation listener
this boilerplate comes with `onchange prettier` listenersto make sure linting and indentation are maintained
​
```
$ npm run watch
```
​
​### Build application
​
```
$ npm run build
```
​​
## Project documentation
​
this project contains the following templates:



*  2 sample view components
*  integrated react router
*  integrated redux (sample actions and reducers available)
*  integrated crypto module (AES-GCM) 
	*	[refer the files `src/modules/crypto.js` and `src/modules/index.js`]
*  integrated ui ADCAT-ui components and grid layout 
	*	[refer `src/modules/adcat-ui.js`, `src/assets/modules/_adcat-ui.scss`, `src/assets/modules/_grid.scss`, `src/assets/modules/_card.scss`, `src/assets/modules/_colors.scss`]



## Test scripts
​
Need to add test sigma cases here

​
## Contributors
​
1. Indrajeet Ambadekar: <indrajeeta@hdfclife.com>