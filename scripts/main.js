const entries = [
{
    id: 1,
    date: undefined,
    concept: undefined,
    mood: undefined,
    entry: undefined
},

{
    id: 2,
    date: undefined,
    concept: undefined,
    mood: undefined,
    entry: undefined
},

{
    id: 3,
    date: undefined,
    concept: undefined,
    mood: undefined,
    entry: undefined
},

{
    id: 4,
    date: undefined,
    concept: undefined,
    mood: undefined,
    entry: undefined
},

{
    id: 5,
    date: undefined,
    concept: undefined,
    mood: undefined,
    entry: undefined
},

{
    id: 6,
    date: undefined,
    concept: undefined,
    mood: undefined,
    entry: undefined
},

{
    id: 7,
    date: undefined,
    concept: undefined,
    mood: undefined,
    entry: undefined
}

    
]

// 
//console.log(entries);

/*
console.log(entries[0]);
console.log(entries[1]);
console.log(entries[2]);
console.log(entries[3]);
console.log(entries[4]);
console.log(entries[5]);
console.log(entries[6]);
*/

// 1st loop
/* 
for (const each of entries) {
    console.log();
}
*/

// 2nd loop
/*
for (const each of entries) {
    console.log(entries.date)
}
*/

// 3rd loop

for (const each of entries) {
    if (each.id%2 !== 0) {
        console.log(each);
    }
    else {
        console.log('not an odd')
    }
}
