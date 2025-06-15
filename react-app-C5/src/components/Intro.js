export default function Intro({
    toggleBoolean=!false,
    math=(10 + 20) / 3,
    str='just another string'}) {

    console.log("toggleBoolean is:", toggleBoolean); // 👈 this will print in your browser console

    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is: {toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{math}</em></p>
            <p>The value of the str prop is: <em>{str}</em></p>
        </div>
    );
};