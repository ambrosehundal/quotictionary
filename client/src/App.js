import React, { useState, useEffect } from 'react'
import axios from 'axios';
import QuoteForm from './components/quoteform';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

const App = props => {
    useEffect(() => {
        axios.get('/api/quotes').then(res => setState(res.data))
    }, [])
    

const [quote, setState] = useState([])
console.log(quote);
return(
    <div>

    <QuoteForm/>

    <h4>Quotes collection</h4>
    
        <p> <h3>{quote.map(quotes => <div>

            <h4>{quotes.category}</h4>
            <p>{quotes.description}</p>
        
            
            
           
            </div>)}</h3></p>

       
    
    </div>

   




)


};

export default App;