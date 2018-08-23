//use httpser -d <folder path with files to serve> -p <port> to serve file

const { render } = ReactDOM //for using ReactDOM.render function 

const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}




//JSX need to be traspiled wit Babel. Not working natively in the browser
//this command has been used to transpile to bundle.js file: babel ./src/index.js --out-file ./dist/bundle.js
render(
    <h1 id='title'
        className='header'
        style={style}>
        Hello world
        </h1>,
    document.getElementById('react-container')
);
