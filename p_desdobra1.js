/* Lote XIV · Petições com desdobramentos (1/2) · cadeias de histórias */
// ── Cadeia: O bando do Raposa ──
K('d_raposa1','povo','Velho Garrick','Camponeses do Vale','🦊','O Raposa voltou',
 'O Raposa, aquele bandido exilado, voltou ao vale. Rouba carroças dos nobres e deixa trigo na porta dos pobres. O povo esconde ele.',
 ['guarda-3 nobreza+4 ?povo-4','Mandou a Guarda caçar o Raposa no vale.','n:d_raposa2|2'],['povo+4 nobreza-4','Fingiu não saber da volta do Raposa.','n:d_raposa2|3'],
 'Um bandido que distribui trigo. As Casas vão exigir a cabeça dele.','Ele não mata. Mas desafia a Coroa. Isso eu não posso aceitar por muito tempo.','O vale inteiro protege ele. Isso não vai parar aqui, meu Rei.','l:desd');
K('d_raposa2','povo','Sargento Brenn','Guarda Real','🏹','O bando cresce',
 'O Raposa agora tem trinta homens. Atacaram a carruagem do Barão Crane e espalharam as moedas na feira de Pedraverde.',
 ['guarda-5 nobreza+5 povo-5','Mandou cercar o bando do Raposa.','n:d_raposa3|2'],['ouro-20 povo+5 nobreza-5','Ofereceu perdão ao Raposa se ele desfizesse o bando.','n:d_raposa3|3'],
 'Trinta homens já é um exército pequeno.','Trinta. Com arco. E o povo ajudando. Vou precisar de muita gente.','A feira de Pedraverde virou festa com as moedas do Barão. Ninguém vai entregar o Raposa.','l:desd;f');
K('d_raposa3','povo','O Raposa','Bandido do Vale','🦊','A proposta do Raposa',
 'Majestade, sou o Raposa. Vim de cara limpa. Desfaço o bando se o senhor baixar o tributo do vale por um ano.',
 ['povo+8 nobreza-6','Aceitou a proposta do Raposa e baixou o tributo do vale.','v:Tributo do vale reduzido|8|ouro-6'],['guarda+4 nobreza+4 povo-8','Prendeu o Raposa na audiência.','n:d_raposa4|2'],
 'Negociar com bandido. Ou prender quem veio em paz. As duas têm preço.','Ele veio desarmado. Prender quem vem desarmado... não é coisa de rei.','Se prender, o vale vira chamas. Pode apostar.','l:desd;f');
K('d_raposa4','povo','Velho Garrick','Camponeses do Vale','🔥','O vale em chamas',
 'Prenderam o Raposa e o vale se levantou. Queimaram o celeiro do Barão Crane. Exigem a soltura dele.',
 ['povo+6 nobreza-8 guarda-3','Soltou o Raposa para acalmar o vale.'],['guarda-6 povo-8 nobreza+5','Manteve o Raposa preso e reprimiu o vale.','n:saque|2'],
 'O preço de prender um herói do povo.','Meus homens não querem marchar contra o vale. Eles são do vale.','Se não soltar, os celeiros reais são os próximos.','l:desd;f');
// ── Cadeia: As moças da feira ──
K('d_mocas1','povo','Lavradora Ana','Vila de Pedraverde','😟','As moças sumidas',
 'Três moças sumiram das feiras em um mês. Todas falaram com um mercador de lenços de fala estrangeira.',
 ['guarda-3 povo+4','Mandou investigar o mercador de lenços.','n:d_mocas2|2'],['?povo-5','Deixou as vilas procurarem as moças sozinhas.','n:d_mocas2|3'],
 'Mercador estrangeiro levando moças. Isso pode ser crime e pode ser guerra.','Me dá duas semanas. Eu acho esse homem.','As mães não dormem. Isso não vai acabar sozinho.','l:desd');
K('d_mocas2','guarda','Capitã Valkiria','Guarda Real','🔎','A trilha do mercador',
 'A trilha do mercador leva ao porto. Um barco de Morgrath parte amanhã. Se eu invadir sem ordem, é incidente com Morgrath.',
 ['guarda+3 povo+6 nobreza-3','Mandou Valkiria invadir o barco de Morgrath.','n:d_mocas3|1'],['?povo-8','Deixou o barco de Morgrath partir.','n:d_mocas3|2'],
 'Invadir um barco de Morgrath é provocação. Mas e as moças?','Me dá a ordem. Por favor. Eu sei que elas estão lá. 😤','Se o barco partir, as moças somem pra sempre. E o povo nunca perdoa.','l:desd;f');
