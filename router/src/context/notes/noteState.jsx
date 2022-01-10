import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
     const s1 = {
         "name" :"smit",
         "age" : "21"
     }
     const [state, setState] = useState(s1);
     const update = () => {
         setTimeout(() => {
                setState({
                    "name" :"thakkar",
                    "age" : "21"
                })
         },1000)
     }
    return(
        
        <NoteContext.Provider value={{state , update}}>
            {props.children}
        </NoteContext.Provider> 
        
    )
}
export default NoteState;