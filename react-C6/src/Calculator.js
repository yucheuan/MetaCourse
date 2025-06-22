import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'spend_$') return {money: state.money - 10}
    if (action.type === 'earn_$') return {money: state.money +10}
    return state //wrong_type -> do nothing (use previous state, instead of undefined)
}

export default function Calculator (){
    const initialState = {money: 100}
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type: 'spend_$'})}>Spend money</button>
                <button onClick={() => dispatch({type: 'earn_$'})}>Earn money</button>
            </div>
        </div>
    )
}