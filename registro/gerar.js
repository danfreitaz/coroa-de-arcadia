/* Gera o registro de personagens, casas e lugares a partir das petições. Uso: node registro/gerar.js */
const vm=require('vm'),fs=require('fs'),path=require('path');const R=path.join(__dirname,'..');
global.window={CARTAS:[]};
const html=fs.readFileSync(path.join(R,'index.html'),'utf8');
[...html.matchAll(/<script src="([^"]+\.js)"><\/script>/g)].map(m=>m[1]).filter(f=>f!=='imagens.js').forEach(f=>{vm.runInThisContext(fs.readFileSync(path.join(R,f),'utf8'));if(f==='kit.js')global.K=window.K});
const C=window.CARTAS;
const LUGARES=['Arcadia','Castelo','Salão Real','Sala do Trono','Templo da Aurora','Casa de Cura','Academia Real','Biblioteca Real','Arquivos Reais','Ala Arcana','Mercado Central','Mercado de Baixo','Porto do Rio','Farol','Taverna do Sino','Rua do Sino','Bairro Baixo','bairro baixo','Bairro das Forjas','Bairro do Porto','Rua dos Curtumes','Rua dos Ourives','Rua dos Escribas','Pedra Fria','Forte Thorendis','Thorendis','Vhalkir','Argenthal','Montclaro','Pedraverde','Brumafria','Sabugueiro','Ventoalto','Sete Quedas','Pântano de Lodomar','Lodomar','Floresta Enevoada','floresta densa','Montanhas do Norte','Colinas do Oeste','vale','Vale','Estrada Real','Ilha da Garça','Ponte Seca','Monte Claro','Mosteiro das Colinas','Cemitério da Colina','lago da voz','Torre das Estrelas','Torre de Vidro','Valdoria','Morgrath','Ostmar','vau do norte','ponte do norte','Vila do Rio','Vila Esperança','Campina do rio','campina do rio'];
const txt=c=>[c.titulo,c.pedido,c.sim.log,c.nao.log,c.c.jodyr,c.c.valkiria,c.c.banx].join(' ');
const pes={};C.forEach(c=>{const k=c.quem;(pes[k]=pes[k]||{nome:k,casas:new Set(),grupos:new Set(),pedidos:[]});pes[k].casas.add(c.casa);pes[k].grupos.add(c.n);pes[k].pedidos.push(c.id)});
const casas={};C.forEach(c=>{(casas[c.casa]=casas[c.casa]||{nome:c.casa,pessoas:new Set(),n:0});casas[c.casa].pessoas.add(c.quem);casas[c.casa].n++});
const lug={};LUGARES.forEach(l=>{const ids=C.filter(c=>txt(c).includes(l)).map(c=>c.id);if(ids.length)lug[l]=ids});
const lote={};C.forEach(c=>{const k=c.lote||(c.r?'risco (lote VI-VIII)':c.f?'desdobramento (lote I-V)':'base (lote I-V)');lote[k]=(lote[k]||0)+1});
const out={gerado:new Date().toISOString(),total:C.length,porLote:lote,
 personagens:Object.values(pes).map(p=>({nome:p.nome,casas:[...p.casas],grupos:[...p.grupos],aparicoes:p.pedidos.length,pedidos:p.pedidos})).sort((a,b)=>b.aparicoes-a.aparicoes),
 casas:Object.values(casas).map(c=>({nome:c.nome,pessoas:[...c.pessoas],pedidos:c.n})).sort((a,b)=>b.pedidos-a.pedidos),
 lugares:Object.entries(lug).map(([l,ids])=>({lugar:l,mencoes:ids.length,pedidos:ids})).sort((a,b)=>b.mencoes-a.mencoes)};
fs.writeFileSync(path.join(__dirname,'arcadia-registro.json'),JSON.stringify(out,null,1));
let md=`# Registro de Arcadia\n\nGerado a partir das ${C.length} petições do jogo. Serve de base para a futura aba do mapa de Arcadia e suas personalidades.\n\n## Petições por lote\n\n${Object.entries(lote).map(([k,v])=>`- ${k}: ${v}`).join('\n')}\n\n## Personagens (${out.personagens.length})\n\n| Personagem | Casa / grupo | Nichos | Aparições |\n|---|---|---|---|\n${out.personagens.map(p=>`| ${p.nome} | ${p.casas.join('; ')} | ${p.grupos.join(', ')} | ${p.aparicoes} |`).join('\n')}\n\n## Casas, instituições e grupos (${out.casas.length})\n\n| Nome | Pessoas | Petições |\n|---|---|---|\n${out.casas.map(c=>`| ${c.nome} | ${c.pessoas.join('; ')} | ${c.pedidos} |`).join('\n')}\n\n## Lugares citados (${out.lugares.length})\n\n| Lugar | Menções |\n|---|---|\n${out.lugares.map(l=>`| ${l.lugar} | ${l.mencoes} |`).join('\n')}\n`;
fs.writeFileSync(path.join(__dirname,'REGISTRO.md'),md);
console.log('personagens',out.personagens.length,'casas',out.casas.length,'lugares',out.lugares.length);
