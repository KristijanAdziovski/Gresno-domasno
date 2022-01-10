let broevi = [1,2,3,4,5,6,7,8,9,10,15,19,256,358];
let paren =2;
function findNumber(array,type){
    for(let i =0;i<array.length;i++){
        if(array[i]%type==0){
            console.log(`TOa se parni broevi ${array[i]}`);
        }
        else{
            console.log(`Toa se neparni broevi ${array[i]}`)
        }
        
    }
}
findNumber(broevi,paren)