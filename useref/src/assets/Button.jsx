import React, { useEffect, useRef, useState } from 'react'


const Button = () => {

  const txtref = useRef(null)

  const boxref = useRef(null)

  const inputRef = useRef(null)

  const emailRef = useRef(null)

  const resultRef = useRef(null);


  const changetxt = () => {

    txtref.current.innerText = "Vanakkam Chennai"

    boxref.current.style.backgroundColor = "blue"

  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitclick = (e) => {

    e.preventDefault()

    
    const name = inputRef.current.value;
    const email = emailRef.current.value;

    resultRef.current.innerText = `Name: ${name}, Email: ${email}`;

    alert(resultRef.current.innerText)
  }

  return (
    <>
      <div ref={boxref} className='bg-amber-400'>
        <h1 ref={txtref}>Namaste Chennai</h1>
        <button onClick={changetxt}>Translate</button>
        <br />
        <form onSubmit={submitclick}>
          <label htmlFor="name">Name:</label>
          <input ref={inputRef} type="text" placeholder="Type here..." />
          <br />
          <label htmlFor="email">Email:</label>
          <input ref={emailRef} type="text" placeholder="Type here..." />
          <p ref={resultRef}></p>
          <button>Submit</button>
        </form>
        
      </div>
    </>
  )
}

export default Button