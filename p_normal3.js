/* Lote XI · Petições normais (3/4) · Burguesia e Guarda */
K('n_cafe','burguesia','Mercadora Zaida','Viajante do leste','☕','Uma bebida preta do leste',
 'Trago um grão do leste que, torrado e fervido, vira uma bebida que espanta o sono. Quero abrir a primeira casa de café de Arcadia.',
 ['burguesia+5 ouro+5','Licenciou a primeira casa de café de Arcadia.'],['','Recusou a casa de café.'],
 'Uma novidade que vende. E paga licença.','Bebida que espanta o sono? Pro turno da noite? QUERO. ☕','O povo vai estranhar no começo. Depois não vai largar.','l:normal');
K('n_relojoeiro','burguesia','Relojoeiro Klaus','Rua dos Ourives','🕰️','O relógio da praça',
 'Construo relógios mecânicos. Um relógio grande na torre da praça diria a hora pra cidade inteira. Sem depender do sino.',
 ['ouro-35 burguesia+5 ?clero-3','Encomendou o relógio da praça a Klaus.'],['','Recusou o relógio da praça.'],
 'Mercado com hora certa é mercado mais justo.','O sineiro vai perder o emprego? O Templo vai reclamar.','O povo vai parar na praça só pra ver o ponteiro mexer.','l:normal');
K('n_hospedaria_estrada','burguesia','Dona Rosalind','Estalagem do Grifo','🛏️','Hospedarias na Estrada Real',
 'Proponho hospedarias a cada dia de viagem na Estrada Real. Viajante descansado gasta mais e chega mais rápido.',
 ['ouro-30 burguesia+6','Apoiou as hospedarias na Estrada Real.'],['burguesia-3','Recusou as hospedarias na estrada.'],
 'Estrada cheia de viajante é estrada cheia de pedágio. Investimento bom.','Hospedaria na estrada é posto de vigia de graça.','As vilas da estrada vão vender queijo, pão e ovo pros viajantes.','l:normal');
K('n_vidros','burguesia','Vidreiro Murano','Oficina de Vidro','🪟','Janelas de vidro',
 'Faço vidro claro como água. Janelas de vidro no castelo e nas casas ricas. Quero exclusividade por dois anos.',
 ['burguesia+5 ouro+15 ?nobreza+2','Deu exclusividade do vidro a Murano.'],['burguesia-2','Recusou a exclusividade do vidro.'],
 'Quinze de licença e o castelo com luz. Boa troca.','Janela de vidro quebra com pedra. Mas deixa ver quem chega.','O povo nunca vai ter janela de vidro. Mas os vidreiros vão contratar gente.','l:normal');
K('n_tecelagem','burguesia','Mestra Yvaine','Tinturaria do Rio','🧵','Teares novos',
 'Teares de Valdoria tecem o triplo. Se a Coroa ajudar na compra, a lã de Arcadia vira pano antes de sair do reino.',
 ['ouro-40 burguesia+7','Ajudou a comprar teares novos.'],['burguesia-3','Recusou os teares novos.'],
 'Vender pano em vez de lã crua. O lucro fica aqui. Excelente.','Tear não é comigo. Mas pano bom vira uniforme bom.','Os tecelões manuais vão perder trabalho. Isso o povo vai sentir.','l:normal');
K('n_correios','burguesia','Velho Bartô','Torre dos Pombos','📮','Um correio real',
 'Um correio com cavaleiros que levam cartas de vila em vila. Os mercadores pagam por carta, a Coroa fica com parte.',
 ['ouro-25 burguesia+5',"Criou o Correio Real de Arcadia.",'v:Correio Real|6|ouro+6'],['','Recusou o correio real.'],
 'Gasta vinte e cinco, recebe seis por semana. Em cinco semanas se paga.','Cavaleiro de correio também traz notícia da fronteira.','O povo vai mandar carta pros filhos na Guarda. Isso é bonito.','l:normal');
