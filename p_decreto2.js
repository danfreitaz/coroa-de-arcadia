/* Lote XVII · Petições de decreto (2/2) */
K('e_alianca_ostmar','burguesia','Embaixador de Ostmar','Reino de Ostmar','⚓','Porto livre com Ostmar',
 'Ostmar propõe porto livre: navios dos dois reinos sem taxa nos portos um do outro, por várias estações.',
 ['burguesia+6 ?nobreza-2','Assinou o porto livre com Ostmar.','v:Porto livre de Ostmar|10|ouro+6'],['burguesia-3','Recusou o porto livre com Ostmar.'],
 'Seis por semana em comércio a mais. E um aliado no mar.','Navio de Ostmar no nosso porto. Vou registrar cada um.','Peixe e sal de Ostmar mais baratos. O povo agradece.','l:decreto');
K('e_tributo_moinho','povo','Moleiro Anselmo','Moinhos de Ventoalto','🌾','Moagem de graça',
 'Proponho moagem gratuita para quem colhe menos de dez sacas. A Coroa paga o moleiro pela diferença.',
 ['povo+6','Decretou moagem gratuita para os pequenos lavradores.','v:Moagem dos pequenos|8|ouro-3'],['','Recusou a moagem gratuita.'],
 'Três por semana para o pequeno lavrador ter farinha.','Nada da Guarda. Mas pão mais barato no vale.','Os pequenos lavradores perdiam metade do trigo pagando moagem. Isso muda tudo.','l:decreto');
K('e_conselho_vilas','povo','Velho Garrick','Camponeses do Vale','🗣️','O conselho das vilas',
 'Que cada vila mande um representante ao castelo uma vez por mês, para falar com o Rei. Nós pagamos a viagem metade.',
 ['povo+6 nobreza-4','Criou o Conselho das Vilas com o Rei.','v:Viagens do Conselho das Vilas|8|ouro-2'],['?povo-3','Recusou o Conselho das Vilas.'],
 'Duas por semana para ouvir o reino de verdade. As Casas vão se sentir ameaçadas.','Gente das vilas no castelo todo mês. Vou precisar de mais guarda no salão.','O povo nunca falou com Rei nenhum. Isso é revolução sem sangue.','l:decreto');
K('e_contrato_forja','guarda','Ferreiro-Mor Gundar','Forja Real','⚒️','Contrato da Forja',
 'Um contrato fixo: a Forja Real entrega armas novas toda semana. Pagamento semanal, qualidade garantida.',
 ['guarda+7','Assinou o contrato semanal da Forja Real.','v:Contrato da Forja|10|ouro-5'],['guarda-2','Recusou o contrato da Forja.'],
 'Cinco por semana para nunca faltar arma.','Arma nova toda semana. Isso é sonho, Dan. 🗡️','Os ferreiros vão ter trabalho certo. O bairro das forjas agradece.','l:decreto');
K('e_tributo_porto','burguesia','Coletor-Mor Aldous','Tesouro Real','⚓','A taxa de atracação',
 'Subir a taxa de atracação no porto. Os navios grandes pagam mais. Os pequenos, igual.',
 ['burguesia-5','Subiu a taxa de atracação dos navios grandes.','v:Taxa de atracação|10|ouro+7'],['','Manteve a taxa de atracação.'],
 'Sete por semana dos navios grandes. Eles podem.','Nada de mais. Só mais papel no porto.','Os barqueiros pequenos não pagam mais. Bom pra eles.','l:decreto');
K('e_casa_orfaos','clero','Abadessa Hilde','Convento de Brumafria','🏠','Casa dos órfãos',
 'Uma casa para os órfãos da guerra e da peste. As irmãs cuidam, a Coroa sustenta.',
 ['povo+5 clero+5','Criou a Casa dos Órfãos de Arcadia.','v:Casa dos Órfãos|10|ouro-4'],['?povo-3 ?clero-3','Recusou a Casa dos Órfãos.'],
 'Quatro por semana. Crianças hoje, cidadãos amanhã.','Metade dos meus soldados foram órfãos. Paga.','Criança na rua vira bando. Criança em casa vira gente.','l:decreto');
