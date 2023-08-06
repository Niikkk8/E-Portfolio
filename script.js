let isModalOpen = false
let contrastToggle = false

function toogleContrast(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal_overlay-loading')
    const success = document.querySelector('.modal_overlay-success')
    loading.classList += " modal_overlay-visible"
    emailjs
        .sendForm(
            'service_1sqm5at',
            'template_1pdfqc9',
            event.target,
            'txOgJb5589Z-naBt7'
        ).then(() => {
            loading.classList.remove("modal_overlay-visible")
            success.classList += " modal_overlay-visible"
        }).catch(() => {
            loading.classList.remove("modal_overlay-visible")
            alert(
                "The email servers are temporarily down, please contact me directly at shahniket643@gmail.com"
            )
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal-open")
    }
    isModalOpen = true
    document.body.classList += " modal-open"
}   