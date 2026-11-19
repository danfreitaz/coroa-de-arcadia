/* Atalho para escrever petições em formato compacto.
   K(id, nicho, quem, casa, selo, titulo, pedido, sim, nao, jodyr, valkiria, banx, flags)
   sim/nao = [fx, log, extra]  ·  extra: 'v:Nome|semanas|fx' (decreto) ou 'n:id|semanas' (desdobramento), separados por ';'
   flags: 'f' = desdobramento (fora do sorteio) · 'r' = alto risco · 'l:x' = lote/categoria */
window.K=function(id,n,quem,casa,selo,titulo,pedido,S,N,j,v,b,fl){
  const opt=a=>{const o={fx:a[0]||'',log:a[1]||''};
    (a[2]||'').split(';').filter(Boolean).forEach(x=>{
      if(x.startsWith('v:')){const[p,w,f]=x.slice(2).split('|');o.vig={nome:p,sem:+w,fx:f}}
      if(x.startsWith('n:')){const[i,w]=x.slice(2).split('|');o.next=[i,+w]}});return o};
  const t=(fl||'').split(/[;, ]+/);const c={id,n,quem,casa,selo,titulo,pedido,sim:opt(S),nao:opt(N),c:{jodyr:j,valkiria:v,banx:b}};
  if(t.includes('f'))c.f=1; if(t.includes('r'))c.r=1;
  const m=t.find(x=>x.startsWith('l:')); if(m)c.lote=m.slice(2);
  window.CARTAS.push(c);
};
