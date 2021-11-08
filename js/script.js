// project item filter

const filterContainer = document.querySelector('.project-filter'),
    filterBtn = filterContainer.children,
    projectItems = document.querySelectorAll('.project-item');

for (let index = 0; index < filterBtn.length; index++) {
    filterBtn[index].addEventListener('click', function () {
        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        console.log(filterValue);
        for (let a = 0; a < projectItems.length; a++) {
            if (filterValue === projectItems[a].getAttribute('data-category')) {
                projectItems[a].classList.remove('hide');
                projectItems[a].classList.add('show');
            }
            else {
                projectItems[a].classList.remove('show');
                projectItems[a].classList.add('hide');
            }
            if (filterValue === 'all') {
                projectItems[a].classList.remove('hide');
                projectItems[a].classList.add('show');

            }
        }
    })
}

// style switcher

const links = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    // console.log(color);

    for (let index = 0; index < links.length; index++) {
        if (color === links[index].getAttribute('title')) {
            links[index].removeAttribute('disabled');
        }
        else {
            links[index].setAttribute('disabled', 'true');

        }

    }
}

document.querySelector('.toggle-style-switcher').addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open')
})

// body skin
const bodySkin = document.querySelectorAll('.body-skin');

for (let index = 0; index < bodySkin.length; index++) {
    bodySkin[index].addEventListener('change', function () {

        if (this.value === 'dark') {

            document.body.className = 'dark';
        }
        else {
            document.body.className = '';
        }
    })

}

// aside nav
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    allSection = document.querySelectorAll('section');

for (let index = 0; index < navList.length; index++) {
    const a = navList[index].querySelector('a');
    a.addEventListener('click', function () {

        // remove back-section class
        for (let j = 0; j < allSection.length; j++) {
            allSection[j].classList.remove('back-section');
        }
        for (let k = 0; k < navList.length; k++) {
            if (navList[k].querySelector('a').classList.contains('active')) {

                // add back-section class
                allSection[k].classList.add('back-section');
            }
            navList[k].querySelector('a').classList.remove('active');

        }
        this.classList.add('active');
        showSection(this);

        if (window.innerWidth< 1200) {
            asideSectionToggle();
        }
    })

}


function showSection(ele) {
    for (let index = 0; index < allSection.length; index++) {
        allSection[index].classList.remove('active');
    }
    const target = ele.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}

// nav toggle

const navToggle = document.querySelector('.nav-toggle'),
    aside = document.querySelector('.aside');

navToggle.addEventListener('click', asideSectionToggle);

function asideSectionToggle() {
    aside.classList.toggle('open');
    navToggle.classList.toggle('open');
    for (let j = 0; j < allSection.length; j++) {
        allSection[j].classList.toggle('open');
    }
    
}

// loader

// window.addEventListener('load',function() {
//     document.querySelector('.loader').classList.add('opacity-0');
//     setTimeout(()=> {
//         document.querySelector('.loader').style.display = 'none';
//     },2000)

// })


// make fake loader
window.addEventListener('load',function() {
    setTimeout(function(){
        document.querySelector('.loader').classList.add('opacity-0');
        setTimeout(()=>{document.querySelector('.loader').style.display = 'none';},1000)
}, 1500)
})
