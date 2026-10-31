// const score = process.argv.slice(2);
const score = [87, 45, 66, 59, 70];
function calculateAverage(numbers){
    if (numbers.length === 0) {
        return 0;
    }
    
    let total = 0;
    for ( const n of score){
        total += n;
    }
    return total / score.length;
}

function getGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}


function isValidScore(score) {
    return typeof score === 'number' && score >= 0 && score <= 100;
}

function formatCedis(amount){
    return `GHS ${amount.toFixed(2)}`;
}

function calculateAge(birthYear, currentYear){
    return currentYear - birthYear;
}


console.log("Average score:", calculateAverage(score));
console.log("Grade for 100:", getGrade(100));
console.log("Is 101 valid?", isValidScore(101));
console.log("Formatted amount:", formatCedis(12456));
console.log("Age:", calculateAge(1990, 2023));

