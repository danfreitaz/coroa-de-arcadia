/* Lote X · Petições normais (2/4) · Nobreza e Clero */
K('n_baronesa','nobreza','Baronesa Isaura Vane','Casa Vane','🦢','O lago dos cisnes',
 'Meu lago de cisnes está sendo usado pelos lavradores pra dar água ao gado. Exijo uma cerca, paga pela Coroa.',
 ['ouro-15 nobreza+4 ?povo-4','Cercou o lago dos cisnes da Baronesa Vane.'],['nobreza-3 ?povo+3','Deixou o gado beber no lago da Baronesa.'],
 'Uma cerca para cisnes. Pela Coroa. A Baronesa tem senso de humor sem saber.','Cerca é fácil. Mas vou ter que tirar vaqueiro de lá na marra.','O gado precisa de água. Os cisnes nem notam a diferença.','l:normal');
K('n_retrato','nobreza','Duque Aldren Valcourt','Casa Valcourt','🖼️','O retrato no Salão',
 'Há trezentos anos um Valcourt tem retrato no Salão Real. O meu ainda não está lá. Exijo meu lugar na parede.',
 ['nobreza+4 ouro-10','Pendurou o retrato do Duque Valcourt no Salão.'],['nobreza-3','Negou o retrato do Duque no Salão.'],
 'Dez moedas por um quadro do Duque olhando para todos nós. Para sempre.','Põe longe da porta. Não quero ele me encarando no turno da noite.','O povo não vai nem saber. Mas as outras Casas vão contar os retratos.','l:normal');
K('n_cacada_lebre','nobreza','Sir Edric Faulkner','Cavaleiros de Arcadia','🐇','Caça na colheita',
 'Os cavaleiros querem caçar lebres nos campos de trigo, mesmo na colheita. É tradição, Majestade.',
 ['nobreza+4 ?povo-5','Permitiu a caça nos trigais durante a colheita.'],['nobreza-3 ?povo+3','Proibiu a caça nos trigais na colheita.'],
 'Tradição que pisa no trigo do tributo. Hum.','Cavalo correndo em trigal maduro. Vai dar briga com lavrador.','O lavrador perde a colheita pra nobre caçar coelho. O vale vai ferver.','l:normal');
K('n_brasao_falso','nobreza','Arauto-Mor Gilles','Colégio dos Arautos','🛡️','O brasão falso',
 'Um mercador rico usa um brasão de nobreza que não existe. As Casas exigem que ele seja punido.',
 ['nobreza+5 burguesia-4','Puniu o mercador de brasão falso.'],['nobreza-4 burguesia+3','Ignorou o brasão falso do mercador.'],
 'Brasão é patrimônio das Casas. Mexer nisso mexe no orgulho delas.','Pra mim brasão é desenho. Mas as Casas levam a sério.','O povo acha graça. Rico querendo ser nobre é piada antiga.','l:normal');
K('n_torneio_poesia','nobreza','Lady Mirela Ashfeld','Casa Ashfeld','📜','O torneio de trovas',
 'Proponho um torneio de trovas de amor entre os jovens nobres. Em vez de espada, rima. Menos sangue, mais elegância.',
 ['ouro-15 nobreza+5','Patrocinou o torneio de trovas da corte.'],['nobreza-2','Recusou o torneio de trovas.'],
 'Barato e civilizado. Os jovens nobres precisam disso.','Prefiro espada. Mas trova não deixa ninguém sangrando no meu pátio.','O povo vai rir dos nobres rimando "amor" com "dor". Todos rimam isso.','l:normal');
K('n_servo_libertado','nobreza','Barão Ulrich Vane','Casa Vane','⛓️','O servo que comprou a liberdade',
 'Um servo meu juntou moedas por vinte anos e quer comprar a liberdade. A lei permite. Mas eu não quero vender.',
 ['povo+5 nobreza-4','Garantiu ao servo o direito de comprar a liberdade.'],['nobreza+3 ?povo-5','Deixou o Barão recusar a liberdade do servo.'],
 'A lei permite. O Barão quer que a Coroa esqueça a lei. Não.','Vinte anos juntando moeda. Merece.','O servo é o Tobias Velho. O vale inteiro sabe da história.','l:normal');
