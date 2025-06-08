export default function Intro(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};