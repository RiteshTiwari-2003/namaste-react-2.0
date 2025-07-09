s# lets first understand what is react ?

react is a javascript library for building user interface , it is developed and maintained by facebook and is widely used to create single page application where user interaction happen dinamically without reloading the page , react is based on component based architecture.which allow developer to build encapsulated component that manage there own state and can be composed to manage complex ui.

# key feature of react :

1. component based architecture :
build reusable ui component 
2. virtual dom : react uses a virtual dom to imporove performance by minimizing direct dom manipuation.

3. declarative syntex: react code is declarative making it easier to understand and debug 

4 jsx: a syntex extention that combine html and javascript 

5. unidirectional data flow: reacts data flow makes it predictable and easier to debug

# methods to create react project :

# 1. using create-react-app:

# step:
step 1: install node js (if not installed in your pc )
step 2: open your termina command prompt.
step 3: run the following command 
### npx create-react-app my-app
### cd my-app
### npm start

outcomes:
1. a fully functionasl react app is created with all the required configuration.
2 . it comes with webpack, babel, and a development server preconfigured .

# 2. using vite (fastr and lightweight):
steps:

1. install vite by running :
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev

outcomes :

a lightweight react app with faster build time is created .
perfect for modern and optimize development workflow.

# 3 , we can aso create react project using next js :
(React framework for full stack development)

1. create a next js project :
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev

outcomes :
a react app with server side rendering and static site generation 

# 4. manual setup for advance user:

1. initialize a project:

mkdir my-app
cd my-app
npm init -y

2. install react and react dom:
npm install react and react-dom

3. install webpack and babel :

npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin --save-dev

4. configure webpack and babel

webpack.config.js and .babelrc

5. create src/index.js and public/index.html

# 5. Using CodeSandBox/StackBlitz
Steps:

Open CodeSandBox or StackBlitz.
Choose a React template.
Start coding in the online environment.

# 2. what is the mui (material user interface)  in react ? and where i use and for which i use this replacement .

1. what is mui in react?
mui (formerly - material ui) is a populer open source library of react component that implement google material design guidlines , it provide a rich set of prestyled components such as button modals grids form and more which make it easier to build visually appealing 
and responsive user interface 

key features of mui:
1. pre build components : include button text field and tables dialogs cards etc.
2. customizable themes: you can create custom theme to match your application branding 
3. responsive design provide grid system and utilities for responsive layout .
accessability : components are build with accessabilty standards 

rich documentaion :

offer extensive documentation and example for quick development .

why use mui?

1. speed up development :
instead of building component from scratch you can use mui's prebuild and highly customize components to save time.

2. consistency:
ensure a consistent design across your appliocation by following material design principle .

3. highly customizable :
you can override the default style or create the custom theme to improve your branding 

4. responsive layout: mui provide a powerfull grid system and the utility classes that help you build responsive design 

5. integration :
work seamlessly with tolls like react, next js and vite 

# where to use mui?

mui is typically used in project that :
needs clean and modern ui.
require quick prototuping with prebuild design.
follow material design principle for user interface design
are responsive and need grid system to handle different screen size.
require consistency across components without using custom css.

# Common Alternatives to MUI:
If MUI doesn’t suit your needs, here are some popular replacements:

# Library	Why Use It?
Tailwind CSS	Utility-first CSS framework for complete design flexibility and custom styling.
Ant Design	Pre-built React components with a focus on enterprise-grade apps.
Chakra UI	Simple, accessible, and flexible React component library.
Bootstrap (React)	Easy-to-use framework with a grid system and common UI components.
Styled Components	CSS-in-JS for creating custom, styled components in React.

 for installation of react there is need of installation of node 

 before installation of node first understand what is node js?
 node js is a cross platform , open source javascript program that can run on window , linux and unix and macos 
 node js run on v8 javascript engine and execute javascript code outside the web browser .

 # how to download node js
 search nodejs download on browser
 you can visit https://nodejs.org/en/download/

 in download page you go to navbar prebuild installer and select v20.15.1 (lts) long term support version for node js on window
 now when installation is finished then open command prompt and put command node --version , and you can also select node js command prompt in search and run command node --version

 we open vscode and new window and select new file , select text file select language js and write console.log("ritesh tiwari"); save and  go in download in file explore and make a folder rough and put file name text.js and let me run termina open hoga nad run node "c:/home/download/roght"
 and put enter
 then output come

 and when you write node text.js in terminal also then output come but this node text.js you must only put when you are in that folder path in terminal


 #### react js :
 React js is ui library that allow developers to build small self contained ui component , 
 which can be used to build user interface 
 react allow developer to write declarative code in javascript to efficiantly assemble the user interface .
 react is created and maintained by facebook and introduced in 2013 

 ### why use react?
 although we can use plain  html and javascript to build ui , react offer many benifit over them 
 1. performance : react js is more performant than plain javascript dom manipulation because 
 it only update those nodes that need to update 

 2. declarativ e: react js allow developer to write declrartive syntex to describe our user interface which is very easy to read , understand and write .

 3. component based: react allow us to describe our interface into self contained component that can be shared  and reused in other application .
 4. data binding : react js allow us to combine data with mark up and it take care of keeping the ui in sync with the chnage made in the data 

 ### what is dom?
 dom stnads for document object model 
 dom stnads for document obejct model it is a tree like structure that is used to represent html document .
 dom is the standard interface for interacting with web page using programming or scripting language 

 make two file index.html and index.js 
 index.html 
 <!DOCTYPE html>
 <html>
 <head></head>
 <body>
 <h1>Todo List</h1>
 <button id="add_button">ADD</button>
 <ul id="List"></ul>
 <script src="script.js"></script></body>
 script.js
