import React, { useState } from "react";
// var count = 0 ;
function Examplehook ()
{
    
    const [count , setCount] = useState(0);
    function Like()
    {
        
       var newsetCount = count + 1;
       setCount(newsetCount);
       
    }
    function dislike()
    {
        var disCount = count - 1 ;
        if(disCount == 0)
        {
            document.write("you reach your limit");
        }
        setCount(disCount)
       

    }
    return(
        <div>
            <center>
            <p>{count} </p>
            <button onClick={Like}>like me</button><br/><br/>
            <button onClick={dislike}>Dislike me </button>
            </center>
        </div>
    )
}
export default Examplehook;