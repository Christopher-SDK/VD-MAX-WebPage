/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message')
// contactMessageEmergent = document.getElementById('contact-message-emergent')
const sendEmail = (e) => {
    e.preventDefault()

    //check if the field has a value
    if (contactMessage.value === '' || contactEmail.value === '' || contactSubject.value === '') {
        // //Add and remove color
        // contactMessageEmergent.classList.remove('color-blue')
        // contactMessageEmergent.classList.add('color-red')

        // //Show message
        // contactMessageEmergent.textContent = 'Write all the input fields'
        // //Remove message after five seconds
        // setTimeout(() => {
        //     contactMessageEmergent.textContent = ''
        // }, 3000)

        //Show message

        if (selectedTheme === 'dark') {
            if (selectedLanguage === 'spanish') {
                Swal.fire({
                    title: 'Error',
                    icon: 'warning',
                    text: 'Complete todos los recuadros',
                    grow: 'row',
                    padding: '1rem',
                    timer: 3000,
                    timerProgressBar: true,
                    allowOutsideClick: true,
                    background: 'hsl(0, 8%, 12%)',
                    color: 'hsl(0, 4%, 95%)',
                    showConfirmButton: false,
                })
            } else if (selectedLanguage === 'english') {
                Swal.fire({
                    title: 'Error',
                    icon: 'warning',
                    text: 'Write all the input fields',
                    grow: 'row',
                    padding: '1rem',
                    timer: 3000,
                    timerProgressBar: true,
                    allowOutsideClick: true,
                    background: 'hsl(0, 8%, 12%)',
                    color: 'hsl(0, 4%, 95%)',
                    showConfirmButton: false,
                })
            }
        } else if (selectedTheme === 'light') {
            if (selectedLanguage === 'spanish') {
                Swal.fire({
                    title: 'Error',
                    icon: 'warning',
                    text: 'Complete todos los recuadros',
                    grow: 'row',
                    padding: '1rem',
                    timer: 1700,
                    timerProgressBar: true,
                    allowOutsideClick: true,
                    background: '#fff',
                    color: 'hsl(0, 4%, 55%)',
                    showConfirmButton: false,
                })
            } else if (selectedLanguage === 'english') {
                Swal.fire({
                    title: 'Error',
                    icon: 'warning',
                    text: 'Write all the input fields',
                    grow: 'row',
                    padding: '1rem',
                    timer: 1700,
                    timerProgressBar: true,
                    allowOutsideClick: true,
                    background: '#fff',
                    color: 'hsl(0, 4%, 55%)',
                    showConfirmButton: false,
                })
            }
        }
    } else {
        //serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_hx6zblm', 'template_ez43wqq', '#contact-form', 'pSavSp3qlEOm-YLG_')
            .then(() => {
                // contactMessageEmergent.classList.add('color-blue')
                // contactMessageEmergent.textContent = 'Message sent'
                // //Remove message after five seconds
                // setTimeout(() => {
                //     contactMessageEmergent.textContent = ''
                // }, 5000)
                if (selectedTheme === 'dark') {
                    if (selectedLanguage === 'spanish') {
                        Swal.fire({
                            title: 'Enviado',
                            icon: 'success',
                            text: 'Mensaje enviado',
                            grow: 'row',
                            padding: '1rem',
                            timer: 3000,
                            timerProgressBar: true,
                            allowOutsideClick: true,
                            background: 'hsl(0, 8%, 12%)',
                            color: 'hsl(0, 4%, 95%)',
                            showConfirmButton: false,
                        })
                    } else {
                        Swal.fire({
                            title: 'Sent',
                            icon: 'success',
                            text: 'Message sent',
                            grow: 'row',
                            padding: '1rem',
                            timer: 3000,
                            timerProgressBar: true,
                            allowOutsideClick: true,
                            background: 'hsl(0, 8%, 12%)',
                            color: 'hsl(0, 4%, 95%)',
                            showConfirmButton: false,
                        })
                    }
                } else if (selectedTheme === 'light') {
                    if (selectedLanguage === 'spanish') {
                        Swal.fire({
                            title: 'Enviado',
                            icon: 'success',
                            text: 'El mensaje ha sido enviado',
                            grow: 'row',
                            padding: '1rem',
                            timer: 3000,
                            timerProgressBar: true,
                            allowOutsideClick: true,
                            background: '#fff',
                            color: 'hsl(0, 4%, 55%)',
                            showConfirmButton: false,
                        })
                    } else {
                        Swal.fire({
                            title: 'Sent',
                            icon: 'success',
                            text: 'Message sent',
                            grow: 'row',
                            padding: '1rem',
                            timer: 3000,
                            timerProgressBar: true,
                            allowOutsideClick: true,
                            background: '#fff',
                            color: 'hsl(0, 4%, 55%)',
                            showConfirmButton: false,
                        })
                    }
                }
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
