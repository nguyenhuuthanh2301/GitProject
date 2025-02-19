let physics = parseFloat(prompt("Nhập điểm Vật lý:"));
let chemistry = parseFloat(prompt("Nhập điểm Hóa học:"));
let biology = parseFloat(prompt("Nhập điểm Sinh học:"));
if (isNaN(physics) || isNaN(chemistry) || isNaN(biology)) {
    document.write("Vui lòng nhập số hợp lệ!");
} else {
    let total = physics + chemistry + biology;
    let average = total / 3;
    document.write("Tổng điểm: " + total + "<br/>");
    document.write("Điểm trung bình: " + average.toFixed(2));
}
