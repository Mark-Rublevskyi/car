document.addEventListener('click', function(el) {
    const tgt = el.target;
    if(tgt.classList.contains('btn')) {
        document.querySelector(tgt.dataset.modal).classList.add('active');
    } else if(tgt.classList.contains('overlay') || tgt.classList.contains('close')){
        tgt.closest('.modal-window').classList.remove('active');
    }
})