K('d_mocas3','nobreza','Emissário de Morgrath','Reino de Morgrath','🐺','Morgrath protesta',
 'Arcadia tocou num barco de Morgrath. Exigimos desculpas formais e cinquenta moedas. Ou consideraremos ofensa.',
 ['ouro-50 nobreza-3','Pagou e pediu desculpas a Morgrath.'],['guarda+3 nobreza+4','Recusou as exigências de Morgrath.','n:d_mocas4|3'],
 'Pagar para quem traficava nossa gente. Revoltante, mas evita guerra.','Desculpas? Eles levavam MOÇAS NOSSAS. Não.','O povo vai ficar furioso se a Coroa pedir desculpas.','l:desd;f');
K('d_mocas4','guarda','General Thorin','Forte Thorendis','⚔️','Represália na fronteira',
 'Morgrath queimou duas vilas da fronteira como represália. Pedem guerra. Ou paz a qualquer preço.',
 ['guarda-6 nobreza+4 povo+4','Respondeu à represália de Morgrath com força.','n:espiao2|3'],['ouro-60 ?povo-6','Comprou a paz com Morgrath depois da represália.'],
 'Cada escolha agora tem cheiro de guerra.','Meu pai segura a fronteira. Mas não pra sempre.','As vilas queimadas eram de gente simples. Isso tem que ter resposta.','l:desd;f');
// ── Cadeia: O sino da meia-noite ──
K('d_sino1','clero','Sineiro Pim','Torre do Templo','🔔','O sino toca sozinho',
 'Toda meia-noite o sino toca. Sozinho. Eu juro que não sou eu. O povo acha que é fantasma.',
 ['guarda-2 clero+3','Pôs guardas na torre do sino à meia-noite.','n:d_sino2|2'],['?clero-3 ?povo-3','Mandou ignorar o sino da meia-noite.','n:d_sino2|3'],
 'Sino tocando sozinho. Ou é piada, ou é aviso.','Vou passar a noite lá. Com uma lanterna e uma lança.','O bairro inteiro acorda. As crianças choram. Tem coisa aí.','l:desd');
K('d_sino2','guarda','Capitã Valkiria','Guarda Real','🕯️','A passagem na torre',
 'Achei uma porta secreta na torre do sino. Escada pra baixo. Pros túneis. Alguém sobe à noite e toca o sino como sinal.',
 ['guarda+3 ?clero-3','Mandou descer pelos túneis da torre.','n:d_sino3|1'],['guarda-3','Mandou lacrar a porta da torre.','n:d_sino3|3'],
 'Túneis sob o Templo. Os mesmos do mapa de Serina?','Sinal pra quem? Pra QUÊ? Quero descer.','O povo vai saber que tem túnel debaixo do Templo. Isso muda tudo.','l:desd;f');
K('d_sino3','arcano','Capitã Valkiria','Guarda Real','👁️','A cripta dos capuzes',
 'Embaixo do Templo tem uma cripta com velas cinzas e mapas de Vhalkir. É dos Vigilantes. Pego tudo ou deixo como achei?',
 ['guarda+4 clero-5','Mandou confiscar tudo da cripta dos Vigilantes.','n:d_sino4|2'],['?guarda-3','Deixou a cripta dos Vigilantes intocada e vigiada.','n:vigilantes|2'],
 'Confiscar é declarar guerra aos Vigilantes. Vigiar é esperar.','Os mapas mostram Vhalkir por dentro. Ninguém devia ter isso.','O Templo vai ser acusado de esconder os Vigilantes. Isso vai pegar fogo.','l:desd;f');
K('d_sino4','clero','Bispo Aurelian Vey','Templo da Aurora','😠','O Bispo se ofende',
 'A Guarda invadiu o subsolo sagrado do Templo! Exijo desculpas públicas e a devolução de tudo.',
 ['clero+5 guarda-4','Pediu desculpas ao Bispo e devolveu o material da cripta.'],['clero-6 guarda+3','Recusou as desculpas e manteve o material.','n:r_excomunhao2|3'],
 'O Bispo sabia da cripta? Essa é a pergunta que ninguém faz.','Devolver mapa de Vhalkir pros Vigilantes? Não, Dan.','O povo começa a se perguntar de que lado o Bispo tá.','l:desd;f');
// ── Cadeia: As águas azuis ──
K('d_agua1','povo','Pescador Tomé','Vila do Rio','💙','Os peixes azuis',
 'Os peixes do lago perto da vila agora são azuis e brilham. Quem come fica forte por um dia. Todo mundo quer pescar.',
 ['povo+4 burguesia+3','Liberou a pesca dos peixes azuis.','n:d_agua2|2'],['?povo-3','Proibiu a pesca dos peixes azuis.','n:d_agua2|4'],
 'Peixe que dá força vende caro. Muito caro.','Mandei um mago provar. Ele disse "hum" de novo. Ninguém ajuda.','Quem come fica forte... por um dia. E no outro? Isso vai ter volta.','l:desd');
