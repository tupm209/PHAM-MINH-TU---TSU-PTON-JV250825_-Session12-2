let num = Number(
  prompt("Hãy nhập vào 1 số bất kỳ xem có phải tuổi người không.")
);

while (num % 1 !== 0) {
  num = Number(prompt("Hãy nhập vào 1 số nguyên bất kỳ."));
}

if (num > 0 && num < 120) {
  alert(`${num} là số tuổi của người!`);
} else {
  alert(`${num} không phải là số tuổi của người!`);
}
