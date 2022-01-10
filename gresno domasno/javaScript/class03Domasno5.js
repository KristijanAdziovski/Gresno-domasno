function calculateAge(birthyear , currentyear){
    let godini = currentyear - birthyear;
    console.log(`You are ${godini} years old`);
    return godini;
}
calculateAge(1993,2021)
calculateAge(1978,2023)
calculateAge(1796, 1879)
function bonus(rodenden){
let date =  new Date().getFullYear() - rodenden;
console.log(`Ti imas ${date} godini`);
return date;
}
bonus(1993);