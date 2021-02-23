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
    
        <p> {JSON.stringify(quote)}</p>

       
    
    </div>

   




)


};

export default App;