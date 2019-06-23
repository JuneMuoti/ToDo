import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Main from './Main'


function MyInfo(){
    return (
        <div>
           <Nav/>
           <Main/>
               <Footer/>
        </div>
    )
}

export default MyInfo