function kiemtra() {
    let input = document.getElementById("numbersInput").value;
    let numbers = input.split(",");
    let number = document.getElementById("number").value;
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == number) {
            count++;
        }
    }
    document.getElementById("result").textContent = "Số " + number + " xuất hiện " + count + " lần trong mảng";
}