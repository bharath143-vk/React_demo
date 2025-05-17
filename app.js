 
{/* 1) For  creating an element  */}
{/* React.createElement(element,object,what we have to put inside element) */}
// in the object  u can give attributes to the element
const heading=React.createElement(
    'h1',
    {id:'heading'},
    'Hello World from React!'
);
console.log(heading)//returns an object
//this heading is a react element,a javascript object


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
//this render object converts this object into h1 tag and put it in dom

//2 ) To create nested divs

{/* <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
    </div> */}

const par=React.createElement(
    'div',
    {id:'parent'},
    React.createElement(
        'div',
        {id:'child'},
         React.createElement('h2',{}, 'Iam h2')
    )
);

const nest=ReactDOM.createRoot(document.getElementById('nested'));
nest.render(par)

//3) to give child like this
{/* <div id="parent">
        <div id="child">
            <h1>Iam h1</h1>
            <h2>Iam h2</h2>

        </div>
    </div> */}

    // to get like above we need to pass array of child

    // [React.createElement('h1',{}, 'Iam h1'),
    //      React.createElement('h2',{}, 'Iam h2')]


const parent=React.createElement(
    'div',
    {id:'parent'},
    React.createElement(
        'div',
        {id:'child'},
        [React.createElement('h1',{}, 'Iam h1'),
         React.createElement('h2',{}, 'Iam h2')]
    )
);

const nested=ReactDOM.createRoot(document.getElementById('sameChild'));
nested.render(parent)

 




