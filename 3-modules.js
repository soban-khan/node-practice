//assign require to a variable
let names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')

require('./7-mind-grenade')
//destructuring while requiring
let {
    john,
    max
} = require('./4-names')

sayHi(names.john)
sayHi(names.max)