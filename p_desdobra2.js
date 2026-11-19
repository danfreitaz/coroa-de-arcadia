/* Lote XV · Petições com desdobramentos (2/2) · cadeias de histórias */
// ── O ovo da montanha ──
K('d_ovo1','arcano','Pastor Edmund','Montanhas do Norte','🥚','O ovo de pedra',
 'Achei um ovo do tamanho de uma ovelha numa gruta. Tá quente. Dizem que é de grifo. Ou de coisa pior.',
 ['ouro-10 guarda+2','Mandou trazer o ovo de pedra para o castelo.','n:d_ovo2|3'],['?guarda-2','Mandou deixar o ovo na gruta.','n:d_ovo2|4'],
 'Um ovo desconhecido no castelo. Ou um ovo desconhecido livre na montanha.','Se for grifo, eu crio. Se for outra coisa, eu... também lido.','Os pastores tão com medo da mãe voltar procurando. Isso não acaba aqui.','l:desd');
K('d_ovo2','arcano','Arquimaga Ondine','Ala Arcana','🐣','O ovo rachou',
 'O ovo rachou. Saiu uma serpe pequena, que respira fumaça. Ela gosta do Banx, aliás. Criamos ou levamos pra longe?',
 ['ouro-15 guarda+4 ?clero-4','Decidiu criar a serpe no castelo.','n:d_ovo3|4'],['guarda-2','Mandou levar a serpe de volta à montanha.','n:dragao2|3'],
 'Uma serpe treinada seria uma arma. Uma serpe solta seria uma tragédia.','O Bispo quase desmaiou quando viu. Valeu o dia. 😂','Ela dorme no meu alaúde! Eu chamo ela de Brasinha. 🐉','l:desd;f');
K('d_ovo3','arcano','Capitã Valkiria','Guarda Real','🔥','A serpe cresceu',
 'Brasinha cresceu. Queimou o estábulo sem querer. Os cavalos fugiram. Os nobres querem ela morta.',
 ['ouro-25 guarda+5 nobreza-4','Construiu uma torre de pedra para a serpe.'],['nobreza+4 guarda-3','Mandou a serpe para as montanhas.','n:r_dragao_real|5'],
 'Uma torre para uma serpe. Ou uma serpe adulta solta lembrando de quem a expulsou.','Ela me obedece. Mais ou menos. Me deixa treinar ela.','Se mandar embora, ela volta. Grande. E com raiva. Eu sinto isso.','l:desd;f');
// ── A explosão da mina ──
K('d_mina1','burguesia','Mestre Dorgan','Companhia das Pedreiras','💨','O gás da mina',
 'Os mineiros sentem cheiro de ovo podre na galeria nova. Gás. Se eu parar, perco a semana. Se continuar...',
 ['burguesia-4 povo+3','Mandou parar a galeria com gás.','n:d_mina2|5'],['ouro+15 burguesia+3','Mandou continuar a galeria com gás.','n:d_mina2|2'],
 'Uma semana de lucro contra uma explosão possível.','Gás de mina mata sem aviso. Para.','Os mineiros tão com medo. Mas precisam do pão. Isso vai explodir de um jeito ou de outro.','l:desd');
K('d_mina2','povo','Mineiro Bram','Pedreiras do Norte','💥','A mina explodiu',
 'A galeria explodiu. Doze mineiros presos lá embaixo. Ainda estão vivos. Ouvimos as batidas.',
 ['ouro-30 guarda-3 povo+6','Mandou tudo para resgatar os doze mineiros.','n:d_mina3|2'],['povo-8 burguesia-3','Mandou lacrar a galeria.','n:minas2|3'],
 'Resgate custa. Lacrar custa doze vidas. Não há conta aqui.','Mando meus homens cavar. Todos.','As mulheres estão na boca da mina cantando pros maridos ouvirem. Meu Rei...','l:desd;f');
K('d_mina3','povo','Mineiro Bram','Pedreiras do Norte','🙏','Os doze voltaram',
 'Os doze voltaram vivos. Mas os mineiros não querem mais descer sem regra. Pedem uma lei de segurança nas minas.',
 ['povo+6 burguesia-5','Aprovou a lei de segurança nas minas.','v:Lei das minas|6|ouro-4'],['burguesia+3 ?povo-5','Recusou a lei de segurança nas minas.','n:r_criancas_minas|4'],
 'Mineiro vivo trabalha mais anos. Lei boa é lei barata a longo prazo.','O Templo fez missa de agradecimento. Os padres querem a lei também.','A vila das pedreiras vai lembrar desse Rei pra sempre. Pro bem ou pro mal.','l:desd;f');