K('e_lei_trabalho','povo','Jovem Tomas','Aprendizes das guildas','⏰','Doze horas no máximo',
 'Nenhum trabalhador pode trabalhar mais de doze horas por dia. Hoje tem gente trabalhando dezesseis.',
 ['povo+7 burguesia-6','Limitou a jornada de trabalho a doze horas.','v:Jornada limitada|8|burguesia-1'],['burguesia+3 ?povo-4','Recusou limitar a jornada.'],
 'As guildas vão produzir menos. O povo vai viver mais.','Soldado também trabalha dezesseis. Eu incluso. 😩','Dezesseis horas é escravidão com salário. Isso tem que parar.','l:decreto');
K('e_juros_maximos','burguesia','Conselheiro Jodyr','Conselho Real','📉','Juros com teto',
 'Os agiotas cobram juros absurdos do povo. Proponho um teto nos juros de qualquer empréstimo.',
 ['povo+6 burguesia-5','Decretou teto para os juros dos empréstimos.','v:Teto dos juros|8|ouro-2'],['burguesia+3','Recusou o teto dos juros.'],
 'O povo endividado não compra nada. Teto nos juros solta o comércio de baixo.','Meus soldados devem pra agiota. Muitos.','Tem família pagando juros sobre juros há anos. Isso liberta gente.','l:decreto');
K('e_proibe_caca','nobreza','Caçador Jorah','Montanhas do Norte','🦌','Proteção dos cervos',
 'Os cervos estão sumindo das florestas. Proponho proibir caça por algumas estações para eles voltarem.',
 ['nobreza-5 povo-2','Proibiu a caça de cervos por algumas estações.','v:Florestas em descanso|6|nobreza-1'],['nobreza+3','Manteve a caça liberada.'],
 'As Casas vão sentir falta das caçadas toda semana.','Caça proibida é menos nobre armado na floresta. Gostei.','Os pobres caçam pra comer. Isso dói mais neles que nos nobres.','l:decreto');
K('e_pedagio_rio','burguesia','Almirante Corvo','Guarda do Rio','🚤','O pedágio do rio',
 'Os barcos que usam o rio patrulhado pagam uma taxa pela proteção. Quem não paga, navega por conta própria.',
 ['burguesia-4 guarda+3','Criou o pedágio do rio patrulhado.','v:Pedágio do rio|10|ouro+6'],['','Recusou o pedágio do rio.'],
 'Seis por semana. A patrulha se paga.','A patrulha do rio fica bancada. Ótimo.','Os pescadores pequenos vão ter que pagar? Espero que não.','l:decreto');
K('e_vacina_morwen','povo','Velha Morwen','Floresta Enevoada','💉','O pó da varíola',
 'Conheço um jeito de proteger da varíola: um corte pequeno com pó de ferida seca. Na floresta funciona há gerações.',
 ['povo+6 clero-5','Apoiou a proteção de Morwen contra a varíola.','v:Proteção da varíola|6|ouro-2'],['clero+3','Proibiu o método de Morwen.'],
 'Se funciona, salva mais gente que qualquer obra.','O Bispo vai dizer que é bruxaria. A Maelis já viu funcionar.','O povo tem medo do corte. Mas tem mais medo da varíola.','l:decreto');
K('e_mercado_noturno2','burguesia','Taverneira Bessa','Taverna do Sino','🌙','O mercado da lua',
 'Um mercado só nas noites de lua cheia, na beira do rio. Taxa alta, mas vende muito.',
 ['burguesia+4 povo+3 ?guarda-2','Criou o mercado da lua cheia.','v:Mercado da lua|8|ouro+4'],['','Recusou o mercado da lua.'],
 'Quatro por semana. E uma tradição nova.','Lua cheia na beira do rio. Lembra da fera de Brumafria? Vou bem armada.','O povo vai ter um lugar bonito pra passear à noite.','l:decreto');
