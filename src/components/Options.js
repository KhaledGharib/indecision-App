import React from "react";
import Option from "./Option";

const Options=(props)=>
  (
    <div>
    <div className="widget-header">
    <h3 className="widget-header__title">Your Options</h3>
      <button
      className="button button__link"
      onClick={props.handleDeleteOptions}

      >
      Remove All</button>
    </div>
      {props.options.length===0 && <p className="widget-mes">Please add an option to started!</p>}
      {
        props.options.map((option,index) =>(
         <Option
           key={option} 
           optionText={option}
           count={index+1}
           handleDeleteOption={props.handleDeleteOption}
         />)
         )
      }
    </div>
  )
  

  export default Options
