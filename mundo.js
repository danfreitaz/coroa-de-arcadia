/* ══════════════════════════════════════════════════════════
   O MUNDO DE ARCADIA · lugares, ícones, personalidades
   Usado pelas abas Mapa e Personalidades.
   ══════════════════════════════════════════════════════════ */
(function(){
const W=window;

/* ── Lugares ── x,y no mapa (1200×800) · city = dentro da capital */
const LOCAIS=[
 // Capital
 {id:'castelo',nome:'Castelo de Arcadia',tipo:'Sede da Coroa',reg:'Capital',c:'Castelo',x:600,y:318,i:'castle',city:1,
  d:'O grande castelo de torres pontiagudas. Abriga o Salão Real, a Sala do Trono, o Tesouro, os Arquivos Reais, a cozinha e os jardins.'},
 {id:'ala',nome:'Ala Arcana',tipo:'Torre dos magos',reg:'Capital',c:'Ala Arcana',x:664,y:330,i:'tower',city:1,
  d:'A torre da Arquimaga Ondine. Ali se estudam as runas e se vigia, noite e dia, o selo de Vhalkir.'},
 {id:'quartel',nome:'Quartel da Guarda Real',tipo:'Guarda Real',reg:'Capital',c:'Quartel',x:700,y:410,i:'swords',city:1,
  d:'Casa da Guarda de Valkiria: dormitórios, pátio de treino, arsenal e os estábulos onde vive a égua Brasa.'},
 {id:'muralhas',nome:'Muralhas e Portão Norte',tipo:'Defesa',reg:'Capital',c:'Muralhas',x:518,y:330,i:'wall',city:1,
  d:'Muralhas de pedra coberta de musgo, com runas antigas que brilham à noite. A rachadura do leste já foi notícia no reino.'},
 {id:'pedra_fria',nome:'Prisão Real Pedra Fria',tipo:'Prisão',reg:'Capital',c:'Pedra Fria',x:508,y:388,i:'prison',city:1,
  d:'Celas úmidas cavadas na rocha, sob o comando do carcereiro Mord. Guarda traidores, devedores e ladrões de pão.'},
 {id:'templo',nome:'Templo da Aurora',tipo:'Templo',reg:'Capital',c:'Templo',x:560,y:372,i:'temple',city:1,
  d:'O maior templo de Arcadia, com o grande sino na torre. Ali pregam a Sumo-Sacerdotisa Elowen e o Bispo Aurelian.'},
 {id:'academia',nome:'Academia Real',tipo:'Ensino',reg:'Capital',c:'Academia',x:614,y:370,i:'book',city:1,
  d:'Onde estudam os filhos de nobres e, aos poucos, também os filhos do povo. Mestra Liana Orwen luta por isso.'},
 {id:'biblioteca',nome:'Biblioteca Real',tipo:'Saber',reg:'Capital',c:'Biblioteca',x:664,y:388,i:'scroll',city:1,
  d:'Guardada por Serina Valdimere. Livros antigos, mapas de Vhalkir e uma sala que ficou trancada por trezentos anos.'},
 {id:'cura',nome:'Casa de Cura',tipo:'Saúde',reg:'Capital',c:'Casa de Cura',x:522,y:440,i:'heart',city:1,
  d:'Leitos, ervas e as irmãs de Irmã Maelis. É para cá que correm os doentes do reino em cada febre e peste.'},
 {id:'mercado',nome:'Mercado Central',tipo:'Comércio',reg:'Capital',c:'Mercado',x:582,y:422,i:'tent',city:1,
  d:'Barracas de especiarias, pão, peixe e tecido. Coração do tributo e das brigas de balança.'},
 {id:'taverna',nome:'Taverna do Sino',tipo:'Taverna',reg:'Capital',c:'Taverna',x:636,y:436,i:'mug',city:1,
  d:'A taverna da Bessa, na Rua do Sino. Seresta, dados, boatos e o lugar preferido do bardo Banx.'},
 {id:'forjas',nome:'Bairro das Forjas',tipo:'Ofícios',reg:'Capital',c:'Forjas',x:688,y:458,i:'anvil',city:1,
  d:'Fumaça, martelo e brasa. A Forja Real de Gundar e a oficina de Hask, o martelo que canta.'},
 {id:'bairro_baixo',nome:'Bairro Baixo',tipo:'Bairro do povo',reg:'Capital',c:'Bairro Baixo',x:560,y:480,i:'houses',city:1,
  d:'Casas de taipa, becos e cortiços. O lugar que mais sofre com fome, febre e fogo. E que mais canta.'},
 {id:'porto',nome:'Porto do Rio e Farol',tipo:'Porto',reg:'Capital',c:'Porto e Farol',x:636,y:492,i:'anchor',city:1,
  d:'Docas, estivadores, armazéns e o farol. Por aqui entra o sal, a seda e, às vezes, a peste.'},
 {id:'cemiterio',nome:'Cemitério da Colina',tipo:'Cemitério',reg:'Capital',c:'Cemitério',x:706,y:300,i:'grave',city:1,
  d:'Do coveiro Silas. Debaixo dele, ruínas mais antigas que o próprio reino.'},
 // Reino
 {id:'vhalkir',nome:'Selo de Vhalkir',tipo:'Ruína selada',reg:'Extremo Norte',x:600,y:78,i:'eye',
  d:'Um selo antigo no fundo de um lago escuro. O que dorme lá embaixo é o maior medo de Arcadia.'},
 {id:'norte',nome:'Montanhas do Norte',tipo:'Montanhas',reg:'Norte',x:432,y:140,i:'peak',
  d:'Picos frios, cavernas, lobos, grifos selvagens e, dizem, um dragão. Pastores e caçadores vivem nas encostas.'},
 {id:'brumafria',nome:'Brumafria',tipo:'Vila',reg:'Norte',x:740,y:178,i:'village',
  d:'Vila gelada das rendeiras e do convento da Abadessa Hilde. A última vila antes de Vhalkir.'},
 {id:'torre_estrelas',nome:'Torre das Estrelas',tipo:'Observatório',reg:'Oeste',x:330,y:218,i:'star',
  d:'A torre do astrólogo Melchior. Mapas do céu, cometas e profecias que às vezes acertam.'},
 {id:'colinas',nome:'Colinas do Oeste e Pedreiras',tipo:'Minas',reg:'Oeste',x:212,y:272,i:'pick',
  d:'Pedreiras, minas de prata e galerias profundas. Mineiros como Bram arriscam a vida no pó e no gás.'},
 {id:'argenthal',nome:'Argenthal',tipo:'Cidade',reg:'Oeste',x:100,y:215,i:'town',
  d:'Terra natal de Jodyr e de Rowan, o cavaleiro que o reino não queria reconhecer.'},
 {id:'mosteiro',nome:'Mosteiro das Colinas',tipo:'Mosteiro',reg:'Oeste',x:292,y:335,i:'monastery',
  d:'Monges copistas, vinho de missa e um noviço que vê Vhalkir em sonho.'},
 {id:'pastos_colinas',nome:'Pastos das Colinas',tipo:'Pastagens',reg:'Oeste',x:170,y:392,i:'sheep',
  d:'Ovelhas, cabras e a lã de Arcadia. Terra do criador Bento Lã.'},
 {id:'capital',nome:'A Capital',tipo:'Cidade murada',reg:'Centro',x:600,y:400,i:'castle',
  d:'Muralhas, castelo, templo e mercado no alto das colinas. Clique em "Capital" para ver cada bairro.'},
 {id:'floresta',nome:'Floresta Enevoada',tipo:'Floresta',reg:'Leste',x:968,y:300,i:'tree',
  d:'Mata densa do Povo da Floresta, da Anciã Sela e da curandeira Morwen. As árvores sussurram.'},
 {id:'lago',nome:'Lago da Voz',tipo:'Lago',reg:'Leste',x:900,y:448,i:'lake',
  d:'Um lago onde, à noite, uma voz canta. Quem entra atrás dela não volta.'},
 {id:'thorendis',nome:'Forte Thorendis',tipo:'Fortaleza',reg:'Fronteira Leste',x:1090,y:335,i:'fort',
  d:'O forte do General Thorin, pai de Valkiria. A primeira muralha contra Morgrath.'},
 {id:'ponte_seca',nome:'Ponte Seca',tipo:'Vila de fronteira',reg:'Fronteira Leste',x:1050,y:505,i:'village',
  d:'Vila da fronteira, tomada e queimada mais de uma vez nas guerras com Morgrath.'},
 {id:'morgrath',nome:'Reino de Morgrath',tipo:'Reino inimigo',reg:'Além da fronteira',x:1085,y:170,i:'wolf',
  d:'O reino do Rei Vorgath. Fome de terra, espiões, galés no rio e grifos de guerra.'},
 {id:'monte_claro',nome:'Santuário do Monte Claro',tipo:'Santuário',reg:'Sudeste',x:945,y:655,i:'shrine',
  d:'Destino das romarias de Severino. Mil velas sobem o monte na festa de Santa Aurélia.'},
 {id:'estrada',nome:'Estrada Real',tipo:'Estrada',reg:'Centro-Leste',x:790,y:470,i:'sign',
  d:'A grande estrada do reino. Caravanas, romeiros, bandidos, hospedarias e o cantador cego Aderaldo.'},
 {id:'vale',nome:'Vale do Trigo',tipo:'Campos',reg:'Sul',x:640,y:585,i:'wheat',
  d:'O celeiro de Arcadia. Lavradores, vaqueiros, vaquejadas e o velho Garrick, voz do vale.'},
 {id:'ventoalto',nome:'Moinhos de Ventoalto',tipo:'Moinhos',reg:'Sul',x:752,y:540,i:'mill',
  d:'Onde o trigo vira farinha, nas pás do moleiro Anselmo.'},
 {id:'pedraverde',nome:'Vila de Pedraverde',tipo:'Vila',reg:'Sul',x:520,y:612,i:'village',
  d:'Vila da lavradora Ana, da feira dos repentistas, da cocada e da lavoura coletiva.'},
 {id:'solares',nome:'Solares das Casas',tipo:'Terras nobres',reg:'Sudeste',x:840,y:620,i:'manor',
  d:'Os solares e terras das Casas Valcourt, Ashfeld, Crane, Marrav, Morvain, Vane e Pryce.'},
 {id:'montclaro',nome:'Montclaro',tipo:'Ducado',reg:'Sul',x:690,y:708,i:'keep',
  d:'As maiores terras do reino, disputadas entre o jovem Aurélio e a Casa Valcourt.'},
 {id:'sabugueiro',nome:'Aldeia de Sabugueiro',tipo:'Aldeia',reg:'Sudoeste',x:410,y:695,i:'village',
  d:'Aldeia pobre do lavrador Nestor, vizinha do pântano e sempre esquecida.'},
 {id:'pantano',nome:'Pântano de Lodomar',tipo:'Pântano',reg:'Sudoeste',x:230,y:600,i:'swamp',
  d:'Lama, bandidos e Nhá Joana, a curandeira que chamam de bruxa. No meio, uma pedra rúnica.'},
 {id:'sete_quedas',nome:'Cachoeira das Sete Quedas',tipo:'Cachoeira',reg:'Sudoeste',x:436,y:585,i:'falls',
  d:'Pontes de corda, a balsa do barqueiro Lino e um pouco de ouro na areia.'},
 {id:'vila_rio',nome:'Vila do Rio',tipo:'Vila de pescadores',reg:'Sul',x:505,y:528,i:'fish',
  d:'Pescadores como Tomé, redes rasgadas, peixes azuis e a benzedeira Mãe Quitéria.'},
 {id:'ilha',nome:'Ilha da Garça',tipo:'Ilha',reg:'Rio',x:310,y:658,i:'island',
  d:'Pequena ilha no meio do rio, disputada com Valdoria pelos mapas antigos.'},
 {id:'valdoria',nome:'Reino de Valdoria',tipo:'Reino vizinho',reg:'Sul',x:600,y:748,i:'banner',
  d:'Aliado de comércio e de humores. Terra do Embaixador Lucan e da Princesa Elenna.'},
 {id:'ostmar',nome:'Reino de Ostmar',tipo:'Reino do mar',reg:'Sudoeste',x:100,y:742,i:'ship',
  d:'Pequeno reino de portos e cavalos, rio abaixo, junto ao mar.'}
];
const LOC=Object.fromEntries(LOCAIS.map(l=>[l.id,l]));

/* ── Petição → lugar ── */
const TXT=[ // nomes próprios de lugar, do mais específico ao mais genérico
 ['vhalkir',/vhalkir|\bselo\b/i],['thorendis',/thorendis/i],['ponte_seca',/ponte seca/i],['pedraverde',/pedraverde/i],
 ['sabugueiro',/sabugueiro/i],['brumafria',/brumafria/i],['ventoalto',/ventoalto|moinho/i],['pantano',/lodomar|pântano/i],
 ['sete_quedas',/sete quedas|cachoeira/i],['montclaro',/montclaro/i],['argenthal',/argenthal/i],['monte_claro',/monte claro|romari/i],
 ['ilha',/ilha da garça/i],['pedra_fria',/pedra fria|prisão|presos/i],['torre_estrelas',/torre das estrelas|cometa|estrela/i],
 ['mosteiro',/mosteiro|monges/i],['academia',/academia/i],['biblioteca',/biblioteca/i],['cura',/casa de cura|enfermaria|parteir/i],
 ['ala',/ala arcana|\bmagos?\b|grimório|runa/i],['cemiterio',/cemitério|túmulo|enterr/i],['templo',/templo|bispo|catedral|missa|sino/i],
 ['taverna',/taverna|seresta|rua do sino/i],['forjas',/forja|ferreiro|arsenal|espada/i],['porto',/porto|cais|docas|estivador|navio|galé|farol/i],
 ['mercado',/mercado|feira|barraca/i],['muralhas',/muralha|portão|levadiça/i],['quartel',/quartel|soldad|recruta|sentinela/i],
 ['lago',/lago/i],['floresta',/floresta|árvore/i],['norte',/montanha|lobo|grifo|dragão|serpe/i],['colinas',/pedreira|\bminas?\b|mineir|colinas/i],
 ['castelo',/castelo|salão|trono|jardim|cozinha|herdeiro|coroação/i],['bairro_baixo',/bairro baixo|cidade baixa|beco/i],
 ['estrada',/estrada|caravana|carroç/i],['vila_rio',/\brio\b|pesca|barqueir/i],['vale',/vale|trigo|colheita|celeiro|lavrador|gado|boi/i]
];
const CASA={'Templo da Aurora':'templo','Torre do Templo':'templo','Ordem da Chama Pura':'templo','Ala Arcana':'ala','Torre de Vidro':'ala',
 'Casa de Cura':'cura','Biblioteca Real':'biblioteca','Arquivos Reais':'castelo','Conselho Real':'castelo','Tesouro Real':'castelo','Cozinha do Castelo':'castelo',
 'Jardins do Castelo':'castelo','Barbearia Real':'castelo','Colégio dos Arautos':'castelo','Estábulos Reais':'quartel','Guarda Real':'quartel','Arqueiros da Guarda':'quartel',
 'Veteranos da Guarda':'quartel','Forja Real':'forjas','Bairro das Forjas':'forjas','Academia Real':'academia','Taverna do Sino':'taverna','Rua do Sino':'taverna','Bardo Arcano':'taverna',
 'Guilda dos Mercadores':'mercado','Fiscais do Mercado':'mercado','Guilda dos Padeiros':'mercado','Guildas de Arcadia':'mercado','Comerciante da cidade':'mercado',
 'Mercado de Baixo':'mercado','Rua dos Ourives':'mercado','Rua dos Couros':'forjas','Rua dos Curtumes':'bairro_baixo','Oficina de Vidro':'forjas','Ateliê das Agulhas':'mercado',
 'Rua dos Escribas':'biblioteca','Aprendizes das guildas':'bairro_baixo','Bairro baixo':'bairro_baixo','Cidade Baixa':'bairro_baixo','Poços da Cidade':'bairro_baixo',
 'Tribunal da Cidade':'castelo','Lavadeiras do Rio':'vila_rio','Prisão Real Pedra Fria':'pedra_fria','Cemitério da Colina':'cemiterio',
 'Porto do Rio':'porto','Bairro do Porto':'porto','Guarda do Rio':'porto','Cervejaria do Rio':'porto','Tinturaria do Rio':'porto','Mercadora do rio':'porto',
 'Caravanas do Rio':'estrada','Estalagem do Grifo':'estrada','Estrada Real':'estrada','Casa Bancária Orsini':'mercado','Companhia das Índias do Sul':'porto','Companhia do Sal':'porto',
 'Casa Valcourt':'solares','Casa Ashfeld':'solares','Casa Crane':'solares','Casa Marrav':'solares','Casa Morvain':'solares','Casa Vane':'solares','Casa Pryce':'solares',
 'Casa Blackmere':'solares','Casa Corvane':'solares','Assembleia Nobre':'castelo','Cavaleiros de Arcadia':'solares','Pretendente de Montclaro':'montclaro',
 'Camponeses do Vale':'vale','Pastos do Vale':'vale','Engenho do Vale':'vale','Capela do Vale':'vale','Bandido do Vale':'vale','Vila de Pedraverde':'pedraverde','Feira de Pedraverde':'pedraverde',
 'Moinhos de Ventoalto':'ventoalto','Aldeia de Sabugueiro':'sabugueiro','Pântano de Lodomar':'pantano','Cachoeira das Sete Quedas':'sete_quedas','Vila do Rio':'vila_rio',
 'Benzedeira da Vila do Rio':'vila_rio','Montanhas do Norte':'norte','Patrulha do Norte':'norte','Vilas do Norte':'brumafria','Convento de Brumafria':'brumafria','Rendeiras de Brumafria':'brumafria',
 'Mercenária do norte':'norte','Floresta Enevoada':'floresta','Povo da Floresta':'floresta','Carvoeiros da Floresta':'floresta','Pastos das Colinas':'pastos_colinas','Pastores das Colinas':'pastos_colinas',
 'Mosteiro das Colinas':'mosteiro','Colinas do Oeste':'colinas','Companhia das Pedreiras':'colinas','Pedreiras do Norte':'colinas','Torre das Estrelas':'torre_estrelas','Ateliê da Colina':'cemiterio',
 'Romeiros do Monte Claro':'monte_claro','Ordem das Peregrinas':'monte_claro','Forte Thorendis':'thorendis','Guarnição do Sul':'vale','Patrulha do Sul':'vale','Vilas do Sul':'vale',
 'Reino de Valdoria':'valdoria','Trovador de Valdoria':'valdoria','Reino de Morgrath':'morgrath','Reino de Ostmar':'ostmar','Os Vigilantes':'templo','Cavaleiro de Argenthal':'argenthal',
 'Caravana dos Andarilhos':'estrada','Viajante do sul':'estrada','Viajante do leste':'mercado','Companhia Lâmina Cinza':'quartel','Torre dos Pombos':'castelo','Bairro dos Teares':'bairro_baixo'};
const GENERICAS=new Set(['Guarda Real','Conselho Real','Tesouro Real','Bardo Arcano','Sem nome','Sem casa','Sem Casa','Sem brasão','Os Vigilantes','Arquivos Reais']);
const NICHO_LOC={nobreza:'castelo',clero:'templo',burguesia:'mercado',povo:'bairro_baixo',guarda:'quartel',arcano:'ala'};
function scan(t){for(const[id,re] of TXT) if(re.test(t)) return id; return null}
const cache={};
function locDe(c){
  if(!c) return null; if(cache[c.id]) return cache[c.id];
  let id=scan(c.titulo);
  if(!id && CASA[c.casa] && !GENERICAS.has(c.casa)) id=CASA[c.casa];
  if(!id) id=scan(c.pedido);
  if(!id && CASA[c.casa]) id=CASA[c.casa];
  if(!id) id=NICHO_LOC[c.n]||'castelo';
  return cache[c.id]=id;
}

/* ── Personalidades ── */
const BIO={
 'Conselheiro Jodyr':['Conselheiro Real','Braço-direito e estrategista do Rei. Aquariano, sábio, formal e de ironia fina. Nascido em Argenthal, irmão de Serina. Questiona tudo, inclusive o Rei.'],
 'Capitã Valkiria':['Capitã da Guarda Real','Líder militar inspiradora e batalhadora. Ariana de voz firme e humor seco. Filha do General Thorin, irmã de Kael. Monta a égua Brasa e sonha com grifos.'],
 'Banx':['Bardo Arcano','Artista, espião e bufão-mago. Geminiano de metáforas e boatos. Mora praticamente na Taverna do Sino e conhece cada lavadeira da cidade.'],
 'Irmã Maelis':['Casa de Cura','A irmã que segura as febres e as pestes do reino. Fala pouco, trabalha muito e nunca escolhe paciente por sangue.'],
 'Coletor-Mor Aldous':['Tesouro Real','Guardião do cofre e inventor de impostos. Mora numa casa que, curiosamente, não paga nenhum.'],
 'Arquimaga Ondine':['Ala Arcana','A maga que segura o selo de Vhalkir há anos, sem dormir direito. Orgulhosa, cansada e indispensável.'],
 'Bispo Aurelian Vey':['Templo da Aurora','Bispo de carruagem dourada e sermões ambiciosos. Ouro demais e fé de menos, dizem nas tavernas.'],
 'Sumo-Sacerdotisa Elowen':['Templo da Aurora','A voz serena do Templo. Pede pouco, e quando pede é porque precisa. Rival silenciosa do Bispo.'],
 'Embaixador Lucan Thessaly':['Reino de Valdoria','Embaixador honesto de um rei nem tanto. Entrega recados que não gosta de entregar.'],
 'Duque Aldren Valcourt':['Casa Valcourt','O nobre mais poderoso de Arcadia. Retratos, banquetes e ambição. Foi bicado por um pato, e o reino nunca esqueceu.'],
 'Velho Garrick':['Camponeses do Vale','A voz do Vale do Trigo. Viu fome, chuva de pedra e reis passarem. Ainda pede com educação.'],
 'Mago Theron Ashgrave':['Ala Arcana','Inventor de runas, corujas mensageiras, velas eternas e pontes de luz. Meio maluco. Quase sempre útil.'],
 'General Thorin':['Forte Thorendis','Pai de Valkiria e Kael. Guarda a fronteira leste contra Morgrath há décadas.'],
 'Tenente Kael':['Guarda Real','Irmão de Valkiria, estrategista promissor. Apaixonado pela Princesa Elenna de Valdoria.'],
 'Serina Valdimere':['Biblioteca Real','Irmã de Jodyr e guardiã da Biblioteca. Lê línguas mortas e acha mapas que ninguém achava.'],
 'Mestre-de-obras Dorran':['Guilda dos Pedreiros','Pedreiro de pontes, muralhas e aquedutos. Noivo de Serina, para desespero discreto de Jodyr.'],
 'Inquisidor Malvert':['Ordem da Chama Pura','Fanático da Chama Pura. Vê bruxa em toda curandeira e heresia em todo livro.'],
 'Signore Orsini':['Casa Bancária Orsini','Banqueiro de sorriso de gato. Empresta fácil, cobra caro e já fugiu para Morgrath com ouro da Coroa.'],
 'Velha Morwen':['Floresta Enevoada','Curandeira da mata, chamada de bruxa pelo Templo. Fechou cortes que nenhum médico fechava.'],
 'Anciã Sela':['Povo da Floresta','A voz do Povo da Floresta. Fala pelas árvores e pelos mortos que dormem nelas.'],
 'Pescador Tomé':['Vila do Rio','Pesca desde os seis anos. Perdeu barco, casa e irmão para o rio. Ainda traz peixe de presente ao castelo.'],
 'Lavradora Ana':['Vila de Pedraverde','Lavradora valente de Pedraverde. Defendeu o sítio da avó contra o Barão Crane.'],
 'Barão Halvard Crane':['Casa Crane','Nobre de chapéu de pluma e caráter duvidoso. Ligado à taça envenenada do Rei.'],
 'Condessa Ysolde Marrav':['Casa Marrav','Dona dos bosques comunais que tomou do povo. Gosta de caçar, de seda e de torres.'],
 'Lady Mirela Ashfeld':['Casa Ashfeld','Herdeira justa pela lei antiga, avó dos gêmeos Ashfeld. Uma das poucas nobres que o povo respeita.'],
 'Lady Corvina Morvain':['Casa Morvain','Mãe do jovem Morvain preso por traição. Luta pela família com unhas e dentes.'],
 'Lorde Pryce':['Casa Pryce','Jovem lorde, ambicioso e esquentado. Duelos, apostas e milícias.'],
 'Sir Edric Faulkner':['Cavaleiros de Arcadia','Velho cavaleiro de torneios e justas. Honesto. Os filhos, nem tanto.'],
 'Sir Godric o Velho':['Cavaleiros de Arcadia','O último cavaleiro vivo da antiga batalha de Thorendis.'],
 'Mestra Ilsa Brannoc':['Guilda dos Mercadores','Chefe da Guilda dos Mercadores. Feiras, crises e negociações duras.'],
 'Mestre Hollis':['Guilda dos Padeiros','Padeiro-chefe. Briga pelo preço do pão e já foi candidato a prefeito.'],
 'Jovem Tomas':['Aprendizes das guildas','Aprendiz de discurso afiado. Lidera greves, estudantes e o sonho de um parlamento do povo.'],
 'Menina Lina':['Rua do Sino','Dona do cachorro Bolota. Aprendeu a ler sozinha e lidera os estudantes pobres da Academia.'],
 'Mestra Liana Orwen':['Academia Real','Professora que abriu a Academia aos filhos do povo, sala por sala.'],
 'Ferreiro-Mor Gundar':['Forja Real','Ferreiro da Coroa. Aprendeu o aço que não quebra quando era prisioneiro de Morgrath.'],
 'Ferreiro Hask':['Bairro das Forjas','Ferreiro do povo, dono do martelo que canta.'],
 'Rei Vorgath de Morgrath':['Reino de Morgrath','O rei inimigo. Oferece paz, casamentos e compras de terra, sempre com uma faca atrás da fita.'],
 'Princesa Elenna':['Reino de Valdoria','Herdeira de Valdoria, esperta e apaixonada por Kael. Já fugiu a pé, na chuva, até os portões.'],
 'O Estranho':['Sem nome','Um homem que não envelhece, com moedas de trezentos anos. Diz ter selado Vhalkir com o Fundador.'],
 'Encapuzado sem nome':['Os Vigilantes','Emissário dos Vigilantes, a seita do capuz cinza que vigia, ou usa, o selo de Vhalkir.'],
 'Rowan de Argenthal':['Cavaleiro de Argenthal','O bastardo de Argenthal que virou Cavaleiro Negro. Amado pelo povo.'],
 'O Raposa':['Bandido do Vale','Bandido que rouba carroças de nobres e deixa trigo na porta dos pobres.'],
 'Nhá Joana':['Pântano de Lodomar','Curandeira do pântano. Sabe dos bandidos, das ervas e da pedra rúnica de Lodomar.'],
 'Carcereiro Mord':['Prisão Real Pedra Fria','Carcereiro da Pedra Fria. Vende comida extra aos presos ricos.'],
 'Astrólogo Melchior':['Torre das Estrelas','Lê o céu. Acertou o eclipse e errou doze casamentos.'],
 'Padre Lorcan':['Templo da Aurora','Padre do povo, de consciência pesada e coração grande. Apaixonado pela viúva Rosa.'],
 'Irmão Tobias':['Templo da Aurora','Irmão simples, de quermesses, festas da colheita e lágrimas abraçado ao sino.'],
 'Sacerdote Fennick':['Capela do Vale','Sacerdote do vale de milagres suspeitos, fontes brilhantes e profecias de fim do mundo.'],
 'Abadessa Hilde':['Convento de Brumafria','Abadessa do convento gelado de Brumafria, com vinte irmãs e quarenta órfãs.'],
 'Almirante Corvo':['Guarda do Rio','Comandante dos barcos de patrulha e da frota de guerra do rio.'],
 'Batedor Fynn':['Patrulha do Norte','Batedor da fronteira norte. Quer ver o que há além das montanhas.'],
 'Caçador Jorah':['Montanhas do Norte','Caçador das montanhas. Achou grifos, ovos de serpe e a fera de Brumafria.'],
 'Mestre Lazlo':['Caravana dos Andarilhos','Chefe da caravana de artistas, ferreiros e videntes que atravessa o reino.'],
 'Taverneira Bessa':['Taverna do Sino','Dona da Taverna do Sino. Sabe de tudo antes de todo mundo, menos do Banx.'],
 'Mineiro Bram':['Pedreiras do Norte','Mineiro de pulmão cansado que fala pelos que estão lá embaixo.'],
 'Zé Calango':['Feira de Pedraverde','Repentista que desafiou Banx na feira.'],
 'Repentista Zé Calango':['Feira de Pedraverde','Repentista que desafiou Banx num duelo de rimas na feira de Pedraverde.'],
 'Guerreira Ingrid':['Mercenária do norte','Guerreira das terras geladas. Machado de duas mãos e um desafio à Capitã.'],
 'Darrow':['Arqueiros da Guarda','O melhor arqueiro da Guarda, filho de lavrador, noivo de uma moça da floresta.']
};
const INST={
 'Guarda Real':['guarda','swords','Os soldados de Arcadia, sob o comando da Capitã Valkiria.'],
 'Templo da Aurora':['clero','temple','A fé oficial do reino, dividida entre a Sumo-Sacerdotisa Elowen e o Bispo Aurelian.'],
 'Ala Arcana':['arcano','tower','Os magos que guardam as runas e o selo de Vhalkir.'],
 'Casa de Cura':['clero','heart','As irmãs que cuidam dos doentes do reino.'],
 'Conselho Real':['corte','castle','O círculo de quem aconselha o Rei.'],
 'Tesouro Real':['corte','coin','Quem conta, cobra e guarda o ouro da Coroa.'],
 'Casa Valcourt':['nobreza','manor','A Casa mais rica e mais ambiciosa de Arcadia.'],
 'Casa Ashfeld':['nobreza','manor','Casa antiga e justa, sempre perto de falir.'],
 'Casa Crane':['nobreza','manor','Casa do Barão Halvard, de chapéu de pluma e ideias ruins.'],
 'Casa Marrav':['nobreza','manor','Casa caçadora, dona de bosques e torres.'],
 'Casa Morvain':['nobreza','manor','Casa marcada pela traição de um filho.'],
 'Casa Vane':['nobreza','manor','Casa de barões que defendem servidão e cercas.'],
 'Casa Pryce':['nobreza','manor','Casa jovem e esquentada.'],
 'Casa Blackmere':['nobreza','manor','Casa guerreira da fronteira, de cavaleiros com grifo dourado.'],
 'Assembleia Nobre':['nobreza','castle','A voz conjunta das Casas, quando elas concordam. Raramente.'],
 'Cavaleiros de Arcadia':['nobreza','swords','Os cavaleiros de justa e de guerra do reino.'],
 'Guilda dos Mercadores':['burguesia','tent','Os mercadores do Mercado Central.'],
 'Guilda dos Padeiros':['burguesia','wheat','Quem faz o pão, e decide o preço dele.'],
 'Guilda dos Pedreiros':['burguesia','wall','Pontes, muralhas, aquedutos e catedrais.'],
 'Casa Bancária Orsini':['burguesia','coin','O banco de Orsini. Empréstimos generosos, juros nem tanto.'],
 'Forja Real':['guarda','anvil','A forja de Gundar, que arma a Guarda.'],
 'Academia Real':['povo','book','A escola do reino, aos poucos aberta ao povo.'],
 'Biblioteca Real':['corte','scroll','Livros, mapas e segredos sob a guarda de Serina.'],
 'Taverna do Sino':['povo','mug','A taverna do povo e dos boatos.'],
 'Camponeses do Vale':['povo','wheat','Os lavradores do Vale do Trigo.'],
 'Vila do Rio':['povo','fish','Pescadores e lavadeiras da beira do rio.'],
 'Aprendizes das guildas':['povo','houses','Os jovens que fazem os ofícios e as greves.'],
 'Os Vigilantes':['arcano','eye','A seita do capuz cinza, mais antiga que a coroa.'],
 'Ordem da Chama Pura':['clero','temple','A Inquisição de Malvert.'],
 'Povo da Floresta':['povo','tree','O povo antigo da Floresta Enevoada.'],
 'Forte Thorendis':['guarda','fort','A fortaleza da fronteira leste.'],
 'Reino de Valdoria':['reinos','banner','O vizinho do sul, aliado de comércio.'],
 'Reino de Morgrath':['reinos','wolf','O vizinho do leste, inimigo de sempre.'],
 'Reino de Ostmar':['reinos','ship','O reino dos portos e cavalos, rio abaixo.']
};
const GRUPOS=[['todos','Todos'],['corte','A Corte'],['nobreza','Casas Nobres'],['clero','Templo e Fé'],['guarda','Guarda e Fronteira'],['arcano','Arcano e Mistérios'],['burguesia','Guildas e Comércio'],['povo','Povo e Vilas'],['reinos','Reinos Vizinhos']];
const CORTE=new Set(['Conselheiro Jodyr','Capitã Valkiria','Banx','Coletor-Mor Aldous','Escriba-Chefe Odo','Cozinheira-Mor Gertrudes','Jardineiro-Mor Florian','Barbeiro Fígaro','Arauto-Mor Gilles','Serina Valdimere','Velho Bartô']);
let PESSOAS=null, CASAS=null;
function build(){
  if(PESSOAS) return;
  const P={},K={};
  (W.CARTAS||[]).forEach(c=>{
    const p=P[c.quem]||(P[c.quem]={nome:c.quem,casas:{},nich:{},cards:[],selos:{},locs:{}});
    p.casas[c.casa]=(p.casas[c.casa]||0)+1; p.nich[c.n]=(p.nich[c.n]||0)+1; p.cards.push(c); p.selos[c.selo]=(p.selos[c.selo]||0)+1;
    const l=locDe(c); p.locs[l]=(p.locs[l]||0)+1;
    const k=K[c.casa]||(K[c.casa]={nome:c.casa,pessoas:new Set(),n:0,nich:{},locs:{}}); k.pessoas.add(c.quem); k.n++; k.nich[c.n]=(k.nich[c.n]||0)+1; k.locs[l]=(k.locs[l]||0)+1;
  });
  const top=o=>Object.entries(o).sort((a,b)=>b[1]-a[1])[0]?.[0];
  PESSOAS=Object.values(P).map(p=>{
    const casa=top(p.casas), n=top(p.nich), inst=INST[casa];
    let g=CORTE.has(p.nome)?'corte':inst?inst[0]:(['Reino de Valdoria','Reino de Morgrath','Reino de Ostmar','Trovador de Valdoria'].includes(casa)?'reinos':n==='arcano'?'arcano':n);
    if(/^Casa |Assembleia|Cavaleiro/.test(casa)&&!CORTE.has(p.nome)) g='nobreza';
    const b=BIO[p.nome];
    return {nome:p.nome,casa,grupo:g,nicho:n,selo:top(p.selos),loc:top(p.locs),n:p.cards.length,cards:p.cards,
      papel:b?b[0]:casa, bio:b?b[1]:null, alias:p.nome.split(' ').filter(w=>/^[A-ZÁÉÍÓÚ]/.test(w)&&w.length>3).slice(-1)[0]};
  }).sort((a,b)=>b.n-a.n);
  CASAS=Object.values(K).map(k=>({nome:k.nome,n:k.n,pessoas:[...k.pessoas],loc:top(k.locs),nicho:top(k.nich),inst:INST[k.nome]})).sort((a,b)=>b.n-a.n);
}
/* nomes citados no texto de uma petição */
const STOP=new Set(['Arcadia','Coroa','Majestade','Templo','Guarda','Real','Mestre','Mestra','Irmão','Irmã','Velho','Velha','Jovem','Menina','Menino','Lady','Lorde','Sir','Dona','Casa','Reino']);
function citados(c){
  build(); if(!c) return [];
  const t=c.titulo+' '+c.pedido, out=[];
  PESSOAS.forEach(p=>{if(p.nome===c.quem)return; const a=p.alias; if(a&&!STOP.has(a)&&new RegExp('\\b'+a+'\\b').test(t)) out.push(p.nome)});
  return out.slice(0,4);
}

/* ── Ícones SVG ── (desenhados em 40×40, traço tinta, preenchimento pergaminho) */
const IC={
 castle:'<path d="M6 36V16h4v4h4v-8l6-6 6 6v8h4v-4h4v20z" fill="var(--f)"/><path d="M6 16v-4h4v4M30 16v-4h4v4M14 12V8M26 12V8M17 36v-7a3 3 0 0 1 6 0v7M20 6V2l4 2-4 2" fill="none"/><path d="M10 24h3M27 24h3"/>',
 tower:'<path d="M14 36V14h12v22z" fill="var(--f)"/><path d="M12 14l8-12 8 12z" fill="var(--a)"/><circle cx="20" cy="22" r="3"/><path d="M17 36v-5h6v5M20 2v-1"/><path d="M28 6l2-2M31 9h2M9 9h2" stroke-dasharray="1 2"/>',
 swords:'<path d="M8 32L30 10M30 10l2-6-6 2M12 28l-4 4M10 26l4 4" fill="none"/><path d="M32 32L10 10M10 10L8 4l6 2M28 28l4 4M30 26l-4 4" fill="none"/><circle cx="20" cy="20" r="4" fill="var(--f)"/>',
 wall:'<path d="M3 36V18h5v-4h5v4h5v-4h5v4h5v-4h5v4h4v18z" fill="var(--f)"/><path d="M3 26h34M10 18v8M20 26v10M28 18v8M14 30v6M26 30v6"/>',
 prison:'<rect x="7" y="10" width="26" height="26" fill="var(--f)"/><path d="M7 10l13-7 13 7M13 14v22M20 14v22M27 14v22M7 22h26"/>',
 temple:'<path d="M6 36V20l14-10 14 10v16z" fill="var(--f)"/><path d="M20 10V2M17 5h6M4 21l16-12 16 12M15 36v-8a5 5 0 0 1 10 0v8"/><circle cx="20" cy="18" r="2.5" fill="var(--a)"/>',
 book:'<path d="M4 10c6-3 11-3 16 1 5-4 10-4 16-1v24c-6-3-11-3-16 1-5-4-10-4-16-1z" fill="var(--f)"/><path d="M20 11v24M8 16h8M8 21h8M24 16h8M24 21h8"/>',
 scroll:'<path d="M10 6h20a4 4 0 0 1 0 8H30v20a4 4 0 0 1-4 4H8a4 4 0 0 1 0-8h2z" fill="var(--f)"/><path d="M14 16h12M14 21h12M14 26h8M10 30a4 4 0 0 1 4 4"/>',
 heart:'<path d="M20 34S5 25 5 15a7 7 0 0 1 15-3 7 7 0 0 1 15 3c0 10-15 19-15 19z" fill="var(--f)"/><path d="M20 14v12M14 20h12" stroke="var(--a)" stroke-width="3"/>',
 tent:'<path d="M4 34L20 6l16 28z" fill="var(--f)"/><path d="M20 6v28M12 34l8-12 8 12M20 6V2l5 2-5 2"/><path d="M4 34h32"/>',
 mug:'<path d="M9 10h18v24H9z" fill="var(--f)"/><path d="M27 15h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4M13 14v16M18 14v16M23 14v16"/><path d="M8 10c0-4 4-5 6-3 2-3 8-3 9 0 3-2 6 0 5 3" fill="var(--a)"/>',
 anvil:'<path d="M5 14h24c0 5 4 7 8 7v3H27l-3 4h4v6H12v-6h4l-3-4H9c-3 0-4-4-4-10z" fill="var(--f)"/><path d="M22 4l6 6M26 2l-8 8" />',
 houses:'<path d="M3 36V22l8-7 8 7v14zM19 36V18l9-8 9 8v18z" fill="var(--f)"/><path d="M9 36v-6h4v6M25 36v-7h5v7M23 21h3M31 21h3"/>',
 anchor:'<circle cx="20" cy="7" r="3" fill="var(--f)"/><path d="M20 10v26M12 16h16M6 24c0 7 6 12 14 12s14-5 14-12M6 24l-2 3M34 24l2 3" fill="none"/>',
 grave:'<path d="M12 36V14a8 8 0 0 1 16 0v22z" fill="var(--f)"/><path d="M20 12v14M15 17h10M6 36h28"/>',
 eye:'<path d="M2 20s7-11 18-11 18 11 18 11-7 11-18 11S2 20 2 20z" fill="var(--f)"/><circle cx="20" cy="20" r="6" fill="var(--a)"/><circle cx="20" cy="20" r="2.5" fill="currentColor"/><path d="M20 3v3M20 34v3M5 6l3 3M35 6l-3 3"/>',
 peak:'<path d="M2 36L15 10l7 11 5-6 11 21z" fill="var(--f)"/><path d="M11 18l4-8 4 6M24 19l3-4 3 5" fill="#fff" stroke-width="1.4"/>',
 village:'<path d="M4 36V24l7-6 7 6v12zM18 36V20l8-7 8 7v16z" fill="var(--f)"/><path d="M9 36v-5h4v5M24 36v-6h4v6M30 16v-5h3v8"/>',
 star:'<path d="M15 36V16h10v20z" fill="var(--f)"/><path d="M13 16l7-8 7 8z" fill="var(--a)"/><path d="M30 4l1.5 3 3 .5-2.2 2 .6 3.2-2.9-1.6-2.9 1.6.6-3.2-2.2-2 3-.5z" fill="var(--a)"/><path d="M18 36v-6h4v6M18 22h4"/>',
 pick:'<path d="M6 36L24 14" stroke-width="3"/><path d="M14 8c8-2 16 2 20 10-6-5-12-6-18-4z" fill="var(--f)"/><path d="M22 36l4-8 6 2 4 6z" fill="var(--f)"/>',
 town:'<path d="M3 36V20l6-6 6 6v16zM15 36V12l6-8 6 8v24zM27 36V22l5-5 5 5v14z" fill="var(--f)"/><path d="M19 36v-6h4v6M21 4V1"/>',
 monastery:'<path d="M4 36V22h32v14z" fill="var(--f)"/><path d="M14 22V12l6-6 6 6v10" fill="var(--f)"/><path d="M20 6V1M17 3h6M8 28h4M28 28h4M18 36v-6h4v6"/>',
 sheep:'<ellipse cx="20" cy="22" rx="12" ry="8" fill="var(--f)"/><circle cx="32" cy="18" r="4" fill="var(--a)"/><path d="M12 29v6M17 30v5M23 30v5M28 29v6M10 18c-2-3 1-5 3-3M17 15c0-3 4-3 4 0M24 15c1-3 5-2 4 1"/>',
 tree:'<path d="M20 4l10 14h-5l7 10H8l7-10h-5z" fill="var(--f)"/><path d="M20 28v8"/><path d="M8 34l3-8 3 8M28 34l3-8 3 8" fill="var(--a)" stroke-width="1.2"/>',
 lake:'<ellipse cx="20" cy="24" rx="16" ry="9" fill="var(--f)"/><path d="M10 22c3-2 5 2 8 0s5 2 8 0 4 2 6 0M13 27c3-2 5 2 8 0s4 2 6 0"/><path d="M28 8c0 3-2 4-2 7M31 8c0 3 2 4 2 7" stroke-width="1.2"/>',
 fort:'<path d="M3 36V14h6v4h4v-4h14v4h4v-4h6v22z" fill="var(--f)"/><path d="M15 36v-8a5 5 0 0 1 10 0v8M20 14V4l6 3-6 3M3 22h34"/>',
 wolf:'<path d="M8 34l2-14-4-12 8 6h12l8-6-4 12 2 14-12-4z" fill="var(--f)"/><circle cx="15" cy="20" r="1.5" fill="currentColor"/><circle cx="25" cy="20" r="1.5" fill="currentColor"/><path d="M17 27l3 2 3-2"/>',
 shrine:'<path d="M2 36L20 6l18 30z" fill="var(--f)"/><path d="M16 36V24h8v12M20 24v-6M17 20h6"/><path d="M20 6V2" />',
 sign:'<path d="M18 36V6" stroke-width="3"/><path d="M18 8h16l3 4-3 4H18zM18 20H6l-3 4 3 4h12z" fill="var(--f)"/>',
 wheat:'<path d="M12 36V10M20 36V6M28 36V10"/><path d="M12 10c-3-2-3-5 0-6 3 1 3 4 0 6zM20 6c-3-2-3-5 0-6 3 1 3 4 0 6zM28 10c-3-2-3-5 0-6 3 1 3 4 0 6zM12 18l-4-3M12 18l4-3M20 14l-4-3M20 14l4-3M28 18l-4-3M28 18l4-3" fill="var(--a)"/>',
 mill:'<path d="M14 36l2-18h8l2 18z" fill="var(--f)"/><path d="M20 16L8 4M20 16L32 4M20 16L8 28M20 16L32 28" stroke-width="2.2"/><circle cx="20" cy="16" r="2.5" fill="var(--a)"/>',
 manor:'<path d="M4 36V18h32v18z" fill="var(--f)"/><path d="M2 19L20 6l18 13M10 24h4v5h-4zM26 24h4v5h-4zM17 36v-8h6v8M30 12V6h3v8"/>',
 keep:'<path d="M10 36V12h20v24z" fill="var(--f)"/><path d="M10 12V8h4v4h4V8h4v4h4V8h4v4M16 36v-7a4 4 0 0 1 8 0v7M15 18h3M22 18h3"/>',
 swamp:'<ellipse cx="20" cy="28" rx="16" ry="6" fill="var(--f)"/><path d="M8 28V14M12 28V10M28 28V12M32 28V16M8 14c-1-3 1-5 2-3M12 10c-1-3 1-5 2-3M28 12c-1-3 1-5 2-3"/><path d="M14 30c2-1 4 1 6 0s4 1 6 0"/>',
 falls:'<path d="M4 8h32v6H4z" fill="var(--f)"/><path d="M10 14v20M15 14v22M20 14v18M25 14v22M30 14v20" stroke-dasharray="4 2"/><ellipse cx="20" cy="36" rx="16" ry="3" fill="var(--a)"/>',
 fish:'<path d="M4 20c6-8 18-8 24 0-6 8-18 8-24 0z" fill="var(--f)"/><path d="M28 20l8-6v12z" fill="var(--a)"/><circle cx="11" cy="18" r="1.5" fill="currentColor"/><path d="M15 15c2 3 2 7 0 10"/>',
 island:'<ellipse cx="20" cy="30" rx="16" ry="6" fill="var(--a)"/><path d="M12 30c0-6 4-10 8-10s8 4 8 10z" fill="var(--f)"/><path d="M22 20c0-6 2-10 2-12M24 8c3-2 7-1 8 2M24 8c-3-2-7-1-8 2"/>',
 banner:'<path d="M10 4v32" stroke-width="2.5"/><path d="M10 6h22l-5 7 5 7H10z" fill="var(--f)"/><path d="M15 13h10"/>',
 ship:'<path d="M4 26h32l-5 8H9z" fill="var(--f)"/><path d="M20 26V4M20 6l12 16H20M20 8L10 22h10" fill="var(--a)"/>',
 coin:'<circle cx="20" cy="20" r="14" fill="var(--f)"/><circle cx="20" cy="20" r="10"/><path d="M20 13v14M16 16h8M16 24h8"/>'
};
const svgIcon=(k,size)=>`<svg viewBox="0 0 40 40" width="${size||24}" height="${size||24}" class="ico" aria-hidden="true">${IC[k]||IC.village}</svg>`;

/* ── Terreno (gerado uma vez) ── */
function rnd(seed){return()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646}}
function terreno(){
  const r=rnd(42);let g='';
  // montanhas
  for(let i=0;i<70;i++){const x=240+r()*720,y=40+r()*150; if(Math.hypot(x-600,y-80)<70) continue; const s=14+r()*20;
    g+=`<path class="mt" d="M${x-s} ${y+s*.6}L${x} ${y-s*.7}L${x+s} ${y+s*.6}Z"/><path class="mts" d="M${x} ${y-s*.7}L${x+s} ${y+s*.6}L${x+s*.25} ${y+s*.6}Z"/><path class="mtn" d="M${x-s*.3} ${y-s*.2}L${x} ${y-s*.7}L${x+s*.3} ${y-s*.2}"/>`}
  // colinas
  for(let i=0;i<34;i++){const x=110+r()*290,y=230+r()*200,s=12+r()*16; g+=`<path class="hl" d="M${x-s} ${y}Q${x} ${y-s*1.1} ${x+s} ${y}"/>`}
  // floresta
  for(let i=0;i<150;i++){const x=850+r()*240,y=215+r()*360; if(Math.hypot(x-900,y-448)<44) continue; const s=7+r()*7;
    g+=`<path class="tr" d="M${x} ${y-s*1.6}L${x+s} ${y+s*.4}L${x-s} ${y+s*.4}Z"/><path class="trk" d="M${x} ${y+s*.4}v${s*.5}"/>`}
  // campos
  for(let i=0;i<28;i++){const x=560+r()*270,y=540+r()*170,w=24+r()*30,h=14+r()*14,a=(r()*30-15).toFixed(1);
    g+=`<g transform="rotate(${a} ${x} ${y})"><rect class="fd${i%3}" x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="2"/>`+
      [1,2,3].map(k=>`<path class="fdl" d="M${x-w/2+2} ${y-h/2+k*h/4}h${w-4}"/>`).join('')+`</g>`}
  // pântano
  for(let i=0;i<26;i++){const x=180+r()*120,y=565+r()*80; g+=`<path class="sw" d="M${x} ${y}v-9M${x+3} ${y}v-6M${x-3} ${y}v-5"/>`}
  for(let i=0;i<7;i++){const x=180+r()*120,y=570+r()*70; g+=`<ellipse class="swp" cx="${x}" cy="${y}" rx="${10+r()*14}" ry="${4+r()*4}"/>`}
  return g;
}
const RIO='M600 108C664 176 742 238 722 322C708 384 702 440 640 488C566 540 520 500 482 545C440 596 384 612 322 652C252 700 168 742 40 796';
const ESTRADAS=['M600 495C620 540 640 560 640 585C650 640 680 680 690 708','M700 410C740 430 770 455 790 470C860 510 980 500 1050 505C1080 470 1100 400 1105 335',
 'M505 380C430 360 360 350 292 335C230 300 150 240 92 212','M600 300C640 250 700 210 740 178C720 140 660 110 600 92','M640 585C590 600 550 605 520 612C480 640 440 670 410 695','M790 470C820 540 830 580 840 620C900 640 940 650 975 655'];

/* ── Render do mapa ── */
let modo='reino', vb={x:0,y:0,w:1200,h:800}, alvo=null, foco=null;
const VBS={reino:{x:0,y:0,w:1200,h:800},capital:{x:448,y:292,w:306,h:204}};
function pinsAtuais(S,cur){
  const out=[]; if(cur) out.push({loc:locDe(cur),tipo:'aud',t:cur.titulo,selo:cur.selo,quem:cur.quem,r:cur.r});
  (S&&S.vigs||[]).forEach(g=>{const c=(W.CARTAS||[]).find(x=>x.titulo===g.titulo&&x.quem===g.quem); const l=c?locDe(c):(g.n?NICHO_LOC[g.n]:'castelo'); out.push({loc:l,tipo:'dec',t:g.nome,selo:g.selo||'📜',quem:g.quem,left:g.left})});
  return out;
}
function renderMapa(el,S,cur){
  build();
  const pins=pinsAtuais(S,cur);
  const byLoc={};pins.forEach(p=>{(byLoc[p.loc]=byLoc[p.loc]||[]).push(p)});
  const reg=l=>{const m=(W.CARTAS||[]).filter(c=>locDe(c)===l.id).length;return m};
  const pinPos=(p)=>{const l=LOC[p.loc]; if(!l) return null; return (modo==='reino'&&l.city)?LOC.capital:l};
  // agrupar pins por posição
  const groups={};pins.forEach(p=>{const l=pinPos(p);if(!l)return;(groups[l.id]=groups[l.id]||{l,ps:[]}).ps.push(p)});
  const cap=modo==='capital';
  el.innerHTML=`
  <div class="mapwrap">
   <div class="maptools">
     <div class="seg"><button data-m="reino" class="${!cap?'on':''}">🗺️ Reino</button><button data-m="capital" class="${cap?'on':''}">🏰 Capital</button></div>
     <div class="mleg"><span><i class="lp lp-a"></i>Audiência atual</span><span><i class="lp lp-d"></i>Decreto em vigor</span><span><i class="lp lp-x"></i>Lugar</span></div>
   </div>
   <div class="mapbox" id="mapbox">
    <svg id="mapsvg" viewBox="${vb.x} ${vb.y} ${vb.w} ${vb.h}" preserveAspectRatio="xMidYMid meet">
     <defs>
      <filter id="paper"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 .35  0 0 0 0 .25  0 0 0 0 .1  0 0 0 .09 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
      <radialGradient id="vig" cx="50%" cy="50%" r="70%"><stop offset="60%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#3a2410" stop-opacity=".45"/></radialGradient>
      <radialGradient id="lakeV"><stop offset="0" stop-color="#160f22"/><stop offset="1" stop-color="#3b3156"/></radialGradient>
      <pattern id="waves" width="16" height="8" patternUnits="userSpaceOnUse"><path d="M0 4q4-4 8 0t8 0" fill="none" stroke="#6f8aa0" stroke-width=".8" opacity=".5"/></pattern>
     </defs>
     <rect x="-200" y="-200" width="1600" height="1200" fill="#e9d6a8"/>
     <rect x="0" y="0" width="1200" height="800" fill="#efdfb6"/>
     <rect x="0" y="0" width="1200" height="800" filter="url(#paper)"/>
     <path d="M0 720C120 700 160 770 80 800H0Z" fill="url(#waves)" opacity=".8"/>
     <g class="terr">${terreno()}</g>
     <path d="${RIO}" class="rio1"/><path d="${RIO}" class="rio2"/>
     <ellipse cx="600" cy="84" rx="62" ry="34" fill="url(#lakeV)" stroke="#2a1c0d" stroke-width="1.5"/>
     <ellipse cx="600" cy="84" rx="40" ry="20" fill="none" stroke="#a27ce0" stroke-width="1.2" stroke-dasharray="3 4" class="spin"/>
     <ellipse cx="900" cy="448" rx="36" ry="20" fill="#8fb0c4" stroke="#2a1c0d" stroke-width="1.2"/>
     ${ESTRADAS.map(d=>`<path d="${d}" class="estr"/>`).join('')}
     <path d="M1135 120V700" class="fronteira"/><text x="1150" y="420" class="ftxt" transform="rotate(90 1150 420)">FRONTEIRA DE MORGRATH</text>
     <path d="M200 772C400 760 800 764 1000 772" class="fronteira"/><text x="830" y="790" class="ftxt">FRONTEIRA DE VALDORIA</text>
     <!-- capital -->
     <circle cx="600" cy="400" r="${cap?112:96}" class="cidadeF"/>
     <circle cx="600" cy="400" r="${cap?112:96}" class="cidadeM"/>
     ${cap?`<path d="M560 452C590 470 620 480 640 488" class="estr"/><path d="M520 340C560 360 600 360 640 350" class="estr" opacity=".5"/>`:''}
     <!-- lugares -->
     ${LOCAIS.filter(l=>cap?(l.city||l.id!=='capital'):(!l.city)).map(l=>{
       const s=l.city?(cap?22:0):(l.id==='capital'?(cap?0:60):38); if(!s) return '';
       const lab=l.city?6.4:(l.id==='capital'?16:13.5), ofs=s/2+ (l.city?6.5:13);
       const n=reg(l);
       return `<g class="loc ${foco===l.id?'foco':''} ${l.city?'cty':''}" data-id="${l.id}" transform="translate(${l.x} ${l.y})" style="--d:${(l.x+l.y)%9*40}ms">
         <circle r="${s*.62}" class="halo"/>
         <g transform="translate(${-s/2} ${-s/2}) scale(${s/40})" class="gly">${IC[l.i]}</g>
         <text y="${ofs}" class="lbl" style="font-size:${lab}px">${l.city?l.c:l.nome}</text>
         ${n&&!l.city&&l.id!=='capital'?`<text y="${ofs+lab+2}" class="sub" style="font-size:${lab*.75}px">${n} petições</text>`:''}
       </g>`}).join('')}
     <!-- pins -->
     ${Object.values(groups).map(({l,ps})=>{
       const aud=ps.find(p=>p.tipo==='aud'), k=cap?.42:1, sx=l.x, sy=l.y-(l.id==='capital'?32:(l.city?13:22))*(cap&&l.city?1:1);
       const sc=(cap&&l.city)?.42:(l.id==='capital'?1.1:1);
       return `<g class="pin ${aud?'p-aud':'p-dec'} ${aud&&aud.r?'risk':''}" data-loc="${l.id}" transform="translate(${sx} ${sy}) scale(${sc})">
         ${aud?'<circle r="26" class="pulse"/><circle r="26" class="pulse p2"/>':''}
         <path d="M0 16C-6 8-16 2-16-8a16 16 0 0 1 32 0c0 10-10 16-16 24z" class="pinb"/>
         <text y="-3" class="pine">${aud?aud.selo:ps[0].selo}</text>
         ${ps.length>1?`<g transform="translate(13 -18)"><circle r="8" class="pinc"/><text y="3.5" class="pinn">${ps.length}</text></g>`:''}
       </g>`}).join('')}
     <!-- cartela e rosa dos ventos -->
     ${cap?'':`<g transform="translate(70 70)" class="cart"><rect x="-10" y="-28" width="230" height="64" rx="4"/><text x="105" y="-4" class="ct1">REINO DE</text><text x="105" y="24" class="ct2">Arcadia</text></g>
     <g transform="translate(1085 690)" class="rosa"><circle r="34"/><path d="M0-44L7 0 0 44-7 0Z"/><path d="M-44 0L0 7 44 0 0-7Z" opacity=".6"/><path d="M0-44L7 0H0Z" class="rn"/><text y="-50">N</text></g>`}
     <rect x="${cap?448:0}" y="${cap?292:0}" width="${cap?306:1200}" height="${cap?204:800}" fill="url(#vig)" pointer-events="none"/>
    </svg>
    <div class="mtip" id="mtip"></div>
   </div>
   <div class="mside" id="mside"></div>
  </div>`;
  // eventos
  el.querySelectorAll('.seg button').forEach(b=>b.onclick=()=>{setModo(b.dataset.m,el,S,cur)});
  const tip=el.querySelector('#mtip'), box=el.querySelector('#mapbox');
  const showTip=(e,html)=>{tip.innerHTML=html;tip.classList.add('on');const r=box.getBoundingClientRect();let x=e.clientX-r.left+16,y=e.clientY-r.top+12;if(x>r.width-280)x-=300;if(y>r.height-180)y-=170;tip.style.left=x+'px';tip.style.top=y+'px'};
  el.querySelectorAll('.loc').forEach(g=>{
    const l=LOC[g.dataset.id];
    g.addEventListener('pointermove',e=>{const ps=(byLoc[l.id]||[]).concat(l.id==='capital'?pins.filter(p=>LOC[p.loc]?.city):[]);
      const gente=PESSOAS.filter(p=>p.loc===l.id).slice(0,5).map(p=>p.nome);
      showTip(e,`<div class="tt"><span>${svgIcon(l.i,30)}</span><div><b>${l.nome}</b><small>${l.tipo} · ${l.reg}</small></div></div><p>${l.d}</p>
        ${gente.length?`<div class="tg"><em>Personalidades</em>${gente.join(' · ')}</div>`:''}
        ${ps.length?`<div class="tp">${ps.map(p=>`<div class="k-${p.tipo}">${p.tipo==='aud'?'⚜ AGORA':'📜 DECRETO'} · ${p.t}</div>`).join('')}</div>`:''}
        <div class="tc">${l.id==='capital'?'Clique para ver os bairros':'Clique para ver detalhes'}</div>`)});
    g.addEventListener('pointerleave',()=>tip.classList.remove('on'));
    g.addEventListener('click',()=>{ if(l.id==='capital'){setModo('capital',el,S,cur);return} foco=l.id; lado(el,l,byLoc[l.id]||[]); el.querySelectorAll('.loc').forEach(x=>x.classList.toggle('foco',x.dataset.id===l.id)) });
  });
  el.querySelectorAll('.pin').forEach(g=>{
    const l=LOC[g.dataset.loc], ps=(groups[l.id]||{ps:[]}).ps;
    g.addEventListener('pointermove',e=>showTip(e,`<div class="tt"><span style="font-size:24px">📍</span><div><b>${l.nome}</b><small>${ps.length} em andamento</small></div></div><div class="tp">${ps.map(p=>`<div class="k-${p.tipo}">${p.tipo==='aud'?`⚜ AUDIÊNCIA${p.r?' · ⚠ ALTO RISCO':''}`:`📜 DECRETO · faltam ${p.left} sem.`}<br><b>${p.t}</b><br><small>${p.quem||''}${LOC[p.loc]&&LOC[p.loc].id!==l.id?' · '+LOC[p.loc].nome:''}</small></div>`).join('')}</div>`));
    g.addEventListener('pointerleave',()=>tip.classList.remove('on'));
    g.addEventListener('click',()=>{ if(l.id==='capital') setModo('capital',el,S,cur); else {foco=l.id; lado(el,l,ps)} });
  });
  const f=foco&&LOC[foco]; lado(el,f||LOC[pins[0]?.loc]||LOC.capital,f?(byLoc[f.id]||[]):(byLoc[pins[0]?.loc]||[]));
}
function setModo(m,el,S,cur){
  if(m===modo) return; const from={...vb}, to=VBS[m]; modo=m;
  renderMapa(el,S,cur); const svg=el.querySelector('#mapsvg'); const t0=performance.now();
  const step=t=>{const k=Math.min(1,(t-t0)/650),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
    vb={x:from.x+(to.x-from.x)*e,y:from.y+(to.y-from.y)*e,w:from.w+(to.w-from.w)*e,h:from.h+(to.h-from.h)*e};
    svg.setAttribute('viewBox',`${vb.x} ${vb.y} ${vb.w} ${vb.h}`); if(k<1) requestAnimationFrame(step)};
  requestAnimationFrame(step);
}
function lado(el,l,ps){
  const s=el.querySelector('#mside'); if(!s||!l) return; build();
  const gente=PESSOAS.filter(p=>p.loc===l.id);
  const cs=(W.CARTAS||[]).filter(c=>locDe(c)===l.id);
  s.innerHTML=`<div class="msh"><span>${svgIcon(l.i,46)}</span><div><small>${l.tipo.toUpperCase()} · ${l.reg.toUpperCase()}</small><h3>${l.nome}</h3></div></div>
   <p class="msd">${l.d}</p>
   ${ps.length?`<div class="mst">EM ANDAMENTO AQUI</div>${ps.map(p=>`<div class="msp k-${p.tipo}">${p.selo} <div><b>${p.t}</b><small>${p.tipo==='aud'?'Audiência desta semana':'Decreto · faltam '+p.left+' semanas'}${p.quem?' · '+p.quem:''}</small></div></div>`).join('')}`:''}
   <div class="mst">PERSONALIDADES DAQUI (${gente.length})</div>
   <div class="mschips">${gente.slice(0,14).map(p=>`<button class="pchip" data-p="${p.nome}">${p.selo} ${p.nome}</button>`).join('')||'<span class="dim">Ninguém registrado ainda.</span>'}</div>
   <div class="mst">PETIÇÕES LIGADAS A ESTE LUGAR</div>
   <div class="msn"><b>${cs.length}</b> no livro do reino · <b>${cs.filter(c=>c.r).length}</b> de alto risco</div>
   <div class="msl">${cs.slice(0,6).map(c=>`<div>${c.selo} ${c.titulo}</div>`).join('')}${cs.length>6?`<div class="dim">e mais ${cs.length-6}…</div>`:''}</div>`;
  s.querySelectorAll('.pchip').forEach(b=>b.onclick=()=>W.ARC_irPessoa&&W.ARC_irPessoa(b.dataset.p));
}
function irLocal(id){foco=id; const l=LOC[id]; if(l&&l.city&&modo!=='capital'){modo='capital';vb={...VBS.capital}} if(l&&!l.city&&modo!=='reino'){modo='reino';vb={...VBS.reino}}}

/* ── Personalidades ── */
let filtro='todos', busca='', instSel=null;
const COR={nobreza:'#7e9be0',clero:'#efe6cc',burguesia:'#df9a4a',povo:'#93c46f',guarda:'#d0564a',arcano:'#a27ce0',corte:'#e9c76d',reinos:'#8fb0c4'};
const NOME_G=Object.fromEntries(GRUPOS);
const RETRATO={'Conselheiro Jodyr':'jodyr','Capitã Valkiria':'valkiria','Banx':'banx'};
function avatar(p,size){
  const c=COR[p.grupo]||'#e9c76d', im=RETRATO[p.nome]&&W.IMG&&W.IMG[RETRATO[p.nome]];
  return `<div class="pav" style="--c:${c};width:${size}px;height:${size}px">${im?`<img src="${im}" alt="">`:`<span style="font-size:${size*.44}px">${p.selo||'👤'}</span>`}
   <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="47" fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="6 4"/></svg></div>`;
}
function renderPessoas(el,S,cur){
  build();
  const atual=cur?cur.quem:null, cit=citados(cur);
  const q=busca.toLowerCase();
  const lista=PESSOAS.filter(p=>(filtro==='todos'||p.grupo===filtro)&&(!instSel||p.casa===instSel)&&(!q||(p.nome+' '+p.casa+' '+(p.papel||'')).toLowerCase().includes(q)));
  lista.sort((a,b)=>(b.nome===atual)-(a.nome===atual)||(cit.includes(b.nome))-(cit.includes(a.nome))||b.n-a.n);
  const pa=PESSOAS.find(p=>p.nome===atual);
  const insts=CASAS.filter(k=>k.inst||k.n>=4).slice(0,40).filter(k=>filtro==='todos'||(k.inst?k.inst[0]:k.nicho)===filtro||PESSOAS.some(p=>p.casa===k.nome&&p.grupo===filtro));
  const contG=g=>g==='todos'?PESSOAS.length:PESSOAS.filter(p=>p.grupo===g).length;
  el.innerHTML=`
   ${pa?`<div class="pnow">${avatar(pa,64)}<div><small>⚜ NA AUDIÊNCIA DESTA SEMANA</small><b>${pa.nome}</b><span>${pa.papel} · “${cur.titulo}”</span>
      ${cit.length?`<em>Citados na petição: ${cit.join(', ')}</em>`:''}</div><button class="tbtn" data-ver="${pa.nome}">Ver perfil</button></div>`:''}
   <div class="pbar"><input id="pbusca" placeholder="Procurar por nome, Casa ou ofício…" value="${busca.replace(/"/g,'&quot;')}">
     <div class="pfil">${GRUPOS.map(([g,n])=>`<button data-g="${g}" class="${filtro===g?'on':''}">${n}<em>${contG(g)}</em></button>`).join('')}</div></div>
   <div class="psec">INSTITUIÇÕES E CASAS ${instSel?`<button class="tbtn" id="limpaInst">✕ ${instSel}</button>`:''}</div>
   <div class="igrid">${insts.map(k=>{const t=k.inst||[k.nicho,'village',''];const c=COR[t[0]]||COR[k.nicho]||'#e9c76d';const L=LOC[k.loc];
     const hot=cur&&(cur.casa===k.nome);
     return `<button class="icard ${instSel===k.nome?'sel':''} ${hot?'hot':''}" data-i="${k.nome}" style="--c:${c}">
       <span class="iic">${svgIcon(t[1],30)}</span><div><b>${k.nome}</b><small>${t[2]||('Grupo de '+(NOME_G[k.nicho]||'Arcadia'))}</small>
       <span class="imeta">👤 ${k.pessoas.length} · 📜 ${k.n}${L?' · 📍 '+L.nome:''}</span></div>${hot?'<i class="hotb">NA AUDIÊNCIA</i>':''}</button>`}).join('')}</div>
   <div class="psec">PERSONALIDADES <small>${lista.length} de ${PESSOAS.length}</small></div>
   <div class="pgrid">${lista.slice(0,120).map(p=>{const L=LOC[p.loc],is=p.nome===atual,ci=cit.includes(p.nome);
     const tit=p.cards.slice(0,3).map(c=>c.titulo);
     return `<article class="pcard ${is?'now':''} ${ci?'cit':''}" id="pc-${slug(p.nome)}" style="--c:${COR[p.grupo]||'#e9c76d'}">
       ${is?'<i class="rib">⚜ NA AUDIÊNCIA</i>':ci?'<i class="rib cit">CITADO NA AUDIÊNCIA</i>':''}
       <div class="ph2">${avatar(p,58)}<div><b>${p.nome}</b><small>${p.papel}</small>
         <span class="gtag" style="background:${COR[p.grupo]}22;color:${COR[p.grupo]};border-color:${COR[p.grupo]}66">${NOME_G[p.grupo]||p.grupo}</span></div></div>
       <p>${p.bio||`Aparece no livro do reino ligado a ${p.casa}. Mais lembrado por “${tit[0]}”.`}</p>
       <div class="pst"><div><b>${p.n}</b><small>petições</small></div><div><b>${p.cards.filter(c=>c.r).length}</b><small>alto risco</small></div><div><b>${p.cards.filter(c=>c.f).length}</b><small>desdobr.</small></div></div>
       <div class="ptl">${tit.map(t=>`<span>“${t}”</span>`).join('')}</div>
       ${L?`<button class="ploc" data-l="${L.id}">${svgIcon(L.i,18)} ${L.nome}</button>`:''}
     </article>`}).join('')}${lista.length>120?`<p class="dim">Mostrando 120. Use a busca para achar os outros.</p>`:''}</div>`;
  const re=()=>renderPessoas(el,S,cur);
  el.querySelectorAll('.pfil button').forEach(b=>b.onclick=()=>{filtro=b.dataset.g;instSel=null;re()});
  el.querySelectorAll('.icard').forEach(b=>b.onclick=()=>{instSel=instSel===b.dataset.i?null:b.dataset.i;re()});
  const lim=el.querySelector('#limpaInst'); if(lim) lim.onclick=()=>{instSel=null;re()};
  const ib=el.querySelector('#pbusca'); ib.oninput=()=>{busca=ib.value;const pos=ib.selectionStart;re();const n=el.querySelector('#pbusca');n.focus();n.setSelectionRange(pos,pos)};
  el.querySelectorAll('.ploc').forEach(b=>b.onclick=()=>W.ARC_irLocal&&W.ARC_irLocal(b.dataset.l));
  el.querySelectorAll('[data-ver]').forEach(b=>b.onclick=()=>irPessoaEl(el,b.dataset.ver));
}
const slug=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-zA-Z0-9]+/g,'-');
function irPessoaEl(el,nome){const c=el.querySelector('#pc-'+slug(nome)); if(c){c.scrollIntoView({behavior:'smooth',block:'center'});c.classList.add('flash');setTimeout(()=>c.classList.remove('flash'),1600)}}
function prepPessoa(nome){busca='';instSel=null;const p=(build(),PESSOAS.find(x=>x.nome===nome));filtro=p?p.grupo:'todos'}

W.MUNDO={LOCAIS,LOC,locDe,citados,renderMapa,renderPessoas,irLocal,prepPessoa,irPessoaEl,svgIcon,pessoa:n=>(build(),PESSOAS.find(p=>p.nome===n))};
})();