K('d_agua2','povo','Irmã Maelis','Casa de Cura','🤢','A febre azul',
 'Quem comeu os peixes azuis está com febre e veias azuladas. Doze na Casa de Cura. Preciso saber de onde vem a água.',
 ['ouro-20 povo+4','Financiou a investigação da febre azul.','n:d_agua3|2'],['?povo-6','Mandou só tratar os doentes da febre azul.','n:d_agua3|3'],
 'Investigar custa. Não investigar pode custar uma vila.','Se for coisa de Vhalkir, eu preciso saber antes.','A vila do rio tá com medo da própria água.','l:desd;f');
K('d_agua3','arcano','Arquimaga Ondine','Ala Arcana','🌊','A nascente de Vhalkir',
 'A água vem de uma nascente que passa sob o selo de Vhalkir. O selo vaza pela água. Posso desviar o rio, mas é obra enorme.',
 ['ouro-50 povo+5 guarda+3','Desviou o riacho que passa sob Vhalkir.'],['?povo-6 ?guarda-5','Deixou a nascente correr como está.','n:d_agua4|3'],
 'Cinquenta moedas para mudar o curso de um rio. Caro. Mas o que vaza de Vhalkir é pior.','Se o selo vaza pela água, ele tá mais fraco do que eu pensava.','A vila do rio vai ter que se mudar se nada for feito.','l:desd;f');
K('d_agua4','arcano','Pescador Tomé','Vila do Rio','🌑','A vila adormecida',
 'A vila do rio inteira dormiu e não acordou direito. Andam como sonâmbulos, falando de um lago escuro.',
 ['ouro-40 povo+3 guarda-3','Mandou evacuar e tratar a vila do rio.'],['povo-8 guarda-6','Isolou a vila do rio e esperou.','n:vhalkir|2'],
 'Evacuar custa. Isolar custa mais, só que depois.','O lago escuro... o mesmo dos sonhos da cidade. Isso tá tudo ligado.','Tomé me reconheceu, mas me chamou de outro nome. Arrepiei, meu Rei.','l:desd;f');
// ── Cadeia: O herdeiro de Montclaro ──
K('d_mont1','nobreza','Jovem Aurélio','Pretendente de Montclaro','📜','O herdeiro perdido',
 'Sou filho secreto do falecido Duque de Montclaro. Tenho o anel dele. Reclamo as terras e o título.',
 ['nobreza-4 ?povo+3','Mandou examinar as provas de Aurélio.','n:d_mont2|2'],['nobreza+3','Expulsou o pretendente de Montclaro.','n:d_mont2|4'],
 'Um anel prova pouco. Mas um herdeiro sempre desarruma as Casas.','O anel é verdadeiro. Vi o brasão por dentro.','Esse rapaz cresceu pobre na vila. Se for herdeiro, o povo vai ter um nobre deles.','l:desd');
K('d_mont2','nobreza','Duque Aldren Valcourt','Casa Valcourt','⚖️','Valcourt contesta',
 'O pretendente é fraude! As terras de Montclaro já foram prometidas à minha Casa pelo seu avô. Exijo julgamento.',
 ['nobreza+4 povo-3','Deu razão ao Duque Valcourt sobre Montclaro.','n:d_mont3|3'],['nobreza-5 povo+4','Reconheceu Aurélio como herdeiro de Montclaro.','n:d_mont3|2'],
 'Promessa de avô morto é difícil de provar. E fácil de inventar.','O padre de Montclaro tem o registro de batismo. Ele diz que o rapaz é filho do Duque.','O vale de Montclaro quer o rapaz. Ele já trabalhou na terra com eles.','l:desd;f');
K('d_mont3','nobreza','Lady Mirela Ashfeld','Casa Ashfeld','🗡️','As Casas se dividem',
 'Metade das Casas apoia Valcourt, metade apoia o rapaz. Há espadas desembainhadas no Salão. Precisamos de uma decisão final.',
 ['ouro-30 nobreza+5','Dividiu as terras de Montclaro entre Aurélio e Valcourt.'],['nobreza-6 guarda+3','Impôs a decisão real sem acordo.','n:d_mont4|2'],
 'Dividir agrada a todos pela metade. Impor desagrada metade por inteiro.','Espadas no Salão. Eu tô aqui. Ninguém mexe.','O povo do vale torce pelo Aurélio como se fosse filho de cada um.','l:desd;f');
K('d_mont4','nobreza','Capitã Valkiria','Guarda Real','🩸','Sangue no Salão',
 'O filho de Valcourt atacou Aurélio na saída do Salão. Os dois estão feridos. As Casas estão armando seus homens.',
 ['guarda-5 nobreza-6','Prendeu os dois rapazes e desarmou as Casas.'],['nobreza-8 povo-4','Deixou as Casas resolverem entre si.','n:golpe|3'],
 'Agora não é mais herança. É guerra entre Casas.','Eu desarmo todo mundo. Todo mundo. Inclusive o Duque.','Se as Casas brigarem, o vale paga com sangue.','l:desd;f');
