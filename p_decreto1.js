/* Lote XVI · Petições de decreto (1/2) · leis e acordos que duram semanas */
K('e_imposto_janela','burguesia','Coletor-Mor Aldous','Tesouro Real','🪟','O imposto das janelas',
 'Proponho cobrar por janela de cada casa. Casa rica tem muita janela. Casa pobre tem uma. É justo e fácil de contar.',
 ['burguesia-5 nobreza-4','Criou o imposto das janelas.','v:Imposto das janelas|8|ouro+10'],['','Recusou o imposto das janelas.'],
 'Dez por semana e quem paga mais é quem tem mais. Engenhoso.','O Templo tem cem janelas. Vão espernear.','Os pobres vão tapar a única janela com tábua pra não pagar. Vai ficar escuro no bairro.','l:decreto');
K('e_pedagio_ponte','burguesia','Coletor-Mor Aldous','Tesouro Real','🌉','Pedágio na ponte de pedra',
 'A ponte de pedra custou caro. Um pedágio pequeno pagaria a obra em algumas estações.',
 ['povo-4 burguesia-3','Instituiu pedágio na ponte de pedra.','v:Pedágio da ponte|8|ouro+8'],['','Deixou a ponte de pedra sem pedágio.'],
 'A obra se paga sozinha. Lógica simples.','Soldado não paga pedágio. Só pra deixar claro.','O povo que atravessa todo dia pra trabalhar vai sentir no bolso.','l:decreto');
K('e_sopa_inverno','povo','Irmã Maelis','Casa de Cura','🍲','Sopa de inverno',
 'Durante o inverno, uma panela de sopa em cada bairro, todo dia. Ninguém morre de fome no frio.',
 ['povo+7 clero+3','Decretou a sopa de inverno nos bairros.','v:Sopa de inverno|6|ouro-6'],['?povo-4','Recusou a sopa de inverno.'],
 'Seis por semana durante o inverno. É o preço de não enterrar gente de fome.','As irmãs do Templo vão servir. O clero vai adorar.','O inverno sempre leva os velhos e as crianças do bairro baixo. Isso muda.','l:decreto');
K('e_feira_semanal','burguesia','Mestra Ilsa Brannoc','Guilda dos Mercadores','🛒','A feira de sábado',
 'Uma feira toda semana na praça grande, com taxa baixa. Os mercadores das vilas viriam vender aqui.',
 ['ouro-15 burguesia+5 povo+3','Criou a feira semanal da praça grande.','v:Feira de sábado|8|ouro+7'],['burguesia-3','Recusou a feira semanal.'],
 'Gasta quinze, ganha sete por semana. Em três semanas se paga.','Feira toda semana é ladrão toda semana. Vou pôr patrulha fixa.','As vilas vão ter onde vender. E o povo da cidade vai comprar mais barato.','l:decreto');
K('e_guarda_estrada','guarda','Sargento Brenn','Guarda Real','🛡️','Patrulha da Estrada Real',
 'Proponho patrulhas fixas na Estrada Real. Os mercadores pagam uma taxa pequena pela proteção.',
 ['guarda-3 burguesia+5','Criou a patrulha paga da Estrada Real.','v:Patrulha da Estrada Real|10|ouro+5'],['?burguesia-3','Recusou a patrulha da Estrada Real.'],
 'Segurança que se paga. Excelente.','Meus homens na estrada ganhando extra. Eles vão gostar.','As vilas da estrada também ficam mais seguras. Bônus.','l:decreto');
K('e_dizimo_reduzido','clero','Padre Lorcan','Templo da Aurora','🙏','Dízimo dos pobres',
 'Proponho que quem ganha menos pague meio dízimo. A Coroa cobre a diferença para o Templo.',
 ['povo+6 clero+2','Decretou o meio dízimo para os pobres.','v:Meio dízimo dos pobres|8|ouro-5'],['clero+2 ?povo-3','Manteve o dízimo inteiro para todos.'],
 'Cinco por semana para aliviar os pobres sem tirar do Templo. Equilibrado.','O Bispo não vai gostar de depender da Coroa. Mas vai aceitar o dinheiro.','O povo vai respirar. Dízimo é a conta que mais pesa no bairro baixo.','l:decreto');