// ── O cozinheiro espião ──
K('d_cozinha1','guarda','Cozinheira-Mor Gertrudes','Cozinha do Castelo','🍲','O ajudante novo',
 'Contratei um ajudante de cozinha novo. Ele pergunta demais: onde o Rei come, quem prova a comida, que horas.',
 ['guarda+3','Mandou vigiar o ajudante de cozinha.','n:d_cozinha2|2'],['?guarda-3','Disse a Gertrudes que era só curiosidade.','n:d_cozinha2|3'],
 'Curiosidade sobre a comida do Rei. Depois da taça envenenada... não.','Gertrudes nunca reclama de ninguém. Se ela reclamou, é sério.','O rapaz diz que é de Brumafria. Ninguém em Brumafria conhece ele. Isso vai dar história.','l:desd');
K('d_cozinha2','guarda','Capitã Valkiria','Guarda Real','🧪','O frasco escondido',
 'Achei um frasco no catre do ajudante. Cheiro de amêndoa. Veneno. Prendo agora ou sigo pra ver quem mandou?',
 ['guarda+4','Mandou prender o ajudante envenenador na hora.'],['?guarda-3 nobreza+2','Mandou seguir o envenenador para achar o mandante.','n:d_cozinha3|1'],
 'Prender salva hoje. Seguir pode salvar o reino. Ou matar o Rei.','Eu provo tua comida até descobrir. Eu. Mais ninguém. 😤','Se seguir, ele vai levar a gente até alguém grande. Pode apostar.','l:desd;f');
K('d_cozinha3','nobreza','Banx','Bardo Arcano','🎭','O mandante',
 'Segui o ajudante. Ele entregou um bilhete na casa do Barão Ulrich Vane. O mesmo Vane que queria servidão por dívida.',
 ['nobreza-8 guarda+5 povo+4','Mandou prender o Barão Ulrich Vane.'],['nobreza+3','Guardou a prova contra o Barão Vane em segredo.','n:golpe|4'],
 'Prender um Barão por um bilhete. As Casas vão exigir provas. Mas a prova existe.','Ele tentou te MATAR. De novo um nobre. Prende.','Se esconder, ele tenta de novo. E da próxima vez pode dar certo.','l:desd;f');
// ── O ouro sumido do Templo ──
K('d_ouro1','clero','Irmão Tobias','Templo da Aurora','🏺','O cofre do Templo',
 'Majestade, o cofre das esmolas do Templo está mais leve do que devia. Alguém está roubando. Tenho medo de acusar.',
 ['clero+3 guarda-2','Mandou investigar o cofre das esmolas do Templo.','n:d_ouro2|2'],['?clero-3','Mandou Tobias resolver dentro do Templo.','n:d_ouro2|4'],
 'Esmola sumindo do Templo. O dinheiro dos pobres sumindo. Investiga.','O Templo não gosta de guarda lá dentro. Mas vou com cuidado.','O povo dá a última moeda pra esmola. Se descobrirem que roubam, isso pega fogo.','l:desd');
K('d_ouro2','clero','Escriba-Chefe Odo','Arquivos Reais','📒','As contas do Bispo',
 'Comparei os livros do Templo. O dinheiro some sempre na semana em que o Bispo viaja a Valdoria.',
 ['clero-6 povo+4','Tornou públicas as contas do Bispo.','n:d_ouro3|2'],['clero+3','Guardou as contas do Bispo em segredo.','n:d_ouro3|5'],
 'Acusar o Bispo publicamente é um terremoto. Guardar é uma arma para depois.','O Bispo tem amigos em todas as Casas. Cuidado.','O povo já desconfia da carruagem dourada dele. Isso vai explodir.','l:desd;f');
