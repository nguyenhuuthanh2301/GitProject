function calculateSum() {
    let input = document.getElementById("numbersInput").value;
    let numbers = input.split(",");
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let num = Number(numbers[i].trim());
        if (!isNaN(num)) {
            sum += num;
        }
    }
    document.getElementById("result").textContent = sum;
}