K('n_jardim_real','nobreza','Jardineiro-Mor Florian','Jardins do Castelo','🌹','O jardim das rosas',
 'O jardim de rosas do castelo está morrendo. Com novas mudas de Valdoria, ele volta a ser o mais belo do reino.',
 ['ouro-20 nobreza+3','Replantou o jardim de rosas do castelo.'],['','Deixou o jardim de rosas murchar.'],
 'Rosa não enche barriga. Mas impressiona embaixador.','O jardim é onde eu treino de manhã cedo. Sem rosa, só espinho.','O povo nem entra no jardim. Mas o jardineiro tem família.','l:normal');
K('n_aposta_nobre','nobreza','Lorde Pryce','Casa Pryce','🎲','A dívida de jogo',
 'Perdi minha melhor égua numa aposta com os Ashfeld. Peço que a Coroa declare a aposta inválida. Eu estava bêbado.',
 ['nobreza-3','Anulou a aposta de Lorde Pryce.'],['nobreza+2','Manteve a aposta de Lorde Pryce.'],
 'Anular aposta de nobre bêbado abre precedente para todos os nobres bêbados. São muitos.','A égua é boa mesmo. Mas aposta é aposta.','O povo ri disso na taverna há dias.','l:normal');
K('n_cavaleiro_velho','nobreza','Sir Godric o Velho','Cavaleiros de Arcadia','🛡️','O último cavaleiro de Thorendis',
 'Lutei em Thorendis antes de o senhor nascer. Estou velho. Peço uma casa pequena e uma pensão para morrer em paz.',
 ['ouro-15 nobreza+3 guarda+3','Deu casa e pensão a Sir Godric.'],['?guarda-3','Recusou a pensão de Sir Godric.'],
 'Quinze moedas pela honra de um velho. Paga.','Meu pai lutou ao lado dele. Ele é uma lenda. Não recusa isso, Dan.','O povo lembra dele das histórias. Vão gostar de saber que foi bem tratado.','l:normal');
K('n_nobre_pobre','nobreza','Lorde Amaury Corvane','Casa Corvane','🏚️','Uma Casa falida',
 'A Casa Corvane perdeu tudo. Temos o nome, mas não temos pão. Peço um posto na corte, qualquer um.',
 ['nobreza+3 ouro-5','Deu um posto na corte a Lorde Corvane.'],['nobreza-2','Negou um posto a Lorde Corvane.'],
 'Um nobre falido grato é um aliado barato.','Ele pode ajudar no arsenal. Sabe contar, pelo menos.','O povo ri de nobre falido. Mas ele é gente boa. Paga a conta na taverna quando pode.','l:normal');
K('n_cerimonia_espora','nobreza','Sir Edric Faulkner','Cavaleiros de Arcadia','🎖️','Novos cavaleiros',
 'Seis escudeiros estão prontos para serem armados cavaleiros. Peço a cerimônia na catedral, com o Rei presente.',
 ['ouro-15 nobreza+4 guarda+3 clero+2','Armou seis novos cavaleiros na cerimônia.'],['nobreza-3','Adiou a cerimônia dos novos cavaleiros.'],
 'Seis cavaleiros a mais. Seis Casas felizes.','Seis espadas novas pra Guarda. Aprovo. O Templo adora cerimônia.','O povo vai ver o desfile. Gostam de cavalo enfeitado.','l:normal');
