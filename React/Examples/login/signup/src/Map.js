import React from 'react'

const array = [
    {
        name:'ashok',
        age:25
    },
    {
        name:'hai',
        age:45
    },
    {
        name:'prakash',
        age:98
    }
];
const arr = [
    {
        name:'ashok',
        age:25
    },
    {
        name:'prakash',
        age:98
    }
];
export default function Map(){
array.forEach(element => {
    arr.forEach(elem=>{
    if(element.name !== elem.name){    
        console.log()
    }
})
});    
return <div>hello</div>
}