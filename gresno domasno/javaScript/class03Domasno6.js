let money = +prompt("Vnesete kolku pari imate na vasata smetka");
let bankomat =+prompt("Vnesete kolku pari sakate da izvadite");
let vkupno=money-bankomat;
function atm(){
    
    if(money<bankomat){
        console.log("Nemate dovolno pari na vasata smetka");

    }
    else{
      
        console.log(`Vie izvadivte ${bankomat}denari i vi ostanaa uste ${vkupno} denari `);
        
    }
    return vkupno;
}
atm()