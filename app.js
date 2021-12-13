// 이벤트 처리하기 연습과제 6
const cursorImg = document.getElementById('cursor-container')

function moveCursor(e){
    console.log(e.clientX, e.clientY)
    const mouseX = e.clientX 
    const mouseY = e.clientY 
    cursorImg.style.left = mouseX + 'px'
    cursorImg.style.top = mouseY + 'px'
}

// window.addEventListener('mousemove', moveCursor)

// 이벤트 처리하기 연습과제 7
const modalWindow = document.querySelector('.modal-window')
const openBtn = document.getElementById('open-modal')

function openModal(){
    modalWindow.classList.add('show')
}
openBtn.addEventListener('click', openModal)

// 이벤트 처리하기 연습과제 8
const closeBtn = document.querySelector('#footer button')

function closeModal(){
    modalWindow.classList.remove('show')
}

closeBtn.addEventListener('click', closeModal)

// 이벤트 처리하기 연습과제 9
const screenMode = document.getElementById('screen-mode')
const circleBtn = document.querySelector('.circle-btn')

function changeMode(){
    console.log('move circle', circleBtn)
    circleBtn.classList.toggle('move-circle')
    document.body.classList.toggle('night-mode')
}
screenMode.addEventListener('click', changeMode)