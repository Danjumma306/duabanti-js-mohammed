let scores = [87,45,66,59,70];


function average(scores) {
    if (!scores || scores.length === 0) {
        return 0;
    }
    let total = 0;
    for (const score of scores) {
        total += score;
    }
    return total / scores.length;
}

function getGrade(score){

    if(score >= 90 &&  score <= 100){
        return "A";
    }
    else if (score  >= 80){
        return "B";
    }
    else if (score >= 70 ){
        return "C";
    }
    else if (score >= 60 ){
        return "D";
    }
    else if (score >= 0){
        return "F";
    }
    else {
        return "invalid score";
    }

}

function isValidScore(scores){
    for(let i = 0; i <scores.length; i++){
        if (scores[i] >= 0 && scores[i] <=100){
            console.log(`Valid score: ${scores[i]} --> ${getGrade(scores[i])}`);
        
    }
    else {
        console.log(`Invalid score: ${scores[i]}`);
    }
}
}

console.log(`Average: ${average(scores)}`);
isValidScore(scores);


