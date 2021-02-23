import React, { useState, useEffect } from 'react'


const QuoteForm = () => {
    const [quote, setQuote] = useState("")

    const [category, setCategory] = useState("")

    const handleSubmit = (evt) => {
        let quote_dict = {
            "category": category,
            "description": quote
        };
        
        fetch('http://localhost:8000/api/quotes', {
            method: 'POST',
            body: JSON.stringify(quote_dict),
            headers: {
                'Content-Type': 'application/json'                    
            
            }
            }).then(function(response){
                console.log(response);
                console.log(JSON.stringify(quote_dict));
                return response.json();
            });
        evt.preventDefault();
      
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

