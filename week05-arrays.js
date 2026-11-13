
const students = [
    {name: "Kofi",score: 49},
    {name: "Ama",score: 78},
    {name: "Kojo",score: 90},
    {name: "Esi",score: 65},
    {name: "Yaw",score: 35},
    {name: "Abena",score: 82},
    {name: "Kwame",score: 45},
    {name: "Akosua",score: 100}
];


function getNames(students){
    return students.map(student => student.name);

}
console.log(getNames(students));

function getPassing(students){
    return students.filter(student => student.score >= 50);
    
}
console.log(getPassing(students));

function getTotal(students){
    if (students.length === 0){
        return 0;
    }
    let total = students.reduce((total, student) => total + student.score, 0);
    return total;
}
console.log(getTotal(students));
 
function getTopScorer(students){
    if (students === 0){
        return 0;
    }
    let highest = students[0].score;
    for (const student of students){
        if (student.score > highest){
            highest = student.score;
        }
    }
    return students.find((student) => student.score === highest); 
}
console.log(getTopScorer(students));

function rank(student){
    return students.slice().sort((a,b) => b.score - a.score);

}
console.log(rank(students));