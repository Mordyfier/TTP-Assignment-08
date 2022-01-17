import React, {useState} from "react";

export default function Cell(props){
    const[color, changeColor] = useState("white")
    
    return(
        <td onClick={props.onClick} className="cell"></td>
    )
}