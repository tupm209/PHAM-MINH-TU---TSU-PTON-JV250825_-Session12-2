alert("Cho phương trình bậc 1 ax + b = 0 (a và b khác 0).");

let a = Number(prompt("Hãy nhập số a khác 0 !"));
while (a === 0) {
  a = Number(prompt("Hãy nhập số a khác 0 !"));
}

let b = Number(prompt("Hãy nhập số b khác 0 !"));
while (b === 0) {
  b = Number(prompt("Hãy nhập số b khác 0 !"));
}

let x = -b / a;

alert(`Nghiệm x có giá trị là ${x} !`);
