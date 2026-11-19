/* Lote XIX · Petições de alto risco (2/2) */
K('x_cerco_porto','guarda','Almirante Corvo','Guarda do Rio','🚢','Galés no rio',
 'Vinte galés de Morgrath subiram o rio e bloquearam o porto. Nenhum barco entra ou sai. Atacamos com o que temos?',
 ['guarda-22 burguesia+15 nobreza+8','Atacou as galés de Morgrath no rio.'],['burguesia-22 povo-12','Esperou o bloqueio do porto passar.'],
 'Sem porto, o reino seca em um mês. Atacar pode afundar nossa frota.','Barco contra barco. Eu nunca lutei na água. Hoje eu aprendo.','O povo do porto tá sem trabalho e sem peixe. A cidade inteira sente.','l:risco;r');
K('x_casa_ashfeld_cai','nobreza','Lady Mirela Ashfeld','Casa Ashfeld','🏚️','A queda dos Ashfeld',
 'Minha Casa está falida. Se cair, metade do vale fica sem senhor e os credores tomam tudo. Peço que a Coroa assuma nossas dívidas.',
 ['ouro-150 nobreza+15 povo+8','Assumiu as dívidas da Casa Ashfeld.'],['nobreza-18 povo-12 burguesia+10','Deixou a Casa Ashfeld falir.'],
 'Cento e cinquenta. Salvar uma Casa aliada ou deixar os credores levarem metade do vale.','Mirela sempre foi justa. Mas é muito ouro.','Se a Ashfeld cair, os camponeses dela viram de quem pagar mais. Pode ser pior.','l:risco;r');
K('x_bruxas_queimar','clero','Inquisidor Malvert','Ordem da Chama Pura','🔥','A grande fogueira',
 'O Inquisidor prendeu doze mulheres acusadas de bruxaria. Morwen e Nhá Joana entre elas. Quer queimá-las amanhã na praça.',
 ['clero+20 povo-22','Permitiu a fogueira do Inquisidor.'],['clero-22 povo+15','Libertou as doze mulheres e afastou o Inquisidor.'],
 'Uma fogueira de doze inocentes. Nenhum rei se recupera disso.','Elas curaram meus soldados. TODAS. Eu tiro elas de lá com minhas mãos.','Metade das mães do reino foi atendida por uma dessas mulheres. Isso é guerra contra o povo.','l:risco;r');
K('x_vhalkir_abre2','arcano','O Estranho','Sem nome','🌑','A porta de Vhalkir',
 'O selo não vai aguentar. Posso entrar e fechar por dentro. Mas preciso de alguém de sangue real comigo. Ou de cem soldados.',
 ['guarda-25 povo+15 clero+10','Mandou cem soldados com o Estranho para dentro de Vhalkir.'],['povo-25 guarda-15','Recusou entrar em Vhalkir.','n:vhalkir|2'],
 'Cem soldados que provavelmente não voltam. Ou o que dorme lá embaixo acordando.','Eu vou. Eu sempre vou. Se eu não voltar... cuida da menina. 🥲','O norte já tá fugindo. Se não fizer nada, a capital é a próxima.','l:risco;r');
K('x_ouro_falso_reino','burguesia','Coletor-Mor Aldous','Tesouro Real','🪙','O cofre é falso',
 'Majestade... abri o cofre principal. Metade das moedas é chumbo pintado. Alguém trocou faz meses. O ouro sumiu.',
 ['ouro-150 guarda+5','Admitiu o rombo e cobriu o cofre como pôde.'],['ouro-80 nobreza-18 guarda-10','Mandou prender todo o Tesouro até achar o culpado.'],
 'Cento e cinquenta em chumbo. Ou um Tesouro inteiro preso e o reino sem quem conte.','Isso é trabalho de dentro. De alguém com chave. Eu vou achar.','Se o povo souber que o cofre é falso, ninguém confia em mais nada.','l:risco;r');
K('x_alianca_dragao','arcano','Arquimaga Ondine','Ala Arcana','🐉','O dragão contra Morgrath',
 'O dragão aceita lutar contra Morgrath. Em troca, quer a coroa negra de Vhalkir. Ele diz que vai destruí-la.',
 ['guarda+25 clero-15 nobreza+10','Entregou a coroa negra ao dragão em troca de aliança.'],['guarda-10','Recusou a aliança com o dragão.'],
 'Um dragão aliado. E uma coroa maldita nas garras dele. Ele vai destruí-la? Ou usá-la?','Um dragão do nosso lado contra Morgrath. Eu quero ver a cara do Vorgath. 😈','Se o dragão mentir, ele vira dono do que dorme em Vhalkir.','l:risco;r');