K('d_ouro3','clero','Sumo-Sacerdotisa Elowen','Templo da Aurora','⚖️','O julgamento do Bispo',
 'O Templo precisa julgar o Bispo. Eu posso presidir. Mas preciso que a Coroa garanta que nenhuma Casa interfira.',
 ['clero+6 nobreza-5 povo+5','Garantiu o julgamento do Bispo presidido por Elowen.'],['clero-4','Deixou o caso do Bispo esfriar.','n:r_excomunhao|4'],
 'Um Bispo julgado. Arcadia nunca viu isso.','Eu ponho guarda em cada porta. Nenhuma Casa entra.','Se o Bispo escapar, ele volta mais forte. E com raiva da Coroa.','l:desd;f');
// ── O banco do vale ──
K('d_banco1','burguesia','Mercador Pip Lowell','Comerciante da cidade','🏦','Um banco para o vale',
 'Quero abrir um banquinho no vale. Os lavradores guardam moeda e eu empresto pra semente. A Coroa só precisa autorizar.',
 ['burguesia+4 povo+3','Autorizou o banquinho do vale.','n:d_banco2|4'],['','Recusou o banquinho do vale.','n:d_banco2|8'],
 'Crédito para semente aumenta a colheita. Se o Pip for honesto.','Banco no vale vai precisar de guarda. Muita moeda num lugar só.','Os lavradores nunca tiveram onde guardar moeda. Isso pode mudar ou pode dar errado.','l:desd');
K('d_banco2','burguesia','Lavradora Ana','Vila de Pedraverde','😨','Corrida ao banco',
 'Correu o boato de que o Pip fugiu com o dinheiro. Todo mundo foi tirar as moedas ao mesmo tempo. O banco não tem tudo.',
 ['ouro-40 burguesia+4 povo+5','Cobriu as moedas que faltavam no banco do vale.'],['povo-6 burguesia-4','Deixou o banco do vale quebrar.','n:d_banco3|2'],
 'Cobrir é caro. Não cobrir quebra a confiança em todo banco.','O Pip tá escondido em casa com medo. Não fugiu.','Gente que perdeu as economias de uma vida. O vale vai lembrar.','l:desd;f');
K('d_banco3','burguesia','Coletor-Mor Aldous','Tesouro Real','📉','O medo dos bancos',
 'Depois do banco do vale, o povo tirou o dinheiro de todo lugar. Até dos Orsini. O crédito sumiu do reino.',
 ['ouro-50 burguesia+6','Garantiu os depósitos de todos os bancos de Arcadia.'],['burguesia-8','Deixou o crédito sumir do reino.','n:cambio2|3'],
 'Garantir os bancos custa caro. Sem crédito, o comércio para.','Os mercadores tão escondendo moeda debaixo do colchão. Meus soldados também.','O povo voltou a guardar dinheiro em buraco no chão.','l:desd;f');
// ── Os gêmeos de Ashfeld ──
K('d_gemeo1','nobreza','Lady Mirela Ashfeld','Casa Ashfeld','👥','Os gêmeos',
 'Meus netos são gêmeos. Ninguém anotou quem nasceu primeiro. Os dois querem ser herdeiros. A Coroa decide?',
 ['nobreza+3','Decidiu que o gêmeo mais velho seria escolhido por sorteio.','n:d_gemeo2|3'],['nobreza-2','Mandou dividir a herança dos gêmeos.','n:d_gemeo2|4'],
 'Herança por sorteio ou por divisão. Nenhuma termina em paz.','O padre que fez o parto já morreu. Ninguém sabe.','Os criados da casa já escolheram lado. Isso vai rachar a família.','l:desd');
K('d_gemeo2','nobreza','Gêmeo Edmund Ashfeld','Casa Ashfeld','🗡️','O gêmeo perdedor',
 'Meu irmão ficou com tudo. Eu tenho só o nome. Peço um posto na Guarda. Ou vou buscar fortuna em outro reino.',
 ['guarda+3 nobreza+2','Deu ao gêmeo Edmund um posto na Guarda.','n:d_gemeo3|4'],['?nobreza-3','Deixou o gêmeo Edmund partir.','n:d_gemeo3|5'],
 'Um nobre ressentido dentro da Guarda. Ou fora do reino, com segredos de família.','Ele luta bem. Mas quero ver se obedece.','Se ele for embora magoado, vai procurar quem pague. E Morgrath paga bem.','l:desd;f');
