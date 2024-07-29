/* let n1 = prompt('digite o primeiro número:')
let n2 = prompt('digite o segundo número:')
n1 = parseInt(n1)
n2 = parseInt(n2)
divisao = n1 / n2 
subtracao = n1 - n2
soma =  n1 + n2
multiplicacao =  n1 * n2
alert('a divisão é: ' + divisao)
alert('a soma é: ' + soma)
alert('a multiplicação é: ' + multiplicacao)
alert('e a subtração é: ' + subtracao) */
/* function calcularArea(altura, base) {
    return base * altura 
}
calcularArea()
 */
/* let userLogin = "";
let userPassword = "";
let userIsLogged = true;  */
/* 
userLogin = prompt('digite seu login: ')
userPassword = prompt('digite sua senha: ')

if(userLogin && userPassword!=""){
    alert('Logado com sucesso')
}
else {
    alert('Login negado, erro no usuário ou na senha.')
} */
/* userLogin = document.getElementById("username")
userPassword = document.getElementById("userPassword")
 */

/* let n = prompt('digite um número de 0 a 6')

if( n=== "0") {
    alert("domingo")
} */

/*  let n = Boolean

   switch(n) {
    case n != 0:
         alert(typeof(n))
    default :
         alert('digite um valor válido')
   } */
/*     let n = parseInt(prompt("digite um número: "))
    
    if(!isNaN(n)) {

      for(let i = 0 ; i <= 100; i++ ) {
    document.write(n + " x " + i + ": " + n * i + '<br>')
  }
}
else {
    alert('digite somente números')
} */

/*     let dado1 = parseInt(Math.random() * 6 + 1)
    let dado2 = parseInt(Math.random() * 6 + 1)
    let contador = 0

    while(dado1!== dado2) {
        contador++
        dado1 = parseInt(Math.random() * 6 + 1)
        dado2 = parseInt(Math.random() * 6 + 1)
    }
   document.write(dado1 + '<br>')
   document.write(dado2 + '<br>')
   document.write(contador + '<br>') */

   /*          let n = parseInt(prompt('digite um número'))

            let i = 2 */

         /*    while(i <= n) {
                console.log(i)
                i += 2
            } */
/*            do {
                     console.log(i)
            i+= 2
   
           }
           while (i<=n) */

 /*            let n = parseInt(prompt('digite um número: '))
                 
        if(!isNaN(n)) {
            for(i=0; i<=100; i++){
                document.write(n + " x " + i + " = " + n * i + "<br>")
                if(i%10 === 0) {
                    document.write("<hr>")
                }
            }
        }
        else {
            alert('digite apenas números')
        } */
/* 
            let ano = 1004;
      do {
        document.write(ano + '<br>');
        ano += 4;
      }
       while(ano<=2024); */

/*        let x = 1;
       while(x<=10) {
        if(x===5) {
            x++
            continue
        }
        document.write(x + "<br>")
        x++
       }
       document.write("fim do programa") */

/*        soma = dado1 + dado2;
       let vezes;
       
       while(true){
        let dado1 = parseInt(Math.random()*6)+1;
        let dado2 = parseInt(Math.random()*6)+1;
        document.write(dado1, dado2,vezes++);
       }
       if((dado1+dado2)%2===0){
        
       } */
       
/*        let numeros = [3,8,9,12,42,55]
       let numerosoma
        for(let i=0; i<numeros.length; i++){
            numero=parseInt(prompt("digite um número"))
            numerosoma=numeros[i] + numero
            document.write(numerosoma + '<br>')
       }  */
/*             numerossoma = numeros[0]
      for(let i=0; i<numeros.length;i++){
        numerosoma[0] += numeros[i]
      }
      document.write(numerossoma) */
    
 /*      let usuario = {}
      usuario.nome = prompt("Digite seu nome")
      usuario.email = prompt("Digite seu email")

      console.log(`o nome do usuário é: ${usuario.nome} e o seu email é: ${usuario.email}`)
      console.log(usuario) */

/*      document.getElementById("titulo").textContent = "titulo alterado" */

let data = new Date()
let dia = data.getDay()
let diaDeHoje

switch(dia) {
    case dia = 0 :
        diaDeHoje = "domingo"
    
    case dia = 1 :
        diaDeHoje = "segunda"
    
    case dia = 2 :
        diaDeHoje = "terca"
    
    case dia = 3 :
        alert("quarta")
    
    case dia = 4 :
        alert("quinta")
    
    case dia = 5 :
        alert("sexta")
    
    case dia = 6 :
        alert("sabado")
}
console.log(diaDeHoje)
