import React, { useState, useEffect } from 'react';


function Clock(){
  
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      function tick() { 
        setDate(new Date());
      }
      
      const timerID = setInterval( 
        () => tick(), 
        1000 
      ); 
      
      return () => clearInterval(timerID);
      
    });
    
    return ( 
        <div> 
          <h2 >It is {date.toLocaleTimeString()}.</h2> 
        </div> 
      ); 
    
  }

  export default Clock;