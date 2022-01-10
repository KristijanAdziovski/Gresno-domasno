let year = +prompt("Vnesete kolku covecki godini ima vaseto kuce , za da gi doznaete negovite godini.");
function dogYear(){
    let kuceski = year*7;
    console.log(`Your dog's age is ${kuceski}. ${kuceski} is the calculate age`);
    console.log(`Dog have ${year} human year`);
    return kuceski ;

}
dogYear()