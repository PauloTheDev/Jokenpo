//=======================CAPTURAS || CAPTURES====================\\
    const img1 = document.querySelector('#img-player-1');
    const img2 = document.querySelector('#img-player-2');
    const img3 = document.querySelector('#img-player-3');

    const imgMachine1 = document.querySelector('#machine-img-1');
    const imgMachine2 = document.querySelector('#machine-img-2');
    const imgMachine3 = document.querySelector('#machine-img-3');

    const arrowLeft = document.querySelector('#arrow-left');
    const arrowRight = document.querySelector('#arrow-right');
    const statusGame = document.querySelector('#status');

    const playerImageArray = [img1,img2,img3];
    const machineImageArray = [imgMachine1, imgMachine2, imgMachine3]; 
    
    //img1 = papel 
    //img2 = pedra
    //img3 = tesoura

    const btn = document.querySelector('button');

//======================FUNÇÕES || FUNCTIONS====================\\
function random(limit){
    return Math.floor(Math.random() * limit)
}

function winCombinations(player, machine){
    
    if(player === 2 && machine === 0){
        statusGame.innerHTML = 'VENCEU!'
        statusGame.classList.remove('text-red-600')
        statusGame.classList.add('text-green-600')
    }
    else if(player === 0 && machine === 1){
        statusGame.innerHTML = 'VENCEU!'
        statusGame.classList.remove('text-red-600')
        statusGame.classList.add('text-green-600')
    }

    else if(player === 1 && machine === 2){
        statusGame.innerHTML = 'VENCEU!'
        statusGame.classList.remove('text-red-600')
        statusGame.classList.add('text-green-600')
    }

    else if(machine === 0 && player === 2){
        statusGame.innerHTML = 'PERDEU!'
        statusGame.classList.remove('text-yellow-400')
        statusGame.classList.remove('text-green-600')
        statusGame.classList.add('text-red-600')
    }
    else if(machine === 2 && player === 0){
        statusGame.innerHTML = 'PERDEU!'
        statusGame.classList.remove('text-yellow-400')
        statusGame.classList.remove('text-green-600')
        statusGame.classList.add('text-red-600')
    }
    else if(machine === 0 && player === 1){
        statusGame.innerHTML = 'PERDEU!'
        statusGame.classList.remove('text-yellow-400')
        statusGame.classList.remove('text-green-600')
        statusGame.classList.add('text-red-600')
    }
    else if(machine === 1 && player === 2){
        statusGame.innerHTML = 'PERDEU!'
        statusGame.classList.remove('text-yellow-400')
        statusGame.classList.remove('text-green-600')
        statusGame.classList.add('text-red-600')
    }

    else if(machine === player){
        statusGame.innerHTML = 'EMPATE!'
        statusGame.classList.remove('text-green-600')
        statusGame.classList.add('text-yellow-400')
    }

  
}





//===========================SELETOR || SELECTORS========================\\

let position = 0

arrowRight.addEventListener('click', ()=>{
    if(position < 2){
        playerImageArray[position].classList.toggle('hidden');
        position++
        playerImageArray[position].classList.toggle('hidden');
    }
} //avança na seleção
)

arrowLeft.addEventListener('click', ()=>{
    if(position > 0){
        playerImageArray[position].classList.toggle('hidden');
        position--
        playerImageArray[position].classList.toggle('hidden');
    }
}) //volta na seleção

//MACHINE
machineImageArray[random(2)].classList.toggle('hidden');

//JOGADAS

btn.addEventListener("click", ()=>{
    const machinePlaying = random(3);

    machineImageArray.forEach((img, pos) => {
        if(pos === machinePlaying){
            machineImageArray[pos].classList.remove('hidden')
            //se a posição for a mesma da jogada da máquina, a imagem deixa de ser invisivel
        } else{
            machineImageArray[pos].classList.add('hidden')
            //se não, todas ficarão invisiveis exceto a que estiver na posição da máquina
        }
        
    })




    winCombinations(position, machinePlaying);
    console.log(machinePlaying);

})