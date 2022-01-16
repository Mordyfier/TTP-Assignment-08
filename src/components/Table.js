import react from "react";
import App from '../App'
export default function Table(props){
    

    return(
        <div className="grid">
            <table>{props.populate}</table>
        </div>
    )
}