/*1) Observe o trecho de código abaixo: 

 	int INDICE = 13, SOMA = 0, K = 0; 

 	enquanto K < INDICE faça 

	{ 

		K = K + 1; 

		SOMA = SOMA + K; 

	} 

 	imprimir(SOMA); 

  

Ao final do processamento, qual será o valor da variável SOMA? */


const indice = 13;
var soma = 0;
var k = 0;

while(k < indice) {

    k = k + 1; 

	soma = soma + k;

};

document.getElementById("id1").innerHTML = soma;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

  

IMPORTANTE:  

	Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

function sequenciaFibonacci() {
	
    const sequencia = [0, 1];
    let n = document.getElementById("id2Input").value;
    let y = 0;
    let resultBool = false;

	for (let x = 2; x < n + 1; x += 1) {

		sequencia.push(sequencia[x - 2] + sequencia[x - 1]);

        y = sequencia[x - 2] + sequencia[x - 1];

        if(y == n){
            resultBool = true;
        }   

	}

    if(resultBool){
        document.getElementById("id2").innerHTML = "Valor pertence à sequência de Fibonacci.";
    }
    else{
        document.getElementById("id2").innerHTML = "Valor não pertence à sequência de Fibonacci.";
    }
    
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*3) Descubra a lógica e complete o próximo elemento:  

   

a) 1, 3, 5, 7, _9_ 

b) 2, 4, 8, 16, 32, 64, _128_  

c) 0, 1, 4, 9, 16, 25, 36, _49_  

d) 4, 16, 36, 64, _100_  

e) 1, 1, 2, 3, 5, 8, _13_  

f) 2, 10, 12, 16, 17, 18, 19, _200_  */

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?  

   

IMPORTANTE:  

a)            Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.  

b)           Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)  

c)            Explique como chegou no resultado. 


Determinando o encontro dos veículos, definí o carro como referência inicial e o caminhão então como 100km:

x1 = v1.t

x2 = 100km - v2t

O tempo de viajem do caminhão considerando que ele teria viajado direto:

td = 100 km / 80km/h = 1,25h

Agora preciso ver quanto tempo se perde nos pedágios e a velocidade do caminhão:

t = 1,25h + 0,17h => 1,42h
v2 = 100 / 1,42 => 70,6km/h

Juntando os dados:

t = x1.v1;

t = (x2 - 100km) / -v2;

x1 = x2;

então:

x = v1.100km / (v1 + v2) = (100km/h.100km) / (110km/h + 70,6km/h)

x = 60,9km/h
*/

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*5) Escreva um programa que inverta os caracteres de um string. 

  
IMPORTANTE: 

	a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 

	b) Evite usar funções prontas, como, por exemplo, reverse; */

let newStr = "";

function inverterString() {

    let newStr = "";
    let m = document.getElementById("id5Input").value;

    for (var i = m.length - 1; i >= 0; i--) { 
        newStr = newStr + m[i];
    }

    document.getElementById("id5").innerHTML = newStr;
}