K('e_cavalos_correio','guarda','Velho Bartô','Torre dos Pombos','🐎','Postos de troca',
 'Postos de troca de cavalo a cada meio dia de estrada. Mensagem da fronteira em um dia.',
 ['guarda+5 burguesia+2','Criou os postos de troca de cavalos.','v:Postos de troca|10|ouro-3'],['','Recusou os postos de troca.'],
 'Três por semana para saber tudo em um dia.','Um dia da fronteira até aqui? Isso muda a guerra.','As vilas dos postos vão vender comida pros cavaleiros.','l:decreto');
K('e_lei_heranca','nobreza','Escriba-Chefe Odo','Arquivos Reais','📜','Testamento obrigatório',
 'Todo nobre deve registrar testamento nos Arquivos. Acaba com briga de herança. Cobramos pelo registro.',
 ['nobreza-4','Tornou obrigatório o testamento nos Arquivos.','v:Registro de testamentos|8|ouro+3'],['','Recusou o testamento obrigatório.'],
 'Três por semana e nenhum herdeiro surpresa. Ótimo.','Herança decidida no papel é espada a menos no Salão.','O povo não tem o que deixar. Mas gosta de ver nobre sendo obrigado a algo.','l:decreto');
K('e_tributo_cerveja','burguesia','Coletor-Mor Aldous','Tesouro Real','🍺','O imposto do barril',
 'Um imposto por barril de cerveja produzido. As cervejarias pagam, não o povo.',
 ['burguesia-5 ?povo-2','Criou o imposto do barril.','v:Imposto do barril|10|ouro+6'],['','Recusou o imposto do barril.'],
 'Seis por semana. O cervejeiro repassa, claro.','Cerveja mais cara no quartel. Meus soldados vão reclamar comigo.','A cerveja vai subir na taverna. O povo vai sentir sim.','l:decreto');
K('e_turno_guarda','guarda','Capitã Valkiria','Guarda Real','⏳','Três turnos',
 'Quero três turnos na Guarda em vez de dois. Soldado descansado erra menos. Preciso de mais gente.',
 ['guarda+7 ?povo-2','Criou o terceiro turno da Guarda.','v:Terceiro turno|10|ouro-4'],['guarda-3','Manteve dois turnos na Guarda.'],
 'Quatro por semana para uma Guarda acordada.','Ninguém dorme no posto se tiver dormido em casa. Simples.','Mais recruta do povo na Guarda. Mais emprego.','l:decreto');
K('e_peregrinos_taxa','clero','Coletor-Mor Aldous','Tesouro Real','🥾','Taxa dos peregrinos',
 'Peregrinos passam pelas nossas estradas aos milhares. Uma taxa pequena por cada um, dividida com o Templo.',
 ['clero-3 ?povo-2','Criou a taxa dos peregrinos.','v:Taxa dos peregrinos|8|ouro+4'],['clero+2','Recusou taxar os peregrinos.'],
 'Quatro por semana. Fé que paga a estrada.','O Templo vai reclamar de cobrar dos fiéis. Mesmo levando metade.','Os romeiros pobres vão ter que escolher entre pão e taxa.','l:decreto');
K('e_policia_mercado','burguesia','Inspetor Garreth','Fiscais do Mercado','🔍','Fiscais todo dia',
 'Fiscais no mercado todo dia, conferindo peso, preço e qualidade. Os mercadores honestos agradecem.',
 ['burguesia+3 povo+4','Pôs fiscais diários no Mercado Central.','v:Fiscais do mercado|10|ouro-2'],['','Recusou os fiscais diários.'],
 'Duas por semana para um mercado honesto. Barato.','Menos briga de freguês roubado.','O povo vai comprar sem medo de ser roubado no peso.','l:decreto');
K('e_estradas_norte','guarda','Batedor Fynn','Patrulha do Norte','🛤️','Estrada até Thorendis',
 'Uma estrada de pedra até o Forte Thorendis. Hoje leva quatro dias. Com estrada, dois.',
 ['ouro-40 guarda+6','Iniciou a estrada de pedra até Thorendis.','v:Obras da estrada do leste|8|ouro-3'],['','Recusou a estrada até Thorendis.'],
 'Quarenta agora e três por semana. Tropa na fronteira em dois dias.','Dois dias até meu pai. Isso salva vidas. 🥺','As vilas no caminho vão crescer com a estrada.','l:decreto');