K('n_feira_livros2','burguesia','Livreiro Elian Moss','Rua dos Escribas','📚','A feira dos livros',
 'Uma feira de livros na praça, uma vez por mês. Livros usados, mapas, almanaques. Só pedimos a praça.',
 ['burguesia+3 povo+3 ?clero-2','Liberou a feira mensal de livros.'],['','Recusou a feira de livros.'],
 'Não custa nada. Gente que lê vira gente que compra.','O Inquisidor vai querer revistar cada livro.','O povo vai trocar almanaque por receita de bolo. Adoro.','l:normal');
K('n_balanca_publica','burguesia','Inspetor Garreth','Fiscais do Mercado','⚖️','A balança da Coroa',
 'Uma balança oficial na praça, onde qualquer um pode conferir o peso do que comprou. Acaba com a trapaça.',
 ['ouro-10 povo+4 burguesia-2','Instalou a balança pública da Coroa.'],['','Recusou a balança pública.'],
 'Dez moedas para acabar com trapaça. O mercado fica mais limpo.','O Brom do ímã vai chorar. 😂','O povo vai fazer fila pra conferir tudo. Já sei.','l:normal');
K('n_porto_guindaste','burguesia','Mestre Corin Vale','Porto do Rio','🏗️','Um guindaste no cais',
 'Um guindaste de madeira no cais levantaria carga pesada sem quebrar as costas dos estivadores.',
 ['ouro-35 burguesia+5 povo+2','Construiu um guindaste no cais.'],['?burguesia-2','Recusou o guindaste do cais.'],
 'Navio descarregado mais rápido é navio que volta mais vezes.','Guindaste pode levantar canhão também. Útil.','Os estivadores vão ter menos hérnia. Mas alguns vão perder o trabalho.','l:normal');
K('n_concorrencia','burguesia','Mestre Hollis','Guilda dos Padeiros','🥖','O padeiro de fora',
 'Um padeiro de Valdoria abriu forno na cidade e vende mais barato. A Guilda quer que ele seja expulso.',
 ['burguesia+4 ?povo-4','Expulsou o padeiro de Valdoria.'],['burguesia-4 povo+4','Deixou o padeiro de Valdoria trabalhar.'],
 'Proteger a Guilda ou deixar o pão mais barato. O povo sabe o que prefere.','Pão de Valdoria é bom. Já comprei. Não conta pro Hollis.','Pão mais barato é tudo que o bairro baixo quer.','l:normal');
K('n_cervejaria','burguesia','Mestre Cervejeiro Otto','Cervejaria do Rio','🍺','A cervejaria do rio',
 'Quero construir uma cervejaria grande na beira do rio. Pago imposto alto e emprego quarenta homens.',
 ['burguesia+5 povo+3 ?clero-3','Licenciou a cervejaria do rio.'],['','Recusou a cervejaria do rio.'],
 'Imposto alto e emprego. Os dois são bons.','Mais cerveja, mais briga. Mas também mais soldado feliz.','Quarenta empregos. O porto precisa disso.','l:normal');
K('n_rota_sal','burguesia','Mercador Varrus Kell','Companhia do Sal','🧂','O sal do litoral',
 'Proponho trazer sal do litoral de Ostmar pelo rio. Mais barato que o sal das minas. Peço só isenção no primeiro ano.',
 ['burguesia+4 povo+3 ?ouro-10','Isentou o sal de Ostmar no primeiro ano.'],['ouro+5','Cobrou taxa normal no sal de Ostmar.'],
 'Varrus de novo. Ele aprendeu com o monopólio. Agora é concorrência.','Sal mais barato é carne salgada no quartel o ano todo.','Sal barato é comida que dura. O povo agradece.','l:normal');
K('n_moeda_cobre','burguesia','Coletor-Mor Aldous','Tesouro Real','🪙','Moedas de cobre',
 'O povo não tem troco. Uma moeda de cobre para compras pequenas facilitaria o mercado.',
 ['ouro-15 burguesia+4 povo+3','Cunhou moedas de cobre para o troco.'],['','Recusou a moeda de cobre.'],
 'Sem troco, sem venda pequena. A moeda de cobre gira a economia de baixo.','Meus soldados vão poder comprar pão sem esperar o soldo inteiro.','Finalmente dá pra comprar meio pão. O povo vai amar.','l:normal');
