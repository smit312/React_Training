import React,{useState} from "react";

function Translate()
{
    var gujDictionary = {
        when : "ક્યારે",
        where : "જ્યાં" ,
        why : "શા માટે",
        whom : "જેમને" ,
        what : "શું",
        which : "જે",
        translate : "અનુવાદ કરો",
        i : "હું"
        
    };
    var weKnw = Object.keys(gujDictionary);
    // console.log(weKnw);
    const [meaning , storeData] = useState("");
    function onChangeHandaler(event){
        var userInput = event.target.value;
        var meaning = gujDictionary[userInput];
        if(meaning == undefined)
        {
            meaning = "sorry! , we don't know";
        }
        storeData(meaning)
    }
    function weKnwhandler(know){
        var meaning = gujDictionary[know];
        storeData(meaning);
    }
    return(
        <center>
            <h1>Welcome To The Translator</h1>
            <h2>Enter english word and Translate in gujrati</h2>
            <input onChange={onChangeHandaler} />
            <h2>{meaning}</h2>
            <h3>some word we know is ...</h3>
            {weKnw.map(function(know)
            {
                return(
                    <span 
                        onClick={() => weKnwhandler(know)}
                        style={{fontsize : "1.5rem", padding : "0.5rem" , cursor : "pointer"}}
                        key={know} >
                            {know}
                            {"     "}
                        </span>
                )
            })}
        </center>
    )

}
export default Translate;