K('e_licenca_taverna','burguesia','Taverneira Bessa','Taverna do Sino','🍻','Taverna até mais tarde',
 'Licença para as tavernas ficarem abertas até a meia-noite. Pagamos uma taxa extra por isso.',
 ['povo+4 ?guarda-3 ?clero-2','Liberou as tavernas até meia-noite com taxa extra.','v:Taxa da meia-noite|8|ouro+6'],['','Manteve o horário das tavernas.'],
 'Seis por semana de gente se divertindo. Ótimo negócio.','Meia-noite. Nem um minuto a mais. E meus patrulheiros dormem quando?','A noite vai ficar mais viva. O bairro precisa disso.','l:decreto');
K('e_reflorestar','povo','Anciã Sela','Povo da Floresta','🌲','Replantar o leste',
 'Para cada árvore derrubada no leste, os carvoeiros plantam duas. A Coroa paga as mudas.',
 ['burguesia-3 povo+4 ?guarda+2','Decretou o replantio da floresta do leste.','v:Mudas do leste|8|ouro-3'],['burguesia+3','Recusou o replantio da floresta.'],
 'Três por semana para ainda ter floresta daqui a cinquenta anos.','A floresta é a muralha do leste. Replanta.','O Povo da Floresta vai lembrar disso. Pro bem.','l:decreto');
K('e_moeda_cobre_decreto','burguesia','Coletor-Mor Aldous','Tesouro Real','🪙','A casa da moeda',
 'Uma casa da moeda própria, em vez de pagar Valdoria para cunhar. Custa para montar, mas economiza toda semana.',
 ['ouro-40 burguesia+3','Montou a Casa da Moeda de Arcadia.','v:Casa da Moeda|10|ouro+7'],['','Continuou cunhando em Valdoria.'],
 'Quarenta agora, setenta em dez semanas. E independência.','Casa da moeda precisa de guarda. Muita.','O povo não vai ver diferença. Só a moeda com o brasão de Arcadia.','l:decreto');
K('e_salario_soldado','guarda','Capitã Valkiria','Guarda Real','💰','Soldo por mérito',
 'Quero um bônus por mérito pros melhores soldados. Quem treina mais, ganha mais. A Guarda vai melhorar rapidinho.',
 ['guarda+6','Criou o bônus por mérito na Guarda.','v:Bônus da Guarda|8|ouro-4'],['guarda-2','Recusou o bônus por mérito.'],
 'Quatro por semana para soldados que se esforçam. Razoável.','Meus soldados vão treinar até de madrugada. Eu conheço eles. 💪','Os filhos do povo na Guarda vão mandar mais dinheiro pra casa.','l:decreto');
K('e_pensao_viuvas','povo','Viúva Rosa','Bairro do Porto','🖤','Pensão das viúvas',
 'Uma pensão pequena para toda viúva de soldado, pescador ou mineiro morto em serviço.',
 ['povo+6 guarda+3','Criou a pensão das viúvas de Arcadia.','v:Pensão das viúvas|10|ouro-5'],['?povo-3','Recusou a pensão das viúvas.'],
 'Cinco por semana. Uma promessa que dá coragem a quem arrisca a vida.','Meus soldados vão lutar sabendo que a família fica protegida.','As viúvas do porto choram de alegria. Pela primeira vez alguém lembrou delas.','l:decreto');
K('e_tributo_sal','burguesia','Mercador Varrus Kell','Companhia do Sal','🧂','O imposto do sal',
 'Um imposto pequeno sobre cada saco de sal. Todo mundo compra sal. Rende muito sem doer em ninguém.',
 ['povo-5 burguesia-3','Criou o imposto do sal.','v:Imposto do sal|10|ouro+9'],['','Recusou o imposto do sal.'],
 'Nove por semana. Não dói em ninguém... só em todo mundo um pouquinho.','Carne salgada no quartel vai ficar mais cara.','O sal é o que salva a carne do pobre. O povo vai sentir sim.','l:decreto');