const addButton=document.getElementById("add_button");
const list=document.getElementById("List");
let index=0;
addButton.addEventListner('click',function(){
    let element=document.createElement('li');
    element.textContent="Task #"+index++;
    list.appendChild(element);
})

what is react dom?
react can be used to build application for multiple platform such as mobile and even for virtual reality (vr)
to use react in web appliucation we need it to be able to access and manipulate dom for that we use react dom 

react dom is package that contains dom specific method used by react to enable itself to interact with the dom 

react js recommend using es6 feature to create more readable and consice code .
a few of the most importent es6 feature was :
1. variable declaration : in es6, we can use let or const to define variables and constant 
2. arrow function : arrow function are used to write a annonymous function in a consice way without using a function keyword 
3. classes : in javascript we can now create a cass using the class keyword , earlier we had to create a function and then create an object out of it 
4. destructuring : allow us to get values out of the array or an object and into variables using a lot less code 
classess :

function App(){
    console.log("constructor");
}

App.prototype.sayHello=function(){
    console.log("Hello"0);
}
const obj=new App();
obj.sayHello();
or in above we can write also like this 
class App{
    constructor(){
        console.log("Constructor");
    }
    sayHello(){
        console.log("Hello");
    }
}
const obj=new App();
obj.sayHello();

desturcturing 

### react js advantage 
1. scalabe : react js work well with all size of application as it is used in some of biggest application such as facebook instagram etc .
2. compositional ui :using react js , we can compose our ui using small reusable component that can be modified or even replaced if needed 
3. portability ; portability is the one of major advantage react component are quite portable and can be moved from one project to another as long as both project using reACT 

4.performant ; react js is more performant instead of real browser dom react js uses a vertual dom thats give it a massive performance boost when it come to dom manipuation 

#### react js has few disadvantage 
1. learning curve: react js has a steep learning curve as it require a big shift in the mental model of how we think about building user interface 

2. documentation :react js rolls out updates and new feature at a fast rate due to which the documentation might not always present or be good enough 
3. jsx : to work with react we need to learn how to use jsx which can be a bit difficult as it makes us use html like syntex in javascript file 
4. state management : depending upon how our application is structured managing the state and sharing it among component can be very difficult 


### vertual dom in react 
in react js virtua dom is an ideal, or 'vertual',representation of ui that is kept in memory and synced with real dom 
the vertual dom encapsulated in reactdom package so it can uses by user.
react uses vertual dom to improve performance so that the real dom is updated only if needed this process of updating the real dom from 
the virtual dom is called reconsiliation 

1. hands on : creating react component without using jsx using plane javascript 
index.html
<!DOCTYPE html>
<html>
<head>
<title>HTML react</title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin>
<script src="https://unpkg.com/react@16/umd/react-dom.development.js" crossorigin>
<script >
function greeting(){
    return React.createElement("h1",{},"Hello, World!");// where first parameter told about tag and second about attribute and third is inside content 
}
ReactDOM.render(greeting(),document.getElementById("main"));
</script>
</body>
</html>

### jsx 
under the hood react uses the createElement method to create new dom nodes to attached to a node but it is very difficultto use espacially when we have component nested into each other this can make our code unreadable to solve this in react, we use a spacial syntex called as jsx which is ultimatly compiled to createElement call but it makes our code more easy for read .


#### create component using jsx :
<!DOCTYPE html>
<html>
<head>
<title>React component using jsx</title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js" ></script>
<script type='text/babel'>
    function greeting(){
        return <h1>hello, world!</h1>
    }
    ReactDOM.render(<Greeting/>,document.getElementById("main"));
    </script>

</body>
</html>

#### props 
props stand for properties and they are arguments passed passed to a component by a parent component for it to use .
props are read only and should not be modified by a comonent by on its own they can only be modified by parent class passing those props 
a change in props from the parent will lead to child component being updated and re-render to the dom 

#### deo props 
<!DOCTYPE html>
<html>
<head>
<title>props demo</titile>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="babel/text">
    function Greeting(props){
        return <h1>Hello, {props.name}!</h1>;
    }
    function Demo(){
        return <div>
            <Greeting name="Ritesh"/>
            <Greeting name="AAkash"/>
            <Greeting name="Shashwat"/>
            </div>
    }
    ReactDOM.render(<Demo name="Ritesh"/>,document.getElementById("main"))
    </script>
</body>
</html>

### state
state is similer to props but it is private and fully controlled by coponent 
the state is used by componenent to determine what to display on screen and has to be managed by the component it self as other component do not havea access in the state 
in react , component 's state should not be changed directly , it should be done only via specisl setter method because react keeps track of the state 

### demo state 
<!DOCTYPE html>
<html>
<head>
<title>HTML React</title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
    function Greeting(){
        const [name,setName]=React.useState("JOhn");
        return <h1> Hello, {name}</h1>
    }
    ReactDOM.render(<Greeting/>,document.getElementById("main"));
</script>

</body>

<!DOCTYPE html>
<html>
<head>
<title>HTML React</title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
    function getUserInfo(){
        return Promise.resolve({name:"John",age:30});
    }
    function Greeting(){
        const [name,setName]=React.useState("");
        getUserInfo().then(user=>setName(user.name))
        return <h1> Hello, {name}</h1>
    }
    ReactDOM.render(<Greeting/>,document.getElementById("main"));
