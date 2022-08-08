// https://www.programiz.com/javascript/regex#:~:text=In%20JavaScript%2C%20you%20can%20use,search()%20%2C%20and%20split()%20.&text=Executes%20a%20search%20for%20a,returns%20an%20array%20of%20information.


const string = 'Find me';
let pattern = /me/;
let regex = '';
let  result =''
// search if the pattern is in string variable
result = string.search(pattern);
console.log(result); // 5

// replace the character with another character
const string1 = 'Find me';
result = string1.replace(pattern, 'found you'); // Find found you
console.log(result); // Find found you

// splitting strings into array elements
let text = " Hello world! '";
regex = /\s/g;
result = text.match(regex);
console.log(result); 

regex = /[\s,]+/g;
result = 'Hello world! '.split(regex);
console.log(result); // ['Hello', 'world!', '']

// // // // // // Definition and Usage
// // // // // // The \s metacharacter matches whitespace character.
// // // // // // Whitespace characters can be:

// // // // // //     A space character
// // // // // //     A tab character
// // // // // //     A carriage return character
// // // // // //     A new line character
// // // // // //     A vertical tab character
// // // // // //     A form feed character



// searching the phone number pattern
regex = /(\d{3})\D(\d{3})-(\d{4})/g;
result = regex.exec('My phone number is: 555 123-4567.');
console.log(`regex.exec(string) : `,result); // ["555 123-4567", "555", "123", "4567"]

result = regex.test('My phone number is: 555 123-4567.');
console.log(`regex.test(string) : `,result); // false

result = 'My phone number is: 555 123-4567.'.match(regex);
console.log(` string.match(regex) : `,result); // [ '555 123-4567' ]

result = 'My phone number is: 555 123-4567.'.matchAll(regex);
console.log(` string.matchAll(regex) : `,result); // Object [RegExp String Iterator] {}

result = 'My phone number is: 555 123-4567.'.search(regex);
console.log(` string.search(regex) : `,result); // 20

result = 'My phone number is: 555 123-4567.'.replace(regex,'978-111-558');
console.log(` string.replace(regex) : `,result); // My phone number is: 978-111-558.

result = 'My phone number is: 555 123-4567.'.split(regex,2);
console.log(` string.split(regex) : `,result); // 'My phone number is: ', '555' ]



// Method	Description
// exec()	Executes a search for a match in a string and returns an array of information. It returns null on a mismatch.
// test()	Tests for a match in a string and returns true or false.
// match()	Returns an array containing all the matches. It returns null on a mismatch.
// matchAll()	Returns an iterator containing all of the matches.
// search()	Tests for a match in a string and returns the index of the match. It returns -1 if the search fails.
// replace()	Searches for a match in a string and replaces the matched substring with a replacement substring.
// split()	Break a string into an array of substrings.


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split

class RegExpCustom extends RegExp {
    [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map(x => `(${x})`);
}
}

console.log('2016-01-02'.split(new RegExpCustom('-')));
// expected output: Array ["(2016)", "(01)", "(02)"]

console.log('2016-01-02'.split(new RegExp('-')));
// expected output: Array ["2016", "01", "02"]


console.log(`Direct call`)

regex = /-/g;
let str = '2016-01-02';
result = regex[Symbol.split](str);
console.log(result);  // ["2016", "01", "02"]

console.log(`Using @@split in subclasses`)


class MyRegExp extends RegExp {
    [Symbol.split](str, limit) {
        let result = RegExp.prototype[Symbol.split].call(this, str, limit);
        //return result.map((x) => "(" + x + ")");
        return result.map((x)=> `( ${x} )`);
    }
}

regex = new MyRegExp('-');
str = '2016-01-02';
result = str.split(regex); // String.prototype.split calls re[@@split].
console.log(result); // ["(2016)", "(01)", "(02)"]


// https://regexr.com/