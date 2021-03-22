function classToggle() {
    const navs = document.querySelectorAll('.navItems')
    
    navs.forEach(nav => nav.classList.toggle('toggleShow'));
  }
  
  document.querySelector('.navToggle')
    .addEventListener('click', classToggle);