</script>

</body>

### lifecycle method :
react manages the lifecycle of the component , task such as adding and removing a component from dom
sometimes there will be task we wish to perfor during these lifecycle tasks such as thdy includes adding and removing event handlers , 
fetching data etc 
to allow developer execute code during lifecycle react provide them with lifecycle method which they can override 
1. component did mount 
2. component did update 
3. coponent willunmount 
1. component did mount: these lifecycle allow developer to execute code after a component is added to a dom , it is ideal for adding the fetched dATA to the dom nodes or adding event listner to the dom 
2. component did update : 
the lifecycle method allows developer to execute code after a component get updated which could be due to updating of props and state
3. component will unmount :
the lifecycle method allows developer to execute code before component is removed , it is ideal for removing event listener from the component to stop the memory leak 

<!DOCTYPE html>
<html>
<head>
<title>REAct html</title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
    class Greeting extends React.Component{
        constructor(props){
            super(props);
            this.state={name:"John"};

        }
        componentDidMount(){
            console.log("component mount")
        }
        render(){
            return <h1> Hello, {this.state.name}</h1>
        }
    }
    ReactDOM.render(<Greeting/>,document.getElementById("main"))
    </script>
</body>
</html>

in react (espacially class component) lifecycle method are specil method that are invoked at different stages of component's life : mounting , updating , unmounting 
below is the complete example showing all major react lifecycle method using a class component 

import react from "react";
class lifeCycleDeo extends react.Component {
    constructor(props){
        super(props);
        this.state={count:0,
        };
        console.log("constructor");
    }
    //mounting call right before rendering 
    static getDerivedStateFromProps(props,state){
        console.log("Get derived state from props ");
        return null;//no state change 
    }
    //Mounting call : after rendering 
    componentDidMount(){
        console.log("component did mount");
    }
    //updasting: called before rendering if props and state changers 
    shouldComponentUdate(nextprops,nextstate){
        console.log("should component update");
        retunr true;
    }
    //updating : called before rendering and after shouldcomponent update
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("getSnapShot");
        return null;
    }
    //updating: called after rendering 
    componentDidUpdate(prevprops,prevState,snapshot){
        console.log("component did update");
    }
    //unmounting :
    componentWillUnmount(){
        console.log("component will unmount");
    }
    //Error handling 
    componentDidCatch(error,info){
        console.log("component did catch",error,info);
    }
    //event handler to update state
    increment=()=>{
        this.setState({count:this.state.count+1});
    };
    render(){
        console.log("render");
        retrun(
            <div>
            <h1>Lifecycle method Demo</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.inrement}>Increment</button>
            </div>
        );
    }
    }
    export default LifeCycledemo;

    LifeCyce phase summary
    mounting (when component is being created )
    1. constructor()
    2. getDerivedStateFromProps()
    3. render()
    4. componentDidMount()

    here is the exact update phase lifecycle 
    1. getderiveStateFromprops()
    2. shouldComponentUpdate()
    3. render()
    Getsnapshotbeforeupdate()  --caledd after render before dom update are commited 

    5. react update the dom
    6. component didupdate()

    ##  purpose of getsanpshotbeforeupdate()
    it is mainly used when you want to capture some information from the dom before it changes , so you can use this in componentdidupdate()

    getSanpShotBeforeUpdate(prevProps,prevState){
        console.log("getsnapshotbeforeupdate");
        return window.scrollY;
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("component did update",snapshot);
    }

## component
in react, a ui is built using individual , independence piece called component ,
the user interface is built as tree of component that are managed and converted into native dom element by react 
components allow us to build a single , reusable and isolated piece ui, which can be used to effciently render the user interface 

in react there are two types of component :
1. class component           2. functional component 

class component are still suported , but in react , it is preferable to use function component to reduce boilerplate code .

class component are created by creating a class the extends the React.Component classthe clas name is the name of component 
the class component needs to override the render method using jsx to describe the markup of the component 

<!DOCTYPE html>
<html>
<head>
<title>React html</title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js" crossorigin></script>
<script type='text/babel">
class Greeting extends React.Component{
constructor(props){
super(props);
this.state={greeting:"Hello"};
}
render(){
return (<h1>{this.state.greeting},{this.props.name})}
    }
    ReactDOM.render(<Greeting name="john"/>,document.getElelmentById("main"));
</script>

</body>
</html>

### functionaql component 
in functinal component we crerate a function instead of class that return jsx to describe the mark up of component.
functional component can take props as parameter and have the state to keep track of the data to be displayed 
in react , functional component are given preferance as they are less verbose and more mentainable 

<!DOCTYPE html>
<html>
<head>
<title>React html</title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
    function Greeting(props){
    const[greeting,setGreeting]=React.useState("Hello");
    return <h1>{greeting}, {props.name}!</h1>
    }
    ReactDOM.render(<Greeting name="John"/>,document.getElementById("main"));
</script>
</body>
</html>

## class vs functional component
1. backword compatibility:
class component have been supported since the beggening and are still supported in react 
and functional component were always in supported in react but they could not hold any state untill react version 16.8

2. state and props :
in class component , for state we use setState and for props we use parameter passed in render method 
in function component 
we use the useState hooks function to create state, which when changes will cause the re render of component.

3. life cycle method :
in class component, we can just override lifecycle method like componentdidmount etc
in function component we use the hook like useEffwctto define method of the component lifecycle 

4. verbosity :
class component are extreamly verbose , so many developers prefer using class component only 
whem they are necessary 
functiona component are really consice hence they are prefered over class component.

