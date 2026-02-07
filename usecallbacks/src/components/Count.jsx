import React, { useCallback, useState } from 'react'
import Child from './Child'

const Count = () => {

    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState("light")

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    console.log("parent running");

    return (
        <div style={{
            background: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
            minHeight: "100vh",
            padding: "20px"
        }}>
            <h1>Count: {count}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>

            <Child increment={increment} />
        </div>
    )
}

export default Count
