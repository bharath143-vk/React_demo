 import React from "react";
 import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";

 //React.createElement => object=>render=>html

// {/* 1) For  creating an element  */}
// {/* React.createElement(element,object,what we have to put inside element) */}
// // in the object  u can give attributes to the element
// const heading=React.createElement(
//     'h1',
//     {id:'heading'},
//     'Hello World from React!'
// );
console.log(heading)//returns an object
//this heading is a react element,a javascript object


// const root=ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
// //this render object converts this object into h1 tag and put it in dom

// //2 ) To create nested divs

// {/* <div id="parent">
//         <div id="child">
//             <h1></h1>
//         </div>
//     </div> */}

// const par=React.createElement(
//     'div',
//     {id:'parent'},
//     React.createElement(
//         'div',
//         {id:'child'},
//          React.createElement('h2',{}, 'Iam h2')
//     )
// );

// const nest=ReactDOM.createRoot(document.getElementById('nested'));
// nest.render(par)

// //3) to give child like this
// {/* <div id="parent">
//         <div id="child">
//             <h1>Iam h1</h1>
//             <h2>Iam h2</h2>

//         </div>
//     </div> */}

//     // to get like above we need to pass array of child

//     // [React.createElement('h1',{}, 'Iam h1'),
//     //      React.createElement('h2',{}, 'Iam h2')]



// JSX 
//JSX => React.createElement => object=>render=>html

const jsxHeading=<h1 id="heading">Hello from jsx</h1>
//can also write in multiple lines

// const jsxHeading=(<h1 id="heading">
//     Hello from jsx
//     </h1>)


console.log(jsxHeading)//object

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(jsxHeading)



// REACT COMPONENT
// Class Based Component-Older
//Functional Component-new

//react functional component
//must start with the capital letter
const HeadingComponent=() => {
    return <h1>React functional component</h1>
}

const HeadingComponent2= ()=>(
     <h1>React functional component</h1>
);
// *** above two things(below also) are same***//
 
const fn=() => true;
const fn2=() => {
    return true;
}

//rendering react component

 root.render(<HeadingComponent/>)


 // ONE COMPONENT INSIDE ANOTHER(COMPONENT COMPOSITION)

 const Title=()=> (
    <h1> Hello this is inner component</h1>
);
 const HeadingComponent3=() => (
    
        <div id="container">
            <Title />
            <Title></Title> 
            {Title()}
            {/* above three things doing same thing */}
            <h1>React functional component</h1>
        </div>
    
   
 )
root.render(<HeadingComponent3 />)

// u can place {} inside react components and u can place any javascript inside {}
// u can also place react elemens inside {}

//can put react element inside react element & react component inside react component

const HeadingComponent4=() => (
    <div id="container">
        {"hello"}
        {100+200}
        <h2>{"hello jsx"}</h2>
        <h2>Hello </h2>
    </div>
)

root.render(<HeadingComponent4/>)

// const One=() =>(
//     <div>
//         <h2>hi react</h2>
//         <Two/>
        
//     </div>
// );

// const Two=() =>(
//     <div>
//         <One/>,
//         <h3>Hello how</h3>
//     </div>
// );

// root.render(<Two/>)

//Here we creating infinte recursion between one and two
//we are rendering Two ,Two tries to render One




