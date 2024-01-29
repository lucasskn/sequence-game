let botao = document.getElementById('restartID')
let startButton = document.getElementById('start')
let errorMessage = document.getElementById('errorMessage')
let keys = ["A","S","D","Q","W","E","A","S","D","Q","W","E"]
keys.length = 12
let sequence = []


let random = keys.slice().sort(() => Math.floor(Math.random() - 0.5))
console.log(random);

let paragrafo;

const container = document.getElementById('wrapper')

let listItem
let lista

let timeoutID

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
const timeOut = document.getElementById("timeOut")

const minhaLista = document.getElementById("wrapper") 

function start() {
  const botaum = document.getElementById('start')
  loadTimeout.classList.add("animationStart")
  botaum.classList.add("hide")
  wrapper.classList.remove("hide")
  loadTimeout.classList.remove("hide")
  completo.classList.add("hide")

  document.addEventListener("keydown",cliquei)
  timeoutID = setTimeout(() => {
    timeOut.classList.remove("hide")
    wrapper.classList.add("hide")
    loadTimeout.classList.add("hide")
    errorMessage.innerHTML = "timeout."
    botao.classList.remove("hide")
  },5000)
}

function cliquei(event){
  const tecla = event.key.toUpperCase()

  const acertou = JSON.stringify(sequence) === JSON.stringify(random)
  const errou = JSON.stringify(sequence) != JSON.stringify(random)

  if(random[0] !== tecla) {
    console.log("erro");
    const posErrada = sequence.length
    minhaLista.children[posErrada].classList.add("failed")
    clearTimeout(timeoutID)

    setTimeout(() => {
      timeOut.classList.remove("hide")
      wrapper.classList.add("hide")
      loadTimeout.classList.add("hide")
      errorMessage.innerHTML = "sequence failed."
      botao.classList.remove("hide")
    },400)

  } else {
    console.log("certo");
    sequence.push(tecla)
    random.shift(tecla)
    console.log(sequence);
    console.log(random);

    const posCorreta = sequence.length - 1;

    minhaLista.children[posCorreta].classList.add("success")
  }
  
  if(sequence.length == 12) {
    setTimeout(() => {
      wrapper.classList.add("hide")
      completo.classList.remove("hide")
      botao.classList.remove("hide")
      timeOut.classList.add("hide")
      loadTimeout.classList.add("hide")

      
    },400)
    clearTimeout(timeoutID)
  }
}
const loadTimeout = document.getElementById("load")


function restart() {



  setTimeout(() => {location.reload()},1000)
}



botao.addEventListener("click", restart)
startButton.addEventListener("click", start)


/*     for(let i = 0; i < sequence.length; i++) { OUTRA ALTERNATIVA PARA CHECAR O ERRO
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