K('e_aulas_noite','povo','Mestra Liana Orwen','Academia Real','🕯️','Aulas à noite',
 'Aulas de leitura à noite para adultos que trabalham de dia. A Academia abre as portas, a Coroa paga as velas.',
 ['povo+6 ?clero-2','Criou as aulas noturnas na Academia.','v:Aulas da noite|8|ouro-3'],['','Recusou as aulas noturnas.'],
 'Três por semana para um povo que lê. Barato pelo que vale.','Meus soldados vão querer aprender também.','Os estivadores querem ler as cartas dos filhos. Isso emociona.','l:decreto');
K('e_cavalaria_real','guarda','Mestre-estribeiro Hal','Estábulos Reais','🐎','A criação de cavalos',
 'Uma criação real de cavalos. Em vez de comprar de Ostmar, criamos os nossos. Custa no começo, sai barato depois.',
 ['ouro-30 guarda+5','Criou o haras real de Arcadia.','v:Haras real|10|ouro+4'],['','Continuou comprando cavalos de fora.'],
 'Trinta agora para não depender de Ostmar.','Potros nossos! A Brasa vai ser mãe. 🐎','Os moços do vale vão aprender a lidar com cavalo. Ofício novo.','l:decreto');
K('e_bolsa_artesao','burguesia','Mestre Hollis','Guilda dos Padeiros','🧑‍🍳','Ajuda aos novos mestres',
 'Os aprendizes que viram mestres não têm dinheiro pra abrir oficina. Um empréstimo da Coroa, devolvido aos poucos.',
 ['ouro-30 burguesia+5 povo+3','Criou o empréstimo para novos mestres de ofício.','v:Devolução dos mestres|8|ouro+5'],['','Recusou o empréstimo aos novos mestres.'],
 'Empresta trinta, recebe quarenta. E cria comerciante novo.','Ferreiro novo é espada nova. Aprovo.','Os aprendizes que sonhavam com oficina própria vão realizar.','l:decreto');
K('e_lei_silencio','nobreza','Barão Ulrich Vane','Casa Vane','🤫','A lei do silêncio',
 'Proponho multar barulho depois do sino da noite. Os nobres não conseguem dormir com as serestas.',
 ['nobreza+4 povo-5','Criou a lei do silêncio noturno com multas.','v:Multas do silêncio|8|ouro+4'],['nobreza-3','Recusou a lei do silêncio.'],
 'Quatro por semana em multa. E o povo sem seresta.','Meus homens vão ter que multar sanfoneiro. Vão odiar.','A seresta de sexta é sagrada pro bairro. Isso vai dar briga.','l:decreto');
K('e_estradas','burguesia','Mestre-de-obras Dorran','Guilda dos Pedreiros','🛤️','Conservação das estradas',
 'Uma turma fixa de pedreiros consertando as estradas toda semana. Melhor que esperar desabar.',
 ['burguesia+5 povo+3','Criou a turma fixa de conservação das estradas.','v:Conservação das estradas|10|ouro-4'],['?burguesia-3','Recusou a turma das estradas.'],
 'Quatro por semana para nunca precisar gastar cinquenta de uma vez.','Estrada boa é tropa rápida.','Os pedreiros do bairro vão ter trabalho fixo. Raro.','l:decreto');
K('e_mercenarios_pequenos','guarda','Capitão Varek','Companhia Lâmina Cinza','🪓','Vinte lâminas na fronteira',
 'Vinte homens meus na fronteira, por algumas semanas. Até vocês treinarem gente nova.',
 ['guarda+8 ?povo-3','Contratou vinte mercenários para a fronteira.','v:Vinte lâminas|6|ouro-7'],['','Dispensou os mercenários da fronteira.'],
 'Sete por semana. Mercenário é caro, mas temporário.','Vinte homens que não são meus. Mas a fronteira precisa.','As vilas da fronteira vão ter mercenário bebendo na taverna. Cuidado.','l:decreto');
K('e_premio_colheita','povo','Velho Garrick','Camponeses do Vale','🌾','Prêmio da colheita',
 'Um prêmio pra vila que colher mais trigo na estação. Incentiva todo mundo a trabalhar melhor.',
 ['povo+5 burguesia+3','Criou o Prêmio da Colheita entre as vilas.','v:Colheita incentivada|8|ouro+4'],['','Recusou o Prêmio da Colheita.'],
 'Competição saudável que aumenta o tributo de excedente.','Festa pra vila vencedora. Eu vou na festa.','As vilas vão disputar como se fosse torneio. O vale vai ficar animado.','l:decreto');
