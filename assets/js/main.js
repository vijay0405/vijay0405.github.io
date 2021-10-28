const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    // reset: false
})

sr.reveal('.home_title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home_img', { delay: 400 })
sr.reveal('.home_social-icon', { interval: 200 })

sr.reveal('.about_img', {})
sr.reveal('.about_subtitle', { delay: 200 })
sr.reveal('.about_text', { delay: 400 })

sr.reveal('.qualification_title', {})
sr.reveal('.qualification_area', { delay: 200 })
sr.reveal('.qualification_box', { delay: 200 })

sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_text', { delay: 200 })
sr.reveal('.skills_data', { interval: 200 })
sr.reveal('.skills_img', { delay: 400 })


sr.reveal('.work_img', { interval: 200 })


sr.reveal('.contact_input', { interval: 200 })


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

function updateImage(isDark) {
    if (isDark) {
        document.getElementById("profile_image_1").src = "assets/img/profile6_dark.png";
        document.getElementById("profile_image_2").src = "assets/img/profile4_dark.webp";
    } else {
        document.getElementById("profile_image_1").src = "assets/img/profile6.png";
        document.getElementById("profile_image_2").src = "assets/img/profile4.webp";
    }
}

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)

    updateImage(selectedTheme === 'dark')
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    let isDarkToggled = document.body.classList.toggle(darkTheme)
    updateImage(isDarkToggled)

    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
