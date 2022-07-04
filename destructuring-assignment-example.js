// Ex1
let name=['Alpha', 'Beta', 'Gamma', 'Delta'];
let [firstname,secondname,...rest]=name;
console.log(firstname)
console.log(secondname)
console.log(rest)
let first,second;
[first, second] = [secondname,firstname];
console.log(first)
console.log(second)

//Ex2
let obj={
    x:21,
    y:30,
    z:15
}

const {x,y,z}=obj;
console.log(x);
console.log(y);
console.log(z);

//

let obj2={
    selection1 : {
        alpha:30,
        beta:31,
    },
    selection2 : {
        alpha: 40,
        beta: 41,
    }
}

let {selection1 : {alpha: alpha1, beta: beta1}}=obj2;
let {selection2 : {alpha: alpha2, beta: beta2}}=obj2;

console.log(alpha1,beta1);
console.log(alpha2,beta2);

