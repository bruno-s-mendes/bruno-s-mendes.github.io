const inicioFunc = () => {
  const inicioBTN = document.getElementById('inicio-btn');
  const inicioContainer = document.getElementById('inicio-container');
  const menu = document.querySelector('.menu-nav');
  menu.addEventListener('click', () => {
    (inicioBTN.checked === true)? inicioContainer.style.display = 'block' : inicioContainer.style.display = 'none';
  });
}

const contatoFunc = () => {
  const contactBTN = document.getElementById('contato');
  const contactContainer = document.getElementById('formulario');
  const menu = document.querySelector('.menu-nav');
  menu.addEventListener('click', () => {
    (contactBTN.checked === true)? contactContainer.style.display = 'block' : contactContainer.style.display = 'none';
  });
}

const trybeFunc = () => {
  const contactBTN = document.getElementById('trybe');
  const contactContainer = document.getElementById('trybe-works');
  const menu = document.querySelector('.menu-nav');
  menu.addEventListener('click', () => {
    (contactBTN.checked === true)? contactContainer.style.display = 'block' : contactContainer.style.display = 'none';
  });
}

const workFunc = () => {
  const contactBTN = document.getElementById('empresa');
  const contactContainer = document.getElementById('pro-works');
  const menu = document.querySelector('.menu-nav');
  menu.addEventListener('click', () => {
    (contactBTN.checked === true)? contactContainer.style.display = 'block' : contactContainer.style.display = 'none';
  });
}

function email() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('contact_service', 'contact_form', this)
    .then(function() {
      document.getElementById('contact-form').reset();
    }, function(error) {
      console.log('FAILED...', error);
    });
  });
  }

  function dropDown () {
    const menuButton = document.getElementById('menu-button');
    const dropdownList = document.getElementById('menu-mobile');
    menuButton.addEventListener('click', () => {
      (dropdownList.className === "hide")? dropdownList.className = 'show' : dropdownList.className = 'hide';
    });
  }

  const inicioFuncMobile = () => {
    const inicioBTN = document.getElementById('mobile-inicio-btn');
    const inicioContainer = document.getElementById('inicio-container');
    const menu = document.querySelector('.list');
    menu.addEventListener('click', () => {
      (inicioBTN.checked === true)? inicioContainer.style.display = 'block' : inicioContainer.style.display = 'none';
    });
  }
  
  const contatoFuncMobile = () => {
    const contactBTN = document.getElementById('mobile-contato');
    const contactContainer = document.getElementById('formulario');
    const menu = document.querySelector('.list');
    menu.addEventListener('click', () => {
      (contactBTN.checked === true)? contactContainer.style.display = 'block' : contactContainer.style.display = 'none';
    });
  }
  
  const trybeFuncMobile = () => {
    const contactBTN = document.getElementById('mobile-trybe');
    const contactContainer = document.getElementById('trybe-works');
    const menu = document.querySelector('.list');
    menu.addEventListener('click', () => {
      (contactBTN.checked === true)? contactContainer.style.display = 'block' : contactContainer.style.display = 'none';
    });
  }
  
  const workFuncMobile = () => {
    const contactBTN = document.getElementById('mobile-empresa');
    const contactContainer = document.getElementById('pro-works');
    const menu = document.querySelector('.list');
    menu.addEventListener('click', () => {
      (contactBTN.checked === true)? contactContainer.style.display = 'block' : contactContainer.style.display = 'none';
    });
  }

  function showAboutMe() {
    const windowSize = window.screen.width;
    const  aboutMe = document.getElementById('inicio-container');
    if (windowSize < 600) {
      aboutMe.className = 'show'
    }
  }

window.onload = () => {
  inicioFunc();
  email();
  contatoFunc();
  trybeFunc();
  workFunc();
  dropDown();
  inicioFuncMobile();
  contatoFuncMobile();
  trybeFuncMobile();
  workFuncMobile();
  showAboutMe();
};

