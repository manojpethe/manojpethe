console.log("Hello World!");
console.error("This is an error");
console.warn("This is an warning");
console.info("info");

var myJSON = {"COB":"20200426","data" : [{"name":"Manoj Pethe"}, {"name":"Madhura Pethe"}]};

iter = myJSON['data'].values();


console.log(myJSON.COB);

for( let i of iter){
    console.log(i.name);
}

function countnumbers(i){
    for(ctr = 0 ; ctr < i ; ctr++){
    console.log("Value of ctr is:"+ctr);
    }
}

//countnumbers(5);