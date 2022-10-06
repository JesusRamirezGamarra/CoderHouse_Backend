import yargs from "yargs";
///////////////////////////////////////////////////////////////////////////////
const yargInstance = yargs(process.argv.slice(2)).default({
    m:'prod',
    p:0,
    d:false
}).alias({
    m:"MODE",
    p:"PORT",
    d:"DEBUG"
})
const {
    MODE,
    PORT,
    DEBUG,
    _
} = yargInstance.argv;

const config = {
    mode: MODE,
    port: PORT,
    debug:DEBUG,
    others: _
}

    
console.log(yargInstance)
console.log(yargInstance.argv)
///////////////////////////////////////////////////////////////////////////////


// node indexV2.js 1 2 3 -m dev -p 8080 -d
    // YargsInstance {
    // customScriptName: false,
    // parsed: {
    //     aliases: {
    //     help: [],
    //     version: [],
    //     m: [Array],
    //     MODE: [Array],
    //     'M-o-d-e': [Array],
    //     p: [Array],
    //     PORT: [Array],
    //     'P-o-r-t': [Array],
    //     d: [Array],
    //     DEBUG: [Array],
    //     'D-e-b-u-g': [Array]
    //     },
    //     argv: {
    //     _: [Array],
    //     m: 'dev',
    //     MODE: 'dev',
    //     'M-o-d-e': 'dev',
    //     p: 8080,
    //     PORT: 8080,
    //     'P-o-r-t': 8080,
    //     d: false,
    //     DEBUG: false,
    //     'D-e-b-u-g': false,
    //     '$0': 'indexV2.js'
    //     },
    //     configuration: {
    //     'boolean-negation': true,
    //     'camel-case-expansion': true,
    //     'combine-arrays': false,
    //     'dot-notation': true,
    //     'duplicate-arguments-array': true,
    //     'flatten-duplicate-arrays': true,
    //     'greedy-arrays': true,
    //     'halt-at-non-option': false,
    //     'nargs-eats-options': false,
    //     'negation-prefix': 'no-',
    //     'parse-numbers': true,
    //     'parse-positional-numbers': false,
    //     'populate--': true,
    //     'set-placeholder-key': false,
    //     'short-option-groups': true,
    //     'strip-aliased': false,
    //     'strip-dashed': false,
    //     'unknown-options-as-args': false
    //     },
    //     defaulted: {},
    //     error: null,
    //     newAliases: { 'M-o-d-e': true, 'P-o-r-t': true, 'D-e-b-u-g': true }
    // },
    // '$0': 'indexV2.js',
    // argv: [Getter]
    // }
    // {
    // _: [ 1, 2, 3 ],
    // m: 'dev',
    // MODE: 'dev',
    // 'M-o-d-e': 'dev',
    // p: 8080,
    // PORT: 8080,
    // 'P-o-r-t': 8080,
    // d: false,
    // DEBUG: false,
    // 'D-e-b-u-g': false,
    // '$0': 'indexV2.js'
    // }

