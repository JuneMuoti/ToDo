import React ,{Component} from 'react'
import FormComponent from './FormComponent'
class Form extends React.Component{


    constructor(){
      super()
      this.state={
        age:"",
        firstName:"",
        lastName:"",
        gender:"",
        location:"",
    
          isVegan:false,
          isKosher:false,
          isLactoseFree:false
     
      }
      this.handleClick=this.handleClick.bind(this)
  
    }
    handleClick(event){
      const{name,value,type,checked}=event.target
      type === "checkbox"?
      this.setState({
     
          [name]:checked
      
       
      }):
      this.setState({
      [name]:value,
     
      })
    
    }
    render(){
      return(
        <FormComponent 
        handleClick={this.handleClick}
       data={this.state}/>
      )
    }
  }
  
  export default Form