K('n_mercado_animais','burguesia','Criador Bento Lã','Pastos das Colinas','🐖','O mercado de animais',
 'O mercado de animais é no meio da cidade. Cheiro, lama e boi solto. Proponho mudar pra fora dos muros.',
 ['ouro-20 burguesia+3 povo+3','Mudou o mercado de animais para fora dos muros.'],['?povo-2','Manteve o mercado de animais no centro.'],
 'Vinte moedas e uma cidade mais limpa.','Boi solto no centro já derrubou dois guardas meus. MUDA.','Os vizinhos do mercado vão dormir sem mugido pela primeira vez.','l:normal');
K('n_luvas','burguesia','Luveiro Marcel','Rua dos Couros','🧤','Luvas para a corte',
 'Faço as luvas mais finas do reino. Peço o título de Luveiro Real. Não custa nada à Coroa.',
 ['burguesia+3 nobreza+2','Nomeou Marcel Luveiro Real.'],['','Recusou o título de Luveiro Real.'],
 'Um título que custa zero e deixa um mercador feliz. Ótimo.','Luva fina não segura lança. Mas tá.','O povo nem usa luva. Mas é bonito o artesão ser reconhecido.','l:normal');
K('n_tavernas_impostos','burguesia','Taverneira Bessa','Taverna do Sino','🍻','O imposto da cerveja',
 'O imposto sobre cerveja dobrou e as tavernas estão vazias. Baixa, Majestade, ou fechamos.',
 ['burguesia+4 povo+3 ouro-15','Baixou o imposto sobre a cerveja.'],['burguesia-4','Manteve o imposto alto sobre a cerveja.'],
 'Imposto alto com taverna vazia não arrecada nada. Matemática.','Taverna vazia é soldado bebendo escondido no quartel.','A Taverna do Sino é o coração do bairro. Sem ela, o bairro morre.','l:normal');
K('n_armeiro','burguesia','Ferreiro-Mor Gundar','Forja Real','🗡️','Vender armas a Valdoria',
 'Valdoria quer comprar cem espadas da nossa forja. Paga bem. Mas espada vendida é espada que pode voltar contra nós.',
 ['ouro+40 burguesia+4 ?guarda-3','Vendeu cem espadas a Valdoria.'],['','Recusou vender espadas a Valdoria.'],
 'Quarenta moedas de um aliado. O risco é pequeno.','Espada que sai do reino não volta. Mas Valdoria é amiga. Por enquanto.','Os ferreiros vão trabalhar dobrado. O bairro das forjas agradece.','l:normal');
K('n_mapa_rotas','burguesia','Cartógrafa Inês','Academia Real','🧭','O mapa das rotas',
 'Os mercadores pagariam bem por um mapa das melhores rotas comerciais. Posso fazer e vender em nome da Coroa.',
 ['ouro+15 burguesia+3','Vendeu o mapa das rotas aos mercadores.'],['','Guardou o mapa das rotas só para a Coroa.'],
 'Informação que se vende. Elegante.','Mapa de rota também mostra rota de fuga. Cuidado com quem compra.','O povo não compra mapa. Mas os carroceiros vão.','l:normal');
K('n_sabao','burguesia','Saboeira Dona Lia','Rua dos Curtumes','🧼','Sabão para todos',
 'Faço sabão de cinza e gordura. Barato. Se a Coroa comprar para a Casa de Cura, menos gente adoece.',
 ['ouro-15 burguesia+3 povo+3 clero+2','Comprou sabão para a Casa de Cura.'],['','Recusou o sabão de Dona Lia.'],
 'Quinze moedas em sabão. Menos doença, menos gasto depois.','Sabão no quartel? Meus soldados precisam. Muito. 😷','O povo vai ficar mais limpo e mais saudável. Simples assim.','l:normal');
