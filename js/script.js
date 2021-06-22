let nome = document.querySelector('#nome')
let sobrenome = document.querySelector('#sobrenome')
let email = document.querySelector('#email')

let nomeOk = false
let sobrenomeOk = false
let emailOk = false

let mapa = document.querySelector('#mapa')
let foto = document.querySelector('#foto')
let foto2 = document.querySelector('#foto2')

function validaNome() {
   let txtNome = document.querySelector('#nome')
   if (nome.value.length < 3) {
      nome.innerHTML = 'Nome Inválido'
      nome.style.border = '2px solid red'
   }else {
      nome.innerHTML = 'Nome Válido'
      nome.style.border = '2px solid green'
      nomeOk = true
   }
}

function validaSobrenome() {
    let txtSobrenome = document.querySelector('#sobrenome')
    if (sobrenome.value.length < 3) {
        sobrenome.innerHTML = 'Sobrenome Inválido'
        sobrenome.style.border = '2px solid red'
    }else {
        sobrenome.innerHTML = 'Sobrenome Válido'
        sobrenome.style.border = '2px solid green'
        sobrenomenomeOk = true
    }
 }

function validaEmail() {
   let txtEmail = document.querySelector('#email') 

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
      txtEmail.innerHTML = 'E-mail inválido'
      email.style.border = '2px solid red' 
   } else {
      txtEmail.innerHTML = 'E-mail válido'
      email.style.border = '2px solid green'
      emailOk = true
   }
}

function enviar() {
   if (nomeOk == true && emailOk == true && sobrenomeOk == true) {
      alert ('Formulário enviado com sucesso!')
   } else {
      alert ('Preencha o formulário corretamente antes de enviar...')
   }
}

function mapaZoom() {
   mapa.style.transition = '0.8s'
   mapa.style.width = '800px'
   mapa.style.height = '500px'
}

function mapaNormal() {
    mapa.style.transition = '1s'
   mapa.style.width = '400px'
   mapa.style.height = '250px'
}

function fotoZoom(){
    foto.style.transition = '0.2s'
    foto.style.padding = '1rem'
}
function fotoNormal(){
    foto.style.transition = '0.2s'
    foto.style.padding = '0.1rem'
}

function fotoZoom2(){
    foto2.style.transition = '0.2s'
    foto2.style.padding = '1rem'
}
function fotoNormal2(){
    foto2.style.transition = '0.2s'
    foto2.style.padding = '0.1rem'
}