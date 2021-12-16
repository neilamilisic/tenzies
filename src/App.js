import React from "react"
import Dice from "./Dice"

export default function App() {

    function getRandom(){
        return  (Math.floor(Math.random()*(7-1)+1))
        }

    function createDice(){
        let arr = []
        for (let i = 0; i < 10; i++) {
            const newDie = {value: getRandom(),
                            id: 1+i,
                            stopped: false } 
            arr.push(newDie)
        } 
        return arr
    }

    const [dice, setDice] = React.useState(() =>
        createDice()
    )
    const [tenzies, setTenzies] = React.useState(() =>
        false
    )

    React.useEffect(() => {
        const firstValue = dice[0].value
        const areTheSameValue = dice.every(die => die.value===firstValue)
        const areStopped = dice.every(die => die.stopped===true)

        if (areTheSameValue && areStopped) { setTenzies(true) }

    },[dice])

    function diceStop(id){
        
        setDice(prevDice => prevDice.map(el => { 
            return el.id===id ? {...el, stopped: !el.stopped} :  el
        }) )
    }

   
    function rollDiceHandler () {
        if (!tenzies) {
            setDice(prev => prev.map(el => el.stopped ? el : {...el, value: getRandom()}))
        }
        else {
            setDice(createDice())
            setTenzies(false)
        }
    }
  
  
    return(
        <div className="app-container-border">
            <div className="app-container">
                <h1>Tenzies Game</h1>
                <p>Roll until all dice are the same. Click each die to freeze it as its current value between rolls.</p>
                <Dice dice={dice} diceStop={diceStop}/>
                <button className="roll-dice" onClick={rollDiceHandler}>{tenzies ? "New Game" : "Roll"}</button>
            </div>
        </div>
    )
}