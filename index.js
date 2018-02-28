function getFirstSelector(selector) {

  return document.querySelector(selector)
}

function nestedTarget() {

  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {

  var up = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < up.length; i++) {
      up[i].innerHTML = (parseInt(up[i].innerHTML) + n).toString()

  }


}

function deepestChild() {

  let lis = document.getElementById('grand-node');
  let nextLis = lis.children[0];

  while (nextLis != null) {
    lis = nextLis;
    nextLis = lis.children[0];
  }
  return lis;
}
