// Nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
navToggle && navToggle.addEventListener('click', ()=>{
  siteNav.classList.toggle('open');
});

// Set current year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      siteNav.classList.remove('open');
    }
  })
});

// Simple contact form handler (skeleton)
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
if(form){
  form.addEventListener('submit', async e=>{
    e.preventDefault();
    const action = form.getAttribute('action') || '';
    const data = new FormData(form);
    if(action.includes('formspree.io')){
      try{
        form.querySelector('button[type="submit"]').disabled = true;
        const res = await fetch(action, {method:'POST', body: data, headers:{'Accept':'application/json'}});
        if(res.ok){
          formStatus && (formStatus.textContent = 'Thanks — message sent.');
          form.reset();
        } else {
          const json = await res.json().catch(()=>null);
          formStatus && (formStatus.textContent = json && json.error ? json.error : 'Submission failed.');
        }
      }catch(err){
        formStatus && (formStatus.textContent = 'Submission error.');
      }finally{
        form.querySelector('button[type="submit"]').disabled = false;
      }
    } else {
      // Fallback: local skeleton behavior
      formStatus && (formStatus.textContent = 'Thanks — message captured (local).');
      form.reset();
    }
  })
}