K('x_peste_castelo','nobreza','Irmã Maelis','Casa de Cura','🤒','O Rei pode ter a peste',
 'Majestade, o senhor tem febre. Pode ser a peste. Preciso isolar o castelo por duas semanas. Ninguém entra, ninguém sai.',
 ['nobreza-15 burguesia-12 guarda+5','Isolou o castelo por duas semanas.'],['povo-20 nobreza-10','Recusou o isolamento do castelo.','n:epidemia|1'],
 'Duas semanas sem governo. As Casas vão agir. Ou a peste no reino inteiro.','Eu fico do lado de dentro. Contigo. Não discute. 😤','Se for peste e o Rei sair, o povo pega primeiro. Sempre.','l:risco;r');
K('x_revolucao','povo','Jovem Tomas','Aprendizes das guildas','✊','A cidade baixa se levanta',
 'A cidade baixa inteira está nas ruas. Querem um parlamento do povo, com poder de verdade. Senão, fecham os portões.',
 ['povo+25 nobreza-25 burguesia+5','Criou um Parlamento do Povo com poderes reais.'],['povo-25 guarda-15','Mandou a Guarda reprimir a cidade baixa.'],
 'Um parlamento é o fim do reino como conhecemos. Ou o começo de outro.','Eu não vou mandar soldado contra o povo. Não vou. Se tu mandar, eu vou embora.','A história de Arcadia muda hoje. De um jeito ou de outro.','l:risco;r');
K('x_kael_traicao','guarda','Capitã Valkiria','Guarda Real','💔','A carta de Kael',
 'Achei uma carta do meu irmão Kael para Valdoria. Ele passou os horários da Guarda. Pela princesa. Eu... eu não sei o que fazer.',
 ['guarda+12 nobreza+8 burguesia-10','Mandou prender o Tenente Kael.'],['guarda-20 nobreza-10','Perdoou Kael em segredo.'],
 'Um tenente vendendo segredos por amor. Perdoar é perigoso. Prender quebra a Capitã.','... É meu irmão, Dan. Mas lei é lei. *(a voz falha)* Faz o que tem que fazer.','O povo ama a história do Kael e da princesa. Se souber disso, vai ficar dividido.','l:risco;r');
K('x_tributo_tudo','burguesia','Conselheiro Jodyr','Conselho Real','📉','A última reserva',
 'Majestade, o cofre está no fim. A única saída é vender o castelo de verão, as joias e os cavalos reais. Tudo de uma vez.',
 ['ouro+200 nobreza-20 guarda-10','Vendeu o castelo de verão, as joias e os cavalos reais.'],['','Recusou vender as últimas reservas.'],
 'Duzentas moedas e uma Coroa que vive como um mercador. As Casas vão rir.','Os cavalos reais não! A Brasa não! ...Tá. Menos a Brasa.','O povo vai ver o Rei sem luxo. Alguns vão admirar.','l:risco;r');
K('x_guerra_civil','nobreza','Capitã Valkiria','Guarda Real','⚔️','Guerra entre as Casas',
 'Pryce e Ashfeld declararam guerra uma à outra. Mil homens em campo. O vale no meio. Intervenho ou deixo se matarem?',
 ['guarda-25 nobreza+12 povo+12','Interveio com a Guarda na guerra entre as Casas.'],['nobreza-25 povo-20','Deixou Pryce e Ashfeld guerrearem.'],
 'Intervir é perder soldados. Não intervir é perder o vale.','Mil homens. Meus duzentos no meio. Vai ser feio. Mas eu vou.','O vale tá no meio de duas espadas. Os lavradores tão fugindo com os filhos.','l:risco;r');
K('x_templo_ouro_morgrath','clero','Banx','Bardo Arcano','🐺','O Bispo e Morgrath',
 'Meu Rei, tenho as cartas. O Bispo Aurelian recebe ouro de Morgrath há anos. Em troca, prega contra a Coroa.',
 ['clero-25 povo+15 guarda+10','Expôs o Bispo e o prendeu por traição.'],['clero+8','Guardou as cartas do Bispo em segredo.'],
 'Prender um Bispo. O Templo vai tremer. Mas um traidor no púlpito é pior.','Eu sabia. EU SABIA. A carruagem dourada era ouro de Morgrath.','O povo vai ficar chocado. Mas vai entender por que o Bispo vivia contra o Rei.','l:risco;r');
