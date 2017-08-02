const catCard = (e) => {
  let tar = e.target;
  if (tar.style.height == "10em") {
    window.innerWidth>800?tar.style.height = "60em":tar.style.height = "30em"
  }
  else {
    tar.style.height = "10em"
  }
}
console.log(window.innerWidth);
const catArr = Array.from(document.querySelectorAll('.cat-card'))
catArr.forEach(cat => cat.addEventListener('click', catCard))
