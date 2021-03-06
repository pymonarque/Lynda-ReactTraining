//use httpser -d <folder path with files to serve> -p <port> to serve file 

const { createElement } = React // for using React.createElement function
const { render } = ReactDOM //for using ReactDOM.render function 

const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}

const title = createElement(
    'h1', {id: 'title', className: 'header', style: style},
    'Hello World'
);

render(
    title,
    document.getElementById('react-container')
);