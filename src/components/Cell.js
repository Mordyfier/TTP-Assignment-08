import React, {useState} from "react";

export default function Cell(props){
    return(
        <td onClick={props.onClick} className="cell"></td>
    )
}