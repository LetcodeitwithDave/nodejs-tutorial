//CommonJS, every file is a module (by default)

// Core modules 
//  #https -> Launch a server, send request
//  #https -> Launch a SSl server
//  #fs
//  #path
//  #os

const names =  require('./4-name')
const sayHi =  require('./5-utils')
console.log(names)


 sayHi(names.name1)
 sayHi(names.name2)