K('e_quarentena_porto','burguesia','Irmã Maelis','Casa de Cura','⚓','Quarentena dos navios',
 'Todo navio de fora fica três dias parado antes de descarregar. Para evitar peste. Os mercadores vão reclamar.',
 ['povo+4 clero+3 burguesia-5','Decretou quarentena para navios de fora.','v:Quarentena do porto|8|ouro-4'],['burguesia+3','Recusou a quarentena dos navios.'],
 'Três dias parados é custo. Mas uma peste custa o reino.','As irmãs vão inspecionar. Eu mando guarda pra elas.','Os estivadores vão ficar sem trabalho uns dias. Mas vivos.','l:decreto');
K('e_moinho_real','burguesia','Moleiro Anselmo','Moinhos de Ventoalto','🌬️','O moinho real',
 'A Coroa compra o grande moinho de Ventoalto e cobra pela moagem. Todo trigo do vale passa por lá.',
 ['ouro-35 povo-3','Comprou o moinho de Ventoalto para a Coroa.','v:Moagem real|10|ouro+7'],['','Recusou comprar o moinho.'],
 'Trinta e cinco agora, setenta depois. E controle da farinha.','Moinho real precisa de vigia. Já tenho um nome.','Os lavradores vão pagar pra moer. Não sei se vão gostar.','l:decreto');
K('e_torneio_mensal','nobreza','Sir Edric Faulkner','Cavaleiros de Arcadia','🏇','Justas todo mês',
 'Uma justa por mês na campina do rio. Os nobres pagam inscrição, o povo assiste. Todos ganham.',
 ['nobreza+5 povo+3','Criou as justas mensais da campina.','v:Justas mensais|8|ouro+3'],['nobreza-3','Recusou as justas mensais.'],
 'Três por semana em inscrição e nobreza feliz. Ótimo.','Justa todo mês é cavaleiro machucado todo mês. As irmãs vão trabalhar.','O povo vai ter espetáculo de graça. Adoram cavaleiro caindo.','l:decreto');
K('e_protecao_florestas','arcano','Velha Morwen','Floresta Enevoada','🍄','Guardas da floresta',
 'Dois guardas florestais na Floresta Enevoada, para impedir caça e corte ilegal. Eu ensino eles a ler a mata.',
 ['guarda-2 povo+3 ?clero-2','Criou os guardas florestais da Floresta Enevoada.','v:Guardas florestais|8|ouro-2'],['','Recusou os guardas florestais.'],
 'Dois guardas por quase nada. A floresta agradece.','Dois homens que vão aprender com a Morwen. O Bispo vai odiar.','A floresta alimenta o povo do leste. Protegê-la é protegê-los.','l:decreto');
K('e_ajuda_vilas_norte','povo','Lenhador Ulf','Vilas do Norte','🏔️','Ajuda ao norte',
 'O norte é pobre e fica perto de Vhalkir. Uma ajuda semanal em pão e lenha para as vilas de lá.',
 ['povo+6 guarda+2','Decretou ajuda semanal às vilas do norte.','v:Ajuda ao norte|8|ouro-5'],['?povo-4','Recusou ajuda ao norte.'],
 'Cinco por semana para manter gente no norte. Sem gente lá, Vhalkir fica sem vigia.','Vila vazia no norte é porta aberta pra coisa ruim.','O norte se sente abandonado há anos. Isso muda tudo.','l:decreto');
K('e_cartorio','burguesia','Escriba-Chefe Odo','Arquivos Reais','📜','Registro de terras',
 'Um cartório para registrar quem é dono de qual terra. Acaba com briga de herança. Cobramos uma taxa por registro.',
 ['ouro-15 nobreza-3 povo+3','Criou o cartório de terras.','v:Taxa do cartório|10|ouro+5'],['','Recusou o cartório de terras.'],
 'Terra registrada é tributo certo. E briga a menos.','Briga de terra a menos é soldado a menos separando vizinho.','Os pobres vão finalmente ter papel provando que o sítio é deles.','l:decreto');
