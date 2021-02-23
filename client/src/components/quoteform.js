import React, { useState, useEffect } from 'react'


const QuoteForm = () => {
    const [quote, setQuote] = useState("")

    const [category, setCategory] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(quote);
        console.log(category);
    } 


    return (
        <form onSubmit={handleSubmit}>

        <p>
            Select a category:
            <input type="text" onChange={e => setCategory(e.target.value)}/>
        </p>

        <label>
            Enter your witty quote: 
            <input type="text" onChange={e => setQuote(e.target.value)}/>
        </label>

        
        
        
        <input type="submit" value="Submit" />
        
        
        </form>




    )
}


export default QuoteForm;

