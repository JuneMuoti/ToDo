import React from 'react'


function Main(){
    const firstName="Bob"
    const lastName="Marley"
    const date=new Date(2019,6,31,15)
    const hours=date.getHours()
    let timeOfDay
    const styles={
        fontSize:44}

    if(hours < 12){
        timeOfDay="morning"
        styles.color="#04756F"
    }else if(hours >12 && hours < 17){
        timeOfDay="afternoon"
        styles.color="#D90000"
    }else{
        timeOfDay="night"
        styles.color="purple"
    }
   
   

    return(
        <div>

            <p>Main Component here</p>
            <h1>It is currently about {date.getHours() % 12} O'clock</h1>
            <h2>Good {timeOfDay}!!</h2>
            {/* when inside JSX,surround anthing you want interpreted as javascript with {} like shown below */}
            <p style={styles}>Hello {lastName + " " + firstName}!</p>
            {/* or */}
            <p>Hello {`${firstName} ${lastName} `}!</p>

            </div>
    )
}

export default Main