### proptype:
proptypes are allow us to define shape of props that our component are expecting 
using proptypes we can define what is the data type of a particuler props if it is required and more
proptype are valiudated by react automatically so all we have to do is define the shape and constraaints then react will throw an error to let us known whther the props that we passed are incorrect.

<!DOCTYPE html>
<html>
<head>
<title>React html</title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
<script type="text/babel">
    function Greeting(props){
    return <h1> Hello, {props.name}</h1>;
    }
    Greeting.propTypes={
    name:propTypes.string.isRequired;
    };
    ReactDOM.render(<Greeting name="John"/>.document.getElementById("main"));
    </script>

    after adding proptype when in Greeting component you pass other data type instead of string like <Greeting name={5}/> or <Greeting name={true}/>  so it give error 

    class component have several issues with them 
    1. constructor :
    when using class component that use state we have to create constructor thats call super method with passed props

    2. binding :
    when using react class component we would have to bind our method using call to bind with this keyword passed as argument to the call .

    3. sharing non visual logic :
    when we had non visual logic we would have to use complicated pattern like higher order component and render props 
    4. dublicate ifecycle logic :
    many a time  when we override the lifecycle method we would have to dublicate code between different lifecycle method 

### hooks
what are the hooks ?
hooks are react's solution to all the problem introduced by the class component in building react component 
before hooks we canonly use functional component if we had no state or logic in our component 
with hooks we can now create functional component with state and code as  lifecycle 
as well as create our own hook to share non visual logic 

at their core react hook are function provided by react to help it to know about apps internal state and lifecycle which can be used by functional component 

React hooks
react hooks are spacial function introduced in Reat 16.8 that allow you to use state and other react feature in functional component , which previously only possible in class componnet.

## why hooks?
before hooks if you wanted to use state , lifecycle method or side effects you had to use class component hooks allow you to write cleaner more usable logic inside functional componnet

commanly used react hook 
useState:
add state to functional component 
use effect:
perform side effect (data fetching , dom update )repace lifecycle method like componentdidmount 

useContext:
accesses context value without wrtting a wrapper component.
useRef
return a mutable ref object to access dom element or persist value across render 
use memo:
memorize value to avoid unneccesary recalculation 
usecallback :
memorize function to prevent recreation on each render 
useReducer :
like useState, but better for complex state logic , smilar to reduc reducer logic 
useLayoutEfffect:
ike useEffect , but ires synchronously after dom update 

### usesate and useeffect
import React,{useState,useEffect} from "react";
function Counter(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`count is now : ${count}`);//useeffect hooks 
    },[count]);
    return <div>
    <p>you clicked {count} times</p>
    <button onClick=()=>{setCount(count+1)}>Click me </button>
    </div>
}

before hooks functional component only use for presentational component and also known as dumb component 
but with hooks we have the ability to incorporate state and lifecycle in our functional component and reduce dpendency on class component .
using hooks we can build our react app kore declarative and more effectivly 

two of the mostcommon and useful hooks are useState and useEffect 

### usestate() hooks 
in react use useState hook in ordwer to enable our functional react component have internal state which is managed by react 

the usestate function take some some internal state and return a state variable and a function to set that variable in future these are returned as array 

the state variable is is monitored by react which will cause a re render when it chnages and it should only be changed by setter function returend by useState .

<!DOCTYPE html>
<html>
<head>
<title>React html</title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">

    function App(){
        const [name,setName]=React.useState("");
        return 
        <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <h1>{name}</h1>
        </div>

    }
    ReactDOM.render(<App/>,document.getElementByid("main"));
</script>

## useEffect
useEffect()
hooks takes in a function and a optional array of variable which when changed will cause the effect function to be executed again 

in react use useEffect hookin order to enable our functional react component have lifecycle method 

if an empty array passed as argument second argument then it runs only when component is added to screenor dom like component didmount .

optionally from the function you can return a function to perform any cleanup necessary , like unregistering an event listner handler etc 
### additional hooks 
there are quite a number of hooks available for us to use other than useState and useEffect a few of those are :

useContext ,
useRef
useReducer 

1. useContext
in react a context object is a spaical object managed by react which can be used to share data between sibling component 
the useContext hook allow us to use data from context object in our component much more easily 

2. useRef:
when we re render the component all the variable declare inside it will reset 
useRef allow us to create object that will persist even after component re render and will persist for full lifetime of the component 

3. usereducer :
usereducer can be thought of an advance version of useState, as it allow us to define initial state of an application as well as a reducer function 

### building custom hooks 
we can  even create custom hooks which will allow us to perform certain task and integrate it with react 
we can build these custom hooks by the help of already presented hooks like useState and useEffect.
<!DOCTYPE html>
<html>
<head>
<title>React html</title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
    function useInterval({initial,increament}){
        const [seconds,setSeconds]=React.useState(initial||0);
        React.useEffect(()=>{
        const timerId=setinterval(()=>{
        setSeconds(s=>s+1)},increament||1000);
        return ()=>clearInterval(timerId);
        },[]);
        return seconds
        }
    function App(){
        const second=useInterval({initial:15,increament:100});
        return <h1>{second}</h1>
        

    }
    ReactDOM.render(<App/>,document.getElementByid("main"));
</script>
</body>
</html>

### react form 
forms are essential part of html as they used to collect information from users 
forms are importent because they are the most intutive way that a user can interact and enter data into our application 
forms in html have several tags such as form input label button etc 
each componennt in a form has its own attribute which modify how it looks and or how it works 

