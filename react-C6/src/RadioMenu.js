import { useState } from "react"
import { RadioGroup, RadioOption} from "./Radio"

export default function RadioMenu () {
    const [selected, setSelected] = useState("")

    return (
        <div>
            <h2>How did you hear about Little Lemon?</h2>
            <RadioGroup onChange={setSelected} selected={selected}>
                <RadioOption value="socual_media">Social Media</RadioOption>
                <RadioOption value="friends">Friends</RadioOption>
                <RadioOption value="advertising">Advertising</RadioOption>
                <RadioOption value="other">Other</RadioOption>
            </RadioGroup>
            <button disabled={!selected}>Submit</button>
        </div>
    )
}