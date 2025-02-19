let year = parseInt(prompt("Enter a year"));

if (isNaN(year)) {
    alert("Please enter a valid number!");
} else {
    let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    alert(year + (isLeapYear ? " is a leap year" : " is NOT a leap year"));
}