// ── Cadeia: A Guilda das Sombras ──
K('d_sombra1','burguesia','Mestra Ilsa Brannoc','Guilda dos Mercadores','🗝️','A taxa de proteção',
 'Uma tal "Guilda das Sombras" cobra uma moeda por semana de cada barraca. Quem não paga, acorda com a barraca queimada.',
 ['guarda-3 burguesia+4','Mandou a Guarda perseguir a Guilda das Sombras.','n:d_sombra2|2'],['?burguesia-5','Deixou os mercadores lidarem com a Guilda das Sombras.','n:d_sombra2|3'],
 'Um imposto paralelo. Que eles cobram melhor que a Coroa, aliás.','Criminoso organizado. Isso é guerra de rua.','O povo das barracas pequenas paga e se cala. Isso só cresce.','l:desd');
K('d_sombra2','burguesia','Inspetor Garreth','Fiscais do Mercado','🐀','O chefe das sombras',
 'Descobri quem manda na Guilda das Sombras: um tal "Rato Velho". Ele oferece metade do que arrecada à Coroa para ser deixado em paz.',
 ['ouro+30 burguesia-6 ?povo-4','Aceitou o acordo com o Rato Velho.','n:d_sombra3|3'],['guarda-4 burguesia+5','Recusou o acordo e mandou prender o Rato Velho.','n:d_sombra3|2'],
 'Ouro do crime no cofre real. Tentador e imundo.','Se tu aceitar, eu vou ter vergonha de usar essa farda.','O povo das barracas vai saber que a Coroa se vendeu. Isso volta.','l:desd;f');
K('d_sombra3','guarda','Sargento Brenn','Guarda Real','🔥','Guerra nos becos',
 'A Guilda das Sombras rachou. Duas facções brigam nos becos. Ontem morreram três. O povo não sai mais de casa à noite.',
 ['guarda-6 povo+6 burguesia+4','Fez uma grande batida nos becos contra as facções.'],['povo-6 burguesia-5','Deixou as facções se destruírem sozinhas.','n:saque|3'],
 'Deixar o crime se matar é cômodo. Até sobrar o pior deles.','Me dá cinquenta homens e uma noite. Eu limpo os becos.','O povo tá trancado em casa. O comércio do bairro morreu.','l:desd;f');
// ── Cadeia: A Princesa e o Tenente ──
K('d_prin1','nobreza','Embaixador Lucan Thessaly','Reino de Valdoria','💌','A carta da princesa',
 'Majestade, a Princesa Elenna escreve cartas ao Tenente Kael. Muitas cartas. Valdoria ficaria... desconfortável.',
 ['nobreza+3 ?guarda-3','Pediu a Kael que parasse de responder à princesa.','n:d_prin2|3'],['burguesia+3 nobreza-2','Deixou o romance da princesa seguir.','n:d_prin2|2'],
 'Um tenente e uma princesa. Isso termina em casamento ou em guerra.','O KAEL?! O meu irmão?! *(fica vermelha)* Eu não sabia de nada. Juro.','O povo vai adorar essa história. Romance real é ouro pra cantoria.','l:desd');
K('d_prin2','nobreza','Tenente Kael','Guarda Real','💔','O pedido do Tenente',
 'Majestade, eu amo a Princesa Elenna. Peço sua permissão para pedir a mão dela ao Rei de Valdoria.',
 ['nobreza-4 burguesia+5 guarda+3','Permitiu que Kael pedisse a mão da princesa.','n:d_prin3|3'],['guarda-4','Proibiu Kael de pedir a mão da princesa.','n:d_prin3|2'],
 'Um tenente sem título pedindo uma herdeira. Valdoria vai rir. Ou vai se ofender.','É meu irmão, Dan. Ele nunca pediu nada. Deixa ele tentar. 🥺','O povo vai torcer por eles como torce por casal de novela de feira.','l:desd;f');
K('d_prin3','burguesia','Embaixador Lucan Thessaly','Reino de Valdoria','👑','A resposta de Valdoria',
 'O Rei de Valdoria está furioso. Exige que Kael seja afastado da corte. A princesa ameaça fugir.',
 ['guarda-5 burguesia+4','Afastou Kael da corte para acalmar Valdoria.'],['nobreza+4 burguesia-6','Defendeu Kael diante de Valdoria.','n:d_prin4|3'],
 'Afastar um bom tenente por política. Ou peitar o maior parceiro comercial.','Se afastarem o Kael, eu vou junto. Não tô brincando.','A princesa ameaçando fugir. Isso é capítulo de canção.','l:desd;f');
K('d_prin4','nobreza','Princesa Elenna','Reino de Valdoria','👸','A princesa fugiu',
 'Majestade, eu fugi. Estou nos seus portões. Peço asilo em Arcadia. Com Kael. Sei o que isso significa para Valdoria.',
 ['nobreza+5 povo+6 burguesia-6','Deu asilo à Princesa Elenna em Arcadia.','n:valdoria_magoa|2'],['burguesia+5 nobreza-3 guarda-4','Devolveu a princesa a Valdoria.'],
 'Dar asilo a uma herdeira fugitiva. Valdoria não vai perdoar tão cedo.','... Ela chegou a pé. Sozinha. Na chuva. Eu já gosto dela.','O povo vai fazer festa no portão. Isso é a história do século.','l:desd;f');
