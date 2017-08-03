const catCard = (e) => {
  let tar;
  e.target.localName == "article"?tar = e.target:e.target.parentNode.localName== "article"?tar = e.target.parentNode:tar = e.target.parentNode.parentNode;
  if (tar.style.height > "10em"){
    tar.style.height = "10em"
  }
  else {
    window.innerWidth>800?tar.style.height = "50em":tar.style.height = "30em";

  }
  tar.children['1'].classList.toggle('cat-left')
  tar.children['2'].classList.toggle('cat-right')
  tar.firstElementChild.classList.toggle('cat-invi')
}

const catArr = Array.from(document.querySelectorAll('.cat-card'))
catArr.forEach(cat => cat.addEventListener('click', catCard))