K('x_fome_guarda','guarda','Sargento Brenn','Guarda Real','🥖','A Guarda passa fome',
 'Não tem comida no quartel há três dias. Os soldados estão caçando rato. Se não chegar comida, ninguém vigia amanhã.',
 ['ouro-100 guarda+18','Comprou comida às pressas para a Guarda.'],['guarda-25','Mandou a Guarda se virar sem comida.'],
 'Cem moedas. Uma Guarda com fome é uma porta aberta.','Eu dividi meu pão com eles. Acabou. Paga, Dan.','Os soldados são filhos do povo. As mães tão levando comida escondida no quartel.','l:risco;r');
K('x_mago_negro','arcano','Mago Theron Ashgrave','Ala Arcana','🌑','O mago que usou a coroa negra',
 'Um aprendiz roubou a coroa negra e a pôs na cabeça. Agora comanda três sombras de Vhalkir. Está no Mercado Central.',
 ['guarda-22 povo+12 clero+8','Mandou a Guarda e a Ala atacarem o mago da coroa negra.'],['povo-25 burguesia-15','Evacuou o mercado e esperou o mago se cansar.'],
 'Um aprendiz com poder de Vhalkir no meio da cidade. Não há escolha barata.','Sombra eu já cortei. Com lâmina rúnica. Me dá o resto da Guarda.','O mercado tá vazio. O povo trancado em casa ouvindo grito.','l:risco;r');
K('x_aliado_ostmar','burguesia','Embaixador de Ostmar','Reino de Ostmar','⚓','Ostmar oferece frota',
 'Ostmar oferece sua frota inteira para proteger nosso rio por um ano. O preço: o porto de Arcadia administrado por eles.',
 ['guarda+20 burguesia-20 nobreza-10','Entregou a administração do porto a Ostmar em troca da frota.'],['guarda-10','Recusou a frota de Ostmar.'],
 'Proteção total. E o porto nas mãos de outro reino. Para sempre? Por um ano? Contratos assim crescem.','Frota de Ostmar no rio é segurança. Mas não é nossa.','Os estivadores vão trabalhar para Ostmar. Não sei se vão gostar.','l:risco;r');
K('x_terra_queimada','guarda','General Thorin','Forte Thorendis','🔥','Terra queimada',
 'Morgrath avança. Proponho queimar as plantações do leste antes que eles cheguem. Sem comida, o exército deles para.',
 ['guarda+18 povo-22 burguesia-10','Ordenou a terra queimada no leste.'],['guarda-20 povo-8','Recusou queimar as plantações do leste.'],
 'Queimar a própria terra. Funciona. E destrói a vida de milhares.','Meu pai fez isso uma vez. Disse que nunca mais dormiu direito.','O povo do leste vai perder tudo. Por nós. Isso precisa ser lembrado.','l:risco;r');
K('x_concilio_reis','nobreza','Embaixador Lucan Thessaly','Reino de Valdoria','👑','O Concílio dos Reis',
 'Cinco reis vão se reunir. Arcadia pode sediar. Custa uma fortuna. Mas quem sedia, lidera.',
 ['ouro-180 nobreza+20 burguesia+15','Sediou o Concílio dos Reis em Arcadia.'],['nobreza-10 burguesia-8','Recusou sediar o Concílio dos Reis.'],
 'Cento e oitenta. E Arcadia no centro do mundo por uma semana.','Cinco reis e todos os guarda-costas deles. Eu não durmo um mês.','O povo vai ver reis de todo lado. Vai ser a maior festa que a cidade já viu.','l:risco;r');
K('x_peste_gado_reino','povo','Criador Bento Lã','Pastos das Colinas','🐄','Abater todo o gado',
 'A peste do gado está no reino inteiro. Os curandeiros dizem: abater todo o rebanho de Arcadia. Sem exceção.',
 ['ouro-120 povo-15 burguesia-15','Mandou abater todo o gado do reino.'],['povo-25 burguesia-20','Recusou abater o gado do reino.'],
 'Cento e vinte de indenização e um reino sem leite por um ano. Ou um reino com peste.','Sem carne por um ano. Meus soldados vão chorar.','Os vaqueiros vão chorar cada boi. Mas se não abater, perdem tudo de qualquer jeito.','l:risco;r');
K('x_coroa_negra_rei','arcano','Serina Valdimere','Biblioteca Real','💀','Usar a coroa negra',
 'Majestade, li tudo. Se o Rei usar a coroa negra uma única vez, pode ordenar ao que dorme em Vhalkir que durma para sempre. Mas o preço...',
 ['guarda+25 clero-20 nobreza-10','Usou a coroa negra uma única vez.'],['clero+10','Recusou usar a coroa negra.'],
 'O preço não está escrito. Isso é o que me assusta.','Não põe isso na cabeça, Dan. Por favor. Por favor. 😟','O povo nunca vai saber. Ou vai saber de um jeito ruim.','l:risco;r');
