// Menu trigger
var burger = document.getElementById('burger');
// Menu block
var menu = document.getElementById('nav-menu');
// Tab btns
var tabBtns = document.getElementsByClassName("tab");
// Tab content
var tabs = document.querySelectorAll('.texttabs');
//sign up
var sign = document.getElementById('signup');

// contacts
var contacts = document.getElementById('contacts');

/*
* Contacts validation
*/
contacts.addEventListener('submit', function(e) {
  var inputs = this.querySelectorAll('input');
  var status = true;

  [].forEach.call(inputs, function(el) {
      el.classList.remove('error');
  });

  [].forEach.call(inputs, function(el) {
    if(el.value == '') {
      status = false;
      el.classList.add('error');
    }
  });
  if(!status) {
    e.preventDefault();
    return false;
  }
  return true;
});

/*
* Signup validation
*/
sign.addEventListener('submit', function(e) {
  var inputs = this.querySelectorAll('input');
  var status = true;

  [].forEach.call(inputs, function(el) {
      el.classList.remove('error');
  });

  [].forEach.call(inputs, function(el) {
    if(el.value == '') {
      status = false;
      el.classList.add('error');
    }
  });
  if(!status) {
    e.preventDefault();
    return false;
  }
  return true;
});

/*
* Revies slider
*/
const swiper = new Swiper('.swiper', {
  speed: 1000,
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    }
  }
});

/*
* Burger event
*/
burger.addEventListener('click', function() {
  menu.classList.toggle("active");
});

/*
* Tab click event
*/
for (var i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener('click', changeTab, false);
}

/*
* Scroll event
*/
document.querySelectorAll('.navmenu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if(this.getAttribute('href').substring(1) == '') {
          return;
        }

        const element = document.getElementById(this.getAttribute('href').substring(1));
        const y = element.getBoundingClientRect().top + window.pageYOffset -72;

        window.scrollTo({top: y, behavior: 'smooth'});

    });

});

/*
* Tab change logic
*/
function changeTab() {
  var elems = document.querySelectorAll(".tab.active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });

  [].forEach.call(tabs, function(el) {
    el.classList.remove("active");
  });

  this.classList.add("active");
  var id = this.getAttribute('data-id');

  tabs[id -1].classList.add('active');
}
