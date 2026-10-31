
function calculateAverage(scores) {
    if (!scores || scores.length === 0) {
        return 0;
    }
    let total = 0;
    for (const score of scores) {
        total += score;
    }
    return total / scores.length;
}
function getGrade(score) {
    if (score >= 90 && score <= 100) {
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

scores = [87, 45, 66, 59, 70];
console.log("Average score:", calculateAverage(scores));
console.log("Grade for 100:", getGrade(100));
console.log("Is 101 valid?", isValidScore(101));
console.log("Formatted amount:", formatCedis(12456));
console.log("Age:", calculateAge(1990, 2023));

