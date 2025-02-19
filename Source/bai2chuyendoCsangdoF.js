let celsius = parseFloat(prompt("Nhập nhiệt độ (°C):"));
let fahrenheit = (celsius / 5) * 9 + 32;
document.write(celsius + "°C = " + fahrenheit.toFixed(2) + "°F");
