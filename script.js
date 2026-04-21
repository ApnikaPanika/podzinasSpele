const poga = document.querySelector('.js-poga');
const bilde = document.querySelector('img');
const audio = document.querySelector('audio')

const buttonTexts = ['Nespied šeit','Tu esi zābaks', 'Lēns kā gliemezis, haha', "Netiec līdz?", "Pacenties bik labāk :P" ]
let textIndex = 0
let movesTillScare = 6

poga.addEventListener('mouseover', function(){
    if(movesTillScare === 0){
        bilde.style.display = "block";
        audio.currentTime = 0
        audio.play()
    }

    movesTillScare = movesTillScare - 1

    poga.innerHTML = buttonTexts[textIndex];

    if(textIndex === buttonTexts.length - 1) {
        textIndex = 0 
    } else {
        textIndex = textIndex + 1 
    }

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const buttonWidth = poga.offsetWidth
    const buttonHeight = poga.offsetHeight

    const maxX = windowWidth - buttonWidth
    const maxY = windowHeight - buttonHeight

    const randomX = Math.random() * maxX
    const randomY = Math.random() * maxY

    poga.style.left = randomX + 'px'
    poga.style.top = `${randomY}px`
})

