import React, { useState } from "react";
import faqData from "../data";


function AccordianT({SingleSelect , setSingleSelect , id, setId}) {
  

const HandleSelection = (elementId) => {
    if(SingleSelect){
        if(id.indexOf(elementId)){
            setId([elementId]);
        }
        else{
            setId([]);
        }
    }
    else{
        if(id.indexOf(elementId) !== -1){
            setId(id.filter((id) => id !== elementId));
        }
        else{
            setId([...id , elementId]);
        }
    }
}

  return (
    <div>
      <div>
        {faqData.map((element) => (
          <div id={element.id} onClick={() => HandleSelection(element.id)}>
            <h2 style={{color: "orange", marginBottom: "-10px"}}>{element.question}</h2>
            {
                (id.indexOf(element.id) !== -1) ? <p>Hide Answer -</p>
                :
                <p>Show Answer +</p>
            }
            {
                (id.indexOf(element.id) !== -1) ? <p style={{color: "green"}}>
                    {element.answer}
                </p>:
                <span></span>
            }
            {console.log(id)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordianT;
