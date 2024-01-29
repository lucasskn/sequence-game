let botao = document.getElementById('restartID')
let startButton = document.getElementById('start')
let keys = ["A","S","D","Q","W","E","A","S","D","Q","W","E"]
keys.length = 12
let sequence = []


let random = keys.slice().sort(() => Math.floor(Math.random() - 0.5))
console.log(random);

let paragrafo;

const container = document.getElementById('wrapper')

let listItem
let lista

for(const item of random) {

  lista = document.createElement('ul')
  listItem = document.createElement('li')
  listItem.textContent = item
  lista.appendChild(listItem)
  container.appendChild(lista)

}


/* function restart() {
  sequence = [];
  item = keys.slice().sort(() => Math.floor(Math.random() - 0.5))

  const elementosDoJogo = document.querySelectorAll('ul');
  elementosDoJogo.forEach(elemento => {
    elemento.classList.remove('success', 'failed');
  });

  setTimeout(() => {
    batata.classList.remove("hide")
    batata2.classList.add("hide")
  },1000)
  console.log(sequence);
  console.log(random);
} */

console.log(sequence);

let wrapper = document.getElementById("wrapper")
let completo = document.getElementById("completo")

const minhaLista = document.getElementById("wrapper") 

function cliquei(event){
  const tecla = event.key.toUpperCase()

  const acertou = JSON.stringify(sequence) === JSON.stringify(random)
  const errou = JSON.stringify(sequence) != JSON.stringify(random)

  if(random[0] !== tecla) {
    console.log("erro");
/*     for(let i = 0; i < sequence.length; i++) {
      if(sequence[i] !== tecla) {
        const posErrada = sequence.length
        minhaLista.children[posErrada].classList.add("failed")
        if(sequence.length == 8) {
          break
        }
      }
    }
/*     setTimeout(() => {
      location.reload()
    },1000) */
    const posErrada = sequence.length
    minhaLista.children[posErrada].classList.add("failed")
/*     if(random == 0) {
      location.reload()
    } */

  } else {
    console.log("certo");
    sequence.push(tecla)
    random.shift(tecla)
    console.log(sequence);
    console.log(random);

    const posCorreta = sequence.length - 1;

    minhaLista.children[posCorreta].classList.add("success")
  }

/*   for(let i = 0; i <= sequence.length; i++) {
    if(sequence[i] === tecla) {
      minhaLista.children[i].classList.add("success")
    } else if(sequence[i] !== tecla){
      minhaLista.children[i].classList.add("failed")
    }
  } */

  
  if(sequence.length == 8) {

    console.log("parabéns!");
    setTimeout(() => {
      wrapper.classList.add("hide")
      completo.classList.remove("hide")
      botao.classList.remove("hide")

    },1000)
  }
}
const loadTimeout = document.getElementById("load")


function restart() {
  const timeOut = document.getElementById("timeOut")
  timeOut.classList.remove("hide")
  wrapper.classList.add("hide")
  loadTimeout.classList.add("hide")

  setTimeout(() => {location.reload()},2000)
}

function start() {
  const botaum = document.getElementById('start')
  loadTimeout.classList.add("animationStart")
  botaum.classList.add("hide")
  wrapper.classList.remove("hide")
  loadTimeout.classList.remove("hide")
  completo.classList.add("hide")

  document.addEventListener("keydown",cliquei)
  setTimeout(() => {restart()},5000)
}

botao.addEventListener("click", restart)
startButton.addEventListener("click", start)