K('x_mercado_negro','burguesia','Inspetor Garreth','Fiscais do Mercado','🕳️','Metade do mercado é negro',
 'Descobri que metade do comércio da cidade passa pelo mercado negro, sem imposto. Se eu fechar, a cidade para.',
 ['ouro+80 burguesia-22 povo-10','Fechou o mercado negro à força.'],['burguesia+10','Fez vista grossa ao mercado negro.','v:Imposto perdido|8|ouro-8'],
 'Oitenta em multas e uma cidade travada. Ou imposto sumindo toda semana.','Fechar o mercado negro é briga em cada beco.','O povo compra no mercado negro porque é barato. Fechar dói neles primeiro.','l:risco;r');
K('x_invasao_norte','guarda','Batedor Fynn','Patrulha do Norte','🌨️','Os povos do gelo',
 'Os povos do gelo, além das montanhas, desceram. Mil guerreiros. Fugindo de algo pior. Pedem passagem. Ou vão forçar.',
 ['povo-12 guarda+10 burguesia+5','Deu passagem e terras aos povos do gelo.'],['guarda-25 povo-10','Barrou os povos do gelo nas montanhas.'],
 'Mil guerreiros dentro do reino. Aliados ou um problema eterno.','A Ingrid é de lá. Ela diz que fogem de algo. De quê?','O povo do norte tem medo. Mas também já foi refugiado um dia.','l:risco;r');
K('x_arcadia_vende_sul','nobreza','Rei Vorgath de Morgrath','Reino de Morgrath','💰','Comprar o sul',
 'Vorgath oferece trezentas moedas pelas vilas do sul. Venda, e nunca mais haverá guerra no sul.',
 ['ouro+300 povo-25 nobreza-15','Vendeu as vilas do sul a Morgrath.'],['nobreza+5','Recusou vender o sul.'],
 'Trezentas moedas. E gente vendida como gado.','Vender gente nossa? DAN. Não. Nem pensar. 😡','O sul é gente. Família. Ninguém aqui vai esquecer se tu vender.','l:risco;r');
K('x_falsa_profecia','clero','Sacerdote Fennick','Capela do Vale','📜','A profecia do fim',
 'Fennick anuncia que a Santa Aurélia profetizou o fim do reinado em sete dias. Milhares acreditam. Pararam de trabalhar.',
 ['clero-15 povo+10 guarda-5','Desmentiu Fennick publicamente e o prendeu.'],['clero+10 povo-20 burguesia-15','Deixou a profecia de Fennick correr.'],
 'Uma mentira que paralisa um reino. Prender um padre é escândalo. Não prender é pior.','Fennick. Sempre o Fennick. Eu prendo pessoalmente.','O povo tá vendendo tudo, rezando e esperando o fim. Precisa de alguém dizendo que não vai acabar.','l:risco;r');
K('x_cheia_seculo','povo','Pescador Tomé','Vila do Rio','🌊','A cheia do século',
 'O rio subiu como nunca. Vai alagar a cidade baixa inteira. Dá para abrir a represa do vale e salvar a cidade. Mas o vale alaga.',
 ['povo-15 burguesia+12 nobreza-10','Abriu a represa e alagou o vale para salvar a cidade.'],['povo-22 burguesia-18','Deixou o rio alagar a cidade baixa.'],
 'Alagar o vale ou alagar a cidade. Matemática cruel da água.','Meus homens tão tirando gente dos dois lados. Decide rápido.','O vale tem menos gente. Mas é o celeiro do reino. Não há escolha boa.','l:risco;r');
K('x_valkiria_ferida','guarda','Irmã Maelis','Casa de Cura','🩸','A Capitã está morrendo',
 'A Capitã levou uma flecha envenenada. Só Morwen sabe o antídoto. Mas Morwen está presa pelo Inquisidor.',
 ['clero-20 guarda+15 povo+8','Mandou soltar Morwen à força para salvar Valkiria.'],['guarda-25 clero+8','Deixou Morwen presa e confiou nos médicos da corte.'],
 'Desafiar o Inquisidor para salvar a Capitã. O Templo não vai perdoar.','*(delirando)* ...Dan... não deixa eles... cuidarem da menina sem mim...','O povo inteiro tá rezando por ela. Ela é a heroína deles.','l:risco;r');
K('x_moeda_derrete','burguesia','Signore Bastiani','Companhia das Índias do Sul','📉','A moeda de Arcadia despenca',
 'A moeda de Arcadia perdeu metade do valor em uma semana. Os mercadores de fora fogem. Ou injetamos prata, ou o comércio morre.',
 ['ouro-170 burguesia+18','Injetou prata para salvar a moeda de Arcadia.'],['burguesia-25 povo-15','Deixou a moeda de Arcadia despencar.'],
 'Cento e setenta. Quase tudo. Mas sem moeda, não há reino.','Meu soldo vale metade. Meus soldados tão furiosos.','O pão dobrou de preço em uma semana. O povo tá desesperado.','l:risco;r');
