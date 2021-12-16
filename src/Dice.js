import React from "react"
import Die from "./Die"

export default function Dice(props){


    const arr1 = []

        for (let i = 0; i < 5; i++) {
            arr1.push(<Die die={props.dice[i]} diceStop={props.diceStop}/>)
        } 

        const arr2 = []

        for (let i = 5; i < 10; i++) {
            arr2.push(<Die die={props.dice[i]} diceStop={props.diceStop}/>)
        } 
    

    
    return(
        
            <div className="dice-container">
                <div>
                    {arr1}
                </div>
                <div>
                    {arr2}
                </div>
            </div>
        
    )
}