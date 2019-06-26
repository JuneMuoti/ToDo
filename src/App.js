import React from 'react';
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

function App() {

  const todosComponent=todosData.map(item=><TodoItem key={item.id} data={item}/>)
  // const jokeComponents=jokesData.map(joke=><Joke key={joke.id} question={joke.question} punchline={joke.punchLine}/>)
// const productComponents=products.map(item=><Product product={item}/>)


     
  return (
    <div>
     {todosComponent}
     
      </div> 
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
  )
}

export default App;
