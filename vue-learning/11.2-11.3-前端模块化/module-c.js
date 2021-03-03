import someFunc1,{flag} from './module-a.js'
import someFunc2 from './module-d.js'

if(flag){
  someFunc1();
}
someFunc2();
// import * as moduleA from './module-a.js';
//
// if(moduleA.flag){
//   moduleA.doPrintA();
//   let james = new moduleA.Player("james",35)
//   james.beBetter();
// }


// import { flag, doPrintA,Player } from './module-a.js';
//
// if(flag){
//   doPrintA();
//   let james = new Player("james",35)
//   james.beBetter();
// }


// let {flag,doPrintA} = require('module-a')