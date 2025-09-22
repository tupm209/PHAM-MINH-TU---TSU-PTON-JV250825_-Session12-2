let a = Number(prompt("Hãy nhập độ dài cạnh a"));
while (a <= 0) {
  a = Number(prompt("Hãy nhập độ dài cạnh a của hình vuông lớn hơn 0!"));
}

let dienTichHv = Math.pow(a, 2);

alert(
  `Diện tích hình vuông với cạnh a bằng ${a} là ${dienTichHv}`
);