K('n_peregrinacao_nobre','nobreza','Condessa Ysolde Marrav','Casa Marrav','🙏','A peregrinação da Condessa',
 'Vou ao Santuário do Monte Claro pagar promessa. Peço escolta da Guarda Real. Como convém a uma Condessa.',
 ['nobreza+3 guarda-3 clero+3','Deu escolta real à peregrinação da Condessa.'],['nobreza-3','Negou escolta à Condessa Marrav.'],
 'Escolta real para quem tomou os bosques do povo. Ironia de corte.','Seis homens por duas semanas. Pra levar Condessa rezar. Tá.','O povo vai ver a escolta e lembrar dos bosques. Não ajuda tua imagem.','l:normal');
K('n_ourives','nobreza','Ourives Benedito','Rua dos Ourives','💍','O anel da Duquesa',
 'A Duquesa encomendou um anel e não pagou. Diz que nobre não paga artesão. Peço justiça, Majestade.',
 ['burguesia+4 nobreza-3','Obrigou a Duquesa a pagar o ourives.'],['nobreza+3 burguesia-4','Deixou a Duquesa sem pagar o ourives.'],
 'Nobre que não paga artesão espanta artesão do reino.','A Duquesa tem uma lista de calote. O ourives não é o primeiro.','Todo artesão da cidade tá torcendo pelo Benedito.','l:normal');
K('n_estudo_herdeiro','nobreza','Lady Mirela Ashfeld','Casa Ashfeld','🎓','Estudar em Valdoria',
 'Quero mandar meu filho estudar leis em Valdoria. Peço uma carta de recomendação real.',
 ['nobreza+3','Escreveu carta de recomendação para o filho de Lady Ashfeld.'],['nobreza-2','Recusou a carta de recomendação.'],
 'Uma carta. Custo zero. Um futuro aliado formado em leis.','Nada a ver com a Guarda. Mas é educado ajudar.','O povo nem sabe disso. Coisa de nobre.','l:normal');
K('n_mercado_escravo','nobreza','Barão Ulrich Vane','Casa Vane','⚖️','Servos por dívida',
 'Proponho que quem não pagar dívida com um nobre trabalhe pra ele até quitar. É justo e tradicional.',
 ['nobreza+6 povo-8','Aprovou a servidão por dívida.'],['nobreza-4 ?povo+3','Recusou a servidão por dívida.'],
 'Tradicional como a peste. E tão bem-vinda quanto.','O Templo vai dividir: uns aprovam, outros odeiam.','O povo inteiro deve pra algum nobre. Isso vira escravidão com nome bonito.','l:normal');
K('n_festim','nobreza','Duque Aldren Valcourt','Casa Valcourt','🍖','O festim da colheita',
 'As Casas querem o Festim da Colheita no castelo, como nos tempos do seu avô. Três dias de banquete.',
 ['ouro-30 nobreza+6 ?povo-3','Ofereceu o Festim da Colheita às Casas.'],['nobreza-4','Recusou o Festim da Colheita.'],
 'Trinta moedas em três dias de comida. As Casas gostam de ser lembradas.','Três dias de bêbado nobre no castelo. Adoro. Só que não.','O povo vê a carroça de comida entrando no castelo. Lembra disso.','l:normal');
K('n_disputa_rio','nobreza','Lady Corvina Morvain','Casa Morvain','🌊','A margem do rio',
 'A Casa Pryce desviou o riacho que molhava minhas terras. Exijo que devolvam a água.',
 ['nobreza-2 povo+2','Mandou a Casa Pryce devolver o riacho aos Morvain.'],['nobreza-2','Deixou os Pryce com o riacho desviado.'],
 'Dois nobres brigando por água. Qualquer escolha irrita um deles.','Vou mandar alguém medir o riacho. Detesto briga de nobre.','Os lavradores das duas Casas é que ficam sem água. Ninguém pergunta pra eles.','l:normal');