K('n_sedas_ostmar','burguesia','Embaixador de Ostmar','Reino de Ostmar','🎀','As sedas de Ostmar',
 'Ostmar oferece sedas a preço baixo se Arcadia comprar só deles por um ano.',
 ['burguesia+3 nobreza+3 ?burguesia-4','Fechou exclusividade das sedas com Ostmar.'],['','Recusou a exclusividade das sedas.'],
 'Seda barata agrada as damas. Os tecelões daqui vão sofrer.','Seda não é comigo.','O povo nem usa seda. Mas os tecelões daqui são do povo.','l:normal');
K('n_guarda_noturna','guarda','Sargento Brenn','Guarda Real','🔦','A ronda noturna',
 'Os roubos noturnos triplicaram. Proponho uma ronda com lanternas em cada bairro, toda noite.',
 ['ouro-20 guarda+5 povo+3','Criou a ronda noturna com lanternas.'],['?povo-3','Recusou a ronda noturna.'],
 'Vinte moedas em segurança. O comércio agradece.','Meus homens vão dormir menos. Mas vão. 💪','O povo vai dormir mais tranquilo vendo a lanterna passar.','l:normal');
K('n_quartel_novo','guarda','Capitã Valkiria','Guarda Real','🏠','O quartel novo',
 'O quartel tem goteira, rato e cama de palha podre. Meus soldados merecem coisa melhor. Pelo menos camas.',
 ['ouro-30 guarda+6','Reformou o quartel da Guarda Real.'],['guarda-4','Adiou a reforma do quartel.'],
 'Trinta moedas pela moral da Guarda.','Eu durmo lá também, sabia? Com os ratos. 😤','Soldado bem tratado trata bem o povo na rua.','l:normal');
K('n_escudeiros','guarda','Tenente Kael','Guarda Real','🛡️','Escola de escudeiros',
 'Proponho uma escola de escudeiros para meninos do povo. Em cinco anos, a Guarda terá os melhores soldados.',
 ['ouro-20 guarda+4 povo+3','Criou a escola de escudeiros para o povo.'],['','Recusou a escola de escudeiros.'],
 'Investir em soldado que ainda não existe. Visão de longo prazo.','O Kael pensou nisso sozinho. Tô orgulhosa. Não conta pra ele.','Os meninos da rua vão ter um caminho. Isso muda tudo.','l:normal');
K('n_cavalaria','guarda','Mestre-estribeiro Hal','Estábulos Reais','🐎','Cavalos de guerra',
 'Os cavalos de Ostmar são os melhores. Com vinte deles, a cavalaria de Arcadia não teria rival.',
 ['ouro-40 guarda+7','Comprou vinte cavalos de guerra de Ostmar.'],['','Recusou os cavalos de Ostmar.'],
 'Quarenta moedas em cavalos. Caro, mas dura anos.','A Brasa vai ter companhia à altura! 🐎','Cavalo de guerra é bonito de ver no desfile. O povo adora.','l:normal');
K('n_arqueiros','guarda','Darrow','Arqueiros da Guarda','🏹','Torneio de arqueiros',
 'Um torneio de arco aberto ao povo. Os melhores entram na Guarda. Prêmio: um arco de teixo.',
 ['ouro-15 guarda+4 povo+4','Organizou o torneio de arqueiros aberto ao povo.'],['','Recusou o torneio de arqueiros.'],
 'Recrutamento disfarçado de festa. Inteligente.','Darrow vai ser o juiz. Ninguém engana ele.','Todo menino do vale vai treinar com arco de galho por meses.','l:normal');
K('n_ponte_levadica','guarda','Mestre-de-obras Dorran','Guilda dos Pedreiros','🏰','A ponte levadiça',
 'A ponte levadiça do portão norte não levanta há dez anos. Enferrujou. Se houver ataque, o portão fica aberto.',
 ['ouro-25 guarda+6','Consertou a ponte levadiça do portão norte.'],['?guarda-5','Deixou a ponte levadiça enferrujada.'],
 'Vinte e cinco moedas. Um portão que fecha vale mais que cem soldados.','Dez anos aberta. DEZ. Eu achava que era decorativa. 😡','O povo do norte entra e sai por ali. Nem sabia que ela fechava.','l:normal');
