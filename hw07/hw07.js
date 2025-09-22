alert("Hãy nhập 3 số a, b, c để tạo một phương trình bậc 2 và tìm x!");

let a = Number(prompt("Hãy nhập số a. (a khác 0)"));
while (a === 0) {
  a = Number(prompt("Hãy nhập số a khác 0 !"));
}

let b = Number(prompt("Hãy nhập số b."));
let c = Number(prompt("Hãy nhập số c."));
let delta = Math.pow(b, 2) - 4 * a * c;
let x1, x2;

if (delta > 0) {
  x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(1);
  x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(1);
  alert(`Nghiệm x thứ nhất có giá trị là ${x1} 
  Nghiệm x thứ hai có giá trị là ${x2}.`);
} else if (delta === 0) {
  x1 = -b / (2 * a);
  x2 === x1;
  alert(`Hai nghiệm có giá trị chung là ${x1}.`);
} else {
  alert("Phương trình vô nghiệm!");
}