K('e_estoque_guerra','guarda','General Thorin','Forte Thorendis','📦','O estoque de guerra',
 'Proponho guardar comida e flecha toda semana num estoque de guerra. Se vier um cerco, aguentamos meses.',
 ['guarda+6','Criou o estoque de guerra do Forte.','v:Estoque de guerra|10|ouro-4'],['?guarda-3','Recusou o estoque de guerra.'],
 'Quatro por semana como seguro contra o pior.','Meu pai sempre diz: guerra se ganha antes de começar.','Os lavradores vão vender o excedente pro estoque. Bom pra eles.','l:decreto');
K('e_licenca_magia','arcano','Arquimaga Ondine','Ala Arcana','📜','Licença para magos',
 'Proponho que todo mago do reino tenha licença da Ala Arcana. Quem não tiver, é proibido. Pagam pela licença.',
 ['guarda+4 clero+3 ?povo-3','Criou a licença obrigatória para magos.','v:Licenças de magia|8|ouro+4'],['','Recusou a licença para magos.'],
 'Quatro por semana e controle da magia. Até o Bispo vai gostar.','Mago registrado é mago vigiado. Gosto.','As benzedeiras e curandeiras das vilas vão ter que pagar? Isso é injusto com elas.','l:decreto');
K('e_premio_parteiras','povo','Parteira Odila','Bairro baixo','👶','Um pagamento por parto',
 'A Coroa paga uma moeda por cada parto bem feito. As parteiras vão poder viver do ofício.',
 ['povo+5 clero+2','Criou o pagamento por parto às parteiras.','v:Pagamento das parteiras|8|ouro-3'],['','Recusou o pagamento às parteiras.'],
 'Três por semana por mães e bebês vivos. Não discuto.','Minha mãe morreu de parto. Paga.','As parteiras trabalham de madrugada de graça. Finalmente.','l:decreto');
K('e_proibe_duelo','nobreza','Conselheiro Jodyr','Conselho Real','🤺','Fim dos duelos',
 'Proponho proibir duelos entre nobres. Quem duelar, paga multa pesada à Coroa.',
 ['nobreza-5 guarda+3','Proibiu os duelos com multa pesada.','v:Multas de duelo|8|ouro+3'],['nobreza+3','Manteve os duelos permitidos.'],
 'Três por semana em multa. E menos herdeiro morto por orgulho.','Menos nobre sangrando no meu pátio de manhã. SIM.','O povo achava duelo divertido de assistir. Vão sentir falta. Um pouco.','l:decreto');
K('e_salario_professor','povo','Mestra Liana Orwen','Academia Real','🍎','Professores nas vilas',
 'Pagar um professor itinerante que passe uma semana em cada vila ensinando a ler.',
 ['povo+6 ?clero-2','Contratou professores itinerantes para as vilas.','v:Professores itinerantes|10|ouro-3'],['','Recusou os professores itinerantes.'],
 'Três por semana para um reino alfabetizado.','O Templo ensinava nas vilas. Vai ficar com ciúme.','As crianças das vilas vão esperar a semana do professor como festa.','l:decreto');
K('e_dote_noivas','povo','Irmão Tobias','Templo da Aurora','💐','Dote das moças pobres',
 'Moças pobres não casam por falta de dote. Proponho um dote pequeno pago pela Coroa, uma por semana.',
 ['povo+5 clero+4','Criou o dote real para moças pobres.','v:Dote das moças|8|ouro-3'],['','Recusou o dote das moças pobres.'],
 'Três por semana. Casamento é família, família é estabilidade.','O Templo adora casamento. Vão te abençoar toda missa.','Toda semana um casamento no bairro baixo. Festa garantida.','l:decreto');