K('n_guarda_rio','guarda','Almirante Corvo','Guarda do Rio','🚤','Barcos de patrulha',
 'Contrabandistas e piratas usam o rio de noite. Dois barcos de patrulha resolveriam.',
 ['ouro-30 guarda+5 burguesia+3','Comprou dois barcos de patrulha para o rio.'],['?burguesia-3','Recusou os barcos de patrulha.'],
 'Rio patrulhado é comércio seguro.','Barco! Eu quero aprender a remar. Sério.','Os pescadores vão ficar mais seguros à noite.','l:normal');
K('n_desafio_honra','guarda','Sargento Rolf','Guarda Real','🥊','O sargento rebaixado',
 'Fui rebaixado pela Capitã por causa de uma propina que não peguei. Peço revisão do caso. Sou inocente.',
 ['?guarda-3','Mandou revisar o caso do Sargento Rolf.'],['guarda+2','Manteve o rebaixamento de Rolf.'],
 'Revisar mostra justiça. Mas pode irritar a Capitã.','Ele é culpado, Dan. Eu vi. Mas faz o que achar certo. 😒','Os carroceiros juram que pagavam pro Rolf toda terça.','l:normal');
K('n_mapa_fronteira','guarda','Batedor Fynn','Patrulha do Norte','🗺️','Mapear a fronteira',
 'Ninguém sabe direito onde termina Arcadia e começa Morgrath. Posso mapear a fronteira com dez batedores.',
 ['ouro-15 guarda+4','Mapeou a fronteira com Morgrath.'],['','Recusou o mapa da fronteira.'],
 'Fronteira sem mapa é fronteira que se perde.','Preciso desse mapa. Patrulha sem mapa anda em círculo.','As vilas da fronteira não sabem a quem pagar imposto. Isso resolve.','l:normal');
K('n_arsenal_flechas','guarda','Ferreiro-Mor Gundar','Forja Real','🏹','Dez mil flechas',
 'O arsenal tem flecha pra uma tarde de batalha. Com dez mil flechas, aguentamos um cerco.',
 ['ouro-25 guarda+5','Encomendou dez mil flechas para o arsenal.'],['?guarda-3','Recusou as flechas do arsenal.'],
 'Flecha é barata. Falta de flecha é caríssima.','Uma tarde de batalha?! Eu achava que tinha mais. Encomenda já.','Os flecheiros do vale vão ter trabalho por meses.','l:normal');
K('n_soldado_cego','guarda','Irmã Maelis','Casa de Cura','👁️','Óculos para os arqueiros',
 'Metade dos arqueiros velhos não enxerga bem. Com lentes de Valdoria, voltam a acertar.',
 ['ouro-15 guarda+4','Comprou lentes para os arqueiros velhos.'],['','Recusou as lentes dos arqueiros.'],
 'Quinze moedas para recuperar arqueiros experientes. Bom.','O velho Ruben errou um alvo parado ontem. Paga.','Os arqueiros velhos vão parecer corujas. O povo vai rir. Com carinho.','l:normal');
K('n_cadeia_vila','guarda','Lavrador Nestor','Aldeia de Sabugueiro','🔒','Uma cadeia na vila',
 'Quando alguém faz besteira na vila, temos que levar até a capital. Uma cadeia pequena aqui resolveria.',
 ['ouro-15 guarda+3 povo+2','Construiu uma cadeia pequena em Sabugueiro.'],['','Recusou a cadeia de Sabugueiro.'],
 'Justiça perto de casa sai mais barata.','Uma cela e um guarda. Fácil.','O povo de Sabugueiro vai se sentir mais seguro.','l:normal');
K('n_guarda_mulheres','guarda','Capitã Valkiria','Guarda Real','💪','Mulheres na Guarda',
 'Quero abrir a Guarda para mulheres. Eu sou a prova de que funciona. O Bispo diz que é contra a natureza.',
 ['guarda+5 povo+3 clero-4','Abriu a Guarda Real para mulheres.'],['clero+2 guarda-2','Manteve a Guarda fechada para mulheres.'],
 'Dobrar o número de recrutas possíveis. Faz sentido.','Eu SOU a Capitã. O Bispo pode ficar com a natureza dele. 😤','As moças do vale vão fazer fila. Muitas já sabem atirar com arco.','l:normal');