K('e_racionamento','povo','Coletor-Mor Aldous','Tesouro Real','⚖️','Racionamento de trigo',
 'Os celeiros estão baixos. Proponho racionar o trigo: cada família recebe uma cota. Ninguém fica sem, ninguém estoca.',
 ['povo-4 burguesia-4','Decretou o racionamento de trigo.','v:Celeiros poupados|6|ouro+5'],['?povo-3','Recusou o racionamento.'],
 'Cinco por semana economizados. E nenhum mercador estocando para vender caro.','Racionamento é fila. Fila é briga. Briga é trabalho meu.','O povo odeia racionamento. Mas odeia mais ficar sem pão.','l:decreto');
K('e_artistas_rua','povo','Banx','Bardo Arcano','🎪','Artistas de rua',
 'Meu Rei, proponho que artistas de rua possam se apresentar sem licença. A cidade fica viva, e o povo dá moeda pra eles.',
 ['povo+5 ?burguesia-2','Liberou os artistas de rua sem licença.','v:Licenças perdidas|8|ouro-2'],['','Manteve a licença para artistas de rua.'],
 'Duas por semana em licença perdida. E uma cidade com música.','Malabarista na praça. Meus patrulheiros vão parar pra ver. 🙄','A cidade sem arte é só pedra. Eu sei do que falo. 🎪','l:decreto');
K('e_doca_seca','burguesia','Mestre Corin Vale','Porto do Rio','🛠️','O estaleiro',
 'Um estaleiro no porto. Consertamos barcos de outros reinos e cobramos caro.',
 ['ouro-40 burguesia+5','Construiu o estaleiro do porto.','v:Estaleiro do porto|10|ouro+8'],['','Recusou o estaleiro.'],
 'Quarenta para render oitenta. E barcos de Arcadia consertados aqui.','Estaleiro faz barco de guerra também. Anota isso.','Os carpinteiros do porto vão ter trabalho anos.','l:decreto');
K('e_milicia_vila','guarda','Tenente Kael','Guarda Real','🏹','Milícias de vila',
 'Treinar os homens de cada vila para se defenderem, uma vez por semana. A Guarda manda instrutores.',
 ['guarda+5 povo+3 nobreza-2','Criou as milícias de vila com instrutores da Guarda.','v:Instrutores nas vilas|8|ouro-3'],['','Recusou as milícias de vila.'],
 'Três por semana para vilas que se defendem sozinhas.','O Kael pensou nisso. Ele tá ficando bom de estratégia. 😏','O povo armado e treinado. As Casas vão perder o sono.','l:decreto');
K('e_taxa_estrangeiro','burguesia','Coletor-Mor Aldous','Tesouro Real','🧳','Taxa dos forasteiros',
 'Todo mercador de fora paga uma taxa para vender em Arcadia. Protege os nossos e enche o cofre.',
 ['burguesia+4 ?povo-3','Criou a taxa para mercadores forasteiros.','v:Taxa dos forasteiros|8|ouro+7'],['','Recusou a taxa dos forasteiros.'],
 'Sete por semana e os mercadores daqui contentes. Valdoria vai reclamar.','Forasteiro registrado é forasteiro vigiado. Gosto.','Produto de fora vai ficar mais caro. O povo sente.','l:decreto');
K('e_bencao_semanal','clero','Bispo Aurelian Vey','Templo da Aurora','⛪','A bênção do trono',
 'Uma missa toda semana pela saúde do Rei, paga pela Coroa. O povo vê o Rei abençoado. O Templo agradece.',
 ['clero+6 nobreza+2','Decretou a missa semanal pela saúde do Rei.','v:Missa do trono|10|ouro-3'],['clero-3','Recusou a missa semanal do trono.'],
 'Três por semana para o Bispo ficar contente. Política de altar.','O Bispo vai ter algo pra pregar toda semana. Bom pra ele.','O povo vai à missa porque é de graça. Não porque ama o Rei. Mas vai.','l:decreto');
