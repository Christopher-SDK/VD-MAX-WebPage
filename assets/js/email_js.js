/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    contactMessageEmergent = document.getElementById('contact-message-emergent')
const sendEmail = (e) => {
    e.preventDefault()

    //check if the field has a value
    if (contactMessage.value === '' || contactEmail.value === '' || contactSubject.value === '') {
        //Add and remove color
        contactMessageEmergent.classList.remove('color-blue')
        contactMessageEmergent.classList.add('color-red')

        //Show message
        contactMessageEmergent.textContent = 'Write all the input fields'
        //Remove message after five seconds
        setTimeout(() => {
            contactMessageEmergent.textContent = ''
        }, 3000)
    } else {
        //serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_hx6zblm', 'template_ez43wqq', '#contact-form', 'pSavSp3qlEOm-YLG_')
            .then(() => {
                contactMessageEmergent.classList.add('color-blue')
                contactMessageEmergent.textContent = 'Message sent'
                //Remove message after five seconds
                setTimeout(() => {
                    contactMessageEmergent.textContent = ''
                }, 5000)
            }, (error) => {
                alert('Something has failed, please check your internet connection', error)
            })
        //To clear the input field
        contactSubject.value = ''
        contactEmail.value = ''
        contactMessage.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)
