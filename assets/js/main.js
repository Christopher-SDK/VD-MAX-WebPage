/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

// /*============== CHANGING LANGUAGE =====================*/
// var btn_checkbox= document.getElementById('checkbox-translator');
// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentLanguage = () => document.head.classList.contains('spanish') ? 'spanish' : 'english'
// btn_checkbox.addEventListener('click', ()=>{
//     document.head.classList.toggle('spanish');
//     btn_checkbox.classList.toggle('active');

//     //Saving mode in local storage
//     if(document.head.classList.contains('spanish')){
//         localStorage.setItem('spanish-language', 'true');
//     }else{
//         localStorage.setItem('spanish-language', 'false');
//     }

//     if(getCurrentLanguage()==='spanish'){
//         spanishLanguageOn();
//     }else{
//         englishLanguageOn();
//     }
// })

// //We obtain the actual mode
// if(localStorage.getItem('spanish-language')==='true'){
//     document.head.classList.add('spanish');
//     btn_checkbox.classList.add('active');
// }else {
//     document.head.classList.remove('spanish');
//     btn_checkbox.classList.remove('active');
// }

/*============== CHANGING LANGUAGE =====================*/
const btn_checkbox= document.getElementById('checkbox-translator');
const spanishLanguage = 'spanish-language'
const checkValor= 'active'
const selectedLanguage = localStorage.getItem('selected-language')
const selectedValor = localStorage.getItem('selected-valor')

const getCurrentLanguage = () => document.head.classList.contains(spanishLanguage) ? 'spanish' : 'english'
const getCurrentValor = () => btn_checkbox.classList.contains(checkValor) ? 'true' : 'false'

if(selectedLanguage){
    document.head.classList[selectedLanguage === 'spanish' ? 'add' : 'remove'](spanishLanguage)
    btn_checkbox.classList[selectedValor === 'true' ? 'add' : 'remove'](checkValor)
}

// Activate / deactivate the theme manually with the button
btn_checkbox.addEventListener('click', () => {
    window.location.reload();
    // Add or remove the dark / icon theme
    document.head.classList.toggle(spanishLanguage)
    btn_checkbox.classList.toggle(checkValor)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-language', getCurrentLanguage())
    localStorage.setItem('selected-valor', getCurrentValor())
    
})
if(selectedLanguage==='spanish'){
    spanishLanguageOn();
}