### creating a form in react js 
just like html , react js can also be used to create form which can which can capture user input 
but with react js we can have forms that can manage thier own internal state and keep them in sync  with the ui 
these form can handle validation error and as well as asynchronous form submission 
thwre are two way to create or manage form component in react js:
controlled components and uncontrolled component 

## controlled component in react js form 
in react js a controlled component is an element that contains the data that handled by the state inside the component
in other words a component that containsdata that is managed or controlled by its internal state is called controlled component.
a controleed component is espacially useful when building forms as each form element can contain its own internal state which can be managed by react 

in a controlled component the state act as the single source of truth as the data flow is unidirectional so it can only be updated in one way 

## controlled component demo
<!DOCTYPE html>
<html>
<head>
<title>controlled component </title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
    function Form(){
    const [userName,setUserName]=React.useState("");
    const [password,setPassword]=React.useState("");
    function handleSubmit(e){
    e=>e.preventDefault();
    console.log(`Username:${username} password : ${password}`);
    }
    return <form onSubmit={handleSubmit}>
        <input type="text"  placeholder="enter user name" value={userName} onChange={e=>setUserName(e.target.value)}/><br/>
        <input type="password" placeholder="enter password" value={password} onChange={e=>setPassword(e.target.value)}/><br/>
        <input type="submit" value="Login"/>
    </form>;}
    ReactDOM.render(
    <Form/>,document.getElementById("main"));
    
</script>
</body>
</html>

### uncontrolled component
in react js , uncontrolled component act more like traditional html element 
in uncontrolled component, we get access to the underlying dom element and query thier data instrad of maintaining state
to get access to the underlying html coponent , we amke extensive use of refs, which allow us to access the dom element in react js 
a;though uncontrolled component are easier to use and understand they should only be used to spacial cases where we need to manipulate the underlying dom element 
<!DOCTYPE html>
<html>
<head>
<title>controlled component </title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
    function Form(){
    const usernameRef=React.createRef();
    const passwordRef=React.createRef();
    function handleSubmit(e){
        e.preventDefault();
        const result={username:usernameRef.current.value,password:passwordRef.current.value};
        console.log(result);}
    return <form onSubmit={handleSubmit}>
        <input type="text"  placeholder="enter user name" value={userName} onChange={e=>setUserName(e.target.value)} ref={usernameRef}/><br/>
        <input type="password" placeholder="enter password" value={password} onChange={e=>setPassword(e.target.value)} ref={passwordRef}/><br/>
        <input type="submit" value="Login"/>
    </form>;}
    ReactDOM.render(
    <Form/>,document.getElementById("main"));
    
</script>
</body>
</html>

### validation (form validation)
in react since we can store our data as state in components, we can also have validation of the same data in the same component 
when building a form , we can store validation rule and when form is submitted we can generate error message .
so to validate the form , we need to keep trackof the data as state variable and generate and display error using using this state variable 
we just need to make sure that the form are validated properly and if they are then we can submit them asynchronously and deal with the result 

<!DOCTYPE html>
<html>
<head>
<title>controlled component </title>
</head>
<body>
<div id="main"></div>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
    function Form(){
    const [userName,setUserName]=React.useState("");
    const [password,setPassword]=React.useState("");
    function handleSubmit(e){
    e.preventDefault();
    if(userName.trim()==="" || password.trim() ===""){
    console.error("field can not be blank");
    return;}
    console.log({userName,password});}
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter username" value={userName} onChange={e=>setUserName(e.target.value)}/><br/>
        <input type="password" placeholder="Enter username" value={password} onChange={e=>setPassword(e.target.value)}/><br/>
        <input type="submit" value="Submit"/>
    </form>);}
    ReactDOM.render(<Form/>,document.getElementById("main"));
</script>
</body>
</html>

once we have validated our form , if we have some errors , then we need to give feedback to the userto fix those error 

for this purpose we need to display the error and indicate that the data entered by the user is invalid and needs to be fixed 
also we need to remove the error once it is fixed , and the form need to be submitted to the user 

there are many library available for form validation and error handling in react js , but using them make this very complicated 


#### routing in react js in single page application 
a single page application is an application , which uses a single html page for initial loading and after that all futher interaction managed by javasript these interaction include handling user event data chnages moving between pages for navigation 
in react to handle navigation between pages , which is caused by change in the current url, we use routing library .
although there are many routing library available in react react torter is the most populer library 

### react router advantage 
1. easy :
react router is quite populer because it offer the following 
1. easy : react router is easy to lesrn as it has a very intutive api design so we can easily get started with it 
2. declarative : just like reat js , react routwr is also declarative , so it is easier for us to describe how we want our route to be structured 
3. fast : react router is very fast and performant as switching between routes in react app once they are loaded is blazing fast .
4. transition : in react router animation and transition can be easily implemented when switching between different component 

### component of react router dom 
handling routing declaratively can be a bit difficult to solve so this react router dom has built in react component to be used in react code 

among several component in react router dom there are three type that are most importent ones to understand 
1. Routers : every react router application should have a router component as the top level component .
for web project react router dom provides <BrowserRouter> and <HashRouter> router
a <browserRouter> uses regular url paths but needs the server to be configured correctly and also it is ony work in browser supporting html5.
a <HashRouter> stores the current location in the hash portion of the url . so the url looks like https://example.com/#/our/page
2. Route Matchers : there are two route matching component <Switch> and <Route> in which <Route> should be  the child coponent of <Switch> and when the <Switch> is rendered , it searches through its children <Route> elements to find the one whose path matches with the current url.when its find one , it rander that <Route> and ignore all other below it , because of it , we have to put <Route> with more specific paths before the less specific ones .
3. navigation : and for navigation , we have a few specific component namely <Link/>,  <NavLink/>, <Redirect/>

