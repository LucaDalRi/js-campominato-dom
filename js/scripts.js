const bottoneDom = document.getElementById("bottone-sul-dom");

const containerCelle = document.getElementById('container-celle');

let counterCelle = 0;

const numeriGenerati = [];

const arrayBombe = []; 

// aspetto il click sul bottone e creo un numero da 1 a 100 per 16 volte che però non sia già nell`array delle bombe

bottoneDom.addEventListener('click' , numeroUnoSedici);

function numeroUnoSedici() {


    let randomNumberSedici = getRandomNumber(1, 100);
    
    for (let i = 0; arrayBombe.length < 16; i++) {

        randomNumberSedici = getRandomNumber(1, 100);

        if (arrayBombe.includes(randomNumberSedici)) {

            randomNumberSedici = getRandomNumber(1, 100);

        }

        arrayBombe.push(randomNumberSedici);

    }

    console.log('Numeri bombe ' + arrayBombe);
}


// genero un numero random da min a max 

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// al click appendo x celle al containerCelle (il mio div container per le celle) chiamando la funzione creaNuovaCella 

bottoneDom.addEventListener('click' , generaCelle);

function generaCelle () {

    containerCelle.innerHTML = '';  
    
    for (let i = 0; i < 100; i++) {
        
        const nuovaCella = creaNuovaCella();

        containerCelle.append(nuovaCella);
        
    }
    
};

// creo elemento 'div' e aggiungo la classe 'cella' e do un listener alla cella che mi stampa il numero interno dell cella, se contiene la classe clicked la toglie, se non ha la 
// classe clicked la aggiungo 

function creaNuovaCella() {
    
    const cella = document.createElement('div');

    cella.classList.add('cella');
    
    cella.addEventListener('click' ,
    
        function () {

            if(this.classList.contains('clicked')){
                this.classList.remove('clicked');
            }
            else{
                this.classList.add('clicked');
            }

        });

        // check se il numero bomba(arrayBomba) corrisponde al numero cliccato dal giocatore
        

        cella.addEventListener('click' ,

        
        function () {

            counterCelle++

            document.getElementById('punteggio').innerHTML = counterCelle;
            
            for (let i = 0; i < 16; i++) {
                
                if (arrayBombe[i] == cella.innerText) {
                    
                    cella.classList.add('rosso');
                    
                    alert('Hai perso!');
                    
                    break;
                    
                }
                else if (counterCelle > 15) {
                    
                    alert('Hai vinto!');

                    break
                    
                }
                else {

                    cella.classList.add('verde');

                }
            }
            
        });

    // genero un numero random, ma se il numero generato è già incluso nel mio array numeriGenerati continuo a creare un numero finchè non saranno tutti diversi

    let randomNumber = getRandomNumber(1, 100);

    while(numeriGenerati.includes(randomNumber)){
        randomNumber = getRandomNumber(1, 100);
    };

    //pusho il numero generato nell`array numeriGenerati

    numeriGenerati.push(randomNumber);
    
    cella.append(randomNumber);

    // se il mio numero random è pari aggiungo alla cella la classe even

    if(randomNumber % 2 == 0){
        cella.classList.add('even');
    }

    // se non è pari aggiungo la classe dispari

    else {
        cella.classList.add('odd');
    }

    return cella;
    
};

bottoneDom.addEventListener('click' , selettoreCelle);

// pusha 16 numeri casuali non uguali nell`array delle celle selezionate per avere la bomba

function selettoreCelle (){
    
    celleSelezionate = [];
    
    for (i = 0; i < 16; i++)

    celleSelezionate.push(getRandomNumber(1, 100));
    
    if (celleSelezionate.includes(getRandomNumber(1, 100))) {

        celleSelezionate = getRandomNumber(1, 100);

    }

}










