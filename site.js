// Shared header and footer for the sub-pages
(function(){
  const here=location.pathname.split('/').pop();
  const nav=[['index.html#who','Who We Help'],['index.html#why','Benefits'],['index.html#approach','How It Works'],['faq.html','FAQ'],['index.html#data','Your Data']];
  const header=`<header><div class="container"><nav>
    <a href="index.html" class="logo">Robotize<span>Lab</span></a>
    <ul>${nav.map(n=>`<li><a href="${n[0]}" class="${n[0]===here?'on':''}">${n[1]}</a></li>`).join('')}</ul>
    <a href="booking.html" class="btn btn-primary">Book a call</a>
  </nav></div></header>`;
  const f=(h,t)=>`<li><a href="${h}">${t}</a></li>`;
  const footer=`<footer><div class="container">
    <div class="fcols">
      <div><div class="brand"><a href="index.html" style="color:inherit;text-decoration:none">Robotize<span>Lab</span></a></div><p>Your business process automation partner. Practical automation, flexible solutions, and support you can count on.</p></div>
      <div><h4>Learn more</h4><ul>${f('faq.html','FAQ')}${f('examples.html','Real examples')}${f('engagement.html','Engagement options')}${f('technologies.html','Technologies')}</ul></div>
      <div><h4>Company</h4><ul>${f('about.html','About us')}${f('support.html','Support expectations')}${f('ownership.html','Project ownership')}${f('booking.html','Book a consultation')}</ul></div>
      <div><h4>Legal</h4><ul>${f('privacy.html','Privacy policy')}${f('terms.html','Terms of service')}${f('cookies.html','Cookie policy')}</ul></div>
    </div>
    <div class="fbottom">© 2026 RobotizeLab. All rights reserved.</div>
  </div></footer>`;
  document.body.insertAdjacentHTML('afterbegin',header);
  document.body.insertAdjacentHTML('beforeend',footer);
  const t=document.getElementById('toggleFaq');
  if(t)t.onclick=()=>{
    const all=document.querySelectorAll('.faq details'),open=t.textContent==='Expand all';
    all.forEach(d=>d.open=open);t.textContent=open?'Collapse all':'Expand all';
  };
  const b=document.getElementById('book');
  const bp=document.getElementById('bphone');
  if(bp)bp.addEventListener('input',function(){
    const d=this.value.replace(/\D/g,'').slice(0,10);
    this.value=d.length>6?`(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`:d.length>3?`(${d.slice(0,3)}) ${d.slice(3)}`:d.length?`(${d}`:'';
  });
  const bm=document.getElementById('bmeet'),bd=document.getElementById('bdate');
  if(bd)bd.min=new Date().toISOString().slice(0,10);
  const syncAddr=()=>{const w=document.getElementById('baddrWrap'),a=document.getElementById('baddr'),on=bm.value==='In person';w.hidden=!on;w.style.display=on?'':'none';a.required=on};
  if(bm)bm.addEventListener('change',syncAddr);
  if(b)b.addEventListener('submit',e=>{
    e.preventDefault();
    const bt=b.querySelector('button[type=submit]'),m=document.getElementById('bookMsg'),v=b.querySelectorAll('input,select,textarea');
    const data={access_key:'3cc1ac59-52f9-44f9-8bf7-1ba4dcd5cbaa',subject:'RobotizeLab: Consultation booking request',from_name:'RobotizeLab website',
      name:v[0].value.trim(),email:v[1].value.trim(),company:v[2].value.trim(),phone:v[3].value.trim(),
      preferred_date:v[4].value,preferred_time:v[5].value,time_zone:v[6].value,meeting_type:v[7].value,
      meeting_address:v[8].value.trim(),discuss:v[9].value.trim()};
    bt.disabled=true;m.hidden=true;
    fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
      .then(r=>r.json()).then(j=>{if(!j.success)throw 0;
        m.textContent='Thank you! We will confirm a time shortly.';m.style.color='';m.hidden=false;b.reset();syncAddr();
      }).catch(()=>{m.textContent='Sorry, something went wrong. Please try again or call (605) 592-6403.';m.style.color='#b91c1c';m.hidden=false})
      .finally(()=>{bt.disabled=false});
  });
})();