K('d_gemeo3','nobreza','Gêmeo Edmund Ashfeld','Casa Ashfeld','🐺','O gêmeo voltou',
 'Edmund voltou. Com uma carta de Morgrath oferecendo apoio pra ele tomar a Casa Ashfeld do irmão.',
 ['nobreza+5 guarda+3','Prendeu o gêmeo Edmund pela carta de Morgrath.'],['nobreza-6 ?guarda-4','Tentou reconciliar os gêmeos Ashfeld.','n:golpe|3'],
 'Morgrath usando briga de família. Clássico.','Traição é traição. Mesmo de gêmeo magoado.','A avó Mirela chorou a noite toda. Os dois são netos dela.','l:desd;f');
// ── As torres de fogo ──
K('d_torre1','guarda','Tenente Kael','Guarda Real','🔥','O sinal falso',
 'A torre de sinal de fogo da fronteira acendeu ontem à noite. Corremos pra lá. Não tinha nada. Alguém acendeu de propósito.',
 ['guarda+3','Mandou investigar quem acendeu o sinal falso.','n:d_torre2|2'],['?guarda-3','Mandou ignorar o sinal falso.','n:d_torre2|3'],
 'Um alarme falso ensina todos a ignorar o próximo. Que é o objetivo de quem acendeu.','Alarme falso é treino do inimigo. Eu sei disso.','Os vigias das torres tão sendo chamados de mentirosos na vila. Isso vai continuar.','l:desd');
K('d_torre2','guarda','Batedor Fynn','Patrulha do Norte','🐾','Pegadas de Morgrath',
 'Achei pegadas de botas de Morgrath perto da torre. Eles estão testando nossa reação. Contando nosso tempo.',
 ['ouro-20 guarda+5','Mandou trocar os horários e dobrar as torres de sinal.'],['?guarda-4','Manteve as torres como estavam.','n:d_torre3|3'],
 'Eles cronometram a nossa resposta. Temos que mudar o ritmo.','Morgrath estuda a gente. Eu vou estudar eles de volta.','O povo da fronteira tá dormindo com a faca do lado.','l:desd;f');
K('d_torre3','guarda','General Thorin','Forte Thorendis','🚩','O ataque de verdade',
 'A torre acendeu de novo. Dessa vez ninguém correu, achando que era falso. Era verdade. Perdemos a vila de Ponte Seca.',
 ['guarda-6 povo+4 nobreza+3','Mandou retomar a vila de Ponte Seca.'],['guarda-4 povo-6','Abandonou a vila de Ponte Seca.','n:fronteira|2'],
 'Eles usaram nosso cansaço contra nós. Inteligente e cruel.','Eu avisei que era treino deles. Agora me deixa ir.','A gente de Ponte Seca tá na estrada. Sem casa. Sem nada.','l:desd;f');
// ── A ilha da garça ──
K('d_ilha1','burguesia','Barqueiro Lino','Cachoeira das Sete Quedas','🏝️','A Ilha da Garça',
 'Valdoria fincou bandeira na Ilha da Garça, no meio do rio. Dizem que sempre foi deles. Lá a gente sempre pescou.',
 ['burguesia-3 guarda+3','Mandou retirar a bandeira de Valdoria da ilha.','n:d_ilha2|2'],['burguesia+3 ?povo-4','Deixou a bandeira de Valdoria na ilha.','n:d_ilha2|4'],
 'Uma ilhota sem valor. Mas quem cede uma ilha cede o rio.','Uma bandeira se tira com uma mão. Uma guerra não.','Os pescadores perderam o melhor ponto de pesca. Isso vai se arrastar.','l:desd');
K('d_ilha2','burguesia','Embaixador Lucan Thessaly','Reino de Valdoria','📜','O mapa antigo',
 'Valdoria tem um mapa de duzentos anos mostrando a ilha como deles. Arcadia tem algum mapa mais antigo?',
 ['ouro-15 burguesia+3','Pagou a Biblioteca Real para achar mapas mais antigos.','n:d_ilha3|3'],['burguesia+4 ?povo-3','Cedeu a Ilha da Garça a Valdoria.'],
 'Um mapa contra outro. A guerra das bibliotecas.','A Serina acha qualquer mapa. Dá pra ela.','Se ceder, os pescadores perdem de vez. Eles não vão esquecer.','l:desd;f');