K('n_cao_caca','nobreza','Barão Halvard Crane','Casa Crane','🐕','Os cães do Barão',
 'Meus cães de caça foram envenenados. Acuso os camponeses do vale. Exijo que a Guarda prenda os culpados.',
 ['nobreza+3 ?povo-5 ?guarda-2','Mandou a Guarda investigar os camponeses pelos cães do Barão.'],['nobreza-3','Ignorou a acusação do Barão Crane.'],
 'Crane acusa sem prova. Como sempre.','Não vou prender lavrador sem prova por causa de cachorro.','Os cães do Barão mordiam criança. Ninguém chorou.','l:normal');
K('n_veu_viuva','nobreza','Lady Corvina Morvain','Casa Morvain','🖤','O luto dos Morvain',
 'Meu marido morreu. Peço que a corte guarde luto de uma semana. É o costume para Casas antigas.',
 ['nobreza+4 ?burguesia-2','Decretou uma semana de luto pelos Morvain.'],['nobreza-3','Recusou o luto da corte pelos Morvain.'],
 'Luto da corte para uma Casa ligada a traidores. As outras Casas vão comentar.','Uma semana sem festa. Por mim, ótimo.','O povo não liga para o luto. Mas o mercado fecha mais cedo.','l:normal');
K('n_guarda_honra','nobreza','Sir Orwin Blackmere','Casa Blackmere','⚔️','Guarda de honra',
 'Minha Casa quer formar a Guarda de Honra do Rei. Vinte cavaleiros, armadura dourada, sempre ao seu lado.',
 ['nobreza+5 ?guarda-3','Aceitou a Guarda de Honra dos Blackmere.'],['nobreza-3','Recusou a Guarda de Honra dos Blackmere.'],
 'Vinte cavaleiros Blackmere sempre perto do Rei. Proteção ou vigilância?','A guarda do Rei sou EU. Armadura dourada é pra desfile. 😤','O povo vai achar bonito. Até descobrir que são cavaleiros de uma Casa só.','l:normal');
K('n_bispo_jantar','clero','Bispo Aurelian Vey','Templo da Aurora','🍷','O jantar do Bispo',
 'O Bispo convida o Rei para jantar no Templo. Só os dois. Para conversar sobre a fé do reino.',
 ['clero+5 ?nobreza-2','Aceitou o jantar privado com o Bispo.'],['clero-4','Recusou o jantar com o Bispo.'],
 'Jantar a sós com o Bispo. Ele quer alguma coisa. Ele sempre quer alguma coisa.','Eu fico na porta. E alguém prova a comida antes. Sem vinho pro Dan, avisa ele.','O povo vai saber que o Rei jantou com o Bispo. Vão achar que ficaram amigos.','l:normal');
K('n_santa_vila','clero','Sacerdote Fennick','Capela do Vale','🌟','A santa do vale',
 'Uma menina do vale diz ter visto a Santa Aurélia. O povo vem de longe. Peço que o Templo reconheça a aparição.',
 ['clero+5 povo+3 ?burguesia+2','Apoiou o reconhecimento da aparição no vale.'],['clero-3 ?povo-2','Recusou reconhecer a aparição.'],
 'Fennick de novo. Mas peregrino gasta dinheiro no vale.','A Elowen tem dúvidas. O Bispo quer reconhecer rápido. Curioso.','A menina é sincera. Ela viu alguma coisa. O povo acredita nela.','l:normal');
K('n_monja','clero','Abadessa Hilde','Convento de Brumafria','🕊️','O convento de Brumafria',
 'O convento de Brumafria precisa de telhado novo antes do inverno. Somos vinte irmãs e quarenta órfãs.',
 ['ouro-25 clero+5 povo+3','Pagou o telhado do convento de Brumafria.'],['clero-3 ?povo-2','Negou o telhado do convento.'],
 'Vinte e cinco moedas. Quarenta órfãs secas no inverno.','As irmãs de Brumafria cuidaram dos feridos de Thorendis. Devo isso a elas.','As órfãs vão rezar pelo Rei. E o povo de Brumafria vai lembrar.','l:normal');