// ── Cadeia: A febre do gado ──
K('d_gado1','povo','Vaqueiro Tião Barbacena','Pastos do Vale','🐂','O gado tosse',
 'O gado do vale começou a tossir. Três bois morreram. O vaqueiro de Montclaro diz que veio de Morgrath, com gado contrabandeado.',
 ['ouro-15 povo+3','Isolou os rebanhos doentes do vale.','n:d_gado2|3'],['?povo-4','Deixou os vaqueiros cuidarem do gado sozinhos.','n:d_gado2|2'],
 'Gado contrabandeado. Sempre o contrabando.','Gado doente é comida a menos no quartel.','Se espalhar, o vale perde tudo. Isso não para em três bois.','l:desd');
K('d_gado2','povo','Criador Bento Lã','Pastos das Colinas','💀','A peste chega às colinas',
 'A peste do gado chegou às colinas. Ovelhas morrendo aos montes. A lã vai faltar. A carne também.',
 ['ouro-30 povo+4 burguesia-4','Mandou abater os rebanhos doentes das colinas.','n:d_gado3|3'],['povo-6 burguesia-6','Deixou a peste correr nas colinas.','n:d_gado3|2'],
 'Abater dói agora. Não abater dói por anos.','Sem carne, sem lã, sem uniforme. Vai ser um inverno feio.','Os pastores choram cada ovelha. E têm medo do que vem depois.','l:desd;f');
K('d_gado3','povo','Irmã Maelis','Casa de Cura','🤒','A peste pula para gente',
 'Três pastores pegaram a febre do gado. Agora passa de gente pra gente. Preciso fechar as colinas.',
 ['ouro-40 povo+3 burguesia-5','Fechou as colinas em quarentena.'],['povo-8 clero-4','Recusou a quarentena das colinas.','n:d_gado4|1'],
 'Quarentena mata o comércio. A peste mata o resto.','As irmãs vão entrar nas colinas. Eu mando guarda pra proteger elas.','Se não fechar, isso chega na cidade. Em dias.','l:desd;f');
K('d_gado4','povo','Irmã Maelis','Casa de Cura','☠️','A febre na cidade',
 'A febre chegou à cidade. O bairro baixo primeiro. Eu preciso de tudo que o cofre tiver.',
 ['ouro-60 povo+4 clero+3','Despejou o cofre contra a febre na cidade.'],['povo-10 guarda-5','Deixou a febre seguir na cidade.','n:epidemia|1'],
 'Agora custa tudo. Porque não custou pouco antes.','Já tenho soldado de cama. Paga.','O bairro baixo tá contando os mortos de novo.','l:desd;f');
// ── Cadeia: O culto do cometa ──
K('d_cometa1','clero','Irmão Tobias','Templo da Aurora','☄️','Os filhos do cometa',
 'Desde o cometa verde, um grupo se diz "Filhos do Cometa". Vestem verde e pregam que o mundo vai renascer em fogo.',
 ['clero+3 ?povo-3','Proibiu as pregações dos Filhos do Cometa.','n:d_cometa2|3'],['?clero-4','Deixou os Filhos do Cometa pregarem.','n:d_cometa2|2'],
 'Uma seita nova. Elas crescem rápido quando o povo tem medo.','O Bispo quer queimar. Eu quero só vigiar.','"Renascer em fogo". Não gosto nada dessa frase. Isso vai crescer.','l:desd');
K('d_cometa2','clero','Sacerdote Fennick','Capela do Vale','🔥','A seita cresce',
 'Os Filhos do Cometa já são trezentos. Pararam de pagar tributo e dízimo. Dizem que o fim está perto.',
 ['guarda-4 clero+4 ouro+15','Mandou cobrar à força o tributo dos Filhos do Cometa.','n:d_cometa3|2'],['ouro-15 ?povo-4','Deixou os Filhos do Cometa sem pagar tributo.','n:d_cometa3|3'],
 'Trezentos sem pagar tributo. Isso contagia.','Cobrar à força de trezentos fanáticos. Vai dar ruim.','Gente desesperada acredita em qualquer fim do mundo. Isso só cresce.','l:desd;f');
K('d_cometa3','clero','Capitã Valkiria','Guarda Real','🏚️','A grande fogueira',
 'Os Filhos do Cometa marcaram a "Grande Fogueira" para a lua nova. Juntaram lenha no armazém do porto. Muita lenha.',
 ['guarda-5 clero+4 povo+3','Invadiu o armazém e impediu a Grande Fogueira.','n:d_cometa4|2'],['povo-6 burguesia-6','Deixou os Filhos do Cometa fazerem a fogueira.','n:confissao2|1'],
 'Uma fogueira gigante no porto de madeira. É suicídio coletivo ou incêndio criminoso.','Eu invado. Hoje. Antes da lua nova. Sem discussão.','Tem família inteira lá dentro. Criança também. Isso pode acabar muito mal.','l:desd;f');
