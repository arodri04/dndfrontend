import React from "react"
import Axios from "axios"
import MainNav from "../MainNav"

function Spells() {
            Axios.get("https://dndapi-4576af573829.herokuapp.com/classes/barbarian").then((res) => {
            console.log(res.data);
        });
    
    
    
    return (
        <div className="container">
            <MainNav />
            <p>This is Spells</p>
        </div>
    );
}

export default Spells;