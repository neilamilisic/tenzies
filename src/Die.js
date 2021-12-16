import React from "react"


export default function Die(props) {
const styles = { backgroundColor: props.die.stopped ? "#59E391" : "#FFFFFF"} 
    return(
        <div className="die" onClick={() => props.diceStop(props.die.id)} style={styles}>
            <p>{props.die.value}</p>
        </div>
    )
}