K('d_cometa4','clero','Sumo-Sacerdotisa Elowen','Templo da Aurora','🕊️','Os órfãos do cometa',
 'Depois do fim da seita, sobraram cinquenta crianças sem família. O Templo pode cuidar delas, se a Coroa ajudar.',
 ['ouro-25 clero+5 povo+5','Ajudou o Templo a acolher os órfãos do cometa.'],['?povo-5','Deixou os órfãos do cometa por conta própria.','n:saque|4'],
 'Cinquenta crianças. Não preciso de conta.','As irmãs vão precisar de ajuda. E de guarda na porta.','Criança sem família na rua vira bando de rua. Isso volta em poucos anos.','l:desd;f');
// ── Cadeia: A fera de Brumafria ──
K('d_fera1','povo','Lenhador Ulf','Vilas do Norte','🐺','A fera de Brumafria',
 'Uma fera matou ovelhas e um cavalo em Brumafria. Pegadas de lobo, mas do tamanho de um homem.',
 ['guarda-3 povo+4','Mandou caçadores atrás da fera de Brumafria.','n:d_fera2|2'],['?povo-4','Mandou os lenhadores se protegerem sozinhos.','n:d_fera2|3'],
 'Uma fera no norte, perto de Vhalkir. Nada é coincidência por lá.','Lobo do tamanho de homem. Ótimo. Mais um bicho.','O povo de Brumafria tranca as portas ao anoitecer. Isso vai piorar.','l:desd');
K('d_fera2','arcano','Caçador Jorah','Montanhas do Norte','🌕','A fera é um homem',
 'Segui a fera. Na lua cheia, ela é lobo. De dia, é o ferreiro de Brumafria. Ele não sabe o que faz. Mato ou prendo?',
 ['guarda+3 ?clero-3','Mandou prender o ferreiro amaldiçoado de Brumafria.','n:d_fera3|2'],['guarda+4 povo+3 ?clero+2','Mandou matar a fera de Brumafria.'],
 'Um homem amaldiçoado. Matá-lo resolve. Prendê-lo é humano. E arriscado.','Ele não escolheu isso. Mas eu já vi o que ele fez com o cavalo.','A família dele tá desesperada. A vila está dividida.','l:desd;f');
K('d_fera3','arcano','Velha Morwen','Floresta Enevoada','🌿','A cura da maldição',
 'Posso curar o ferreiro. Mas preciso de uma flor que só nasce na beira de Vhalkir. Alguém tem que buscar.',
 ['guarda-4 povo+5 clero-4','Mandou buscar a flor de Vhalkir para curar o ferreiro.','n:d_fera4|3'],['?povo-3','Deixou o ferreiro preso para sempre.'],
 'Arriscar soldados por um homem. Ou deixar um homem numa jaula para sempre.','Eu vou buscar. Já fui a Vhalkir. Sei voltar.','Se ele for curado, a vila vai cantar o nome da Morwen. E do Rei.','l:desd;f');
K('d_fera4','arcano','Capitã Valkiria','Guarda Real','🌺','O que eu vi em Vhalkir',
 'Trouxe a flor. Mas vi coisas lá. Gente de capuz cinza colhendo a mesma flor. Em quantidade. Pra quê?',
 ['guarda+4 clero+3','Mandou vigiar os Vigilantes na beira de Vhalkir.'],['?guarda-5','Deixou os Vigilantes colherem flores em Vhalkir.','n:floresta2|3'],
 'Se os Vigilantes colhem a flor que cura maldição... eles criam maldição?','Eu não durmo desde que voltei. Algo me olhava de dentro do selo.','O ferreiro tá curado e chorou abraçado na Morwen. Mas o resto me preocupa.','l:desd;f');
// ── Cadeias de três ──
K('d_falsa1','burguesia','Coletor-Mor Aldous','Tesouro Real','🪙','Moedas falsas no mercado',
 'Apareceram moedas falsas no mercado. Chumbo com banho de ouro. Ninguém sabe de onde vêm.',
 ['ouro-10 burguesia+3','Mandou rastrear as moedas falsas.','n:d_falsa2|2'],['?burguesia-5','Ignorou as moedas falsas.','n:d_falsa2|3'],
 'Moeda falsa destrói a confiança na verdadeira.','Mandei olhar o porto. Lá entra tudo.','O povo recebe moeda falsa de troco e não percebe. Isso vai estourar.','l:desd');
