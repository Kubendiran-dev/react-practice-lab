import React from 'react'

const Child = ({ increment }) => {

 console.log("child running");
    return (
        <>
            <h2>Child Component</h2>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default React.memo(Child)