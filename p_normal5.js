/* Lote XIII · Petições normais (complemento) */
K('n_ervanario','povo','Velha Morwen','Floresta Enevoada','🌱','Uma horta de ervas',
 'Quero plantar uma horta de ervas atrás da Casa de Cura. Remédio de graça pra quem não pode pagar.',
 ['ouro-10 povo+4 ?clero-2','Deu terreno para a horta de ervas de Morwen.'],['','Recusou a horta de ervas.'],
 'Dez moedas por remédio permanente. Muito bom.','As irmãs vão reclamar no começo. Depois vão usar mais que todo mundo.','O bairro baixo vai ter chá pra febre sem gastar nada.','l:normal');
K('n_casa_sanfona','povo','Sanfoneiro Juca','Taverna do Sino','🪗','A sanfona do Rei',
 'Majestade, os sanfoneiros juntaram moeda e fizeram uma sanfona de presente pro senhor. Só pedimos que toque uma vez na praça.',
 ['povo+5 ?nobreza-2','Tocou a sanfona na praça para o povo.'],['?povo-2','Recusou tocar a sanfona na praça.'],
 'Um Rei tocando sanfona. As Casas vão ter um ataque. O povo vai ter uma festa.','Eu danço se tu tocar. Só uma vez. Não conta pra ninguém. 🪗','O povo vai lembrar disso até os netos. "O Rei tocou sanfona!"','l:normal');
K('n_lavoura_cooperativa','povo','Lavradora Ana','Vila de Pedraverde','🤝','Plantar junto',
 'As famílias de Pedraverde querem plantar juntas numa terra só e dividir a colheita. Pedimos que a Coroa reconheça.',
 ['povo+5 ?nobreza-3','Reconheceu a lavoura coletiva de Pedraverde.'],['','Recusou a lavoura coletiva.'],
 'Uma experiência interessante. Se der certo, outras vilas copiam.','Nada pra Guarda. Mas é bonito ver gente se ajudando.','Quem planta junto passa menos fome. O vale inteiro tá olhando.','l:normal');
K('n_doacao_sangue','guarda','Irmã Maelis','Casa de Cura','🩸','Sangria nos soldados',
 'Os médicos da corte querem sangrar os soldados doentes. Eu digo que isso mata mais que cura. Peço que proíba.',
 ['guarda+4 clero+2 ?nobreza-2','Proibiu a sangria nos soldados.'],['?guarda-4','Deixou os médicos da corte sangrarem os soldados.'],
 'Os médicos da corte são caros e cheios de si. A Maelis tem resultados.','Três soldados meus morreram depois da sangria. TRÊS. Proíbe.','O povo também quer saber: se é ruim pro soldado, é ruim pra eles?','l:normal');
K('n_moinho_agua','burguesia','Moleiro Anselmo','Moinhos de Ventoalto','💧','Um moinho de água',
 'Um moinho de água no rio mói sem depender do vento. Mói até de noite. Preciso de licença e de ajuda com a roda.',
 ['ouro-30 burguesia+5 povo+3','Ajudou a construir o moinho de água.'],['','Recusou o moinho de água.'],
 'Farinha o ano inteiro, com ou sem vento. Bom investimento.','Moinho na beira do rio é ponto de vigia também.','Farinha mais barata é pão mais barato. O povo agradece.','l:normal');
K('n_corte_cabelo','nobreza','Barbeiro Fígaro','Barbearia Real','✂️','O barbeiro real',
 'Corto o cabelo do Rei há três anos sem receber. Dizem que é honra. Honra não paga aluguel, Majestade.',
 ['ouro-10 burguesia+2','Pagou os três anos atrasados do barbeiro real.'],['?burguesia-2','Disse ao barbeiro que a honra bastava.'],
 'Três anos de calote no barbeiro. Constrangedor. Pague.','Eu teria parado de cortar no primeiro mês. 😂','O barbeiro conta pra todo cliente. A cidade inteira já sabe.','l:normal');
K('n_calcada','povo','Mestre Dorran','Guilda dos Pedreiros','🧱','Calçar a Rua do Sino',
 'A Rua do Sino é a mais movimentada e a mais esburacada. Com pedra nova, acabam os tornozelos torcidos.',
 ['ouro-20 povo+4 burguesia+2','Calçou a Rua do Sino.'],['','Deixou a Rua do Sino esburacada.'],
 'Rua boa é comércio bom.','Meus patrulheiros tropeçam ali toda noite.','Banx aprova: é onde fica a taverna! 🎶','l:normal');
K('n_igreja_sinos_vila','clero','Sacerdote Fennick','Capela do Vale','🔔','O sino roubado de Sabugueiro',
 'Os bandidos levaram o sino da capela de Sabugueiro. Sem sino, ninguém sabe a hora da missa nem do perigo.',
 ['ouro-15 clero+4 povo+2','Pagou um sino novo para Sabugueiro.'],['clero-2','Não pagou o sino de Sabugueiro.'],
 'Quinze moedas. Fennick pela primeira vez pedindo algo útil.','Sino de vila também avisa ataque. Paga.','A vila tá rezando no silêncio. É triste.','l:normal');
K('n_cego_guia','povo','Menino Tonico','Pastos do Vale','🦮','O cão-guia',
 'Ensinei meu cachorro a guiar o cantador cego Aderaldo. Quero ensinar outros cães pra outros cegos.',
 ['ouro-5 povo+3','Apoiou o menino que treina cães-guia.'],['','Recusou ajudar o menino dos cães-guia.'],
 'Cinco moedas. Um menino com uma ideia boa.','Os cães de guerra podiam aprender também. Que menino esperto.','Aderaldo chorou quando contou. Ele anda pelas estradas sem medo agora.','l:normal');
K('n_aguas_termais','burguesia','Dona Rosalind','Estalagem do Grifo','♨️','As águas quentes',
 'Descobrimos fontes de água quente nas colinas. Uma casa de banhos ali traria nobres de todo o reino.',
 ['ouro-25 burguesia+5 nobreza+3','Construiu a casa de banhos das águas quentes.'],['','Recusou as águas quentes.'],
 'Nobre relaxado gasta mais. E fala mais. Útil.','Eu quero um banho quente. Só um. Depois de cada patrulha.','O povo das colinas vai trabalhar lá. Emprego novo.','l:normal');
K('n_ultima_vontade','nobreza','Sir Godric o Velho','Cavaleiros de Arcadia','🗡️','A última vontade',
 'Estou morrendo, Majestade. Quero que minha espada vá para o melhor soldado da Guarda. Escolha o senhor.',
 ['guarda+4 nobreza+2','Entregou a espada de Sir Godric a Valkiria.'],['guarda+3 povo+2','Entregou a espada de Sir Godric ao jovem Darrow.'],
 'Um gesto simbólico. Para quem vai a espada diz quem o Rei valoriza.','Eu... não sei o que dizer. Ele lutou com meu pai. 🥺','Se for pro Darrow, filho de lavrador, o povo vai cantar isso.','l:normal');
