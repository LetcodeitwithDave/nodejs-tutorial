//CommonJS, every file is a module (by default)

const names =  require('./4-name')
const sayHi =  require('./5-utils')
console.log(names)


 sayHi(names.name1)
 sayHi(names.name2)