K('d_ilha3','burguesia','Serina Valdimere','Biblioteca Real','🗺️','O mapa de Arcadia',
 'Achei um mapa de trezentos anos. A ilha é de Arcadia. Mas se mostrarmos, humilhamos Valdoria publicamente.',
 ['burguesia-4 povo+5 nobreza+3','Mostrou o mapa e reclamou a Ilha da Garça.','n:valdoria_magoa|3'],['burguesia+4 povo+2','Propôs dividir a pesca da ilha com Valdoria.'],
 'Ganhar a ilha e perder o amigo. Ou dividir e manter os dois.','Serina é genial. O Jo tá todo orgulhoso. Disfarça mal.','Dividir a pesca é justo. Os pescadores aceitam, se for de verdade.','l:desd;f');
// ── A bruxa do pântano ──
K('d_bruxa1','arcano','Lavrador Nestor','Aldeia de Sabugueiro','🧹','Nhá Joana do Pântano',
 'Nhá Joana, a velha do Pântano de Lodomar, rogou praga na aldeia porque não pagamos as ervas dela. As vacas secaram.',
 ['ouro-10 povo+3','Pagou as ervas de Nhá Joana pela aldeia.','n:d_bruxa2|4'],['clero+3 ?povo-4','Mandou o padre benzer a aldeia contra a praga.','n:d_bruxa2|2'],
 'Dez moedas para acabar com uma praga. Ou com uma briga. Barato de qualquer jeito.','O padre vai querer queimar a velha. O Templo adora uma bruxa.','A aldeia tá com medo. Mas também deve as ervas. Isso não vai acabar com reza.','l:desd');
K('d_bruxa2','arcano','Nhá Joana','Pântano de Lodomar','🐸','A velha vem ao castelo',
 'Vim eu mesma, Majestade. Não sou bruxa. Sou curandeira. Querem me queimar. Peço proteção. Em troca, sei coisas do pântano.',
 ['clero-5 guarda+3 povo+3','Protegeu Nhá Joana e ouviu o que ela sabia.','n:d_bruxa3|2'],['clero+4 ?povo-3','Entregou Nhá Joana ao Templo.'],
 'Uma velha que sabe coisas do pântano. Por onde os bandidos andam, talvez.','O Inquisidor vai espumar. Mas ela fala de coisas que a Guarda não sabe.','O povo de Sabugueiro tá com medo e com vergonha. Ela curou metade deles um dia.','l:desd;f');
K('d_bruxa3','arcano','Nhá Joana','Pântano de Lodomar','🌫️','O segredo do pântano',
 'No meio do pântano tem uma pedra com as mesmas runas de Vhalkir. Os Vigilantes vão lá toda lua nova. Estão acordando algo.',
 ['guarda-4 clero+3','Mandou destruir a pedra rúnica do pântano.'],['?guarda-6','Mandou só vigiar a pedra do pântano.','n:floresta2|4'],
 'Outra pedra de Vhalkir. Os Vigilantes estão construindo alguma coisa.','Destruir a pedra pode romper alguma coisa. Ou salvar. Ninguém sabe.','O pântano fica perto de Sabugueiro. A aldeia não pode pagar por isso.','l:desd;f');
// ── O estranho do mapa ──
K('d_estranho1','arcano','Taverneira Bessa','Taverna do Sino','🗺️','O estranho do mapa',
 'Um estranho pagou a noite com uma moeda antiga e esqueceu um mapa na mesa. Mostra túneis debaixo do castelo.',
 ['guarda+3','Mandou prender o estranho do mapa.','n:d_estranho2|2'],['?guarda-3','Deixou o estranho ir embora.','n:d_estranho2|3'],
 'Alguém de fora sabe dos túneis. Quantos mais sabem?','Moeda antiga, mapa de túnel. Isso é Vigilante ou é pior.','A Bessa ficou com a moeda. Diz que brilha no escuro. Isso vai dar história.','l:desd');
K('d_estranho2','arcano','Serina Valdimere','Biblioteca Real','🗝️','A moeda do Fundador',
 'A moeda é do tempo do Rei Fundador. Ninguém tem uma dessas há trezentos anos. O estranho é... alguém muito antigo?',
 ['ouro-10 guarda+3 ?clero-3','Mandou estudar a moeda e procurar o estranho.','n:d_estranho3|3'],['clero+2','Mandou guardar a moeda na Biblioteca e esquecer.','n:sala2|3'],
 'Alguém com moeda de trezentos anos e mapa de túnel. Arcadia guarda mais segredos do que admite.','Se ele é antigo, ele sabe de Vhalkir. Quero conversar com ele. Com a lança na mão.','O povo já diz que o Rei Fundador voltou. Boato corre rápido.','l:desd;f');
