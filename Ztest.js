// Syntax - nodejs

// app.js
// import randomQuote from './quote';
// let randomQuote = require('./quote');

// quote.js
// module.exports = randomQuote;

// -----------------------------------------------
// Returns a random quote

import fetch from 'cross-fetch';
import { randomIndex } from './random.js'

let url = 'https://type.fit/api/quotes';

let randomQuote = async function fetchARandomQuote(feed) {
    const response = await fetch(feed);
    const data = await response.json();
    const singleRandomQuote = data[randomIndex(data)];
    return singleRandomQuote;
}

// randomQuote(url).then(function(result){
//     console.log(result);
// }).catch(function(err){
//     console.log('Error is : ' + err);
// })

// -----------------------------------

// Test code

// fetchARandomQuote(url).then(function(result){
//     console.log(result);
// }).catch(function(err){
//     console.log('Error is : ' + err);
// })

// const fetch = require("node-fetch");
// import 'cross-fetch/polyfill';

// let randomQuote = function(){
//     return fetchARandomQuote(url);
// }

// let quote = fetchARandomQuote(url);
// console.log(quote);

// console.log(randomQuote());