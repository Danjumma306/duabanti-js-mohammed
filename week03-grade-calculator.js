let scores = [87,45,66,59,70];


function average(scores){
    let total = 0;
    for(const score of scores){
        total += score;
    }
    return total / scores.length;
}


function getGrade(score){

    if(score >= 90 &&  score <= 100){
        return "Grade A";
    }
    else if (scores >= 80){
        return "Grade B";
    }
    else if (scores >= 70 ){
        return "Grade C";
    }
    else if (scores >= 60 ){
        return "Grade D";
    }
    else if (scores >= 0){
        return "Grade F";
    }
    else {
        return "invalid score";
    }

}

function isValidScoresore(scores){
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
isValidScoresore(scores);