K('x_estatua_fundador','nobreza','Conselho das Casas','Assembleia Nobre','🗿','A estátua do Fundador',
 'As Casas querem uma estátua gigante do Fundador, de bronze, maior que o Templo. Para lembrar a glória de Arcadia.',
 ['ouro-180 nobreza+20 ?povo-15','Encomendou a estátua gigante do Fundador.'],['nobreza-12','Recusou a estátua gigante.'],
 'Cento e oitenta em bronze. Com o povo passando fome. Hum.','O Templo vai querer benzer. Os padres adoram estátua.','Uma estátua gigante enquanto o povo come pedra. Isso vira canção de protesto.','l:risco;r');
K('x_alianca_vigilantes','arcano','O Estranho','Sem nome','🤝','Unir Coroa e Vigilantes',
 'Os Vigilantes e a Coroa querem o mesmo: o selo fechado. Proponho uni-los. Os Vigilantes viram Guarda Arcana do Rei.',
 ['guarda+20 clero-18 povo-10','Uniu os Vigilantes à Coroa como Guarda Arcana.'],['guarda-15','Recusou unir os Vigilantes à Coroa.'],
 'Os inimigos de ontem como guardiões de amanhã. Ou um cavalo de Troia.','Eles envenenaram os poços. Eu não esqueço. Mas... se for pelo selo...','O povo dos poços envenenados não vai perdoar. Nunca.','l:risco;r');
K('x_ultimo_trigo','povo','Coletor-Mor Aldous','Tesouro Real','🌾','O último celeiro',
 'Restou um celeiro cheio no reino. Ou alimentamos a cidade por um mês, ou guardamos como semente para a próxima colheita.',
 ['povo+15 burguesia-10','Distribuiu o último celeiro para a cidade.','n:r_fome_grande|5'],['povo-20 burguesia+10','Guardou o último celeiro como semente.'],
 'Comer a semente é passar fome no ano que vem. Guardar é passar fome agora.','Escolha horrível. Eu não queria estar no teu lugar.','Se distribuir, o povo vive o inverno. E depois, o que planta?','l:risco;r');
K('x_duelo_valk','guarda','Guerreira Ingrid','Mercenária do norte','🪓','O desafio de Ingrid',
 'Ingrid desafia Valkiria pelo comando da Guarda. Segundo os costumes do norte, quem vence comanda. Metade dos soldados apoia Ingrid.',
 ['guarda-15 povo+10','Permitiu o duelo entre Ingrid e Valkiria.'],['guarda-18','Proibiu o duelo e expulsou Ingrid.'],
 'Um duelo pelo comando. Se Valkiria perder, a Guarda muda de dono.','Que venha. Eu nunca perdi. *(aperta a lança)* Nunca.','A Guarda tá dividida. O povo também tá apostando.','l:risco;r');
K('x_portal_morgrath','arcano','Mago Theron Ashgrave','Ala Arcana','🌀','O portal para Morgrath',
 'Posso abrir um portal direto até o castelo de Vorgath. Cem soldados passam numa noite e acabam com a guerra. Ou não voltam.',
 ['guarda-25 nobreza+20 povo+15','Mandou cem soldados pelo portal até Morgrath.'],['','Recusou o portal até Morgrath.'],
 'Uma noite para acabar com uma guerra de gerações. Ou perder cem dos melhores.','Eu lidero. Cem homens. Uma noite. Se eu voltar, Morgrath acabou. ⚔️','Se der certo, vira a maior lenda de Arcadia. Se der errado, cem famílias de luto.','l:risco;r');
K('x_tesouro_fundador','burguesia','Serina Valdimere','Biblioteca Real','💎','O tesouro do Fundador',
 'O mapa dos túneis mostra a câmara do tesouro do Fundador. Mas fica bem abaixo do selo de Vhalkir. Escavar pode rachar o selo.',
 ['ouro+250 guarda-20 povo-10','Escavou o tesouro do Fundador sob Vhalkir.','n:vhalkir|3'],['','Deixou o tesouro do Fundador enterrado.'],
 'Duzentas e cinquenta moedas. E o risco de acordar o que o Fundador enterrou junto.','Ouro debaixo do selo. É claro que é debaixo do selo.','O norte vai sentir cada golpe de picareta. Isso volta.','l:risco;r');
