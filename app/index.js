 const person = {
    name:'chenlan',
    age:23
}

const queue = new Set();

const observe = fn => queue.add(fn);

function first () {
    console.log('我是第一个执行');
}
function second (){
    console.log('我是第二个执行');
}
observe(first);
observe(second);

const observable = obj =>new Proxy(obj,{
    set (obj,name,value) {
        //执行默认行为
         Reflect.set(person,name,value)
        //执行代理行为
         queue.forEach(value => {
            value();
         });
         return true
    }
});


const name = observable(person);
name.name = '123123';

