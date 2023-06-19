window.onload = function(){

    let itens = document.querySelectorAll('.item')
    let active = document.querySelector('.active')

    active.style.top = itens[0].offsetTop + 'px'

    itens.forEach((elem,index)=>{
        elem.addEventListener('click',e=>active.style.top = elem.offsetTop + 'px')
    })
}