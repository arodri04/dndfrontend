import React, { Fragment, useEffect, useState } from "react"
import Axios from "axios"

import MainNav from "../MainNav"

function Races() {
    const [isLoading, setLoading] = useState(true);
    const [dwarf, setDwarf] = useState([]);
    const [elf, setElf] = useState([]);
    const [halfling, setHalfling] = useState([]);
    const [human, setHuman] = useState([]);
    const [dragonborn, setDragonborn] = useState([]);
    const [gnome, setGnome] = useState([]);
    const [halfElf, setHalfElf] = useState([]);
    const [halfOrc, setHalfOrc] = useState([]);
    const [tiefling, setTiefling] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async() => {
        await Axios.get('https://dndapi-4576af573829.herokuapp.com/races/Dwarf').then(({data}) => {
            let dwarf = data
            setDwarf(dwarf)

            
        });
        await Axios.get('https://dndapi-4576af573829.herokuapp.com/races/elf').then(({data}) => {
            let elf = data
            setElf(elf)

            
        });
        await Axios.get('https://dndapi-4576af573829.herokuapp.com/races/halfling').then(({data}) => {
            let halfling = data
            setHalfling(halfling)

            
        });
        await Axios.get('https://dndapi-4576af573829.herokuapp.com/races/human').then(({data}) => {
            let human = data
            setHuman(human)

            
        });
        await Axios.get('https://dndapi-4576af573829.herokuapp.com/races/dragonborn').then(({data}) => {
            let dragonborn = data
            setDragonborn(dragonborn)

            
        });
        await Axios.get('https://dndapi-4576af573829.herokuapp.com/races/gnome').then(({data}) => {
            let gnome = data
            setGnome(gnome)

            
        });
        await Axios.get('https://dndapi-4576af573829.herokuapp.com/races/half-elf').then(({data}) => {
            let halfElf = data
            setHalfElf(halfElf)

            
        });
        await Axios.get('https://dndapi-4576af573829.herokuapp.com/races/half-orc').then(({data}) => {
            let halfOrc = data
            setHalfOrc(halfOrc)

            
        });
        await Axios.get('https://dndapi-4576af573829.herokuapp.com/races/tiefling').then(({data}) => {
            let tiefling = data
            setTiefling(tiefling)
            setLoading(false)
            
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
            <p>{dwarf.name}</p>
            {dwarf.traits.content.map((trait) => <p>{trait}</p>)}
            <p>{elf.name}</p>
            {elf['Elf Traits'].content.map((trait) => <p>{trait}</p>)}
            <p>{halfling.name}</p>
            {halfling['Halfling Traits'].content.map((trait) => <p>{trait}</p>)}
            <p>{human.name}</p>
            {human['Human Traits'].content.map((trait) => <p>{trait}</p>)}
            <p>{dragonborn.name}</p>
            {dragonborn['Dragonborn Traits'].content.map((trait) => <p>{trait}</p>)}
            <p>{gnome.name}</p>
            {gnome['Gnome Traits'].content.map((trait) => <p>{trait}</p>)}
            <p>{halfElf.name}</p>
            {halfElf['Half-Elf Traits'].content.map((trait) => <p>{trait}</p>)}
            <p>{halfOrc.name}</p>
            {halfOrc['Half-Orc Traits'].content.map((trait) => <p>{trait}</p>)}
            <p>{tiefling.name}</p>
            {tiefling['Tiefling Traits'].content.map((trait) => <p>{trait}</p>)}
 
        </div>
    )
}

export default Races;