K('e_aluguel_maximo','povo','Jovem Tomas','Aprendizes das guildas','🏠','Aluguel com teto',
 'Os donos de casa do bairro baixo dobraram o aluguel. Pedimos um teto para o aluguel por um ano.',
 ['povo+7 burguesia-5 nobreza-3','Decretou teto para os aluguéis do bairro baixo.','v:Teto dos aluguéis|8|burguesia-1'],['burguesia+3 ?povo-5','Recusou o teto dos aluguéis.'],
 'Os donos de casa vão sentir um pouco toda semana. O povo vai respirar.','Meus soldados também alugam. Ia ajudar.','Família inteira sendo despejada. Isso para.','l:decreto');
K('e_lanternas','povo','Mestra Fen das Águas','Poços da Cidade','🏮','Lanternas nas ruas',
 'Lanternas a óleo em cada esquina, acesas toda noite. Um homem acende ao anoitecer e apaga de manhã.',
 ['povo+5 guarda+3','Iluminou as ruas com lanternas noturnas.','v:Óleo das lanternas|10|ouro-3'],['?povo-2','Recusou as lanternas.'],
 'Três por semana em óleo. Menos crime, mais comércio à noite.','Rua iluminada é metade do meu trabalho feito.','Pela primeira vez a cidade vai ter luz à noite. O povo vai sair pra ver.','l:decreto');
K('e_monopolio_vidro','burguesia','Vidreiro Murano','Oficina de Vidro','🪟','A guilda do vidro',
 'Proponho que só a Guilda do Vidro faça vidro em Arcadia. Pagamos uma taxa alta por isso.',
 ['burguesia-3 ?povo-2','Deu monopólio do vidro à guilda de Murano.','v:Taxa do vidro|8|ouro+6'],['','Recusou o monopólio do vidro.'],
 'Seis por semana. Monopólio pequeno, em coisa que pobre nem compra.','Vidro não é comigo.','O povo não compra vidro. Mas os vidreiros pequenos vão fechar.','l:decreto');
K('e_cemiterio_novo','clero','Coveiro Silas','Cemitério da Colina','⚰️','O cemitério novo',
 'Um cemitério novo fora dos muros, com coveiros pagos pela Coroa. A colina não cabe mais ninguém.',
 ['ouro-20 clero+4 povo+3','Criou o cemitério novo fora dos muros.','v:Coveiros da Coroa|8|ouro-2'],['?clero-2 ?povo-2','Recusou o cemitério novo.'],
 'Vinte agora e duas por semana. Dignidade não é cara.','O Templo vai abençoar o terreno. Eles adoram terreno novo.','O povo não tem onde enterrar. Isso resolve uma dor que ninguém fala.','l:decreto');
K('e_imposto_luxo','nobreza','Coletor-Mor Aldous','Tesouro Real','💎','O imposto do luxo',
 'Um imposto sobre seda, joia, perfume e carruagem. Só paga quem tem luxo.',
 ['nobreza-6 burguesia-3 povo+4','Criou o imposto sobre o luxo.','v:Imposto do luxo|10|ouro+9'],['nobreza+2','Recusou o imposto do luxo.'],
 'Nove por semana de quem pode pagar. Justo. E as Casas vão odiar.','A carruagem dourada do Bispo vai pagar. HAHAHA.','O povo vai aplaudir. Finalmente o rico pagando.','l:decreto');
K('e_hospital_campanha','guarda','Irmã Maelis','Casa de Cura','⛺','Enfermaria de campanha',
 'Uma enfermaria móvel que acompanha a Guarda nas patrulhas longas. Duas irmãs, ervas e ataduras.',
 ['guarda+5 clero+3','Criou a enfermaria de campanha da Guarda.','v:Enfermaria de campanha|8|ouro-3'],['','Recusou a enfermaria de campanha.'],
 'Três por semana. Soldado ferido que sobrevive é soldado que volta.','Isso salva vidas. Salva MESMO. Já vi homem morrer por falta de atadura.','As irmãs vão ver o reino todo. E o povo das vilas vai ser atendido também.','l:decreto');
K('e_exportar_la','burguesia','Criador Bento Lã','Pastos das Colinas','🐑','Lã para Ostmar',
 'Ostmar quer toda a nossa lã por um bom preço, toda semana. Mas aqui o pano vai ficar mais caro.',
 ['burguesia+5 ?povo-4','Fechou acordo de exportação de lã com Ostmar.','v:Lã para Ostmar|8|ouro+8'],['','Recusou exportar a lã para Ostmar.'],
 'Oito por semana. Ostmar paga bem e paga em dia.','Uniforme de inverno vai ficar caro. Pensa nisso.','O povo vai passar frio com pano caro. Mas os pastores vão ganhar mais.','l:decreto');
