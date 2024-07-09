import {useState} from "react";
import './Box.css';
import { useEffect } from "react";

const url="https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function box(){
const [quote,setQuote] = useState({text:"", author:""});
const [color,setColor] = useState({backgroundColor: "white"});

const handleChange = ()=>{
    setColor()
}
useEffect(()=>{
    fetchQuote();
}, []);

async function fetchQuote(){
    const response= await fetch(url);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
}
    return (
        <div id="quote-box" className="Box">
            <h2 id="text">"{quote.text}"</h2>
            <h3 id="author">-  {quote.author}</h3>
            <a href="https://twitter.com/intent/tweet" id="tweet-quote">Tweet</a>
            <button onClick={fetchQuote} id="new-quote" style={{color: "white"}}>new Quote</button>
        </div>
    )
}