K('e_tributo_ouro_mina','burguesia','Coletor-Mor Aldous','Tesouro Real','⛏️','O quinto das minas',
 'Proponho que a Coroa fique com um quinto de todo metal tirado das minas do reino.',
 ['burguesia-6 ?povo-2','Criou o quinto real sobre as minas.','v:Quinto das minas|10|ouro+9'],['','Recusou o quinto das minas.'],
 'Nove por semana. As companhias de mina vão chorar.','Mina que paga a Coroa é mina que a Coroa protege.','Os donos vão descontar dos mineiros. Sempre descontam.','l:decreto');
K('e_ajuda_refugiados','povo','Irmã Maelis','Casa de Cura','🏕️','Os refugiados de Ponte Seca',
 'As famílias de Ponte Seca perderam tudo. Peço ajuda semanal até elas se restabelecerem.',
 ['povo+6 clero+3','Decretou ajuda semanal aos refugiados de Ponte Seca.','v:Ajuda a Ponte Seca|6|ouro-4'],['?povo-4','Recusou ajuda aos refugiados.'],
 'Quatro por semana durante seis. Gente que vai lembrar.','Eles perderam tudo por causa de Morgrath. É o mínimo.','Sem ajuda, eles viram mendigos na capital. Isso pesa em todo mundo.','l:decreto');
K('e_proibe_jogos','clero','Bispo Aurelian Vey','Templo da Aurora','🎲','Proibir o jogo',
 'O jogo de dados destrói famílias. Proponho proibir em todo o reino. Multa para quem for pego.',
 ['clero+5 povo-4 burguesia-3','Proibiu o jogo de dados no reino.','v:Multas do jogo|8|ouro+3'],['clero-3','Recusou proibir o jogo.'],
 'Três por semana em multas. E o jogo vai para o porão.','Proibido vira escondido. Escondido vira briga em beco.','O povo vai jogar do mesmo jeito. Só que com medo.','l:decreto');
K('e_frota_pesca','povo','Pescador Tomé','Vila do Rio','⛵','Barcos de pesca da Coroa',
 'A Coroa compra barcos e aluga barato para pescadores sem barco. O aluguel paga os barcos.',
 ['ouro-30 povo+5','Comprou barcos para alugar aos pescadores.','v:Aluguel dos barcos|10|ouro+4'],['','Recusou os barcos da Coroa.'],
 'Trinta agora e quarenta de volta. E mais peixe no mercado.','Barco a mais no rio é olho a mais pra patrulha.','Tomé perdeu o barco na enchente. Isso salva a família dele.','l:decreto');
K('e_reforma_prisao','guarda','Carcereiro Mord','Prisão Real Pedra Fria','🔒','Comida digna na prisão',
 'Os presos comem pão mofado. Proponho uma refeição decente por dia. Menos doença, menos motim.',
 ['?nobreza-2 povo+3 guarda+2','Melhorou a comida da Pedra Fria.','v:Comida da prisão|8|ouro-2'],['?guarda-3','Manteve a comida da Pedra Fria.'],
 'Duas por semana para evitar motim. Barato.','Preso com fome é motim esperando.','Metade dos presos é gente do bairro. As mães agradecem.','l:decreto');
K('e_mercado_trigo','burguesia','Mestre Hollis','Guilda dos Padeiros','🌾','Preço fixo do trigo',
 'Proponho que a Coroa compre trigo na fartura e venda na falta, sempre pelo mesmo preço.',
 ['ouro-30 povo+5 burguesia-3','Criou a bolsa de trigo com preço fixo.','v:Bolsa de trigo|10|ouro+3'],['','Recusou a bolsa de trigo.'],
 'Trinta agora. Depois o preço estável paga sozinho.','Celeiro da Coroa cheio. Isso me deixa tranquila.','Pão com preço fixo. O povo nunca teve isso.','l:decreto');
K('e_campanha_limpeza','povo','Mestra Fen das Águas','Poços da Cidade','🧹','Limpeza das ruas',
 'Uma turma de limpeza recolhendo lixo e esterco das ruas toda semana. Menos rato, menos doença.',
 ['povo+5 burguesia+2','Criou a turma de limpeza das ruas.','v:Limpeza das ruas|10|ouro-3'],['?povo-3','Recusou a limpeza das ruas.'],
 'Três por semana para uma cidade que não fede. E que adoece menos.','Rua limpa é rato a menos. Odeio rato.','O bairro baixo é sempre o último a ser limpo. Isso muda.','l:decreto');
