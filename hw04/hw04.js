let a = Number(prompt("Hãy nhập độ dài cạnh a!"));
while (a <= 0) {
  a = Number(prompt("Hãy nhập độ dài cạnh a của hình chữ nhật lớn hơn 0!"));
}

let b = Number(prompt("Hãy nhập độ dài cạnh b!"));
while (b <= 0) {
  b = Number(prompt("Hãy nhập độ dài cạnh b của hình chữ nhật lớn hơn 0!"));
}

let dienTich = a * b;

alert(`Diện tích hình chữ nhật với cạnh a và b là ${dienTich}!`);
