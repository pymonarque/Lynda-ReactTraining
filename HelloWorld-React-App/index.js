//use httpser -d <folder path with files to serve> -p <port> to serve file 

const { createElement } = React // for using React.createElement function
const { render } = ReactDOM //for using ReactDOM.render function 

const title = createElement(
    'h1', {id: 'title', className: 'header'},
    'Hello World'
);

render(
    title,
    document.getElementById('react-container')
);