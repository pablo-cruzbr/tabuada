function tabuada() {
  let num = document.getElementById ('txtn')
  let tab = document.getElementById('seltab')
  
  // Condicional
  //Se num for um valor  igual == a 0:
  if (num.value.length == 0 ) {
    window.alert ('Por favor digite um numero !')
 
  } else {
    let n = Number(num.value)

    // A tabuada irá começar com 1
    //Variável
    let c = 1

    //Limpar o conteúdo ao adicionar um novo
    tab.innerHTML = ''

    // Laço de Repetição WHILE - criando a execução de repetição da tabuada de 1 a 10
    //Condição
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      tab.appendChild(item)
      
      //Incremento
      c++
    }
  }
}