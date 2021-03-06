
// timeTable();

// iTimeTable(7);

// iTimeTable2(3, 9);


function timeTable() {
    let multipler = 3;
    for(let start = 1; start <= 12; ++start){
        console.log(start + " X "+ multipler+" = " + (start * multipler));
    }    
}

function iTimeTable(multipler) {
    for(let start = 1; start <= 12; ++start){
        console.log(start + " X "+ multipler+" = " + (start * multipler));
    }    
}

function iTimeTable2(multipler, stop) {
    for(let start = 1; start <= stop; ++start){
        console.log(start + " X "+ multipler+" = " + (start * multipler));
    }    
}