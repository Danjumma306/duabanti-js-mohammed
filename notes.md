## Week 02(converter)

## What I built
I built a unit converter that handles some currency, distance and temperature.
I used the .toFixed() function to give the output of the conversion 2 decimal places.
I converted the type from string to number because the .toFixed() function gives a string output.

## What got me stuck
I was not sure whether to use const or let for my variables even though I used let and it was working but I wanted to do the right thing.

## Did I use AI, and how
I used AI to review my variable declaration and it explained that it would be better to use const so I made the changes accordingly.

## week 03(grade calculator)

## What I built
I built a grade calculator that takes an array of scores [87,45,66,59,70]. I made an average() function to calculate the total and average, a getGrade() function to convert a score to Grade A-F, and an isValidScore() function to check if scores are between 0-100.

## What got me stuck
I got stuck on my getGrade function. I was looping over score.length but score was a single number not an array, so it wasn't working. My grade ranges also overlapped (50 was both D and F) and I had gaps like 89.5. 

## Did I use AI, and how
I used Meta AI to review my code. I uploaded a screenshot of my code and asked for a code review. It explained the bugs in average and getGrade and why console.log(average) was printing the function instead of the result. I fixed the logic myself based on the feedback.