K('x_casamento_princesa','nobreza','Princesa Elenna','Reino de Valdoria','💍','O casamento real',
 'Majestade, Kael e eu queremos casar em Arcadia. Valdoria só aceita se Arcadia der metade do porto como dote.',
 ['burguesia-18 nobreza+15 povo+15','Aceitou o dote e celebrou o casamento de Kael e Elenna.'],['nobreza-10 guarda-12','Recusou o dote do casamento real.'],
 'Metade do porto. Por um casamento. Mas um casamento que une dois reinos.','Meu irmão casando com uma princesa. Eu vou chorar o dia inteiro. 😭','O povo vai fazer a maior festa da história. Se o casamento acontecer.','l:risco;r');
K('x_ordem_grifo_guerra','guarda','Capitã Valkiria','Guarda Real','🪽','A Ordem do Grifo vai à guerra',
 'A Ordem do Grifo está pronta. Seis cavaleiros alados. Quero atacar o acampamento de Morgrath pelo céu. Hoje à noite.',
 ['guarda-15 nobreza+18 povo+15','Mandou a Ordem do Grifo atacar Morgrath pelo céu.'],['guarda-5','Guardou a Ordem do Grifo para defesa.'],
 'Seis cavaleiros que valem um exército. Arriscá-los numa noite é tudo ou nada.','Eu vou na frente. No Faísca. Esta é a noite que eu esperei a vida toda.','Se der certo, o povo vai pintar grifo em cada parede.','l:risco;r');
K('x_rei_abdica','nobreza','Conselho das Casas','Assembleia Nobre','👑','Pedem a abdicação',
 'As Casas, o Bispo e parte da Guarda pedem que o Rei abdique em favor de um conselho de regentes. Dizem que é pelo bem do reino.',
 ['nobreza-25 guarda+15 povo+15','Recusou abdicar e prendeu os líderes do pedido.'],['nobreza+20 povo-20 guarda-15','Aceitou um conselho de regentes ao lado do trono.'],
 'Isso não é pedido. É golpe de luvas. A resposta define o reinado.','Abdicar? Por cima do meu cadáver. E de muitos outros. 😡','O povo tá do lado do Rei. Mas não sabe se o Rei tá do lado dele.','l:risco;r');
K('x_magia_proibida','clero','Bispo Aurelian Vey','Templo da Aurora','🚫','Proibir toda magia',
 'O Templo exige o fim de toda magia em Arcadia. Ala Arcana fechada, runas apagadas, magos expulsos. É a vontade dos deuses.',
 ['clero+25 guarda-25','Proibiu toda magia em Arcadia.'],['clero-22','Recusou proibir a magia.'],
 'Sem magia, o selo cai. O Bispo sabe disso? Ou quer isso?','Sem runa na muralha, eu perco metade da defesa. NÃO.','O povo do norte depende da magia pra dormir em paz. Isso seria o fim deles.','l:risco;r');
K('x_ouro_estrangeiro','burguesia','Signore Orsini','Casa Bancária Orsini','🏦','A volta de Orsini',
 'Orsini voltou. Oferece devolver o que levou e mais duzentas moedas. Em troca: perdão total e o controle do Tesouro.',
 ['ouro+250 burguesia+10 nobreza-15','Perdoou Orsini e lhe deu o controle do Tesouro.'],['guarda+8','Prendeu Orsini assim que pisou em Arcadia.'],
 'Duzentas e cinquenta moedas. E a raposa cuidando do galinheiro.','Prender ele aqui, agora, é a única resposta certa.','O povo lembra que ele fugiu com o ouro. Se voltar mandando, vai ser revolta.','l:risco;r');
K('x_peste_magica','arcano','Arquimaga Ondine','Ala Arcana','💜','A febre roxa',
 'Uma febre roxa está deixando gente sem memória. Vem de Vhalkir. Só um ritual com todo o cristal do castelo cura.',
 ['povo+20 guarda-20','Usou todo o cristal do castelo para curar a febre roxa.'],['povo-25','Deixou a febre roxa seguir.'],
 'Gastar o cristal que protege o reino para salvar quem já foi atingido.','Gente esquecendo os próprios filhos. Eu vi. Usa o cristal.','Metade do bairro baixo já não lembra o próprio nome. Isso é pior que morte.','l:risco;r');
K('x_trono_vazio','nobreza','Conselheiro Jodyr','Conselho Real','🪑','O herdeiro do trono',
 'Majestade, as Casas exigem saber quem herda o trono. Se não decidir hoje, cada Casa vai apoiar um nome diferente.',
 ['nobreza+20 povo-10','Nomeou um herdeiro escolhido entre as Casas.'],['nobreza-15 povo+15','Anunciou que o herdeiro será escolhido por mérito, não por sangue.'],
 'Herdeiro por sangue acalma as Casas. Por mérito... muda tudo.','Mérito? Então a menina do quartel pode ser rainha um dia? 😂 Brincadeira. Será?','O povo nunca imaginou que um deles podia sentar no trono. Isso vira sonho de criança.','l:risco;r');
