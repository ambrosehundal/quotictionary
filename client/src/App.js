import React, { useState, useEffect } from 'react'
import axios from 'axios';


const App = props => {
    useEffect(() => {
        axios.get('/quotes').then(res => setState(res.data))
    }, [])
    

const [quote, setState] = useState([])
console.log(quote);
return(
    <div>

    <h4>Quotes collection</h4>
        <p> {JSON.stringify(quote)}</p>
    
    </div>




)


};

export default App;