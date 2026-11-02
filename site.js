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
      <div><div class="brand">Robotize<span>Lab</span></div><p>Your business process automation partner. Practical automation, flexible solutions, and support you can count on.</p></div>
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
  if(b)b.addEventListener('submit',e=>{e.preventDefault();document.getElementById('bookMsg').hidden=false;b.reset();syncAddr()});
})();