function spanishLanguageOn() {
                     
         if(window.location.pathname==='/' || window.location.pathname==='/index.html' || window.location.pathname===''){
            /*============NAV-MENU============*/
         document.getElementById('home_nav__link').innerHTML = "Casa";
         document.getElementById('about_nav__link').innerHTML = "Nosotros";
         document.getElementById('products_nav__link').innerHTML = "Productos";
         document.getElementById('faqs_nav__link').innerHTML = "Preguntas";
         document.getElementById('contact_nav__link').innerHTML = "Contáctenos";
                     /*==============HOME==============*/
         document.getElementById('home__title').innerHTML = "Tú lo dices <br> nosotros lo limpiamos";
         document.getElementById('home__description').innerHTML = "Solicita increíbles productos de limpieza para tus oficinas o departamentos. Añade impecabilidad a tu hogar";
         document.getElementById('explore').innerHTML = "Explorar";
         document.getElementById('follow').innerHTML = "Síguenos";
                     /*==============ABOUT==============*/
         document.getElementById('about__title').innerHTML = "¿Quiénes somos? y <br> ¿por qué elegirnos?";
         document.getElementById('about__description').innerHTML = "Tenemos más de 1000+ reseñas de nuestros clientes. Ellos confían en que el proceso de limpieza de nuestros productos y el servicio de entrega siempre llega a tiempo.";
         document.getElementById('about__details_1').innerHTML="Siempre llegamos a tiempo.";
         document.getElementById('about__details_2').innerHTML="Te regalamos una muestra gratis para validar la calidad de nuestros productos.";
         document.getElementById('about__details_3').innerHTML="Siempre solicitamos sus opiniones para seguir mejorando.";
         document.getElementById('about__details_4').innerHTML="Devolución del 100% del dinero garantizado.";
         document.getElementById('contact__button').innerHTML="Compra ahora";
                     /*==============STEPS==============*/  
         document.getElementById('section__title').innerHTML="Pasos para iniciar <br> correctamente tu viaje de limpieza";
         document.getElementById('step__card__1').innerHTML="Elegir producto";
         document.getElementById('step__card__description__1').innerHTML="Tenemos ciertos tipos de productos para cada zona.";
         document.getElementById('step__card__2').innerHTML="Solicitar un pedido";
         document.getElementById('step__card__description__2').innerHTML="Una vez solicitado su pedido, pasamos al siguiente paso que es el envío.";
         document.getElementById('step__card__3').innerHTML="Consigue tu entrega";
         document.getElementById('step__card__description__3').innerHTML="Nuestro proceso de entrega es fácil y rápido, recibes tus productos directo a tu puerta de tu hogar.";      
                     /*==============PRODUCTS==============*/
         document.getElementById('section__title__products').innerHTML="Echa un vistazo a nuestros <br> productos";
         document.getElementById('product__description').innerHTML="Estos son algunos productos de nuestra excelente selección de limpieza. En caso estes buscando otro tipo de producto, ¡escríbenos! Compra y disfruta de la mejor calidad.";
         document.getElementById('product__title__1').innerHTML="Sacagrasa";
         document.getElementById('product__title__2').innerHTML="Limpiador de baño";
         document.getElementById('product__title__3').innerHTML="Multiuso";
         document.getElementById('product__title__4').innerHTML="Silicona";
         document.getElementById('product__title__5').innerHTML="Perfumador";
         document.getElementById('product__title__6').innerHTML="Gel de manos";
                     /*==============QUESTIONS==============*/
         document.getElementById('section__title__faqs').innerHTML="Las principales preguntas <br> que nos hacen nuestros clientes";
         document.getElementById('question__item__1').innerHTML="¿Cómo se usa?";
         document.getElementById('question__description__1').innerHTML="Primero, vierte un poco del producto ya mezclado con agua, dependiendo de la cantidad que estés usando. Después, espera de 10 a 15 segundos, y listo, pasa su esponja y toda la suciedad saldrá automáticamente.";
         document.getElementById('question__item__2').innerHTML="¿Cuánta agua se tiene que mezclar con el producto?";
         document.getElementById('question__description__2').innerHTML="En caso este usando los productos de 250 ml, se pueden mezclar hasta con 1 litro y medio de agua, ¡con calidad industrial!";
         document.getElementById('question__item__3').innerHTML="¿Se puede usar solo?";
         document.getElementById('question__description__3').innerHTML="Por supuesto, sin embargo, recomendamos a unestros clientes usarlos con agua. Esto debido a que no queremos que sus productos se caben rápido, ya que lo que brindamos es cantidad y calidad.";
         document.getElementById('question__item__4').innerHTML="¿Cómo elijo un producto?";
         document.getElementById('question__description__4').innerHTML="Los productos que ofrecemos son efectivos y de calidad. No obstante, recomendamos conocer previamente la zona donde vamos a limpiar.";
         document.getElementById('question__item__5').innerHTML="¿Los productos dañan la zona donde se utlizan?";
         document.getElementById('question__description__5').innerHTML="No, porque los productos que ofrecemos solo están diseñados para eliminar las imperfecciones que se encuentran en las áreas donde se utliza.";
         document.getElementById('question__item__6').innerHTML="¿Hace daño a las manos?";
         document.getElementById('question__description__6').innerHTML="Absolutamente no, nuestros productos están fabricados y elaborados para el libre contacto con la piel; pero siempre recomendamos a nuestro público el uso de guantes por seguridad.";      
                     /*==============CONTACT==============*/
         document.getElementById('section__title__contact').innerHTML="Escríbenos si deseas <br> comprar un producto o <br> tienes alguna duda";
         document.getElementById('contact__subtitle__call_us').innerHTML="Llámanos";
         document.getElementById('contact__subtitle__write_us').innerHTML="Escríbenos por correo";
         document.getElementById('contact__label__email').innerHTML="Correo electrónico";
         document.getElementById('contact__label__subject').innerHTML="Asunto";
         document.getElementById('contact__label__message').innerHTML="Mensaje";
         document.getElementById('send__message').innerHTML="Enviar Mensaje";

         /*==============FOOTER==============*/
         document.getElementById('footer__title').innerHTML="Suscríbete a nuestro boletín <br> para mantenerte actualizado";
         document.getElementById('input__email').setAttribute("placeholder", "Introduce tu email");
         document.getElementById('subscribe__button').innerHTML="Suscribir";
         document.getElementById('footer_title_address').innerHTML="Dirección";
         document.getElementById('footer_title_contact__us').innerHTML="Contáctenos";
         document.getElementById('footer_title_credit_cards').innerHTML="Aceptamos todas las tarjetas de crédito";
         document.getElementById('footer_copy').innerHTML="&#169; VDMAX. Todos los derechos reservados"  ;
        }else 
        if(window.location.pathname==='/grease_remover.html'){
            /*============NAV-MENU============*/
         document.getElementById('home_nav__link').innerHTML = "Casa";
         document.getElementById('about_nav__link').innerHTML = "Nosotros";
         document.getElementById('products_nav__link').innerHTML = "Productos";
         document.getElementById('faqs_nav__link').innerHTML = "Preguntas";
         document.getElementById('contact_nav__link').innerHTML = "Contáctenos";

         /*==============GREASE REMOVER==============*/
                    /*==============ABOUT==============*/
        document.getElementById('section__title_gr').innerHTML="Sacagrasa";
        document.getElementById('about__details-price_gr').innerHTML="S/. 25.00";
        document.getElementById('about__description_gr').innerHTML="Desengrasante para todo tipo de zonas. Especialmente dedicado para la cocina; por ejemplo, limpieza de rejillas, grasa adherida al suelo, fregaderos, refrigeraderos, etc.";
        document.getElementById('about__details-description_gr_1').innerHTML="Grasa quemada o seca";
        document.getElementById('about__details-description_gr_2').innerHTML="Oxido";
        document.getElementById('about__details-description_gr_3').innerHTML="Pintura";
        document.getElementById('about__details-description_gr_4').innerHTML="Etc";
        document.getElementById('back_to_product_list_button_gr').innerHTML="Volver a la lista de productos";

        /*==============FOOTER==============*/
        document.getElementById('footer__title').innerHTML="Suscríbete a nuestro boletín <br> para mantenerte actualizado";
        document.getElementById('input__email').setAttribute("placeholder", "Introduce tu email");
        document.getElementById('subscribe__button').innerHTML="Suscribir";
        document.getElementById('footer_title_address').innerHTML="Dirección";
        document.getElementById('footer_title_contact__us').innerHTML="Contáctenos";
        document.getElementById('footer_title_credit_cards').innerHTML="Aceptamos todas las tarjetas de crédito";
        document.getElementById('footer_copy').innerHTML="&#169; VDMAX. Todos los derechos reservados"  ;
        }else
        if(window.location.pathname==='/bathroom_cleaner.html'){
               /*============NAV-MENU============*/
         document.getElementById('home_nav__link').innerHTML = "Casa";
         document.getElementById('about_nav__link').innerHTML = "Nosotros";
         document.getElementById('products_nav__link').innerHTML = "Productos";
         document.getElementById('faqs_nav__link').innerHTML = "Preguntas";
         document.getElementById('contact_nav__link').innerHTML = "Contáctenos";

         /*==============BATHROOM CLEANER==============*/
                    /*==============ABOUT==============*/
        document.getElementById('section__title_bc').innerHTML="Limpiador de baño";
        document.getElementById('about__details-price_bc').innerHTML="S/. 25.00";
        document.getElementById('about__description_bc').innerHTML="EL limpiador de baño se encarga de la limpieza ultra-rápida de las incrustaciones que quedan en los inodoros y lavatorios. Asimismo, elimina los restos de jabón en cualquier estado de las mayólicas o cerámicas.";
        document.getElementById('about__details-description_bc_1').innerHTML="Sarro";
        document.getElementById('about__details-description_bc_2').innerHTML="Residuos de jabón";
        document.getElementById('about__details-description_bc_3').innerHTML="Porcelana";
        document.getElementById('about__details-description_bc_4').innerHTML="Losas";
        document.getElementById('back_to_product_list_button_bc').innerHTML="Volver a la lista de productos";

        /*==============FOOTER==============*/
        document.getElementById('footer__title').innerHTML="Suscríbete a nuestro boletín <br> para mantenerte actualizado";
        document.getElementById('input__email').setAttribute("placeholder", "Introduce tu email");
        document.getElementById('subscribe__button').innerHTML="Suscribir";
        document.getElementById('footer_title_address').innerHTML="Dirección";
        document.getElementById('footer_title_contact__us').innerHTML="Contáctenos";
        document.getElementById('footer_title_credit_cards').innerHTML="Aceptamos todas las tarjetas de crédito";
        document.getElementById('footer_copy').innerHTML="&#169; VDMAX. Todos los derechos reservados"  ;
        }else 
        if(window.location.pathname==='/multipurpose.html'){
            /*============NAV-MENU============*/
         document.getElementById('home_nav__link').innerHTML = "Casa";
         document.getElementById('about_nav__link').innerHTML = "Nosotros";
         document.getElementById('products_nav__link').innerHTML = "Productos";
         document.getElementById('faqs_nav__link').innerHTML = "Preguntas";
         document.getElementById('contact_nav__link').innerHTML = "Contáctenos";

         /*============================*/
                    /*==============ABOUT==============*/
        document.getElementById('section__title_m').innerHTML="Multiuso";
        document.getElementById('about__details-price_m').innerHTML="S/. 25.00";
        document.getElementById('about__description_m').innerHTML="El multiuso se encarga de la limpieza, desinfección y protección de vidrios, maderas, melaminas y hasta pantallas, desde celulares hasta laptops. Ideal para la suciedad dificil de sacar en diferentes superficies.";
        document.getElementById('about__details-description_m_1').innerHTML="Vidrio";
        document.getElementById('about__details-description_m_2').innerHTML="Pantalla";
        document.getElementById('about__details-description_m_3').innerHTML="Madera";
        document.getElementById('about__details-description_m_4').innerHTML="Melamine";
        document.getElementById('back_to_product_list_button_m').innerHTML="Volver a la lista de productos";

        /*==============FOOTER==============*/
        document.getElementById('footer__title').innerHTML="Suscríbete a nuestro boletín <br> para mantenerte actualizado";
        document.getElementById('input__email').setAttribute("placeholder", "Introduce tu email");
        document.getElementById('subscribe__button').innerHTML="Suscribir";
        document.getElementById('footer_title_address').innerHTML="Dirección";
        document.getElementById('footer_title_contact__us').innerHTML="Contáctenos";
        document.getElementById('footer_title_credit_cards').innerHTML="Aceptamos todas las tarjetas de crédito";
        document.getElementById('footer_copy').innerHTML="&#169; VDMAX. Todos los derechos reservados"  ;
        }else 
        if(window.location.pathname==='/auto_silicon.html'){
            /*============NAV-MENU============*/
         document.getElementById('home_nav__link').innerHTML = "Casa";
         document.getElementById('about_nav__link').innerHTML = "Nosotros";
         document.getElementById('products_nav__link').innerHTML = "Productos";
         document.getElementById('faqs_nav__link').innerHTML = "Preguntas";
         document.getElementById('contact_nav__link').innerHTML = "Contáctenos";

         /*============================*/
                    /*==============ABOUT==============*/
        document.getElementById('section__title_as').innerHTML="Silicona";
        document.getElementById('about__details-price_as').innerHTML="S/. 25.00";
        document.getElementById('about__description_as').innerHTML="Silicona emulsionada con aditivos ultrabillantes y protectores UV evitando el desgaste por exposición solar. Además, se puede utilizar en diferentes superficies donde se desee dar brillo y/o proteger e hidratar. Del mismo modo, cuenta con un buen aroma, lo que deja la zona brillante y aromatizada.";
        document.getElementById('about__details-description_as_1').innerHTML="Cuero";
        document.getElementById('about__details-description_as_2').innerHTML="Madera";
        document.getElementById('about__details-description_as_3').innerHTML="Melamina";
        document.getElementById('back_to_product_list_button_as').innerHTML="Volver a la lista de productos";

        /*==============FOOTER==============*/
        document.getElementById('footer__title').innerHTML="Suscríbete a nuestro boletín <br> para mantenerte actualizado";
        document.getElementById('input__email').setAttribute("placeholder", "Introduce tu email");
        document.getElementById('subscribe__button').innerHTML="Suscribir";
        document.getElementById('footer_title_address').innerHTML="Dirección";
        document.getElementById('footer_title_contact__us').innerHTML="Contáctenos";
        document.getElementById('footer_title_credit_cards').innerHTML="Aceptamos todas las tarjetas de crédito";
        document.getElementById('footer_copy').innerHTML="&#169; VDMAX. Todos los derechos reservados"  ;
        }else 
        if(window.location.pathname==='/perfumer.html'){
            /*============NAV-MENU============*/
         document.getElementById('home_nav__link').innerHTML = "Casa";
         document.getElementById('about_nav__link').innerHTML = "Nosotros";
         document.getElementById('products_nav__link').innerHTML = "Productos";
         document.getElementById('faqs_nav__link').innerHTML = "Preguntas";
         document.getElementById('contact_nav__link').innerHTML = "Contáctenos";

         /*============================*/
                    /*==============ABOUT==============*/
        document.getElementById('section__title_p').innerHTML="Perfumador";
        document.getElementById('about__details-price_p').innerHTML="S/. 25.00";
        document.getElementById('about__description_p').innerHTML="El olor se fija en nuestra memoria, nos hace revivir mmentos especiales. En este caso, se encuentra la presentación de pétalos de rosa, obligatorio para todos los hogares que deseen un olor refrescante y opacible.";
        document.getElementById('about__details-description_p_1').innerHTML="24 horas";
        document.getElementById('about__details-description_p_2').innerHTML="Aroma continuo garantizado";
        document.getElementById('about__details-description_p_3').innerHTML="Pétalos de rosa";
        document.getElementById('about__details-description_p_4').innerHTML="Para todas las superficies";
        document.getElementById('back_to_product_list_button_p').innerHTML="Volver a la lista de productos";

        /*==============FOOTER==============*/
        document.getElementById('footer__title').innerHTML="Suscríbete a nuestro boletín <br> para mantenerte actualizado";
        document.getElementById('input__email').setAttribute("placeholder", "Introduce tu email");
        document.getElementById('subscribe__button').innerHTML="Suscribir";
        document.getElementById('footer_title_address').innerHTML="Dirección";
        document.getElementById('footer_title_contact__us').innerHTML="Contáctenos";
        document.getElementById('footer_title_credit_cards').innerHTML="Aceptamos todas las tarjetas de crédito";
        document.getElementById('footer_copy').innerHTML="&#169; VDMAX. Todos los derechos reservados"  ;
        }
                     
         
                    

        
} 

