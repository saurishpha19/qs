'use strict';

var parse = require('./lib/parse');
var stringify = require('./lib/stringify');


let queryParams = {
    zetList: {
        pagination: {
            pageNumber: 1,
            perPage: 10
        },
        filter: {
            status: 'CLOSED'
        }
    },

}

console.log(queryParams);

let stringified = stringify(queryParams, {encode: false, depth: 10});
let parsed = parse(stringified);

console.log(stringified);
console.log(parsed);
