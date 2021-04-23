const btn = document.querySelectorAll('.faq-toggle')


btn.forEach( e => {
    
    e.addEventListener('click', ()=>{
            e.parentNode.classList.toggle('active')
        })
});