K('n_procissao','clero','Irmão Tobias','Templo da Aurora','🕯️','A procissão das velas',
 'Queremos uma procissão de mil velas pela cidade na noite de Santa Aurélia. Só pedimos que a guarda abra as ruas.',
 ['clero+5 povo+3 ?guarda-2','Liberou a procissão das mil velas.'],['clero-3','Recusou a procissão das velas.'],
 'Barato e bonito. Mil velas não custam à Coroa.','Mil velas em ruas de madeira. Vou espalhar balde em cada esquina.','O povo adora procissão. É quando a cidade inteira fica em silêncio.','l:normal');
K('n_relicario','clero','Sumo-Sacerdotisa Elowen','Templo da Aurora','📿','O relicário de prata',
 'As relíquias verdadeiras de Santa Aurélia estão num baú de madeira podre. Um relicário de prata, Majestade?',
 ['ouro-25 clero+6','Encomendou o relicário de prata do Templo.'],['clero-3','Negou o relicário de prata.'],
 'Vinte e cinco moedas em prata para ossos. Mas ossos que importam ao Templo.','Depois do dedo de porco, que bom ver relíquia de verdade. 😂','O povo nem chega perto das relíquias. Mas gosta de saber que estão bem guardadas.','l:normal');
K('n_padre_casado','clero','Padre Lorcan','Templo da Aurora','💑','O padre que se apaixonou',
 'Majestade, me apaixonei por uma viúva. Quero me casar e continuar padre. O Bispo diz que é impossível.',
 ['clero-5 povo+3','Apoiou o casamento do Padre Lorcan.'],['clero+3','Deixou o Bispo decidir sobre o Padre Lorcan.'],
 'Assunto de fé, não de Coroa. Mas Lorcan é dos bons.','O Bispo vai fazer escândalo. Mas eu gosto do Lorcan.','O povo adora o Lorcan. A viúva é a Rosa, do porto. Todo mundo torce.','l:normal');
K('n_igreja_porto','clero','Padre Lorcan','Templo da Aurora','⚓','Uma capela no porto',
 'Os marinheiros e estivadores não vão ao Templo. É longe e caro. Uma capela simples no porto traria eles de volta.',
 ['ouro-20 clero+4 povo+3','Ergueu uma capela no porto.'],['clero-2','Recusou a capela do porto.'],
 'Vinte moedas por uma capela. Barata e útil.','Capela no porto também acalma briga de marinheiro. Às vezes.','Os estivadores querem rezar pelos que morreram no rio. Nunca tiveram onde.','l:normal');
K('n_sino_novo','clero','Sineiro Pim','Torre do Templo','🔔','O sino de bronze',
 'O sino de bronze da torre trincou. Pra fundir um novo, preciso de bronze de canhão velho. A Guarda tem?',
 ['clero+5 guarda-2','Deu bronze da Guarda para o novo sino do Templo.'],['clero-3','Negou bronze para o sino.'],
 'Bronze velho que vira sino novo. Sem gastar ouro.','Tenho dois canhões velhos que não disparam desde meu avô. Leva.','O sino é a voz da cidade. Sem ele, ninguém sabe a hora de nada.','l:normal');
K('n_herege_livro','clero','Inquisidor Malvert','Ordem da Chama Pura','📕','O tradutor herege',
 'Um tradutor verteu as escrituras pra língua do povo. É heresia. Exijo que ele seja preso e os livros queimados.',
 ['clero+6 ?povo-5','Prendeu o tradutor das escrituras.'],['clero-5 povo+3','Protegeu o tradutor das escrituras.'],
 'Um livro que o povo pode ler. O Inquisidor tem medo exatamente disso.','O Bispo apoia o Inquisidor. A Elowen, não. O Templo tá rachado.','O povo nunca leu as escrituras. Agora pode. Isso é uma revolução quieta.','l:normal');
