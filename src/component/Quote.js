import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Quote = () => {
    const [ quote, setQUote ] = useState();
    const [ author, setAuthor ] = useState();

    const nextQuote = () => {
        Axios.get('https://api.quotable.io/random').then((res) => {
            setQUote(res.data.content)
            setAuthor(res.data.author)

            console.log(res.data.content)
            console.log(res.data.author)
        })
    }

    useEffect(() => {
        Axios.get('https://api.quotable.io/random').then((res) => {
            setQUote(res.data.content)
            setAuthor(res.data.author)

            console.log(res.data.content)
            console.log(res.data.author)
        })
    }, [])

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 2px brown',
        borderRadius: '10px',
        margin: '2rem',
        backgroundColor: 'lightslategray'
    }}>
        <h1 style={{
            textAlign: 'center',
            padding: '2rem'
        }}>{quote}</h1>
        <p>{author}</p>
        <button onClick={nextQuote}
        style={{
            marginBottom: '1rem',
            padding: '.5rem 2rem',
            cursor: 'pointer'
        }}>next</button>
    </div>
  )
}

export default Quote