the <Link/> component creates links in our application whereever we render a <Link/>, an anchor <a/> will be render in our html document

a <NavLink/> is a spaical type of <Link/> that can add a class or style to itself when its 'to' props matches the current location 
any time that we want to force navigation , we can render a <redirect> and when a <Redirect> renders, it will navigate using 'to' props 

### demo react riuter dom 
first check in your system or project node js installed 
node --version 
npm --version 
npx --version 
and in terminal write npx create-react-app react-router 
now install npm install react-router-dom 

in app.jsx update thing like this 
import React from "react";
function App(){
    return(
        <h1>Hello</h1>
    ) ;
}

export default App;
and  update index.js file like this 
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>,document.getElementById("root")
)

now update App.jsx 
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
function App(){
    return(
        <Router>
        <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/services">Services</Link>
        </li>
        </ul>
        <Switch>
        <Route path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/services" component={Services}/>
        </Switch>
        </Router>
    ) ;
}
const Home=()=><h1>Welcome Home.</h1>;
const Contact=()=><h1>Contact</h1>;
const Services=()=><h1>Services</h1>;
export default App;

but by above code when i come in localhost on ui then after clicking on every link only url changes but ui not display any changes 
like when i cick on home link then come welcome home heading on ui and same when i click on contat and services then also same welcoe home come but i do not want this 
o as i mention above during introductionary notes of routes than in routes in switc first search for more specific then less specific so move path="/"  line at the last like 
<Switch>
        
        <Route path="/contact" component={Contact}/>
        <Route path="/services" component={Services}/>
        <Route path="/" component={Home}/>
 </Switch>

 or we can also write like this  
 <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/services" component={Services}/>
        
 </Switch>

 and if i write like this 
 import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
function App(){
    return(
        <Router>
        <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/services">Services</Link>
        </li>
        </ul>
        
        <Route path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/services" component={Services}/>
    
        </Router>
    ) ;
}
const Home=()=><h1>Welcome Home.</h1>;
const Contact=()=><h1>Contact</h1>;
const Services=()=><h1>Services</h1>;
export default App;
then list come then below this home component come and below this that component come which url currently open like after slash(/contact)
and now when i put exact then it come in right way like after list only that coponent come which url currently present like after slash 

## in react router , links are used to navigate into single page application 
in react react router support two types of link component NavLink and Link
a <link> provide the decarative accessible navigation within our appication 
<NavLink> is the spacial version of <Link> that will add styling attribute to the rendered element when it matches with the current url.

## handling the 404 route
in production build of single page application , we have to handle all possibe error we might come across 
one of these error occur if we navigate to a page which does not exist 
to avoide this , we  use switch and route component and make use of tha fact that switch renders the first route that matches --even if there are more than one match . Otherwiase it ooks through all routes looking for a match .
so we have to rende rmultiple route component inside switch component with last route rendering a 404 page or component and aso not having any path prop passed , so it matches every route 

App.jsx 
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App(){
    return(
        <Router>
        <ul>
        <li>
        <Link to="/">Home </Link></li>
        <li>
        <Link to="/contact">Contact </Link></li>
        <li>
        <Link to="/services">Services</Link></li>
        <li>
        <Link to="our-service">Broken</Link></li>
        </ul>
        <Switch>
        <Route path="/contact" component={Contact}/>
        <Route path="/services" component={Services}/>
        <Route path="/" exact component={Home}/>
        <Route component={NotFound}/>
        </Switch>
        </Router>
    );
}
const Home=()=><h1>Wlecome Home</h1>;
const Contact=()=><h1>Contact us</h1>;
const Services=()=><h1>Services</h1>;
const NotFound=()=>(<div><h1>Page Not Found.</h1>
<Link to="/">Home</Link></div>);
export default App;

### url parameters 
a url parameter is placeholder in your ur that needs to be replaced by the value 
a url parameter int he url in react router begin with a colon followed by and identifier representing that parameter eg /user/:id
a url is not restricted to one parameter as it can have multiple parameter , we need to make sure tat they all are distinct and necessary, to access the url parameter 's value we use the useParams hook that return a javascript object with a key as the parameter name and value as the parameter value 

import React from "react";
import {BrowserRouter as Router, Route, Switch,useParams}  from "react-router-dom";
function App(){
    return(
        <Router>
        <ul>
        <li>
        <Link to="/">Home</link>
        </li>
        <li>
        <Link to="/users/john/1">Users</link>
        </li>
        </ul>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/users/:name/:id" component={Users}/>
        </Switch>
        </Router>
    );
}
const Home=()=><h1>Home</h1>;
function Users(){
    const {name,id}=useParams();
    retuen (
        <h1>Hello {name} user id: {id}</h1>
    )

}
export default App;
### nested routes 
in a single page react application , it offens happen that we need to deal with routes that are nested into other routes .
to render nested route we need t get access to the current route and add few parameter at its end :
to get access to the current url we need to use the useRouteMatch hook that return an object with a path and the current url , which can be used for nesting 
import React from "react";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
function App(){
    return (
        <Router>
        <ul>
        <li>
        <Link to="/users/1">john</Link>
        </li>
        <li>
        <Link to="/users/2">jane</Link>
        </li>
        </ul>
        <Switch>
        <Route path="/users/:userId" component={User}/>
        </Switch>
        </Router>
    );
}
function User(){
    const {userId}=useParams();
    const {url,path}=useRouteMatch();
    return(
        <div>
        <h1>User Id: {userId}</h1>
        <ul>
        <li>
        <Link to={`${url}/posts/1`}>Post 1#</Link></li>
        <li>
        <Link to={`${url}/posts/2`}>Post 2#</Link>
        </li>
        </ul>
        <Switch>
        <Route path={`${url}/posts/:postId`} component={Post}/>
        </Switch>
        </div>

    );
}
function Post(){
    cosnt {userId,postId}=useParams();
    return (
        <h2>
        Post is :{postId} by user Id: {userId}</h2>
    );
}
export default App;