K('x_ultima_batalha','guarda','General Thorin','Forte Thorendis','🏰','A batalha de Thorendis',
 'Todo o exército de Morgrath está diante do forte. Se cairmos, cai o reino. Preciso de cada homem, cada moeda, cada flecha.',
 ['guarda-25 ouro-150 nobreza+20 povo+20','Mandou tudo para a batalha de Thorendis.'],['guarda-25 povo-25 nobreza-20','Recuou e deixou Thorendis cair.'],
 'Tudo. É isso que custa. Tudo.','*(abraça o Rei)* ...Eu volto. Prometo que volto. ⚔️','O reino inteiro vai lembrar dessa batalha. Por cem anos.','l:risco;r');
K('x_sacrificio_ondine','arcano','Arquimaga Ondine','Ala Arcana','🌟','A escolha de Ondine',
 'Majestade, posso fundir minha vida ao selo. Vhalkir dormirá por mil anos. Eu deixarei de existir. Peço só sua permissão.',
 ['guarda+25 clero-10 povo+15','Permitiu o sacrifício de Ondine para selar Vhalkir.'],['guarda-15','Proibiu o sacrifício de Ondine.'],
 'Mil anos de paz pelo preço de uma vida. A matemática é fácil. O resto, não.','Ondine... você é minha amiga. *(não consegue falar)*','Eu vou cantar o nome dela em cada vila. Ninguém vai esquecer. Ninguém.','l:risco;r');
K('x_peste_ouro','burguesia','Mestre Dorgan','Companhia das Pedreiras','💰','O ouro que adoece',
 'O veio de prata do norte virou ouro. Mas os mineiros que tocam ficam doentes. É ouro de Vhalkir.',
 ['ouro+180 povo-20 clero-10','Mandou extrair o ouro de Vhalkir.'],['burguesia-10','Lacrou a mina de ouro de Vhalkir.'],
 'Cento e oitenta de ouro maldito. Ouro é ouro. Até não ser.','Ouro de Vhalkir. Nada que vem de lá é presente.','Os mineiros vão adoecer pra encher o cofre. O povo vai saber.','l:risco;r');
K('x_censura','nobreza','Duque Aldren Valcourt','Casa Valcourt','🤐','Calar as tavernas',
 'As tavernas espalham mentiras contra a Coroa. Proponho fechar todas e prender bardos que cantem contra o Rei. Banx incluso.',
 ['nobreza+18 povo-22 burguesia-10','Fechou as tavernas e prendeu os bardos.'],['nobreza-15 povo+10','Recusou calar as tavernas.'],
 'Calar o povo não muda o que ele pensa. Só esconde.','Prender o Banx? Eu vou visitar ele com bolo. Mas... é sério isso?','EU?! Meu Rei, eu sou o único que canta A FAVOR! ...Na maioria das vezes. 😰','l:risco;r');
K('x_morwen_rainha','arcano','Anciã Sela','Povo da Floresta','🌳','A floresta exige',
 'A floresta exige que Morwen seja reconhecida como Guardiã com poder igual ao do Bispo. Ou as árvores fecham as estradas do leste.',
 ['clero-25 guarda+15 povo+12','Reconheceu Morwen como Guardiã com poder igual ao do Bispo.'],['clero+10 burguesia-20 guarda-10','Recusou a exigência da floresta.'],
 'Dar a uma curandeira da mata o poder de um Bispo. O Templo vai entrar em guerra.','As árvores fechando estrada? Eu já vi a floresta fazer coisas. Eu acredito.','O povo do leste confia mais na Morwen do que em qualquer padre.','l:risco;r');
K('x_aliados_traem','guarda','Embaixador Lucan Thessaly','Reino de Valdoria','🗡️','Valdoria muda de lado',
 'Valdoria fez paz secreta com Morgrath. Agora os dois exigem que Arcadia ceda o vale leste. Ou atacam juntos.',
 ['nobreza-22 povo-20 ouro+60','Cedeu o vale leste a Valdoria e Morgrath.'],['guarda-25 nobreza+15 povo+15','Recusou ceder o vale e se preparou para a guerra dupla.'],
 'Dois inimigos ao mesmo tempo. Ou um pedaço do reino a menos.','Lucan tá chorando. Ele não concorda. Mas é o Rei dele. E eu estou pronta.','O vale leste é casa de milhares. Entregar é trair. Lutar pode ser o fim.','l:risco;r');