K('d_estranho3','arcano','O Estranho','Sem nome','⏳','O homem que não envelhece',
 'Majestade. Eu selei Vhalkir junto com o Fundador. Estou cansado. O selo precisa de mim de novo. Ou de um substituto.',
 ['guarda+8 clero-5','Deixou o Estranho voltar a guardar o selo de Vhalkir.'],['?guarda-6','Recusou a ajuda do Estranho.','n:vhalkir|3'],
 'Um guardião de trezentos anos. Se ele for quem diz, nós somos crianças diante dele.','Ele fala como meu avô falava. Mas com olhos de quem viu muita coisa.','Se ele se for, o selo fica sem quem o conheça. Isso volta em poucas semanas.','l:desd;f');
// ── A greve da Academia ──
K('d_acad1','povo','Menina Lina','Academia Real','📚','Os estudantes protestam',
 'Os estudantes pobres da Academia estão sendo expulsos das aulas pelos ricos. Vamos parar as aulas até a Coroa resolver.',
 ['povo+4 nobreza-3','Proibiu a expulsão de estudantes pobres das aulas.','n:d_acad2|4'],['nobreza+3 ?povo-4','Deixou os estudantes resolverem entre si.','n:d_acad2|2'],
 'A Academia é da Coroa. Quem paga escolhe as regras.','Os filhos dos nobres empurram os pobres pra fora. Já vi.','A Lina tá na frente do protesto. Ela não tem medo de ninguém.','l:desd');
K('d_acad2','povo','Mestra Liana Orwen','Academia Real','🔥','A briga na Academia',
 'Os estudantes ricos e pobres brigaram no pátio. Quebraram a biblioteca. Os nobres querem fechar a sala dos pobres.',
 ['nobreza+4 povo-6','Fechou a sala dos estudantes pobres.','n:d_acad3|3'],['ouro-20 povo+5 nobreza-4','Reformou a biblioteca e manteve a sala dos pobres.'],
 'Fechar a sala é punir quem foi empurrado.','Mandei dois guardas pro pátio. Parece quartel agora.','Se fecharem a sala, a Lina vai pra rua. E muitos vão junto.','l:desd;f');
K('d_acad3','povo','Jovem Tomas','Aprendizes das guildas','✊','Os estudantes na praça',
 'Os estudantes expulsos se juntaram aos aprendizes. Estão na praça, com faixas. Pedem uma escola só pro povo.',
 ['ouro-30 povo+6 nobreza-4','Prometeu uma escola do povo aos estudantes.'],['guarda-4 povo-6','Mandou dispersar os estudantes da praça.','n:saque|3'],
 'Uma escola do povo. Uma ideia que não volta para a gaveta.','Não quero dispersar criança com escudo. Não me manda isso.','A Lina discursou. A praça inteira chorou. Isso é só o começo.','l:desd;f');
// ── O navio fantasma ──
K('d_navio1','burguesia','Mestre Corin Vale','Porto do Rio','👻','O navio sem ninguém',
 'Um navio chegou ao porto sem ninguém a bordo. Carga intacta: especiaria e seda. Ninguém sabe de onde veio.',
 ['ouro+40 burguesia+4 ?clero-3','Confiscou a carga do navio fantasma para a Coroa.','n:d_navio2|3'],['clero+3','Mandou afundar o navio fantasma.'],
 'Quarenta moedas de carga sem dono. Raro. E suspeito.','O padre do porto não quer chegar perto. Diz que é amaldiçoado.','Os estivadores não querem descarregar. Dizem que ouviram passos lá dentro. Isso não acaba aqui.','l:desd');
