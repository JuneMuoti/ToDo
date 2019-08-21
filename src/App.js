import React ,{Component} from 'react'
// import logo from './logo.svg';
import './App.css';
// import MyInfo from './components/MyInfo'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './components/Main'
import TodoItem from './components/TodoItem'
import ContactCard from './components/ContactCard'
import Joke from './components/Joke'
import jokesData from './components/jokesData'
import products from './components/vschholProduct'
import Product from './components/Product'
import todosData from './components/todosData'
import Header from './components/Header'
import Greeting from './components/Greeting'
import Conditional from './components/Conditional'
import { setTimeout } from 'timers';
import { directive } from '@babel/types';





class App extends React.Component{

  constructor(){
    super()
    this.state={
      loading:false,
      character:{}
    }
  }
  componentDidMount(){
    this.setState({loading:true})
    fetch("https://swapi.co/api/people/1/")
    .then(response=>response.json())
    .then(data=>{
    this.setState({
      loading:false,
      character:data
    })

  })
  }
  render(){
    const text=this.state.loading ? "Loading...":this.state.character.name
    return(
      <div>
        <p>{text}</p>
        </div>
    )
  }
}

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       loading:false,
//       character:{}
//     }
//   }
//   componentDidMount(){
//     //Here we are fetching a JSON file across the network and printing it to the console. The simplest use of fetch() takes one argument — 
//     //the path to the resource you want to fetch — and returns a promise containing the response (a Response object).

// //This is just an HTTP response of course, not the actual JSON. To extract the JSON body content from the response, we use the json() method (defined on the Body mixin, which is implemented by both the Request and Response objects.)
//     this.setState({loading:true})
// fetch("https://swapi.co/api/people/1/")
//     .then(response => response.json())
//     .then(data=>{
//       this.setState({
//         loading:false,
//         character:data
//       })
//     })
//   }
//   render(){
//     const text=this.state.loading? "Loading.." :this.state.character.name
//     return(
// <div>
//   <h4>{text}</h4>
  
// </div>
//     )

//   }
// }

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       isLoggedIn:false
//     }
//     this.clickHandler=this.clickHandler.bind(this)
//   }

//  clickHandler(){
// this.setState(prevState=>{
//   return{
//     isLoggedIn:!prevState.isLoggedIn
//   }
 
// })
//  }
//   render(){
//     let buttonText=this.state.isLoggedIn? "Log Out":"Log In"
//     let displayText=this.state.isLoggedIn? "Logged In":"Logged Out"
//     return(
// <div>


//  <button onClick={this.clickHandler}>{buttonText}</button>
//  <h4>{displayText}</h4>