K('e_cadeia_trabalho','guarda','Carcereiro Mord','Prisão Real Pedra Fria','⛏️','Presos trabalhando',
 'Os presos da Pedra Fria podiam trabalhar nas estradas. Saem de dia, voltam à noite. A Coroa economiza.',
 ['guarda-2 ?povo-3 burguesia+3','Pôs os presos para trabalhar nas estradas.','v:Trabalho dos presos|8|ouro+5'],['','Recusou o trabalho dos presos.'],
 'Cinco por semana de economia. E estradas consertadas.','Preso fora da prisão é fuga esperando. Vou precisar de muita gente vigiando.','Metade dos presos é gente do bairro por dívida. Trabalhar de graça pra Coroa não parece justo.','l:decreto');
K('e_sementes','povo','Lavradora Ana','Vila de Pedraverde','🌱','Sementes emprestadas',
 'A Coroa empresta semente na plantação e recebe de volta com um pouco a mais na colheita.',
 ['ouro-25 povo+5','Criou o empréstimo de sementes.','v:Sementes devolvidas|8|ouro+4'],['?povo-3','Recusou o empréstimo de sementes.'],
 'Empresta vinte e cinco, recebe trinta e dois. E colheita maior.','Celeiro cheio é quartel alimentado.','Os lavradores pobres nunca têm semente boa. Isso muda a colheita do vale.','l:decreto');
K('e_bibliotecas','povo','Serina Valdimere','Biblioteca Real','📚','Livros que viajam',
 'Uma carroça com livros que roda as vilas, emprestando e recolhendo. Biblioteca sobre rodas.',
 ['povo+5 ?clero-2','Criou a biblioteca sobre rodas.','v:Biblioteca sobre rodas|8|ouro-2'],['','Recusou a biblioteca sobre rodas.'],
 'Duas por semana para um reino que lê. Minha irmã tem boas ideias. Hum.','O Inquisidor vai querer revistar cada livro da carroça.','As crianças das vilas nunca viram um livro. Vão correr atrás da carroça.','l:decreto');
K('e_cambio','burguesia','Signore Bastiani','Companhia das Índias do Sul','💱','Casa de câmbio',
 'Uma casa de câmbio oficial para trocar moeda de fora. A Coroa fica com uma pequena parte de cada troca.',
 ['burguesia+4','Criou a Casa de Câmbio oficial.','v:Casa de Câmbio|10|ouro+5'],['','Recusou a Casa de Câmbio.'],
 'Cinco por semana em comissão. E fim dos cambistas que roubam.','Câmbio precisa de cofre forte. Mais guarda.','O povo nem troca moeda. Mas os marinheiros do porto vão usar.','l:decreto');
K('e_toque_recolher_norte','guarda','Batedor Fynn','Patrulha do Norte','🌙','Recolher no norte',
 'Com as sombras de Vhalkir, proponho toque de recolher nas vilas do norte até o selo ficar firme.',
 ['guarda+5 povo-4','Decretou toque de recolher nas vilas do norte.','v:Recolher do norte|6|povo-1'],['?guarda-3','Recusou o recolher no norte.'],
 'Gente em casa à noite é gente viva. Mas o norte vai se sentir preso.','Patrulha no norte à noite é perigoso. Se o povo ficar em casa, ajuda.','O norte vai ficar preso em casa toda noite. Isso pesa com o tempo.','l:decreto');
K('e_premio_inventor','burguesia','Conselheiro Jodyr','Conselho Real','💡','Prêmio aos inventores',
 'Majestade, proponho um prêmio por semana para a melhor invenção. Moinho, arado, relógio. Quem inventa, ganha.',
 ['burguesia+5 povo+2','Criou o prêmio semanal aos inventores.','v:Prêmio dos inventores|8|ouro-3'],['','Recusou o prêmio aos inventores.'],
 'Três por semana para um reino que inventa. Eu mesmo vou concorrer. Hum.','Se inventarem uma lança melhor, eu quero ver.','O ferreiro Hask vai concorrer toda semana. Com o martelo que canta.','l:decreto');