K('n_estandarte','guarda','Bordadeira Celeste','Ateliê das Agulhas','🚩','O estandarte novo',
 'O estandarte da Guarda está rasgado desde Thorendis. Posso bordar um novo, com o grifo dourado.',
 ['ouro-10 guarda+4','Encomendou o novo estandarte da Guarda.'],['','Recusou o novo estandarte.'],
 'Dez moedas pelo orgulho da Guarda.','O velho estandarte tem sangue do meu pai. Guarda ele. E faz o novo. 🥺','O povo vai ver o estandarte novo no desfile.','l:normal');
K('n_prisioneiros','guarda','General Thorin','Forte Thorendis','⛓️','Os prisioneiros de Morgrath',
 'Temos trinta prisioneiros de Morgrath no forte. Comem nossa comida. Proponho trocar por nossos presos lá.',
 ['guarda+4 povo+3','Trocou prisioneiros com Morgrath.'],['ouro-10 guarda-2','Manteve os prisioneiros de Morgrath no forte.'],
 'Troca justa. E menos boca para alimentar.','Meu pai sabe o que faz. Troca.','Tem famílias aqui esperando os filhos presos lá.','l:normal');
K('n_bravura','guarda','Tenente Kael','Guarda Real','🏅','A medalha de bravura',
 'O soldado Davi salvou três crianças do incêndio. Proponho a primeira Medalha de Bravura de Arcadia.',
 ['ouro-5 guarda+4 povo+3','Criou a Medalha de Bravura e condecorou Davi.'],['','Recusou criar a Medalha de Bravura.'],
 'Cinco moedas de bronze. Uma tradição que vale ouro.','Davi é um dos meus melhores. Merece. 🏅','O povo vai lembrar desse soldado. E vai ver a Guarda com outros olhos.','l:normal');
K('n_cerco_treino','guarda','Capitã Valkiria','Guarda Real','🎯','Treino de cerco',
 'Quero fazer um treino de cerco de verdade. A cidade inteira fecha os portões por um dia. Pra ver o que acontece.',
 ['guarda+5 burguesia-3 ?povo-2','Fez um dia de treino de cerco na cidade.'],['','Recusou o treino de cerco.'],
 'Um dia sem mercado. Os mercadores vão chiar.','Melhor descobrir o que falha num treino do que numa guerra.','O povo vai achar que é guerra de verdade. Avisa antes.','l:normal');
K('n_bandido_famoso','guarda','Sargento Brenn','Guarda Real','🎭','O bandido Raposa',
 'Pegamos o Raposa, o bandido que rouba ricos e dá pros pobres. O povo ama ele. Os nobres querem ele enforcado.',
 ['nobreza+5 guarda+3 ?povo-6','Mandou enforcar o bandido Raposa.'],['povo+5 nobreza-4','Exilou o Raposa em vez de enforcá-lo.'],
 'Enforcar um herói do povo é criar um mártir.','Ele roubou, Dan. Mas nunca matou ninguém.','O povo canta o Raposa nas tavernas. Se enforcar, a canção vira hino.','l:normal');
K('n_veteranos','guarda','Soldado Velho Bento','Veteranos da Guarda','🎖️','A casa dos veteranos',
 'Nós, veteranos, não temos pra onde ir. Uma casa para soldados velhos, Majestade. Ajudamos a treinar os novos.',
 ['ouro-25 guarda+5 povo+2','Criou a Casa dos Veteranos.'],['?guarda-3','Recusou a Casa dos Veteranos.'],
 'Veteranos treinando recrutas. Experiência de graça.','O Bento me ensinou tudo. É o mínimo, Dan.','Os veteranos mendigando na rua deixam o povo triste e os recrutas com medo.','l:normal');