// function englishLanguageOn(){
//                 /*============NAV-MENU============*/
// document.getElementById('home_nav__link').innerHTML="Home";
// document.getElementById('about_nav__link').innerHTML = "About";
// document.getElementById('products_nav__link').innerHTML = "Products";
// document.getElementById('faqs_nav__link').innerHTML = "FAQs";
// document.getElementById('contact_nav__link').innerHTML = "Contact Us";
//             /*==============HOME==============*/
// document.getElementById('home__title').innerHTML = "You say it <br> we clean it";
// document.getElementById('home__description').innerHTML = "Request incredible cleaning products for your offices or departments. Add impeccability to your home.";
// document.getElementById('explore').innerHTML = "Explore";
// document.getElementById('follow').innerHTML = "Follow Us";
//             /*==============ABOUT==============*/
// document.getElementById('about__title').innerHTML = "Who we are & <br> why choose us";
// document.getElementById('about__description').innerHTML = "We have more than 1000+ reviews of our customers. They trust our products cleaning process and delivery service is always on time.";
// document.getElementById('about__details_1').innerHTML="We always deliver on time";
// document.getElementById('about__details_2').innerHTML="We give you a free sample to validate the quality of our products";
// document.getElementById('about__details_3').innerHTML="We always request your comments to keep improving.";
// document.getElementById('about__details_4').innerHTML="100% money back guaranteed.";
// document.getElementById('contact__button').innerHTML="Shop Now";
//             /*==============STEPS==============*/  
// document.getElementById('section__title').innerHTML="Steps to start your <br> cleaning trip properly";
// document.getElementById('step__card__1').innerHTML="Choose product";
// document.getElementById('step__card__description__1').innerHTML="We have certain types of products for each zone.";
// document.getElementById('step__card__2').innerHTML="Request an order";
// document.getElementById('step__card__description__2').innerHTML="Once your order is requested, we move to the next step which is the shipping.";
// document.getElementById('step__card__3').innerHTML="Get your delivery";
// document.getElementById('step__card__description__3').innerHTML="Our delivery process is easy and fast, you receive your products direct to your door.";      
//             /*==============PRODUCTS==============*/
// document.getElementById('section__title__products').innerHTML="Check out our <br> products";
// document.getElementById('product__description').innerHTML="Here are some of our great cleaning selection. In case you are looking for another type of product, write us! Buy and enjoy the best quality.";
// document.getElementById('product__title__1').innerHTML="Grease remover";
// document.getElementById('product__title__2').innerHTML="Bathroom cleaner";
// document.getElementById('product__title__3').innerHTML="Multipurpose";
// document.getElementById('product__title__4').innerHTML="Auto silicon";
// document.getElementById('product__title__5').innerHTML="Perfumer";
// document.getElementById('product__title__6').innerHTML="Hand gel";
//             /*==============QUESTIONS==============*/
// document.getElementById('section__title__faqs').innerHTML="The main questions <br> our clients ask us";
// document.getElementById('question__item__1').innerHTML="How to use?";
// document.getElementById('question__description__1').innerHTML="First, you pour a little of the product already mixed with water, depending on the amount you are using. Then you wait 10 to 15 seconds, and that's it, you pass your sponge and all the dirt will come out automatically.";
// document.getElementById('question__item__2').innerHTML="How much water has to be mixed with the product?";
// document.getElementById('question__description__2').innerHTML="In case you are using products that contain 250 ml, it can be mixed with even 1 and a half liters of water, with industrial quality!";
// document.getElementById('question__item__3').innerHTML="Can it be used neat?";
// document.getElementById('question__description__3').innerHTML="Of course, however, we recommend our customers use them with water. This is because we do not want your products to end quickly, since what we provide is quantity and quality.";
// document.getElementById('question__item__4').innerHTML="How do I choose a product?";
// document.getElementById('question__description__4').innerHTML="The products we provide are effective and of quality. However, we recommend first knowing the area where we are going to clean.";
// document.getElementById('question__item__5').innerHTML="Do the products damage the area where they are used?";
// document.getElementById('question__description__5').innerHTML="No, since the products we offer are only designed to remove blemishes found in the areas where it is used.";
// document.getElementById('question__item__6').innerHTML="Does it hurt my hands?";
// document.getElementById('question__description__6').innerHTML="Absolutely not, our products are manufactured and made for free contact with the skin; but we always recommend to our public the use of gloves.";      
//             /*==============CONTACT==============*/
// document.getElementById('section__title__contact').innerHTML="Write us if you want <br> to buy a product or <br> have any questions";
// document.getElementById('contact__subtitle__call_us').innerHTML="Call us";
// document.getElementById('contact__subtitle__write_us').innerHTML="Write us by mail";
// document.getElementById('contact__label__email').innerHTML="Email";
// document.getElementById('contact__label__subject').innerHTML="Subject";
// document.getElementById('contact__label__message').innerHTML="Message";
// document.getElementById('send__message').innerHTML="Send Message";
//             /*==============FOOTER==============*/
// document.getElementById('footer__title').innerHTML="Subscribe to our newsletter <br> to stay update";
// document.getElementById('input__email').setAttribute("placeholder", "Enter your email");
// document.getElementById('subscribe__button').innerHTML="Subscribe";
// document.getElementById('footer_title_address').innerHTML="Our Adress";
// document.getElementById('footer_title_contact__us').innerHTML="Contact us";
// document.getElementById('footer_title_credit_cards').innerHTML="We accept all credit cards";
// document.getElementById('footer_copy').innerHTML="&#169; VDMAX. All rights reserved";
// }

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, { delay: 500 })
sr.reveal(`.home__social`, { delay: 600 })
sr.reveal(`.about__img, .contact__box`, { origin: 'left' })
sr.reveal(`.about__data, .contact__form`, { origin: 'right' })
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, { interval: 100 })