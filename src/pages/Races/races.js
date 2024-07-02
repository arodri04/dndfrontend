import React, { Fragment, useEffect, useState } from "react"
import Axios from "axios"

import MainNav from "../MainNav"

function Races() {
    const [isLoading, setLoading] = useState(true);
    const [race, setRace] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async() => {
        await Axios.get('https://dndapi-4576af573829.herokuapp.com/races/Dwarf').then(({data}) => {
            let race = data
            setRace(race)
            setLoading(false);
            console.log(race.traits.content)
        });
        
    }
    if (isLoading) {
        return <div>Loading...</div>
    }



    // for (let thing in race['Dwarf Traits'].content) {
    //     console.log(race['Dwarf Traits'].content[thing])
    // }


    // Axios.get("https://dndapi-4576af573829.herokuapp.com/races/Dwarf").then((res) => {
    //     let race = res.data;
    //     console.log(race.name);
    // });

    return (
        
        <div>
            <MainNav />
            <p>{race.name}</p>
            {race.traits.content.map((trait) => <p>{trait}</p>)}
 
        </div>
    )
}

export default Races;