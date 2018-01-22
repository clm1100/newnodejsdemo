// const EventEmitter = require('events');

// let emitter = new EventEmitter();

// emitter.on('myEvent', () => {
//   console.log('hi 1');
// });

// emitter.on('myEvent', () => {
//   console.log('hi 2');
// });

// emitter.emit('myEvent');



// const EventEmitter = require('events');

// let emitter = new EventEmitter();
// let count = 0;
// emitter.on('myEvent', () => {
//   console.log('hi',count++);
//   emitter.emit('myEvent');
// });

// emitter.emit('myEvent');


const EventEmitter = require('events');

// let emitter = new EventEmitter();
// let count = 0
// function sth () {
  
//     console.log('hi',count++);
//   }
// emitter.on('myEvent', sth);
// emitter.on('myEvent', sth);
// emitter.emit('myEvent');

// for(key in emitter){
//     if(typeof emitter[key]=="function"){
//         console.log(key)
//     }
// }
class objemiiter extends EventEmitter{
    constructor(){
        super()
    }
    show(){
        console.log("tttt")
    }
}
let att = new objemiiter();
att.on('hh',function(){console.log("eee")});
att.emit('hh');
att.show();
