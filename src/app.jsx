import React from 'react';

function App(){
    let newDateTime = new Date();
    let hours = newDateTime.getHours();
    let greeting = "";
    let cssColor = {};

    if (hours > 0 && hours < 12) {
    greeting = "Good Morning";
    cssColor.color = "green";
    }else if (hours > 11 && hours < 20) {
    greeting = "Good Afternoon";
    cssColor.color = "orange";
    }else {
    greeting = "Good Night";
    cssColor.color = "black";
    }
    return(
        <>
            <div className='mainWrapper'>
            <div className='innerWrapper'>
                <div className='bar'>
                <p>Hello Sir ,<span style={cssColor}>{greeting}</span></p>
                </div>
            </div>
            </div>
        </>
    )
}

export default App;