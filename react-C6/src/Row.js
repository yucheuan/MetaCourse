import { Children, cloneElement } from "react"

export default function Row ({ children, spacing }) {
    const childStyle = {
        marginLeft: `${spacing}px`
    }

    return (
        <div>
            {Children.map(children, (child, index) => { //loop child element
                return cloneElement(child, { //element
                    style: {
                        ...child.props.style, //original style
                        ...(index > 0 ? childStyle : {}) //overwrite style
                    }
                })
            })}
        </div>
    )
}