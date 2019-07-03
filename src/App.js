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

class App extends Component { 
  constructor(){
    super()
    this.state={
      todos:todosData
    }
  }
  render(){
    const todosComponent=this.state.todos.map(item=><TodoItem key={item.id} data={item}/>)
    return (
<div>
     {todosComponent}
     
      </div>
    )
  }
}

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