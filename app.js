import { randomQuote } from './quote.js'

let url = 'https://type.fit/api/quotes';

randomQuote(url).then(function(result){
    console.log(result);
}).catch(function(err){
    console.log('Error is : ' + err);
})