import minimist from "minimist";

///////////////////////////////////////////////////////////////////////////////
const args = minimist(process.argv.slice(2));
console.log(args)
///////////////////////////////////////////////////////////////////////////////
// node index.js
    // { _: [] }
// node index.js 1 2 3 a 4
    // { _: [ 1, 2, 3, 'a', 4 ] }
// node index.js -v -y
    // { _: [], v: true, y: true }
// node index.js -v 2
    // { _: [], v: 2 }
// node index.js -v 
    // { _: [], v: true }
// node index.js -version
    // {
    //   _: [],
    //   v: true,
    //   e: true,
    //   r: true,
    //   s: true,
    //   i: true,
    //   o: true,
    //   n: true
    // }    
// node index.js -version 2
    // { _: [], v: true, e: true, r: true, s: true, i: true, o: true, n: 2 }
// node index.js --version
    // { _: [], version: true }
// node index.js --version false
    // { _: [], version: 'false' }


