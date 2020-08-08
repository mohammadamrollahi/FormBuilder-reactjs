import React from 'react'
import "./Question.scss"
function Question({question,handleNext,output,setoutput}) {
    const AddToOutput=(item)=>{
       
        setoutput([...output,{id:question.id,answer:item.key}])
    }
    return (
        <div>
            <p className="questionText"> {question.text}</p>
            
            <div className="optionButtonDiv" >
            {question.options.map(item=>
                <div className="optionButton" onClick={()=>{AddToOutput(item); handleNext()}} >
                    {item.text}
                    
                </div>
                )}
            </div>
        </div>
    )
}

export default Question