K('e_conselho_mercadores','burguesia','Mestra Ilsa Brannoc','Guilda dos Mercadores','🏛️','Um assento para a burguesia',
 'Peço que a Guilda tenha um assento no Conselho Real. Em troca, pagamos uma contribuição semanal à Coroa.',
 ['burguesia+7 nobreza-6','Deu à Guilda dos Mercadores um assento no Conselho.','v:Contribuição da Guilda|10|ouro+5'],['burguesia-4','Recusou o assento da Guilda.'],
 'Cinco por semana e a burguesia sentada à mesa. As Casas vão espumar.','Mais gente no Conselho. Mais gente pra eu vigiar.','O povo vai perguntar: e a gente, quando senta?','l:decreto');
K('e_lei_florestas','nobreza','Barão Ulrich Vane','Casa Vane','🌳','As matas da nobreza',
 'Proponho que toda mata seja propriedade de alguma Casa. Quem catar lenha paga à Casa dona.',
 ['nobreza+6 povo-6','Deu as matas às Casas nobres.','v:Lenha paga às Casas|8|povo-1'],['nobreza-4','Recusou dar as matas às Casas.'],
 'As Casas ficam felizes e o povo passa frio. Toda semana.','O Templo também quer lenha de graça. Vai brigar com o Barão.','Lenha é tudo que o pobre tem no inverno. Isso é crueldade.','l:decreto');
K('e_fundo_crise','burguesia','Conselheiro Jodyr','Conselho Real','🏦','Um fundo para crises',
 'Majestade, proponho guardar um pouco toda semana num cofre que só se abre em catástrofe.',
 ['nobreza+2 burguesia+3','Criou o Fundo de Crises da Coroa.','v:Fundo de crises|10|ouro-4'],['','Recusou o Fundo de Crises.'],
 'Quatro por semana hoje para não quebrar amanhã. É o conselho mais chato que já dei. E o melhor.','Um cofre que eu não posso usar pra comprar espada? Hum. Tá.','O povo nem vai saber. Até o dia que o fundo salvar todo mundo.','l:decreto');
K('e_imposto_heranca','nobreza','Coletor-Mor Aldous','Tesouro Real','⚱️','O imposto da herança',
 'Toda herança grande paga um décimo à Coroa. Quem herda castelo pode pagar.',
 ['nobreza-6','Criou o imposto sobre grandes heranças.','v:Imposto de herança|10|ouro+7'],['','Recusou o imposto sobre heranças.'],
 'Sete por semana das famílias mais ricas. Justo e impopular.','Herança de nobre pagando imposto. O povo vai rir muito.','O povo não herda nada. Não sente. Só aplaude.','l:decreto');
K('e_milicia_rio','guarda','Almirante Corvo','Guarda do Rio','⚓','Milícia dos pescadores',
 'Os pescadores conhecem o rio melhor que ninguém. Proponho pagar um pouco pra eles vigiarem à noite.',
 ['guarda+5 povo+3','Criou a milícia dos pescadores no rio.','v:Milícia do rio|8|ouro-3'],['','Recusou a milícia do rio.'],
 'Três por semana pela vigilância de quem conhece cada pedra do rio.','Pescador vigia melhor que soldado. Admito.','Tomé vai ser o chefe. Ele vai adorar.','l:decreto');
K('e_romaria_anual','clero','Romeiro Severino','Romeiros do Monte Claro','🚩','Pousadas da romaria',
 'Pousadas gratuitas para os romeiros pobres ao longo da estrada do Monte Claro, mantidas pela Coroa.',
 ['clero+5 povo+4','Criou as pousadas gratuitas da romaria.','v:Pousadas da romaria|8|ouro-3'],['?clero-3','Recusou as pousadas da romaria.'],
 'Três por semana. Fé apoiada é Templo aliado.','O Templo vai pregar teu nome no Monte Claro.','Os romeiros pobres dormiam no barro. Isso é caridade de verdade.','l:decreto');
