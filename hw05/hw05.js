let a = Number(prompt("Hãy nhập độ dài cạnh kề a của tam giác vuông!"));
while (a <= 0) {
  a = Number(prompt("Hãy nhập độ dài cạnh kề a của tam giác vuông lớn hơn 0!"));
}

let b = Number(prompt("Hãy nhập độ dài cạnh kề b của tam giác vuông!"));
while (b <= 0) {
  b = Number(prompt("Hãy nhập độ dài cạnh kề b của tam giác vuông lớn hơn 0!"));
}

let dienTich = (a * b) / 2;

alert(`Diện tích của tam giác vuông với 2 cạnh kề a và b là ${dienTich}`);
