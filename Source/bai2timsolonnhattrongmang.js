function kiemtra() {
    let input = document.getElementById("numbersInput").value;
    let numbers = input.split(",");
    let max = Number(numbers[0].trim());
    let index = 0;
    for (let i = 1; i < numbers.length; i++) {
        let num = Number(numbers[i].trim());
        if (num > max) {
            max = num;
            index = i;
        }
    }
    document.getElementById("result").textContent = "Số lớn nhất trong mảng là: " + max + " ở vị trí thứ " + index;
}