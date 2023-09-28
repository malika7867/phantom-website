
window.addEventListener('scroll' , () =>{
document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener("click" , () =>{
        faq.classList.toggle('open');
        const icon= faq.querySelector('.faq_icon i');
        if(icon.className === 'ri-add-line'){
            icon.className = 'ri-subtract-line'
        }
        else{
            icon.className='ri-add-line';
        }
})
  })


  const navmenu = document.querySelector(".nav_menu");
  const close_btn = document.querySelector("#close_menu");
  const open_btn = document.querySelector("#open_menu");

  open_btn.addEventListener('click', () => {
    navmenu.style.display = "flex";
    close_btn.style.display = "inline-block";
    open_btn.style.display = "none"

  }) 

  const close_nav = () =>{
    navmenu.style.display = "none";
    close_btn.style.display = "none";
    open_btn.style.display = "inline-block";
  }

  close_btn.addEventListener('click', close_nav)