K('d_navio2','arcano','Arquimaga Ondine','Ala Arcana','🌫️','A tripulação apareceu',
 'Os marinheiros do navio apareceram. Em sonho, para os estivadores. Pedem que a carga seja devolvida ao mar.',
 ['ouro-40 clero+4 povo+3','Devolveu a carga do navio fantasma ao rio.'],['?povo-5 burguesia+3','Manteve a carga do navio fantasma.','n:d_navio3|2'],
 'Devolver ouro por causa de um sonho. Ou ignorar e descobrir o que acontece.','Até eu sonhei com eles. Não conta pro Banx.','Os estivadores não dormem mais. As crianças do porto também sonham com eles.','l:desd;f');
K('d_navio3','arcano','Pescador Tomé','Vila do Rio','🌊','A névoa do porto',
 'Uma névoa saiu do navio e cobriu o porto. Quem entra nela não acha a saída por horas. Três sumiram.',
 ['ouro-30 clero+4 guarda-3','Mandou queimar o navio fantasma com bênção do Templo.'],['?povo-6 ?burguesia-6','Isolou o porto e esperou a névoa passar.','n:r_portal2|3'],
 'Queimar o navio e a carga. Prejuízo certo para acabar com o incerto.','O Templo e a Ala juntos pela primeira vez. Isso já diz muito.','O porto tá parado. Os estivadores sem trabalho e com medo.','l:desd;f');
// ── Os grifos selvagens ──
K('d_grifos1','povo','Criador Bento Lã','Pastos das Colinas','🦅','Os grifos voltaram',
 'Grifos selvagens apareceram nas colinas. Levaram dez ovelhas. Os pastores querem caçá-los. São os primeiros em trezentos anos.',
 ['guarda-3 povo+4 nobreza-3','Mandou caçar os grifos selvagens.'],['ouro-15 povo+2 nobreza+3','Pagou os pastores e protegeu os grifos.','n:d_grifos2|4'],
 'O grifo é o símbolo do brasão. Caçá-los é feio. Mas as ovelhas são o sustento.','Se tiver grifo selvagem, Faísca não é o último. Não deixa matar, Dan.','Os pastores perdem ovelha. Mas ver um grifo voando é coisa de lenda.','l:desd');
K('d_grifos2','arcano','Caçador Jorah','Montanhas do Norte','🪺','O ninho nas colinas',
 'Achei o ninho. Três filhotes. A mãe está ferida por flecha de Morgrath. Eles fugiram de lá.',
 ['ouro-20 guarda+4 povo+2','Mandou cuidar da grifa ferida e dos filhotes.','n:d_grifos3|5'],['ouro+40 ?nobreza-4','Vendeu os filhotes de grifo a colecionadores.'],
 'Grifos fugindo de Morgrath. Isso diz algo sobre o que acontece lá.','Três filhotes. Faísca vai ter irmãos! Cuida deles, Dan. 🥺','Vender os filhotes seria trair o próprio brasão. O povo não perdoa isso.','l:desd;f');
K('d_grifos3','guarda','Capitã Valkiria','Guarda Real','🪽','A Ordem do Grifo',
 'Os filhotes cresceram. Quero criar a Ordem do Grifo: cavaleiros alados. Ninguém em nenhum reino teria isso.',
 ['ouro-40 guarda+8 nobreza+4','Criou a Ordem do Grifo.'],['guarda-2','Recusou a Ordem do Grifo.','n:grifo2|2'],
 'Cavaleiros voando. A notícia chega a Morgrath em uma semana. E eles vão tremer.','Isso é o sonho da minha vida, Dan. A minha vida inteira. 🥺','O povo vai ver grifos sobre a cidade todo dia. Lenda viva.','l:desd;f');
// ── O arsenal roubado ──
K('d_arsenal1','guarda','Ferreiro-Mor Gundar','Forja Real','🗡️','Espadas sumidas',
 'Sumiram cinquenta espadas do arsenal. Ninguém viu nada. Só pode ter sido gente de dentro.',
 ['guarda+3','Mandou revistar todos os guardas do arsenal.','n:d_arsenal2|2'],['?guarda-4','Mandou forjar espadas novas e esquecer.','n:d_arsenal2|3'],
 'Cinquenta espadas não somem sozinhas. Alguém está armando alguém.','Revistar meus próprios homens. Odeio isso. Mas faço.','Espada sumida aparece em mão errada. Pode apostar.','l:desd');