//   </div>
//     )
//   }
// }

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       unreadMessages:[1,3,4,"y"
//       ]
//     }
//   }
//   render(){
//     return(
//       <div>
//         {
//           this.state.unreadMessages.length>0 &&
//           <h1>You have  <strong>{this.state.unreadMessages.length} </strong>unread messages!</h1>
         
//         }
//         </div>
//     )
//   }
// }
// class App extends React.Component{

//   constructor(){
//     super()
//     this.state={
//       isLoading:true
//     }
//   }

//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({
//         isLoading:false
//       })
//     },1500)
//   }
//   render(){
//     return(
// <div>
// {this.state.isLoading? <h1><center>Loading...</center></h1>: 
//   <Conditional />}
//   </div>
//     )
//   }
// }
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       count:100
//     }
//     this.countChanger=this.countChanger.bind(this)
//   }
//   countChanger(){
//     this.setState(prevState =>{
//     return{
      
//         count:prevState.count /2
//       }
    

//   })
// }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.countChanger}>Click to change me!</button>
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       todos:todosData
//     }
//     this.handleChange=this.handleChange.bind(this)
//   }
//   handleChange(id){
//    this.setState(prevState=>{
//     // use map to loop over the previous array and look for item whose is matches the id in the method
//     // we recreate previous array except that the item with the same as the method is being changed from true to false and vice versa
//        const updatedTodos=prevState.todos.map(todo=>{
//         //  if current item has an id equals to the id in the method then this is the item we want to flip its completed property
//          if(todo.id == id){
//            todo.completed=!todo.completed
//          }
//          return todo
//        })
    
//       return{todos:updatedTodos}  
//    })
//   }
//   render(){
//     const todosComponent=todosData.map(item=><TodoItem key={item.id} data={item} handleChange={this.handleChange}/>)
//     return(
//       <div>
//       {todosComponent}
//       </div>
//     )
//   }
// }


// functioq pp(){
// const todosComponent=todosData.map(item=><TodoItem key={item.id} data={item}/>)

//   return(
//     <div>
//       {todosComponent}
//       {/* <center>
//     <img onMouseOver={() => alert("hovered!")} src="https://fillmurray.com/200/100"/>
//     <br />
//     <br />
//     <button onClick={clickHandler}>Click Me</button>
//     </center> */}
//     </div>
//   )
// }



//   const todosComponent=todosData.map(item=><TodoItem key={item.id} data={item}/>)
//   const jokeComponents=jokesData.map(joke=><Joke key={joke.id} question={joke.question} punchline={joke.punchLine}/>)
// const productComponents=products.map(item=><Product product={item}/>)


     

//     <div className="contacts">
//     <ContactCard 
//       contact={{name:"Mr. Whiskerson" ,imgUrl:"http://placekitten.com/300/200",phone:"(212) 555-1234",email:"mr.whiskaz@catnap.meow" }}
//         />
//     <ContactCard 
//         contact={{name:"Fluffykins",
//         imgUrl:"http://placekitten.com/400/200",
//         phone:"(212) 555-2345" ,
//         email:"fluff@me.com"}}/>
//     <ContactCard 
//           contact={{name:"Destroyer",
//           imgUrl:"http://placekitten.com/400/300",
//           phone:"(212) 555-3456",
//           email:"ofworlds@yahoo.com"}}/>
//     <ContactCard 
//         contact={{name:"Felix",
//         imgUrl:"http://placekitten.com/200/100",
//         phone:"(212) 555-4567",
//         email:"thecat@hotmail.com"}}/>
        
   
// </div>
//   )
// }

// class App extends React.Component{
//   render(){
//     // const date= new Date();
//     return (
//       <div>
//       <h1>Code here</h1>
//        {/* <h2> Today's date is {date}</h2> */}
//         </div>
//     )
  
//   }
   
// }



// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//      isLoggedIn:true
//     }
//   } 
   
  
//  render(){
//       let wordDisplay
//       if (this.state.isLoggedIn){
//         wordDisplay="in"
//       }else{
//         wordDisplay="out"
//       }
//    return(
//      <div>
//        <h1>You are currently logged {wordDisplay}</h1>
//        </div>
//    )
//  }
// }


export default App
// some facts about state
// state is a way a component can maintain its own data and change it's own data 
// if you want a component to manage its own data using state,it will have to be a class based component
// to add state to a class you first need to add a constructor method
// a constructor method helps initialize parts of a class/some values
// if you have a constructor you should always add super()
// after initializing state using thhis.state={},you can reference it nayware in the component using this.state
// state is usually an object
// whenever you chnage state using set state,react updates the new set state to every child of that component
// any time you use a class method that uses the setState function,you have to bind your method to that class hence this.handleClick=this.handleClick.bind(this) to show that the method is bound to the context of this class
// you bind it inside the constructor
// you pass to setState a function with the value of the new state i.e this.setState((prevState=>{return{count:prevState.count+1}})) the benefit of passing a parameter i.e prevState means you have access to the previous version of the state

//life cycle methods
//render()-run when you want to display something to the screen.can be called many times
//componentDidMount()-run when the very first time the compunent shows up(mounts) to the screen.Only runs once while the component is showing up on the screen
//Most common use is when you running an API to pull external data
//    componentDidMount() {
        // GET the data I need to correctly display
      //}
    
      // componentWillReceiveProps(nextProps) {
      //     if (nextProps.whatever !== this.props.whatever) {
      //         // do something important here
      //     }
      // }
      
      // shouldComponentUpdate(nextProps, nextState) {
      //     // return true if want it to update
      //     // return false if not
      // }
      
      // componentWillUnmount() {
      //     // teardown or cleanup your code before your component disappears
      //     // (E.g. remove event listeners)
      // }








    
