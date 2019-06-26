

import React from 'react'


function ContactCard(props){
    console.log(props)
    // a prop is basically an object containing your properties
    return(
        <div className="contact-card">
         <h3>Name:{props.contact.name}</h3>
        <img src={props.contact.imgUrl}/>
       
        <p>Phone:{props.contact.phone}</p>
        <p>Email:{props.contact.email}</p>
    </div>
    )
}



export default ContactCard