K('n_milagre_falso','clero','Sumo-Sacerdotisa Elowen','Templo da Aurora','🎭','A estátua que chora',
 'Uma estátua da capela do vale "chora sangue". Descobri que é tinta. O sacerdote ganha esmola com isso. Quero puni-lo.',
 ['clero-3 povo+3','Puniu o sacerdote da estátua falsa.'],['clero+2 ?povo-3','Abafou o caso da estátua falsa.'],
 'Fraude pública. Abafar é virar cúmplice.','É o Fennick de novo, né? Aposto que é o Fennick.','O povo deu esmola achando que era milagre. Vai ficar furioso. Com razão.','l:normal');
K('n_mosteiro_vinho','clero','Irmão Ansel','Mosteiro das Colinas','🍇','O vinho dos monges',
 'Os monges fazem vinho há cem anos para a missa. Queremos vender o excedente no Mercado. Para sustentar o mosteiro.',
 ['clero+4 burguesia+3 ouro+5','Liberou a venda do vinho dos monges.'],['clero-3','Proibiu a venda do vinho dos monges.'],
 'Cinco de taxa e um mosteiro que se sustenta. Bom.','Vinho de monge. Prometo que só provo. Uma taça. O Dan nem bebe, então sobra.','O povo vai comprar vinho de monge achando que é santo. Marketing divino.','l:normal');
K('n_batismo_massa','clero','Irmão Tobias','Templo da Aurora','💧','O batismo no rio',
 'Proponho um grande batismo no rio para todas as crianças do bairro baixo que não foram batizadas. Sem cobrar nada.',
 ['clero+5 povo+3 ouro-5','Apoiou o grande batismo no rio.'],['clero-2','Recusou o grande batismo no rio.'],
 'Cinco moedas e um Templo mais próximo do povo.','Vou pôr guarda na margem. Criança e rio. Cuidado.','As mães choram de alegria. O padre cobrava duas moedas por batismo. Agora é de graça.','l:normal');
K('n_festa_santo','clero','Romeiro Severino','Romeiros do Monte Claro','🚩','A romaria do Monte Claro',
 'Mil romeiros vão ao Santuário do Monte Claro. Pedimos pão e água pelo caminho, pagos pela Coroa.',
 ['ouro-20 clero+5 povo+4','Alimentou a romaria do Monte Claro.'],['clero-3','Não ajudou a romaria.'],
 'Vinte moedas por mil romeiros. Gente que vai lembrar.','Mil pessoas na estrada. Vou mandar patrulha. Romeiro é presa de bandido.','O povo vai cantar o caminho inteiro. Romaria é a festa da fé simples.','l:normal');
K('n_pregador_cego','clero','Bispo Aurelian Vey','Templo da Aurora','📢','O pregador do fim do mundo',
 'Um pregador grita na praça que o mundo acaba em sete dias. O povo está em pânico. Ordene que ele se cale.',
 ['clero+4 povo+2','Mandou calar o pregador do fim do mundo.'],['?povo-4','Deixou o pregador do fim do mundo gritar.'],
 'Pânico é ruim para o comércio. E para tudo.','Já tem gente vendendo tudo pra "se preparar". Cala esse homem.','Os velhos acreditam. As crianças tão com medo de dormir.','l:normal');
K('n_igreja_floresta','clero','Anciã Sela','Povo da Floresta','🌳','O altar das árvores',
 'Queremos um altar dos nossos deuses na beira da floresta. O Bispo diz que é profanação.',
 ['povo+3 clero-6','Permitiu o altar do Povo da Floresta.'],['clero+4 ?povo-3','Proibiu o altar do Povo da Floresta.'],
 'Um altar na borda da floresta. Não ameaça ninguém. Só incomoda.','O Bispo vai pregar contra isso por meses.','O Povo da Floresta pede pouco. Recusar isso também é recado.','l:normal');
