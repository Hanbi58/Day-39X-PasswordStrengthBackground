const pswIpt = document.getElementById("password");
const bgImg = document.querySelector(".background");
pswIpt.addEventListener("input", function () {
  updateBg(this.value.trim());
});

function updateBg(str) {
  let pxnum = 100;
  const arr = str.split("").filter((item) => item != " ");
  arr.length > 7 && (pxnum -= 25);
  arr.some((cha) => isNaN(+cha) && cha === cha.toUpperCase()) && (pxnum -= 25);
  arr.some((cha) => isNaN(+cha) && cha === cha.toLowerCase()) && (pxnum -= 25);
  arr.some((cha) => !isNaN(+cha)) && (pxnum -= 25);
  bgImg.style.filter = `blur(${pxnum}px)`;
  console.log(pxnum);
}
