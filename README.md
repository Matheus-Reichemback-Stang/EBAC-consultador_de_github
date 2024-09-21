# Consultador de Github

<!-- Link para página do projeto -->
> Visite a página clicando [aqui](https://zkd-consultador-de-github.netlify.app/ "Visitar página").

### Sobre o projeto:

Nesse projeto foi criado um site que consegue consultar qualquer **Perfil GitHub** através do **Nome** e retornar os repositórios referentes ao **Nome do Perfil** consultado, nele foi utilizado uma [API](https://api.github.com/users/NomeDoPefil/repos "Leia a URL ao clicar aqui") que faz a consulta e retorna os dados em formato **JSON**. 
Caso ainda não tenha visto a página, clique [aqui](https://zkd-consultador-de-github.netlify.app/ "Visitar página").

***
 ### Tecnologias usadas:
 * HTML
 * CSS
 * JavaScript
 * Babel
 * React
 * Vite
 * ESLint
---
### Sobre as Tecnologias:

#### HTML
O ***HTML***(HyperText Markup Language) é uma linguagem utilizada para construir a estrutura da uma página, como links, textos, fomulários e etc. Ele faz isso através de **Tags** que são envolvidas por **<>**. O navegador utiliza essa linguagem para interpretar a ***estrutura e semântica*** da página, a **semântica** está relacionada as divisões da página, como por exemplo as tags ***header(cabeçalho), main(principal), section(seção) e footer(rodapé***), cada uma dessas tags, ajuda o navegador interpretar onde fica cada elemento da página. Já a **estrutura**, são os elementos presentes na página que estão ligados com a semântica, por exemplo um título **H1** que é o título principal de uma página.

#### CSS
O ***CSS***(Cascading Style Sheets) é uma linguagem utilizada para construir o design de uma página em si. Enquanto o HTML coloca seus elementos na página, o CSS organiza eles para ficarem mais atrativos ao usuário, ademais o CSS permite criar páginas animadas e dinâmicas. Para usar o CSS, temos que usar os ***seletores, propriedades e valores***. Os **seletores** podem ser definidos por ***Tags, IDs e Classes***, de modo geral, o **seletor é o item(Tag) que vai ser alterado**. As **propriedades** são utilizadas para causar os efeitos, por exemplo '***font-size***', essa propriedade é utilizada para alterar o tamanho da fonte de textos. Já os **valores**, são o efeito em sí, para uma propriedade funcionar ela precisa de um valor para se basear, no mesmo exemplo de antes, digamos que temos o '**font-size**' assim: ***font-size: 16px;***, isso quer dizer que a propriedade ***font-size*** vai ter o valor de ***16px***, ou seja o seletor que contém essa informação vai ter o(s) texto(s) no tamanho de 16px.

#### JavaScript 
O ***JavaScript*** é um ***linguagem de programação*** com o principal foco em desenvolvimento de páginas web, com esse tipo linguagem é possível **criar sistemas complexos** como ***validações de formulário***, adicionar conteúdo através de ***APIs***, ***criar animações*** e etc. Na programação de sites, o JavaScript utiliza uma ferramenta que é ***proporcionada pelo próprio navegador***, o **DOM(Document Object Model)**, através desta ferramenta é possível acessar elementos HTML e manipular eles da forma que você quiser, por exemplo, fazer uma validação para ver se uma ***Tag 'input'*** foi preenchida ou não.

#### Babel
O **_Babel_** é uma ferramenta essencial no ecossistema JavaScript, especialmente para desenvolvedores que trabalham com as _versões mais **recentes** do JavaScript_. Desenvolvido para **transpilar** código JavaScript moderno para uma **versão compatível** com navegadores mais antigos, Babel permite que os desenvolvedores utilizem as últimas funcionalidades da linguagem sem se preocupar com a compatibilidade.
Uma das principais vantagens do Babel é sua capacidade de converter sintaxe ECMAScript 2015+ em uma versão de JavaScript que pode ser executada em qualquer navegador. Isso inclui a conversão de novas funcionalidades, como arrow functions, classes, e template literals, para uma sintaxe mais antiga e amplamente suportada.
Além disso, Babel é altamente configurável e extensível. Ele utiliza plugins para transformar o código, permitindo que os desenvolvedores escolham exatamente quais funcionalidades desejam transpilar. Isso torna o Babel uma ferramenta flexível que pode ser adaptada às necessidades específicas de cada projeto.
Outra característica importante do Babel é sua integração com outras ferramentas de desenvolvimento, como Webpack e Gulp. Isso facilita a inclusão do Babel no fluxo de trabalho de desenvolvimento, garantindo que o código seja automaticamente _"transpilado"_ durante o processo de build. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://babeljs.io/ "Documentação do Babel").

#### React
O **_React_** é uma _**biblioteca JavaScript**_ desenvolvida pelo **Facebook**, amplamente utilizada para a criação de interfaces de usuário (UIs). Ela facilita a construção de UIs interativas e eficientes, permitindo que os desenvolvedores criem _componentes reutilizáveis_ que gerenciam seu próprio estado.
Uma das principais vantagens do React é sua abordagem declarativa, que simplifica a criação de views para cada estado da aplicação. Quando os dados mudam, o React _**atualiza** e **renderiza**_ de forma eficiente apenas os componentes necessários, melhorando o desempenho da aplicação.
Além disso, React é baseado em componentes, o que significa que você pode criar componentes encapsulados que gerenciam seu próprio estado e, em seguida, combiná-los para formar UIs complexas. Isso torna o código mais modular e fácil de manter. O React trabalha com uma sintaxe própria chamada **JSX**. Esta sintaxe junta o _JavaScript_
com _XML_, que é basicamente uma **estrutura de tags**, parecida com o **HTML**. Os 
componentes React são basicamente **funções JavaScript** que **retornam** uma **estrutura de tags**, 
também chamada de **Elemento React**.
O fluxo de dados no React é **unidirecional**, o que significa que os dados fluem de **cima** para **baixo** na _hierarquia de componentes_. Isso torna mais fácil entender como os dados estão sendo manipulados e como a UI está sendo atualizada. Além disso, o React pode ser usado para desenvolver aplicações móveis através do React Native, permitindo que você utilize a mesma base de código para múltiplas plataformas. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://react.dev/ "Documentação do React").

#### Vite
O **Vite** é uma ferramenta de build e servidor de desenvolvimento que visa proporcionar uma experiência de desenvolvimento mais rápida e eficiente para projetos web modernos. Criado por Evan You, o mesmo desenvolvedor do Vue.js, Vite se destaca por sua abordagem inovadora de “load on demand”, que carrega módulos sob demanda durante o desenvolvimento, evitando a necessidade de empacotamento completo.
Uma das principais características do Vite é seu servidor de desenvolvimento extremamente rápido, que utiliza módulos ES nativos para fornecer uma substituição de módulo a quente (HMR) incrivelmente rápida. Isso significa que as mudanças no código são refletidas instantaneamente na aplicação, independentemente do tamanho do projeto.
Além disso, Vite oferece suporte nativo para TypeScript, JSX, CSS e outras tecnologias populares, tornando-o uma escolha versátil para desenvolvedores que trabalham com diferentes stacks. Para a build de produção, Vite utiliza o Rollup, um empacotador de módulos altamente otimizado, garantindo que os ativos estáticos sejam gerados de forma eficiente e com o melhor desempenho possível.
Vite também é altamente extensível, permitindo a integração com uma ampla gama de plugins que podem adicionar funcionalidades adicionais ou adaptar a ferramenta às necessidades específicas de um projeto. Sua configuração padrão é sensata e pronta para uso, mas pode ser personalizada conforme necessário. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://vitejs.dev/ "Documentação do Vite").

#### ESLint
O **ESLint** é uma ferramenta de **linting** para JavaScript que ajuda a _identificar_ e _corrigir problemas_ no código. Desenvolvido como um projeto open source, ESLint analisa estaticamente o código para encontrar erros e inconsistências, promovendo melhores práticas de programação e garantindo a qualidade do código.
Uma das principais vantagens do ESLint é sua **alta configurabilidade**. Ele permite que os desenvolvedores _personalizem as regras_ de linting de acordo com as necessidades específicas do projeto. Isso é feito através de _plugins_, _parsers_ e _configurações compartilháveis_, que podem ser adicionados para estender a funcionalidade do ESLint. Por exemplo, você pode configurar regras para evitar variáveis não utilizadas ou para garantir que todas as variáveis estejam definidas antes de serem usadas.
Além disso, ESLint é integrado na maioria dos editores de texto, o que facilita a detecção e correção de problemas em tempo real enquanto você escreve o código. Ele também pode ser integrado em pipelines de integração contínua, garantindo que o código seja verificado automaticamente antes de ser mesclado no repositório principal.
Outra característica importante do ESLint é sua capacidade de corrigir automaticamente muitos dos problemas que encontra.  Isso economiza tempo e esforço dos desenvolvedores, permitindo que eles se concentrem em aspectos mais complexos do desenvolvimento. Caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://eslint.org/ "Documentação do ESLint").

---