K('n_hospital_templo','clero','Irmã Maelis','Casa de Cura','🩹','Ataduras e ervas',
 'Faltam ataduras, ervas e óleo na Casa de Cura. Com trinta moedas, aguentamos o inverno.',
 ['ouro-30 clero+5 povo+4','Abasteceu a Casa de Cura para o inverno.'],['?povo-4 clero-3','Deixou a Casa de Cura sem suprimentos.'],
 'Trinta moedas. Menos gente morta no inverno. Não precisa de mais argumento.','Meus feridos vão lá. Paga.','Inverno sem atadura é inverno com muito enterro.','l:normal');
K('n_coro','clero','Irmão Ansel','Mosteiro das Colinas','🎼','O coro de meninos',
 'Queremos formar um coro de meninos do bairro baixo para cantar no Templo. Comida e roupa por conta do mosteiro.',
 ['clero+4 povo+3','Apoiou o coro de meninos do Templo.'],['','Recusou o coro de meninos.'],
 'Não custa ouro da Coroa. Só boa vontade.','O Templo vai ficar mais bonito. E os meninos, longe da rua.','Banx aprova! Mas vou ensinar umas músicas profanas também. Brincadeira. Mais ou menos. 🎼','l:normal');
K('n_dizimo_peixe','clero','Padre Lorcan','Templo da Aurora','🐟','O dízimo dos pescadores',
 'O Bispo cobra dízimo dos pescadores em peixe. Mas o peixe estraga antes de chegar ao Templo. Proponho trocar por oração.',
 ['clero-3 povo+5','Trocou o dízimo dos pescadores por serviço na capela.'],['clero+3 ?povo-3','Manteve o dízimo em peixe.'],
 'Peixe podre não alimenta nem o Templo. Faz sentido.','O Bispo vai ficar furioso com o Lorcan de novo.','Os pescadores vão fazer festa. Peixe é tudo que eles têm.','l:normal');
K('n_bruxaria_acusacao','clero','Inquisidor Malvert','Ordem da Chama Pura','🔥','A acusação de bruxaria',
 'Uma parteira foi acusada de bruxaria porque um bebê nasceu morto. Peço que seja julgada pela Ordem.',
 ['clero+5 ?povo-6','Entregou a parteira ao julgamento da Ordem.'],['clero-4 povo+4','Protegeu a parteira da acusação de bruxaria.'],
 'Um bebê morto não é prova de feitiço. É tragédia.','A parteira é a Odila. Ela fez meu parto, o do Kael e de metade da Guarda.','Se entregar a Odila, nenhuma mãe confia em parteira de novo.','l:normal');
K('n_jejum_quaresma','clero','Bispo Aurelian Vey','Templo da Aurora','🐟','A quaresma',
 'Na quaresma, peço que o mercado não venda carne. Só peixe. É o costume sagrado.',
 ['clero+4 burguesia-3 povo-2','Proibiu a venda de carne na quaresma.'],['clero-3','Recusou proibir a carne na quaresma.'],
 'Os açougueiros perdem, os pescadores ganham. Mais ou menos empata.','Meus soldados vão comer peixe por quarenta dias. Vão reclamar comigo.','O povo pobre come peixe sempre. Só o rico vai sentir.','l:normal');
K('n_campanario','clero','Mestre-de-obras Dorran','Guilda dos Pedreiros','🏛️','O campanário torto',
 'O campanário do Templo está inclinado. Se cair, cai em cima do mercado. Preciso escorar ou derrubar.',
 ['ouro-30 clero+4 burguesia+2','Escorou o campanário do Templo.'],['ouro-10 clero-6','Derrubou o campanário torto do Templo.'],
 'Escorar custa mais. Derrubar custa o humor do Templo.','Se cair no mercado, é tragédia. Decide logo.','Os mercadores já mudaram as barracas de lugar. Ninguém dorme tranquilo ali.','l:normal');
