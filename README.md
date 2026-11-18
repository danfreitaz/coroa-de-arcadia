# A Coroa de Arcadia

Jogo de decisões no navegador, ambientado no **Reino de Arcadia**. Cada semana chega uma audiência à Sala do Trono: nobres, sacerdotes, mercadores, camponeses, a Guarda e a Ala Arcana pedem algo ao Rei. Aceitar ou recusar. E reinar com o que vem depois.

## Como se joga
- **306 pedidos**: 267 podem surgir em qualquer semana e 39 são desdobramentos de escolhas anteriores.
- **100 audiências de alto risco**, marcadas com ⚠, com ganhos e perdas bem maiores: golpes, invasões, pestes, dragões e o selo de Vhalkir.
- **Recursos**: Ouro, Guarda Real, Nobreza, Clero, Burguesia e Povo. Se um dos quatro grupos chega a 0% ou 100%, o reinado cai.
- **A Corte**: Jodyr revela Ouro, Nobreza e Burguesia. Valkiria revela Guarda e Clero. Banx revela Povo e Desdobramentos. Cada consulta custa Autoridade do Rei, e uma semana sem consultar devolve +6.
- **Decretos, Tesouro e Crônica**: acordos que valem por semanas, o Registro Financeiro Semanal do Cofre do Reino e o histórico do reinado.
- O progresso e os savepoints ficam salvos no navegador.

## Arquivos
- `index.html`: interface e motor do jogo
- `cartas.js` a `cartas8.js`: os pedidos (6 a 8 são as audiências de alto risco)
- `falas.js`: falas revistas de Valkiria e Banx
- `imagens.js`: brasão e retratos da Corte

Site estático, sem build. Publicado na Vercel.

Uma criação de Danilo Freitas Souza.