K('e_dizimo_coroa','clero','Bispo Aurelian Vey','Templo da Aurora','🪙','A Coroa paga o Templo',
 'Proponho que a Coroa pague um valor fixo ao Templo toda semana. Em troca, o Templo para de cobrar esmola nas ruas.',
 ['clero+5 povo+3','Decretou um repasse semanal da Coroa ao Templo.','v:Repasse ao Templo|10|ouro-4'],['clero-3','Recusou o repasse semanal ao Templo.'],
 'Quatro por semana para o povo não ser abordado na rua. Hum. Razoável.','O Bispo quer dinheiro garantido. Vai depender da Coroa. Isso é útil pra ti.','O povo ia adorar não ver mais pedinte do Templo na porta.','l:decreto');
K('e_obras_publicas','povo','Mestre-de-obras Dorran','Guilda dos Pedreiros','🏗️','Frentes de trabalho',
 'Contratar desempregados para obras pequenas pela cidade. Paga pouco, mas paga toda semana.',
 ['povo+6 burguesia+3','Criou as frentes de trabalho da cidade.','v:Frentes de trabalho|8|ouro-5'],['?povo-4','Recusou as frentes de trabalho.'],
 'Cinco por semana para tirar gente da miséria e consertar a cidade.','Homem ocupado não briga na taverna às dez da manhã.','O bairro baixo vai ter comida na mesa. Simples assim.','l:decreto');
K('e_guarda_templo','clero','Sumo-Sacerdotisa Elowen','Templo da Aurora','🛡️','Guarda no Templo',
 'Depois da cripta dos Vigilantes, peço dois guardas fixos no Templo. Para proteger. E para vigiar.',
 ['clero+4 guarda-2','Pôs guarda fixa no Templo.','v:Guarda do Templo|8|ouro-2'],['?clero-2','Recusou guarda fixa no Templo.'],
 'Duas por semana. E olhos dentro do Templo. Útil.','Dois homens meus dentro do Templo. Finalmente vou saber o que acontece lá.','O povo vai se sentir mais seguro indo à missa.','l:decreto');
K('e_tributo_peixe','burguesia','Coletor-Mor Aldous','Tesouro Real','🐟','O imposto do peixe',
 'Proponho taxar o peixe vendido no mercado. Os pescadores vendem muito e pagam pouco.',
 ['povo-4 burguesia-2','Criou o imposto do peixe.','v:Imposto do peixe|8|ouro+5'],['','Recusou o imposto do peixe.'],
 'Cinco por semana. Peixe é comida de pobre, porém.','Na quaresma vai render mais. O Bispo vai gostar disso.','Os pescadores já são pobres. Tomé vai ficar furioso.','l:decreto');
K('e_casas_povo','povo','Jovem Tomas','Aprendizes das guildas','🏘️','Casas para o povo',
 'Proponho que a Coroa construa casas simples e alugue barato para quem mora na rua. Aos poucos, cada semana uma casa.',
 ['povo+7 burguesia-3','Decretou a construção de casas populares.','v:Casas do povo|10|ouro-5'],['?povo-4','Recusou as casas para o povo.'],
 'Cinco por semana durante dez. Cinquenta famílias com teto.','Gente com casa não dorme na porta do quartel.','Uma casa por semana. O povo vai contar cada uma.','l:decreto');
K('e_vigilancia_vigilantes','arcano','Banx','Bardo Arcano','👁️','Espiões nos Vigilantes',
 'Meu Rei, me dá ouro toda semana e eu ponho gente minha dentro dos Vigilantes. Saberemos tudo.',
 ['guarda+5 ?clero-3','Financiou os espiões de Banx dentro dos Vigilantes.','v:Espiões de Banx|8|ouro-4'],['','Recusou os espiões nos Vigilantes.'],
 'Quatro por semana para enxergar dentro do inimigo. Barato.','O Banx com espiões. Eu fico de olho no Banx.','Meus espiões são gente do povo. Ninguém desconfia de lavadeira. 🎭','l:decreto');