K('n_novico','clero','Irmão Ansel','Mosteiro das Colinas','🙇','O noviço nobre',
 'O filho do Duque Valcourt quer ser monge. O Duque proíbe. O rapaz fugiu pro mosteiro e pede proteção.',
 ['clero+4 nobreza-4','Protegeu o filho do Duque no mosteiro.'],['nobreza+3 clero-3','Devolveu o filho do Duque à Casa Valcourt.'],
 'O Duque perde um herdeiro. O mosteiro ganha um monge rico. Briga feia.','O Templo vai ficar do lado do rapaz. Vocação é sagrada pra eles.','O rapaz é gentil. Ajudava na sopa do orfanato escondido do pai.','l:normal');
K('n_vela_noite','clero','Dona Benta das Velas','Cemitério da Colina','🕯️','Velas para os mortos',
 'No Dia dos Mortos, peço velas para todos os túmulos do cemitério da colina. Muita gente não tem como comprar.',
 ['ouro-10 clero+3 povo+3','Pagou as velas do Dia dos Mortos.'],['','Não pagou as velas do Dia dos Mortos.'],
 'Dez moedas. A colina inteira iluminada.','Os túmulos dos meus soldados vão ter vela. Obrigada.','O povo sobe a colina com as crianças. É bonito de ver.','l:normal');
K('n_sermao_rei','clero','Padre Lorcan','Templo da Aurora','📖','O sermão sobre o Rei',
 'O Bispo quer que todos os padres preguem que o Rei é escolhido pelos deuses. Eu acho que isso é política, não fé.',
 ['clero+5 nobreza+3','Aceitou o sermão do Rei escolhido pelos deuses.'],['clero-3 povo+2','Recusou que o Templo pregue sobre o Rei.'],
 'Um rei abençoado no púlpito é difícil de contestar. Útil. E perigoso.','O Bispo quer te dever um favor. Ou quer que tu deva a ele.','O povo vai ouvir que o Rei é sagrado. Alguns vão acreditar.','l:normal');
K('n_ordem_hospitalaria','clero','Abadessa Hilde','Convento de Brumafria','🏥','As irmãs enfermeiras',
 'Proponho que as irmãs de Brumafria sirvam como enfermeiras da Guarda Real. Em troca, a Guarda protege o convento.',
 ['clero+4 guarda+4','Aceitou as irmãs de Brumafria como enfermeiras da Guarda.'],['','Recusou as irmãs enfermeiras.'],
 'Uma troca justa, sem ouro.','Enfermeira na Guarda? Eu perdi muito soldado por falta disso. SIM.','O povo de Brumafria fica mais seguro. Ganham todos.','l:normal');
K('n_igreja_rica','clero','Coletor-Mor Aldous','Tesouro Real','💰','As velas de ouro',
 'O Templo encomendou candelabros de ouro maciço. Enquanto isso, pede isenção de tributo por "pobreza". Quero cobrar.',
 ['ouro+20 clero-6','Cobrou tributo do Templo pelos candelabros de ouro.'],['clero+2','Deixou o Templo isento apesar dos candelabros.'],
 'Pobreza com candelabro de ouro. O Coletor tem razão dessa vez.','O Bispo vai dizer que é perseguição religiosa. Sempre diz.','O povo vai rir: o Templo pobre de ouro maciço.','l:normal');
K('n_estrela_cadente','clero','Astrólogo Melchior','Torre das Estrelas','🌠','A chuva de estrelas',
 'Uma chuva de estrelas virá em três noites. O Bispo diz que é presságio. Eu digo que é festa. Deixemos o povo assistir?',
 ['povo+4 clero-2','Convidou o povo a assistir à chuva de estrelas.'],['clero+2','Deixou o Bispo tratar a chuva de estrelas como presságio.'],
 'Festa é melhor que medo. E é de graça.','Uma noite de céu bonito. Eu vou levar a menina do quartel.','O povo vai deitar na grama olhando pra cima. Que bonito vai ser.','l:normal');
