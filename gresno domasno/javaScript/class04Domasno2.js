let array=[2,3,5,6,9];
function suma(){
    let sum=array[0]+array[1]+array[2]+array[3]+array[4];
    console.log(sum);
}
suma()
function validateNumber(num){
    if(num%2==0){
        console.log(`The number ${num} is valid `);
    }
    else{
        console.log(`The number ${num} is not valid `);
    }
}
validateNumber(2)
validateNumber(3)
validateNumber(5)
validateNumber(6)
validateNumber(9)