## state 
for a component to be truly encapsulated and reusable in needs to be able to access and manipulate the some data
in react component state is just some data that is managed internally by the component .
sostate is managed by react so you dont have to keep track of changes made to state andupdating the ui accordingly 
there are two kind of state in react :
local state and global state 
1. local state:
local state is the data that is maintained by component internally 
local state is internal to a component and should not be modified by external component 
local state can be shared with children component via props .
for propogating state changes to parent component we need to pass functions which can be called to change the state which cause rerender 

2. global state :
glovbal state is data that is globally in your applicqation , which means that it;s data needs to be shared across several component .
since several component need access to the data it cannot be stored in any component and made available for all component .
there are several solution availabe in react without the use of other external library for global state managemenbt 
there are two way of dealing global state lifting up state and context.

i. lifting up state :
in react js , when we have to share some portion of state with multiple component we can use 
a techniques called ligting up state 
lifting up state is the process of moving the the shared portion of state to a common parent element 

ti lift up the state we need to figure out the state that needs to be shared and components to be shared among 
this state then needs to be moved to the lowest common ancestor component and passed down to needed component as props 

## demo : lift up state 
first crete a react app using npx create-react-app react-context-demo

in App.jsx 
iport React from "react";
function App(){
    const [user,setUser]=React.useState({name:"John",age:33});
    return(
        <div>
        <Header user={user}/>
        <Footer user={user}/>
        </div>
    );
}
function Header(props){
    const user=props.user
    return <h1>Username:{user.name},Age: {user.age}</h1>
}
function Footer(props){
    const user=props.user;
    return <h1>Logged in user:{user.name}</h1>
}
export default App;

Lifting up state is good first step but it leads to some problems when used 
with state that nedds to be shared with child component nested deep within the component tree
it is also called props drilling 
when state needs to be shared with component that are deeply nested they need to passed through many component through props 
in order to avoid this satuation we can use context in react which is a built in solution 
in react for exact same issue 

to create react context we use createContext function from react , however to use a react context we need to understand two part of react context mainly provider and consumer 

# context provider 
when we create a context it contains two react component provider and consumer 
provider needs to be parent compoonent to all the component that need to use data within a context 
a provider basic job is to provide value to any child component that explicitly ask for it 
provider can contains any kind of value including objects that contain data and function to manipulate the data 

## consumers 
consumers are the other part of context rather than provider so consumer are the counterpart of the provider component in context
consumers are the child component or descendent of the provider that have access to the value the provider hold 
consumer uses render prop pattern , in which we have to pass the function which has access the value in the context and return a react component 

consumer component walk up the parent component chain and find the nearest matching provider to access value from 

# deo on context 
App.jsx 
import React fro "react";
const themes={
    light:{
        backgroundColor:"#fff",
        color:"#000",
    },
    dark:{
        backgroundColor:"#000",
        color:"#fff",
    }
};
const ThemeContent=React.createContext(themes.light);
function App(){
    const [theme,setTheme]=React.useState(themes.light);
    const toggleTheme=()=> setTheme(t=>t===themes.light?themes.dark:themes.light);
    return (
        <ThemeContent.Provider value={{theme,toggleTheme}}>
        <Toolbar/>
        <Panel/>
        </ThemeContent.Provider>
    );
}
function Toolbar(){
    return <ThemedButton/>
}
function ThemedButton(){
    return(
        <ThemeContext.Consumer>
        {
            function ThemeSwitcher(values){
                const toggleTheme=values.toggleTheme;
                return (
                    <button onClick={toggleTheme}>Toggle Theme</button>
                )


            }
        }
        </ThemeContent.Consumer>
    )
}
function Pannel(){
    return(
        <ThemeContext.Consumer>
        {
            function ThemeSwitcher(values){
                const theme=values.theme;
                return (
                    <div style={theme}>
                    <p>Notice!</p>
                    </div>
                )


            }
        }
        </ThemeContent.Consumer>
    );

}
export default App;

## useContext hook

as using consumer component in react requires you to need use complicate pattern render props we can also use useContext hook 
in useContext hook we do not need to use any other component all we have to do is is pass the context as an argument to the hook 
with usecontecxt hoomk you can simply access value by calling the method and without using render rpops pattern 
it works the same way as consumer context by getting the value from a matching provider component that is the current component parent 

