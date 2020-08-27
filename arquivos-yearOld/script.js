function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var forano = document.getElementById('txtano')
  var res = document.querySelector('msg')
}

if (forano.value.length == 0 || forano.value > ano) {
  alert(`[Erro] Verifique os dados e tente novamente!`)
} else {

}