K('d_falsa2','burguesia','Inspetor Garreth','Fiscais do Mercado','🔨','A oficina das moedas',
 'Achamos a oficina das moedas falsas. Mas o dono é sócio dos Orsini. Prender ele é mexer com os banqueiros.',
 ['burguesia-5 ouro+20 guarda+2','Prendeu o falsificador sócio dos Orsini.'],['burguesia+3 ?ouro-15','Fez vista grossa ao sócio dos Orsini.','n:d_falsa3|3'],
 'Os Orsini de novo. Esses nomes sempre aparecem perto de dinheiro sujo.','Me dá a ordem que eu prendo até o Orsini se precisar.','Se deixar passar, o mercado inteiro vai rodar com moeda podre.','l:desd;f');
K('d_falsa3','burguesia','Mestra Ilsa Brannoc','Guilda dos Mercadores','📉','Ninguém confia na moeda',
 'Os mercadores de fora recusam qualquer moeda de Arcadia. Dizem que metade é falsa. O comércio está parando.',
 ['ouro-50 burguesia+6','Trocou todas as moedas suspeitas por novas.'],['burguesia-8 povo-4','Deixou o mercado se ajeitar sozinho.','n:moeda2|2'],
 'Recolher tudo custa caro. Não recolher custa o comércio inteiro.','Até meus soldados tão desconfiando do soldo.','O povo tá voltando a trocar galinha por pão. Sem confiar em moeda.','l:desd;f');
K('d_balsa1','burguesia','Barqueiro Lino','Cachoeira das Sete Quedas','⛴️','A balsa do rio',
 'O Barão Ulrich Vane quer comprar a balsa do rio e cobrar o dobro. Somos três barqueiros e vamos perder tudo.',
 ['povo+4 nobreza-4','Impediu a compra da balsa pelo Barão Vane.','n:d_balsa2|3'],['nobreza+4 ouro+15 ?povo-4','Deixou o Barão Vane comprar a balsa.','n:d_balsa2|2'],
 'O Barão quer o monopólio da travessia. O preço vai dobrar.','A balsa leva soldado também. Vou querer desconto.','Os barqueiros são famílias antigas da vila. Isso mexe com todo mundo.','l:desd');
K('d_balsa2','povo','Barqueiro Lino','Cachoeira das Sete Quedas','🌊','A balsa virou',
 'A balsa virou com doze pessoas. Dois morreram. A corda estava podre. Ninguém trocou porque ninguém queria gastar.',
 ['ouro-25 povo+5','Pagou uma balsa nova e indenizou as famílias.','n:d_balsa3|3'],['?povo-7','Deixou o caso da balsa sem resposta.','n:d_balsa3|2'],
 'Economizar na corda custou duas vidas.','Meus homens tiraram os corpos da água. Foi horrível.','A vila inteira foi ao enterro. Querem saber de quem é a culpa.','l:desd;f');
K('d_balsa3','burguesia','Mestre-de-obras Dorran','Guilda dos Pedreiros','🌉','Uma ponte nas Sete Quedas',
 'Depois da balsa, a vila pede uma ponte de pedra nas Sete Quedas. É obra grande. Mas ninguém mais morre.',
 ['ouro-55 povo+6 burguesia+5','Construiu a ponte de pedra das Sete Quedas.'],['?povo-4','Recusou a ponte das Sete Quedas.','n:ponte2|4'],
 'Cinquenta e cinco moedas. É a obra que fecha essa história.','Ponte de pedra é ponte que leva tropa. Aprovo.','A vila vai pôr o nome dos dois mortos na ponte. Se ela existir.','l:desd;f');
K('d_visao1','clero','Irmão Ansel','Mosteiro das Colinas','👁️','O monge das visões',
 'Um noviço do mosteiro tem visões. Ele descreve lugares de Vhalkir que nunca viu. O Inquisidor quer interrogá-lo.',
 ['clero+3 ?guarda-2','Entregou o noviço ao Inquisidor.','n:d_visao2|2'],['clero-3 guarda+2','Mandou o noviço à Ala Arcana.','n:d_visao2|3'],
 'Um menino que vê Vhalkir. A Ala quer estudar, o Templo quer exorcizar.','O Inquisidor vai assustar o menino até ele não falar mais nada.','O menino tá com medo. E as visões dele tão ficando piores. Isso não acaba aqui.','l:desd');
K('d_visao2','clero','Irmão Ansel','Mosteiro das Colinas','🙏','Os peregrinos do noviço',
 'Gente de todo o reino vem ver o noviço das visões. Dizem que ele é santo. O mosteiro está lotado.',
 ['clero+5 burguesia+3 ?povo-3','Deixou o mosteiro receber os peregrinos do noviço.','n:d_visao3|3'],['clero-4','Isolou o noviço dos peregrinos.','n:d_visao3|2'],
 'Peregrinos gastam. Mas multidão em volta de um menino perturbado é perigoso.','O Bispo quer controlar o santo. Isso cheira a briga dentro do Templo.','O povo precisa de um santo. Mesmo que seja um menino assustado.','l:desd;f');
