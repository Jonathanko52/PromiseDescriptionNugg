const { getAll } = require('./logic');
async function promiseTest(){
        try{
            const result = await getAll()
            console.log("RESULT", result)
            return result
        } catch(error) {
            console.log("ERROR", error)
        }
    }

promiseTest()

/*
This is a part of a CLI I created for another company that would be inappropriate for me to
share in full, but this should be enough to illustrate what promises are.

Javascript is a single threaded language. When you make an asynchronous call, it does not, by default,
wait for the results of that call before moving on to the next line of code. Strictly speaking these
aren't errors, so Javascript just runs with it, trying to run the rest of the code and evaluating
that piece of code as undefined. This makes an  asynchronous function either give the wrong information,
or cause another error later on.

Promises instruct javascript to wait for the response before moving on to the next line, using the .then
keyword. In the logic page, I have a fetch AJAX request, which returns a promise. I have it pull 
information from a page, THEN convert the value into an array of wed addresses, THEN make a fetch request 
to each address in that array, wait for the responses, make comparisons according to the company's 
sorting algorithm, THEN return that information in the form of an array with the addresses that pass
 their sorting algorithm.
*/
