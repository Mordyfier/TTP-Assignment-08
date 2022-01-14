import React from 'react'


export default function TableRow(props){
   
    return(
        <tr className='row'>{props.cells}</tr>
    )
}