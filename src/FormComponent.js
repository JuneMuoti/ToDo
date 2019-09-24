import React ,{Component} from 'react'

function FormComponent(props){
    return(
        <main>
                  <form>
                  <label>First Name:</label> <input type="text" value={props.data.firstName} name="firstName"  onChange={props.handleClick} placeholder="First Name" /><br />
                  <label>Last Name:</label><input  type="text" value={props.data.lastName} name="lastName"  onChange={props.handleClick} placeholder="Last Name" /><br />
                  <label>Age:</label> <input type="text" value={props.data.age} name="age" onChange={props.handleClick} placeholder="Age" /><br />
                     
                  <label>
                    <input type="radio"  value="male" checked={props.data.gender  === "male"}  name="gender" onChange={props.handleClick} placeholder="Age" />Male
                  </label> 
                          
                  <label>
                    <input type="radio"  value="female" checked={props.data.gender  === "female"}  name="gender" onChange={props.handleClick} placeholder="Age" />Female
                  </label> 
                      <br />
                      
                      {/* Create select box for location here */}
                      <label>Location:</label>
                      <select
                        value={props.location}
                        onChange={props.handleClick}
                        name="location"> 
                        <option>--Please Choose a location---</option>
                        <option  value="seatle">Seatle</option>
                        <option value="washington">Washington</option>
                        <option value="delaware">Delaware</option>
                        </select>
                      <br />
                      
                     <label>
                       <input
                        type="checkbox"
                        name="isVegan"
                        checked={props.data.isVegan}
                        onChange={props.handleClick}/>Vegan?
                       </label>
  
                       <br />
                 
                         
                      
                     <label>
                       <input
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.isKosher}
                        onChange={props.handleClick}/>Kosher?
                       </label>
                       <br />
                      
                      <label>
                        <input
                         type="checkbox"
                         name="isLactosFree"
                         checked={props.data.isLactoseFree}
                         onChange={props.handleClick}/>Lactose Free?
                        </label>
                     
                  </form>
                  <hr />
                  <h2>Entered information:</h2>
                  <p>Your name: {props.data.firstName}  {props.data.lastName}</p>
                  <p>Your age: {props.data.age}</p>
                  <p>Your gender: {props.data.gender}</p>
                  <p>Your destination: {props.data.location}</p>
                  <p>
                      Your dietary restrictions: 
                      <p>Kosher:{props.data.isKosher ?"Yes":"No"}</p>
                      <p>Lactose:{props.data.isLactoseFree?"Yes":"No"}</p>
                      <p>Vegan:{props.data.isVegan?"Yes":"No"}</p>
                  </p>
              </main>
    )
}

export default FormComponent