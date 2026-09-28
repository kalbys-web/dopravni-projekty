const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const b=document.querySelector('.menu'),n=document.querySelector('.site-header nav');
b?.addEventListener('click',()=>{const open=n.classList.toggle('open'); b.setAttribute('aria-expanded',String(open));});
n?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b?.setAttribute('aria-expanded','false');}));
const box=document.getElementById('lightbox'),boxImg=box?.querySelector('img');
document.querySelectorAll('#gallery a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();if(!box||!boxImg)return;boxImg.src=a.href;boxImg.alt=a.querySelector('img')?.alt||'';box.classList.add('open');box.setAttribute('aria-hidden','false');}));
function closeBox(){if(!box)return;box.classList.remove('open');box.setAttribute('aria-hidden','true');if(boxImg)boxImg.src='';}
box?.querySelector('.lightbox-close')?.addEventListener('click',closeBox);box?.addEventListener('click',e=>{if(e.target===box)closeBox();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox();});
