const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push('Ralph')
    console.log(cats)
};
function destructivelyPrependCat() {
    console.log(cats.unshift("Bob"))
};
function destructivelyRemoveLastCat() {
    console.log(cats.pop())
};
function destructivelyRemoveFirstCat() {
    console.log(cats.shift())
};
function appendCat() {
    let copyCats = [...cats, "Broom"]
    return copyCats
};
function prependCat() {
    let copyCats = ["Arnold" , ...cats]
    return copyCats
};
function removeLastCat() {
    
   let copyCats = [...cats.slice(0, cats.length -1)];
   return copyCats

};
function removeFirstCat() {
    let copyCats = [...cats.slice(1)]
    return copyCats
};