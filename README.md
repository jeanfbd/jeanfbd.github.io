# Case Técnico DP6
Esse case técnico tem como objetivo a implementação de uma coleta de dados para o *Google Analytics* consistente e de acordo com as especificações aqui contidas.

Confira aqui o [GitHub Pages](https://jeanfbd.github.io/).

Seguem as implementações a serem feitas:

## 1. Todas as páginas
Precisamos que, em todas as páginas, seja enviado uma Visualização de Página. Ela não deverá possuir configuração nenhuma, apenas enviando uma visualização padrão de acordo com a documentação.:<br><br>

![image](https://user-images.githubusercontent.com/17724894/128791199-e27bf11f-75d3-4396-bc8f-49789d03dbb6.png)

<br>
No menu, há um link que direciona o usuário para a página de contato da DP6. Configure um evento como o seguinte:

**Categoria**: “menu”<br>
**Ação**: “entre_em_contato”<br>
**Rótulo**: “link_externo”<br><br>

![image](https://user-images.githubusercontent.com/17724894/128791315-a053a4e6-77f8-442b-aefd-17d8535de53a.png)

<br>
Também há um link que inicializa o download de um conteúdo. Configure um evento como o seguinte:

**Categoria**: “menu”<br>
**Ação**: “download_pdf”<br>
**Rótulo**: “download_pdf<br><br>

![image](https://user-images.githubusercontent.com/17724894/128791611-f7f6c866-1f70-46c4-b3ee-fdd082ab6caa.png)
<br>

## 2. Página analise.html
Sempre que um dos botões acima for clicado, configure o envio do seguinte evento customizado:

**Categoria**: “analise”<br>
**Ação**: “ver_mais”<br>
**Rótulo**: [nome_do_conteudo]*<br><br>
Substitua **[nome_do_conteudo]** pelo nome do botão, como “**Lorem**”, “**Ipsum**” e “**Dolor**”.<br><br>

![image](https://user-images.githubusercontent.com/17724894/128791732-a6ac9d96-5747-4424-a001-4ae5ca5fe811.png)

## 3. Página sobre.html
Implemente os seguintes eventos ao preencher cada um dos campos do formulário:

**Categoria**: “contato”<br>
**Ação**: [id_do_campo]*<br>
**Rótulo**: “preencheu”<br>

Substitua [nome_do_campo] pelo id do campo preenchido, dentre “**nome**”, “**email**”, “**telefone**” ou “**aceito**”.<br><br>

![image](https://user-images.githubusercontent.com/17724894/128791833-1ff3ee79-a2f3-4ed0-badc-ec45d384d9fe.png)

<br>
Quando o formulário for enviado, será exibido um popup. Na exibição deste popup, envie o seguinte evento:

**Categoria**: “contato”<br>
**Ação**: “enviado”<br>
**Rótulo**: “enviado”<br><br>

![image](https://user-images.githubusercontent.com/17724894/128791147-41cd50ef-2935-469f-9e80-37491add9bf9.png)