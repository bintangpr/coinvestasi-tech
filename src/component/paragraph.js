import React from "react"
const Paragraph = (props)=>{
   const readArticle =  props.article.map((item, index) => {
    return index === props.article.length -1 ? 
        <p key={index} className="font-inter text-paragraph" > {item} </p> :
        <p key={index} className="font-inter text-paragraph" > {item} <br/><br/> </p>;
    
        
      });
      return (
        <div>
            {readArticle}
        </div>
      )
}

export default Paragraph