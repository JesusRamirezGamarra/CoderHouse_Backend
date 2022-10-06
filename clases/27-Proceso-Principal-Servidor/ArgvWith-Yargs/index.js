import yargs from "yargs";
///////////////////////////////////////////////////////////////////////////////
const yargInstance = yargs(process.argv.slice(2))
    .default({
        m:'prod',
        p:0,
        d:false
    })
    .alias({
        m:"MODE",
        p:"PORT",
        d:"DEBUG"
    })

    
console.log(yargInstance)
console.log(yargInstance.argv)
///////////////////////////////////////////////////////////////////////////////

// node index.js
    // YargsInstance {
    //   customScriptName: false,
    //   parsed: false,
    //   '$0': 'index.js',
    //   argv: [Getter]
    // }
    // {
    //     _: [],
    //     m: 'prod',
    //     MODE: 'prod',
    //     'M-o-d-e': 'prod',
    //     p: 0,
    //     PORT: 0,
    //     'P-o-r-t': 0,
    //     d: false,
    //     DEBUG: false,
    //     'D-e-b-u-g': false,
    //     '$0': 'index.js'
    //   }
// node index.js 1 2 3 -m dev -p 8080 -d
    // YargsInstance {
    //   customScriptName: false,
    //   parsed: false,
    //   '$0': 'index.js',
    //   argv: [Getter]
    // }
    // {
    //   _: [ 1, 2, 3 ],
    //   m: 'dev',
    //   MODE: 'dev',
    //   'M-o-d-e': 'dev',
    //   p: 8080,
    //   PORT: 8080,
    //   'P-o-r-t': 8080,
    //   d: false,
    //   DEBUG: false,
    //   'D-e-b-u-g': false,
    //   '$0': 'index.js'
    // }



