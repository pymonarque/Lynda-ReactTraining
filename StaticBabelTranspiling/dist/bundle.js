'use strict';

//use httpser -d <folder path with files to serve> -p <port> to serve file

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render; //for using ReactDOM.render function 

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'

    //JSX need to be traspiled wit Babel. Not working natively in the browser
    //this command has been used to transpile to bundle.js file: babel ./src/index.js --out-file ./dist/bundle.js
};render(React.createElement(
    'h1',
    { id: 'title',
        className: 'header',
        style: style },
    'Hello world'
), document.getElementById('react-container'));
