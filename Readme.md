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