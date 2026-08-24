document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth'});}}));
document.querySelectorAll('.nav-menu').forEach(menu=>menu.addEventListener('toggle',()=>{if(menu.open)document.querySelectorAll('.nav-menu').forEach(other=>{if(other!==menu)other.open=false})}));
document.addEventListener('click',event=>{
  const link=event.target.closest('a[href]');
  if(!link)return;
  const href=link.getAttribute('href');
  if(href.startsWith('tel:')){
    window.va&&window.va('event',{name:'call_click',data:{page:location.pathname}});
  }else if(href.includes('portal.groomer.io')){
    window.va&&window.va('event',{name:'booking_click',data:{page:location.pathname}});
  }
});