K('e_moeda_forte','burguesia','Signore Bastiani','Companhia das Índias do Sul','💰','Lastro em prata',
 'Guardar prata no cofre para garantir cada moeda emitida. A moeda fica forte e todo mundo confia.',
 ['ouro-50 burguesia+7 nobreza+3','Criou o lastro em prata da moeda real.','v:Moeda forte|10|ouro+4'],['','Recusou o lastro em prata.'],
 'Cinquenta parados no cofre, mas comércio mais fácil para sempre.','Prata no cofre precisa de mais guarda. Mas tá.','O povo vai receber moeda que vale o que diz. Novidade.','l:decreto');
K('e_proibe_servidao','povo','Conselheiro Jodyr','Conselho Real','⛓️','Fim da servidão',
 'Majestade, proponho acabar com a servidão no reino, aos poucos. Cada semana, uma vila é libertada.',
 ['povo+10 nobreza-10','Decretou o fim gradual da servidão.','v:Libertação das vilas|10|nobreza-1'],['nobreza+3 ?povo-4','Manteve a servidão.'],
 'A decisão mais importante que um rei de Arcadia pode tomar. Eu sei o preço. Proponho mesmo assim.','O Templo vai se dividir. Metade apoia. A outra tem servos.','O povo vai lembrar desse Rei para sempre. Para sempre, meu Rei.','l:decreto');
K('e_taxa_carruagem','nobreza','Coletor-Mor Aldous','Tesouro Real','🐴','A taxa da carruagem',
 'Carruagem estraga a rua mais que carroça. Proponho taxar carruagem de luxo.',
 ['nobreza-5 povo+2','Criou a taxa sobre carruagens de luxo.','v:Taxa das carruagens|8|ouro+4'],['','Recusou a taxa das carruagens.'],
 'Quatro por semana de quem desfila. Justo.','A carruagem dourada do Bispo vai pagar? HAHAHA. 😂','O povo vai assistir os nobres andando a cavalo pra fugir da taxa.','l:decreto');
K('e_ponte_corda_vilas','povo','Barqueiro Lino','Cachoeira das Sete Quedas','🪢','Manutenção das pontes de corda',
 'As pontes de corda das vilas apodrecem. Uma turma fixa trocando as cordas toda semana evita tragédia.',
 ['povo+5','Criou a manutenção das pontes de corda.','v:Cordas das pontes|8|ouro-2'],['?povo-3','Recusou a manutenção das pontes.'],
 'Duas por semana. A balsa que virou custou mais.','Ponte boa nas vilas é patrulha que chega.','Ninguém mais vai cair no rio por corda podre.','l:decreto');
K('e_lei_esmola','clero','Barão Halvard Crane','Casa Crane','🚫','Proibir a mendicância',
 'Proponho proibir mendigos nas ruas. Quem for pego pedindo, vai para trabalho forçado.',
 ['nobreza+5 povo-7 clero-4','Proibiu a mendicância com trabalho forçado.','v:Trabalho forçado|6|ouro+3'],['nobreza-3 povo+2','Recusou proibir a mendicância.'],
 'Esconder a pobreza não acaba com ela. Só deixa os nobres confortáveis.','O Templo vai ficar furioso. Esmola é sagrada pra eles.','Isso é punir quem já não tem nada. O povo vai odiar.','l:decreto');
K('e_tropa_fronteira','guarda','General Thorin','Forte Thorendis','🏰','Rodízio na fronteira',
 'Proponho mandar cem homens por vez para a fronteira, em rodízio. Todos aprendem, ninguém se cansa.',
 ['guarda+6','Criou o rodízio de tropas na fronteira.','v:Rodízio da fronteira|10|ouro-4'],['?guarda-3','Recusou o rodízio na fronteira.'],
 'Quatro por semana para uma Guarda que conhece a fronteira.','Ideia do meu pai. Boa. Ele sempre teve.','As famílias dos soldados vão sentir falta deles. Mas voltam.','l:decreto');
