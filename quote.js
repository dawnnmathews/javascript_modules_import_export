import fetch from 'cross-fetch';
import { randomIndex } from './random.js'

let randomQuote = async function fetchARandomQuote(feed) {
    const response = await fetch(feed);
    const data = await response.json();
    const singleRandomQuote = data[randomIndex(data)];
    return singleRandomQuote;
}

export { randomQuote };