### hands on : useContext hook 
in App.jsx
import React from "react";
const themes ={
    light:{
        backgroundColor:"#FFF",
        color:"#000",
    },
    dark:{
        backgroundColor:"#000",
        color:"#FFF"
    }
};
const ThemeContext=react.createContext({theme:themes.light});
function App(){
    const [theme,setTheme]=React.useState(themes.light);
    const toggleTheme=()=>setTheme(t=>t===themes.light?themes.dark:themes.light);
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
        <Toolbar/>
        <Panel/>
        </ThemeContext.Provider>
    );
}
function Toolbar(){
    return <ThemedButton/>;
}
function panel(){
    const {theme}=React.useContext(ThemeContext)
    return(
        <div style={theme}>
        <p>Notice !!</p>
        </div>
    )
}
function ThemedButton()[
    const {toggleTheme}=React.useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}>Toggle Theme
        </button>
    )
]
export default App;

#### what is the redux?
as we have already discussed , react support two kind of state global state and local state 
in react there are two way of dealing with global state lifting up state and context 
these are great for small and mid size application 
but in application that has lot of state that needs to be shared and manipulated by multiple component , these solution really complicate the code and are even difficut to implement .
 

 redux is a javascript library that solve this problem , it maintain the state of entire application in a single immutable state tree (JS object), which can not be changed directly 

 why redux ?
 since state management gets messy as the app get complex , we need a state management tool 
 like redux that makes it easier to maintain these state across several component in a consistent manner 

 react js allow us to build our application user interface by building component that manages their own state internally without any external tool or library 

 in an application with fewer component s this approach work really well and allow developer to build small isolated user interace components
 but as the appicatins size grow managing states shared across component become a really deficult task 

 as data needs to be shared among component , it might be confusing to actually know that where a state should be lived 

 ### redux prencipe 
 so there are three fundamental principle which redux follow 
 1. sigle source of truth : it means that there is only one place which represents global state of your application and our application ui will re render when this state chnage , this make your application more predictable 
 2. state is read only : in redux we can not modify or mytate state directly 
 3. changes are made with pure function : in redux we use reducer which are pure function that take current state and an action and return next state , a pure function is a function that given same input , will always return the same output and produce no effect .

 ## redux concept 
 there is some importent redux concept that we need to be faimiier with before we can continue 
 1. actions : an action is a plain javascript object that has a type field , itcan thought of as an event that describe something that happended in application , for example when
 a todo is added in a todo list 
 the type field should be a string that gives the action a descriptive name . like "todos/todoAdded" , it is usually written created as "Domain/eventName'
 an action object can have other field with additional information about what happen , by conventio , we put that information ina field called payload 

 2. action creator:
 some action object can be little bit complicated and creating them by hand all the time can be a little  combersome and error prome.
 which is why we use some function to create our action that take a few input as function argument and return and action with type and payload , these function are called action creater we typically use this so we dont have to write the action object by hand every time 

 3. reducewr : as in redux state is read only so to make a changes to state such as adding or deleting items we need to copy the state , manipulate it and and set the manipulated state as new state 
 action object describe the change to the statew and these changes are actually performed in a function called reducer 
 a reducer function takes input as current state and action as argument copies the state makes changes to the copy based on the action ten return new state .

 4. store : in redux  a store is a object thhat store the entire global state in application that uses redux 
 a store is created by passing in a single and multipe reducer function and has a method called getState that return the value of current state 

 as metioned store is the place where all the global state are  stored and it is a single source of truth that redux use .

 5. dispatch : a store in redux has a method on it called disptch which is called with an action object when we wish to update the current state value
 when the dispatch method called with the action the store runs the reducer function with current state and action and update the current state to be the dstate returned by reducer 

 ### thing of dispatching action as trigger an event in the application 
 something happened and we want to store to know about it 

 6 . selector: 
 as the state in our application grows , it canbecome increasingly very difficult to extract just the information you want out of it .
 to deal with this we use selector thre are just plain functions that receive the state as an argument and extract specific piece of information from the current state 
 as an application grow bigger , it avoid repeating logic as an different part of the app need to read the same data .

 ### redux demo 
 <!DOCTYPE html>
 <html>
 <head>
 <title>Redux</title>
 </head>
 <body>
 <h1>Open Console</h1>
 <script src="https://unpkg.com/redux/dist/redux.js">
    </script>
    <script>
        function countReducer(state=0,action){
            switch(action.type){
                case "INCREMENT":return  state + 1;
                case "DECREMENT":return state -1;
                /*case "INCREMENT": return state + action.payload;
                case "DECREMENT":return state - action.payload;*/
                default: return state;
            }
        }
        const store=Redux.createStore(countReducer);
        store.subscribe(()=>{
            console.log(store.getState());
        })
        store.dispatch({type:"INCREMENT"});
        store.dispatch({type:"INCREMENT"});
        store.dispatch({type:"INCREMENT"});
        store.dispatch({type:"DECREMENT"});
        store.dispatch({type:"DECREMENT"});
        store.dispatch({type:"DECREMENT"});
        /* are also you can write like this  
        const increment=(payload=1)=>{
        {type:"INCREMENT",payload}}
        const decrement=(payload=1)=>{         // by default payload value is 1
        {type:"DECREMENT",payload}}
        store.dispatch(increment()); but if we give sroe.dispatch(increment(15)) then output would be 15 16 17 16 15 14 
        store.dispatch(increment());
        store.dispatch(increment());
        store.dispatch(decrement());
        store.dispatch(decrement());
        store.dispatch(decrement());
        */
        </script>
 </body>
 </html>

 ### since redux is a javascript library for state management , it can be used with any application like react and angular 
 for react to work well with redux we need to use another package called react-redux 
 it is package created anf maintained by redux team and kept up to date with the latest api from redux and react , itcreate a wrapper component that amanages the store interaction logic for you so you dont have to write it yourself .
 