K('e_lei_tabernas_vila','povo','Sanfoneiro Juca','Taverna do Sino','🪗','Festas sem taxa',
 'Proponho que festas de vila não paguem taxa de licença. Casamento, batizado, São João. Tudo livre.',
 ['povo+6 ?burguesia-2','Isentou as festas de vila de taxa.','v:Festas livres|8|ouro-2'],['','Manteve a taxa das festas.'],
 'Duas por semana em licença perdida. Por um povo que festeja.','Festa livre é festa que eu vou. 🪗','O povo vai festejar sem medo do coletor batendo na porta.','l:decreto');
K('e_bolsa_valdoria','burguesia','Embaixador Lucan Thessaly','Reino de Valdoria','🤝','Mercado comum',
 'Valdoria propõe: produtos dos dois reinos circulam sem taxa por várias estações. Um mercado comum.',
 ['burguesia+6 ?povo+2 nobreza-3','Assinou o mercado comum com Valdoria.','v:Mercado comum de Valdoria|10|ouro+5'],['burguesia-3','Recusou o mercado comum.'],
 'Cinco por semana em comércio a mais. E Valdoria amarrada a nós.','Valdoria amiga é fronteira sul tranquila.','Produto de Valdoria mais barato. O povo vai gostar.','l:decreto');
K('e_bolsa_estudos','povo','Mestra Liana Orwen','Academia Real','🎓','Bolsas na Academia',
 'Uma bolsa por semana para um jovem pobre estudar na Academia. Comida, livro e cama pagos pela Coroa.',
 ['povo+5 ?nobreza-2','Criou as bolsas de estudo da Academia.','v:Bolsas da Academia|10|ouro-2'],['','Recusou as bolsas da Academia.'],
 'Duas por semana. Cada bolsa é um futuro escriba, médico ou mestre.','Que tenha vaga pra menina também. Por favor.','A Lina vai ser a primeira. Eu aposto meu alaúde.','l:decreto');
K('e_tributo_vila_norte','guarda','General Thorin','Forte Thorendis','🏔️','As vilas do norte sem tributo',
 'As vilas do norte vigiam Vhalkir por nós. Proponho que não paguem tributo enquanto o selo estiver fraco.',
 ['povo+6 guarda+4','Isentou as vilas do norte de tributo.','v:Norte isento|8|ouro-4'],['?povo-3','Manteve o tributo do norte.'],
 'Quatro por semana a menos. Mas gente que fica no norte vigiando de graça.','O norte é nossa primeira muralha. Merecem.','O norte vai sentir que alguém lembra deles. Finalmente.','l:decreto');
K('e_vinho_corte','nobreza','Duque Aldren Valcourt','Casa Valcourt','🍷','A adega real',
 'Proponho que a corte compre vinho de Valdoria toda semana. As Casas recebem convidados e o Rei, claro, oferece água.',
 ['nobreza+5 burguesia+2','Criou a adega real para receber as Casas.','v:Adega da corte|8|ouro-3'],['nobreza-3','Recusou a adega real.'],
 'Três por semana para manter as Casas bem recebidas. Política de taça.','O Dan não bebe. Eu bebo por ele. Brincadeira. Um pouco.','O povo vai ver carroça de vinho entrando no castelo toda semana. Não vai gostar.','l:decreto');
K('e_mercado_vilas','burguesia','Mercador Pip Lowell','Comerciante da cidade','🛒','A carroça-mercado',
 'Uma carroça que leva produtos da cidade às vilas e traz produtos das vilas à cidade. A Coroa fica com parte do lucro.',
 ['ouro-20 burguesia+4 povo+4','Criou a carroça-mercado entre cidade e vilas.','v:Carroça-mercado|10|ouro+4'],['','Recusou a carroça-mercado.'],
 'Vinte agora, quarenta depois. E vilas ligadas à cidade.','Carroça na estrada precisa de escolta. Duas lanças.','As vilas vão ter agulha, sal e tecido sem viajar dois dias.','l:decreto');
