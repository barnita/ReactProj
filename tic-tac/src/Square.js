import React from 'react';

function Square(props){
   console.log(props.onClick);
   debugger;
        return(
           <button className="square" onClick={props.onClick}>
           {props.value}
           </button>
        );
   
}

export default Square;