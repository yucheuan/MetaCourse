import { useState } from "react"

export default function Form (){
    const [name, setName] = useState("")
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("PLease provide a comment explaining why the experience was poor")
            return
        }

        setName("")
        setScore("10")
        setComment("")
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
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Score: {score}</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={score}
                        onChange={e => setScore(e.target.value)} 
                    />
                </div>
                <div>
                    <lable>Comment:</lable>
                    <textarea value={comment} onChange={e => setComment(e.target.value)}/>
                </div>
                <button disabled={!name} type="submit">
                    Submit
                </button>
            </fieldset>
        </form>
    )
}