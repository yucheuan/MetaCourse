import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'spend_$') return {money: state.money - 10}
    if (action.type === 'earn_$') return {money: state.money +10}
    return state
}

export default function Calculator (){
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={dispatch({type: 'spend_$'})}>Spend $</button>
            <button onClick={dispatch({type: 'earn_$'})}>Earn $</button>
        </div>
    )
}