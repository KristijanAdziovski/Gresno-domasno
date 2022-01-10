let a=[3,5,6,8,11];
function minimum(najmal){
    let i=0;
    let min=Infinity;
    while(i<najmal.length){
        if(najmal[i]<min){
            min=najmal[i];
        }
        i++;
    }
    return min;
}
let najmalo=minimum(a);
console.log(najmalo);
function maksimum(najgolem){
    let i=0;
    let max=-Infinity;
    while(i<najgolem.length){
        if(najgolem[i]>max)
        max=najgolem[i];
        i++;
    }
    return max;
}
let najgolemo=maksimum(a);
console.log(najgolemo)

function suma(sum){
    let i=0;
    let zbir=0;
    while(i<sum.length){
        zbir=zbir+sum[i];
        i++;
        
    }
    return zbir;
}
let sumata = suma(a);
console.log(sumata);
function zaedno(a,b){
    
    let sobiranje=0;
    sobiranje =a+b;
    return sobiranje;
}
let abc=zaedno(najgolemo,najmalo);
console.log(abc);


