//use httpser -d <folder path with files to serve> -p <port> to serve file 

//const { createElement } = React // for using React.createElement function
const { render } = ReactDOM //for using ReactDOM.render function 

const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}

//Instead of using create element we will use JSX in render to directly create and render new elements
/*
const title = createElement(
    'h1', {id: 'title', className: 'header', style: style},
    'Hello World'
);
*/


//JSX syntax used here needs to be traspiled with Babel. Not working natively in the browser
//A script has been added to index.html head for running a babel 5 traspiler srcipt 
render(
    <h1 id='title'
        className='header'
        style={style}>
        Hello world
        </h1>,
    document.getElementById('react-container')
);