K('d_visao3','arcano','Arquimaga Ondine','Ala Arcana','🌀','O que o noviço vê',
 'O noviço desenhou o interior do selo de Vhalkir. Com perfeição. Ele não está vendo o passado. Está vendo agora.',
 ['guarda+5 clero-5','Levou o noviço para a Ala Arcana ajudar a vigiar o selo.'],['clero+3 ?guarda-5','Deixou o noviço com o Templo.','n:hereges2|3'],
 'Um olho dentro de Vhalkir. Valioso demais para deixar com o Inquisidor.','Ele pode nos avisar antes do selo ceder. Isso vale um exército.','O menino quer ir pra casa. Ninguém pergunta o que ele quer.','l:desd;f');
K('d_canal1','burguesia','Mestre-de-obras Dorran','Guilda dos Pedreiros','🛶','O canal do vale',
 'Um canal ligando o rio ao vale levaria barcos até o trigo. Frete pela metade. Mas precisa de cem trabalhadores por meses.',
 ['ouro-40 burguesia+6 povo+3','Iniciou o canal do vale.','n:d_canal2|3'],['burguesia-3','Recusou o canal do vale.','n:d_canal2|6'],
 'Frete pela metade para sempre. Vale a obra.','Canal é obstáculo pra inimigo também. Bom.','Cem trabalhadores no barro por meses. Isso tem custo humano. Vai aparecer.','l:desd');
K('d_canal2','povo','Mineiro Bram','Pedreiras do Norte','🦟','A febre do pântano',
 'Os trabalhadores do canal estão pegando febre do pântano. Mosquito demais. Já são vinte doentes.',
 ['ouro-20 povo+4','Pagou tratamento e redes contra mosquito no canal.','n:d_canal3|3'],['burguesia+3 ?povo-6','Mandou continuar a obra do canal.','n:d_canal3|2'],
 'Parar a obra atrasa o lucro. Não parar mata trabalhador.','Se a febre chegar no quartel, fico sem gente.','Os trabalhadores são do bairro baixo. As famílias tão revoltadas.','l:desd;f');
K('d_canal3','povo','Irmã Maelis','Casa de Cura','💧','A água parada',
 'O canal ficou com água parada. Os mosquitos se espalharam pro vale todo. Ou drena, ou o vale adoece inteiro.',
 ['ouro-35 povo+5 burguesia+3','Drenou e terminou o canal do vale.'],['povo-6 burguesia-4','Abandonou o canal como estava.','n:epidemia|2'],
 'Terminar custa mais. Abandonar custa uma epidemia.','Água parada é doença parada esperando.','O vale tá com medo do canal que ia salvar o vale. Ironia.','l:desd;f');
K('d_negro1','nobreza','Arauto-Mor Gilles','Colégio dos Arautos','🖤','O Cavaleiro Negro',
 'Um cavaleiro de armadura negra desafia qualquer cavaleiro de Arcadia. Já venceu seis. Ninguém sabe quem é.',
 ['nobreza+3 guarda-3','Mandou o melhor cavaleiro da corte enfrentar o Cavaleiro Negro.','n:d_negro2|2'],['nobreza-4','Ignorou o desafio do Cavaleiro Negro.','n:d_negro2|3'],
 'Um desconhecido humilhando as Casas. Isso é recado de alguém.','Me deixa enfrentar ele. Eu não sou cavaleiro, mas sei derrubar um.','O povo adora o mistério. Já tem aposta na taverna sobre quem é.','l:desd');
K('d_negro2','nobreza','Cavaleiro Negro','Sem brasão','⚔️','O elmo cai',
 'O Cavaleiro Negro tirou o elmo. É Rowan, o bastardo de Argenthal que o senhor recusou. Ele exige ser reconhecido.',
 ['nobreza-5 povo+6','Reconheceu Rowan como cavaleiro de Arcadia.','n:d_negro3|3'],['nobreza+4 ?povo-5','Recusou Rowan mais uma vez.','n:d_negro3|2'],
 'Ele provou o valor na lança. As Casas vão ter que engolir.','Eu disse que ele lutava bem. Disse!','O povo AMA ele. Bastardo que vence nobre. É o sonho de todo mundo.','l:desd;f');
K('d_negro3','nobreza','Capitã Valkiria','Guarda Real','🗡️','Rowan reúne seguidores',
 'Rowan reuniu jovens sem terra em Argenthal. Cinquenta homens. Diz que vai tomar o que é dele.',
 ['guarda-4 nobreza+3 povo-4','Mandou dispersar os seguidores de Rowan.'],['nobreza-6 guarda-3','Deixou Rowan agir em Argenthal.','n:r_lealdade2|3'],
 'Um bastardo com exército em Argenthal. As Casas estão com medo. Com razão.','Eu não quero lutar contra ele. Mas se tu mandar...','O povo de Argenthal tá do lado do Rowan. Ele é um deles.','l:desd;f');
