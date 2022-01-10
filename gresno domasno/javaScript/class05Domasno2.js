let ime=["Kristijan" , "Jana" , "Stefan" , "Toma"];
let prezime = ["Adziovski" , "Stojanovska" , "Stefanovski", "Nikolovski"];
function imePrezime(name,lastname){
    let nova=[];
    for(let i=0;i<name.length;i++){
        nova[i]=(`${i+1}.${name[i]} ${lastname[i]}`);
        
    }
    
    return nova;
}
console.log(`Toa se : ${imePrezime(ime,prezime)}`);