K('x_sino_alarme_geral','guarda','Sineiro Pim','Torre do Templo','🔔','Todos os sinos ao mesmo tempo',
 'Todos os sinos do reino tocaram ao mesmo tempo, sozinhos, à meia-noite. Os Vigilantes dizem que é o sinal. Do quê, ninguém sabe.',
 ['guarda+15 ouro-80 povo-8','Pôs o reino inteiro em alerta de guerra.'],['?guarda-20 ?povo-15','Mandou todos voltarem a dormir.'],
 'Alerta geral custa caro e assusta. Ignorar pode custar tudo.','Eu não tiro a armadura até descobrir o que foi isso.','O povo saiu de casa de pijama olhando pro céu. Ninguém dormiu.','l:risco;r');
K('x_ouro_igreja_morgrath','clero','Sumo-Sacerdotisa Elowen','Templo da Aurora','⚖️','O Templo se divide',
 'Metade do Templo segue o Bispo, metade me segue. Os fiéis brigam nas escadarias. Peço que a Coroa reconheça um só líder.',
 ['clero+18 nobreza-12','Reconheceu Elowen como líder do Templo.'],['clero-20 povo-10','Reconheceu o Bispo Aurelian como líder do Templo.'],
 'Escolher o líder do Templo. Nenhum rei deveria. Mas agora precisa.','Elowen é honesta. O Bispo tem carruagem dourada. Não é difícil, Dan.','Os fiéis tão brigando na porta da igreja. Isso precisa parar hoje.','l:risco;r');
K('x_ouro_nobre_guerra','nobreza','Conselho das Casas','Assembleia Nobre','💰','As Casas pagam a guerra',
 'As Casas oferecem duzentas moedas para a defesa do reino. Em troca, querem de volta a servidão por dívida.',
 ['ouro+200 nobreza+18 povo-25','Aceitou o ouro das Casas e restaurou a servidão por dívida.'],['nobreza-15','Recusou o ouro das Casas.'],
 'Duzentas moedas e o povo de volta às correntes. Não há conta que justifique isso.','Ouro pra guerra é bom. Mas soldado de família escravizada não luta com vontade.','O povo vai lembrar que o Rei vendeu eles. Para sempre.','l:risco;r');
K('x_sombras_cidade','arcano','Capitã Valkiria','Guarda Real','🌑','Sombras na cidade',
 'As sombras de Vhalkir chegaram à capital. Saem dos esgotos à noite. Já levaram seis pessoas. Preciso das lâminas rúnicas e da Ala inteira.',
 ['guarda-20 ouro-60 povo+15','Lançou a Guarda e a Ala contra as sombras nos esgotos.'],['povo-25 guarda-10','Decretou recolher e esperou o dia.'],
 'Sombras dentro dos muros. O que temíamos chegou.','Seis. Uma era criança. Eu desço nos esgotos hoje. Com ou sem ordem.','O povo não dorme. Ninguém apaga a vela. Ninguém.','l:risco;r');
K('x_ultimo_banquete','povo','Banx','Bardo Arcano','🎭','O festival de Arcadia',
 'Meu Rei, o reino está triste demais. Proponho um festival de uma semana: comida, música, teatro. Caro. Mas o povo precisa lembrar por que vale a pena.',
 ['ouro-150 povo+25 nobreza+5 clero+5','Celebrou uma semana de festival em Arcadia.'],['?povo-8','Recusou o festival de Arcadia.'],
 'Cento e cinquenta em alegria. Num reino quebrado. Loucura. Ou sabedoria.','Uma semana sem guerra, sem sombra, sem peste. Eu topo. Eu danço.','O povo precisa de um motivo pra continuar. Às vezes o motivo é uma festa. 🥹','l:risco;r');
K('x_fundador_volta','arcano','O Estranho','Sem nome','👑','O Fundador',
 'Majestade. Não sou um guardião qualquer. Sou o Fundador de Arcadia. Vivi trezentos anos guardando o selo. Quero meu trono de volta. Ou partir e deixar o selo sem guardião.',
 ['nobreza-25 guarda+20 clero-15','Dividiu o governo com o Fundador.'],['guarda-25 povo-15','Recusou o trono ao Fundador e o deixou partir.','n:vhalkir|3'],
 'O Fundador. Se for verdade, toda a história de Arcadia muda hoje.','Ele tem os olhos do retrato do Salão. Os mesmos. Eu arrepiei inteira.','O povo vai enlouquecer se souber. O Rei antigo voltou. Isso vira lenda ou guerra.','l:risco;r');
