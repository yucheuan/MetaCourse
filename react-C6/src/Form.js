import { useState } from "react"

export default function Form (props){
    const [formData, setFormData] = useState({name: "", comment: "", score: "10"}) //state object

    function changeHandler (e) {
        setFormData({ ...formData, [e.target.name]: e.target.value}) //use name to dynamic target element
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Number(formData.score) <= 5 && formData.comment.length <= 10) {
            alert("PLease provide a comment explaining why the experience was poor")
            return
        }

        props.onAdd(formData) //acumulate a feedback list
        setFormData({name: "", comment: "", score: "10"}) //reset user input
        console.log("Form Submitted!")
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        name="name" //use name to dynamic target element
                        placeholder="Name"
                        value={formData.name} //display variable
                        onChange={changeHandler} //rerender disply
                    />
                </div>
                <div>
                    <label>Score: {formData.score}</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        name="score"
                        value={formData.score} 
                        onChange={changeHandler} 
                    />
                </div>
                <div>
                    <lable htmlFor="comment">Comment:</lable>
                    <textarea name="comment" placeholder="Share with us" value={formData.comment} onChange={changeHandler}/>
                </div>
                <button disabled={!formData.name} type="submit">
                    Submit
                </button>
            </fieldset>
        </form>
    )
}

export function ListOfFeedback (props) {
    return (
        <div>
            <ul>
                {props.allFeedback.map((f) => (
                    <li key={f.name}>
                        <span>{f.name}: My expereince is {f.score}/10 with comment- {f.comment}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}