K('d_arsenal2','guarda','Tenente Kael','Guarda Real','🔍','As espadas no sul',
 'As espadas apareceram na guarnição do sul. A do General Rhoan. Ele diz que comprou de um mercador.',
 ['guarda-4 nobreza+3','Mandou recolher as espadas da guarnição do sul.','n:d_arsenal3|2'],['?guarda-5','Aceitou a explicação do General Rhoan.','n:r_golpe_militar2|4'],
 'Rhoan de novo. Esse nome não aparece em lugar bom.','Comprou de mercador? Espada com o selo da Forja Real? Mentira.','Os soldados do sul cantam canção pro Rhoan. Isso não é bom sinal.','l:desd;f');
K('d_arsenal3','guarda','General Rhoan','Guarnição do Sul','🎖️','O General se explica',
 'Majestade, vim pessoalmente. Peguei as espadas porque o sul estava desarmado e ninguém ouvia meus pedidos. Errei no jeito. Não na causa.',
 ['guarda+5 ouro-30','Perdoou Rhoan e mandou armas ao sul.'],['guarda-3 nobreza+3','Rebaixou o General Rhoan.','n:r_golpe_militar|3'],
 'Um general que rouba por necessidade. Perdoar ensina que roubar funciona.','Ele tem razão sobre o sul. Mas devia ter falado comigo.','Se rebaixar, os soldados dele vão ficar do lado dele. Isso não para aqui.','l:desd;f');
// ── O prefeito da cidade baixa ──
K('d_pref1','burguesia','Mestre Hollis','Guilda dos Padeiros','🗳️','A primeira eleição',
 'A cidade baixa quer eleger um prefeito pela primeira vez. Votam os chefes de família. A Coroa permite?',
 ['burguesia+4 povo+4 nobreza-4','Permitiu a primeira eleição da cidade baixa.','n:d_pref2|3'],['nobreza+3 ?povo-4','Proibiu a eleição da cidade baixa.','n:d_pref2|5'],
 'Uma eleição. As Casas vão perder o sono. Os mercadores vão ganhar voz.','Quem manda na guarda da cidade baixa depois? Preciso saber antes.','O povo nunca votou em nada. Vai ser festa. Ou briga. Ou as duas.','l:desd');
K('d_pref2','povo','Jovem Tomas','Aprendizes das guildas','📣','O candidato do povo',
 'Os aprendizes querem Tomas como prefeito. Os mercadores querem Hollis. As Casas querem que ninguém ganhe.',
 ['povo+5 burguesia-4','Apoiou Tomas para prefeito da cidade baixa.','n:d_pref3|3'],['burguesia+5 povo-3','Apoiou Hollis para prefeito da cidade baixa.','n:d_pref3|3'],
 'Apoiar um lado é escolher quem governa por você na cidade baixa.','O Tomas fala bonito. O Hollis paga bem. Eu fico neutra.','O povo quer o Tomas. Mas tem medo de que a Coroa não deixe ele governar. Isso vai pesar.','l:desd;f');
K('d_pref3','burguesia','Prefeito eleito','Cidade Baixa','🏛️','O prefeito quer poder',
 'O prefeito eleito quer cobrar o próprio imposto na cidade baixa e ter vinte guardas próprios.',
 ['burguesia+4 povo+4 ouro-15 guarda-3','Deu ao prefeito imposto e guarda próprios.','n:d_pref4|4'],['nobreza+4 burguesia-5 povo-4','Negou poder real ao prefeito eleito.'],
 'Imposto e guarda próprios. É uma cidade dentro do reino.','Vinte guardas que não respondem a mim. Não gosto.','Se negar tudo, o povo vai dizer que a eleição foi teatro.','l:desd;f');
K('d_pref4','nobreza','Duque Aldren Valcourt','Casa Valcourt','👑','As Casas querem eleição também',
 'Se a cidade baixa elege prefeito, as Casas exigem eleger o Conselho Real. É justo, Majestade. Ou não?',
 ['nobreza+6 povo-3 burguesia-3','Deixou as Casas elegerem o Conselho Real.','n:r_regencia|4'],['nobreza-6 povo+4','Negou às Casas a eleição do Conselho.'],
 'Eleição dá ideia. Ideia contagia. Agora todo mundo quer votar.','Conselho eleito pelas Casas? Eles vão votar em quem? Neles mesmos.','O povo vai rir: os nobres pedindo a mesma coisa que o povo pediu primeiro.','l:desd;f');
