import React, { useState } from 'react'
import classes from './roll-dice.module.scss'
// import dice1 from './../src/images/dice1.svg';
import { DiceFace1, DiceFace2, DiceFace3, DiceFace4, DiceFace5, DiceFace6 } from './SvgIcons'






function Dice() {



    const [diceToShowUserOne, setDiceToShowUserOne] = useState(0)
    const [diceToShowUserTwo, setDiceToShowUserTwo] = useState(0)
    const [isloading, setIsloading] = useState(true)
    const [userTurn, setUserTurn] = useState(1)

    const getMyDiceUserOne = () => {
        switch (diceToShowUserOne) {
            case 0: return <DiceFace1 className={classes.diceCss} />;
            case 1: return <DiceFace2 className={classes.diceCss} />;
            case 2: return <DiceFace3 className={classes.diceCss} />;
            case 3: return <DiceFace4 className={classes.diceCss} />;
            case 4: return <DiceFace5 className={classes.diceCss} />;
            case 5: return <DiceFace6 className={classes.diceCss} />;
        }
    }


    const getMyDiceUserTwo = () => {
        switch (diceToShowUserTwo) {
            case 0: return <DiceFace1 className={classes.diceCss} />;
            case 1: return <DiceFace2 className={classes.diceCss} />;
            case 2: return <DiceFace3 className={classes.diceCss} />;
            case 3: return <DiceFace4 className={classes.diceCss} />;
            case 4: return <DiceFace5 className={classes.diceCss} />;
            case 5: return <DiceFace6 className={classes.diceCss} />;
        }
    }



    const rollDice = () => {
        if (userTurn === 1) {
            setUserTurn(2)
            setIsloading(true)
            const myTime = setInterval(() => {
                setDiceToShowUserOne(Math.floor(Math.random() * 6))
            }, 100)
            setTimeout(() => {
                clearInterval(myTime)
            }, 2 * 1000)
        }

    }


    const rollDiceTwo = () => {
        if (userTurn === 2) {
            setUserTurn(1)
            const myTime = setInterval(() => {
                setDiceToShowUserTwo(Math.floor(Math.random() * 6))
            }, 100)
            setTimeout(() => {
                clearInterval(myTime)
                setIsloading(false)
            }, 2 * 1000)
        }


    }

    const startNewGame = () => {
        setDiceToShowUserOne(0)
        setDiceToShowUserTwo(0)
        setIsloading(true)
        setUserTurn(1)
    }




    return (
        <div className={classes.mainPageSection}>

            <div className={classes.contentSection}>

                <div className={classes.headingSection}>

                    Dice game  &#127922;

                </div>

                <div className={classes.playerSection}>

                    <div className={classes.player}>
                        user 1
                    </div>

                    <div className={classes.player}>
                        user 2
                    </div>


                </div>

                <div className={classes.diceSection}>

                    <div className={classes.userOneDiceSection}>

                        <div className={classes.diceFace}>

                            {getMyDiceUserOne()}
                        </div>

                        <div className={classes.userOneRollDiceBtn}>
                            <button onClick={rollDice}>Roll The Dice </button>
                        </div>

                    </div>

                    <div className={classes.userTwoDiceSection}>

                        <div className={classes.diceFace}>
                            {getMyDiceUserTwo()}
                        </div>

                        <div className={classes.userTwoRollDiceBtn}>
                            <button onClick={rollDiceTwo}>Roll The Dice </button>
                        </div>

                    </div>
                </div>

                {!isloading && <div className={classes.winnerSectioin}>
                    {(diceToShowUserOne === diceToShowUserTwo) ? "Match Tie" : <p>The winner is user <b>{diceToShowUserOne > diceToShowUserTwo ? 1 : 2}</b> with <b>{Math.abs(diceToShowUserOne - diceToShowUserTwo)} points </b>  </p>}
                </div>}

                <div className={classes.startNewGame}>
                    <button onClick={startNewGame}>Start New Game</button>
                </div>

            </div>

        </div>
    )
}


export default Dice;