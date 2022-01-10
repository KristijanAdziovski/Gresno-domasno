let a=[1,2,3,4,5,2,3,4,2,2,2,7,2];
let num=2;
function findNumber(array,number){
    var n = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] == number){
            n++;
            
        }
        
    }
    console.log(`There are ${n} occurrences of number ${num} in the arrays`);
    return n;
}
 let aaa =findNumber(a,num);
 