K('n_espadachim','guarda','Mestre-de-armas Iñigo','Viajante do sul','🤺','O mestre de esgrima',
 'Sou mestre de esgrima de Ostmar. Por vinte moedas por estação, ensino a Guarda a lutar como ninguém.',
 ['ouro-20 guarda+5','Contratou o mestre de esgrima de Ostmar.'],['','Dispensou o mestre de esgrima.'],
 'Vinte moedas por soldados melhores. Aprovado.','Vou testar ele primeiro. Se ele me vencer, contrata. 😏','O povo vai se juntar no pátio pra ver o treino.','l:normal');
K('n_muralha_musgo','guarda','Mestre-de-obras Dorran','Guilda dos Pedreiros','🌿','O musgo das muralhas',
 'O musgo das muralhas está entrando na pedra e rachando. Limpar tudo leva um mês e trinta homens.',
 ['ouro-20 guarda+4','Mandou limpar o musgo das muralhas.'],['?guarda-3','Deixou o musgo nas muralhas.'],
 'Manutenção é sempre mais barata que reconstrução.','O musgo é bonito. Mas pedra rachada não segura cerco.','Trinta homens do povo com trabalho por um mês.','l:normal');
K('n_sentinela_dormiu','guarda','Sargento Brenn','Guarda Real','😴','A sentinela que dormiu',
 'O soldado Pedrinho dormiu no posto. Tem dezessete anos e estava no terceiro turno seguido. A lei manda chicotear.',
 ['guarda+3 ?povo-3','Mandou punir a sentinela que dormiu.'],['guarda-2 povo+2','Perdoou a sentinela e mudou os turnos.'],
 'Três turnos seguidos é culpa de quem fez a escala.','A escala foi minha. Erro meu. Não do menino. 😣','O menino é filho da lavadeira Clotilde. O bairro inteiro conhece.','l:normal');
K('n_cachorros_guerra','guarda','Caçador Jorah','Montanhas do Norte','🐕','Cães de guerra',
 'Treino cães das montanhas que farejam inimigo a uma légua. Dez cães para a Guarda, Majestade?',
 ['ouro-20 guarda+5','Comprou dez cães de guerra das montanhas.'],['','Recusou os cães de guerra.'],
 'Vinte moedas por olhos e narizes extras. Bom.','Cachorro que fareja Morgrath? Quero. Bolota pode ser o mascote. 🐕','Os meninos vão adorar ver os cães treinando.','l:normal');
K('n_balestras','guarda','Ferreiro-Mor Gundar','Forja Real','🎯','Bestas de Valdoria',
 'As bestas de Valdoria atravessam armadura. Posso copiar o modelo. Preciso de aço e quatro semanas.',
 ['ouro-30 guarda+6','Encomendou bestas no modelo de Valdoria.'],['','Recusou as bestas.'],
 'Uma arma melhor por trinta. E o segredo fica nosso.','Besta que atravessa armadura. Morgrath vai pensar duas vezes.','Os ferreiros do bairro vão aprender coisa nova.','l:normal');
K('n_guarnicao_vila','guarda','Lavradora Ana','Vila de Pedraverde','🏘️','Soldados em Pedraverde',
 'Pedraverde fica longe e os bandidos sabem. Pedimos cinco soldados morando na vila. A gente dá casa e comida.',
 ['guarda-2 povo+5','Mandou cinco soldados para morar em Pedraverde.'],['?povo-3','Recusou soldados em Pedraverde.'],
 'Cinco soldados sustentados pela vila. Quase de graça.','Cinco homens a menos na capital. Mas a vila precisa.','Pedraverde vai dormir em paz. E os soldados vão casar com moças de lá, aposto.','l:normal');
K('n_tambor','guarda','Tamborileiro Zico','Guarda Real','🥁','Os tambores da Guarda',
 'A Guarda marcha sem tambor. Sem ritmo, sem coragem. Com seis tambores, a marcha fica outra.',
 ['ouro-10 guarda+3 povo+2','Comprou tambores para a Guarda.'],['','Recusou os tambores.'],
 'Dez moedas por moral. Barato.','Tambor! Eu marcho melhor com tambor. Todo mundo marcha. 🥁','O povo ouve o tambor e sai pra ver a Guarda passar.','l:normal');
