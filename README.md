<a href="https://youtu.be/qNQZiHl13w0">
<p align="center">
  <img src="https://i.imgur.com/6DhIvSz.png" />
</p>
</a>

-----


Version for kids of extension created for fun. :)

<br>

- [Introdução](https://github.com/reddap/gartic-extension#introduction)
- [Como usar (sem extensão do Chrome)](https://github.com/reddap/gartic-extension#usagem)
- [Demonstração](https://github.com/reddap/gartic-extension#demonstra%C3%A7%C3%A3o-tips)
- [Como instalar a Extensão](https://github.com/reddap/gartic-extension#extens%C3%A3o)
- [Ajuda](https://github.com/reddap/gartic-extension#sugest%C3%B5espedidos-no-discord)
<br>

**[Download Gatric v1.8.7](https://github.com/reddap/gartic-extension/releases/download/1.8.7/Gatric.1.8.7.rar)**

## Introduction 


Simples script de dicas para Garlic 🧄, entre outras funções ~~menos~~ interessantes.

Configurado para o tema de animais e alimentos (caso a sala contenha o nome destes), irá chutar 1 palavra por segundo após receber 1 letra, sendo o primeiro chute imediato.


###### Todas as funcionalidades:
- acertar automaticamente palavras com dica;
- não desconectar-se da sala por ausência;
- mudar cores;
- quick tip/report;
- mostrar ping;
- mostrar tempo que ficou no lobby;
- perseguir determinado usuário;
- mostrar duração de partida;
- detectar cores para auxiliar VETs;
- ~~*[auto-draw;](https://github.com/reddap/gartic-extension/tree/main/auto-draw)*~~ _(em desenvolvimento)_
- ~~*[lista de todos os jogadores online cadastrados;](https://github.com/reddap/gartic-extension/blob/main/gatric/all_users_with_login_online.js)*~~ _(removido)_
- mostrar salas denunciadas;
- *[mostrar recados ocultos.](https://github.com/reddap/gartic-extension/blob/main/gatric/iSeeYourRecados.js)* _(adaptando whitelist/disponível apenas para o perfil "administracao", por enquanto)_

<br>

**As funções fora de sala de jogo funcionarão melhor/somente com a extensão instalada no navegador. (sala reportada, perseguir, lobby time, abrir recado)*

<br>

## Usagem
Pressione **<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>i</kbd>**, em seguida, cole o código abaixo no console e dê enter.

```js
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://reddap.github.io/gartic-extension/gatric/trash/src/script.js';
    document.body.appendChild(script);
```
<br>

##### Ativar/Desativar
![GIF](https://media.discordapp.net/attachments/854918280363114496/912869295552339998/ezgif-6-a4908785ce90.gif)
<br>*Funções estarão ativas enquanto a caixa estiver marcada.<br>
Caso "is AFK" estiver marcada, a conta não sairá da sala por ausência.*
<br>
<br>

##### Script para dicas (TIPs)
![GIF](https://media.discordapp.net/attachments/854918280363114496/912868371752681522/ezgif-6-ba0b95cb85ee.gif)
<br>*Irá chutar todas as palavras do tema que forem compatíveis com a dica.*
<br>
<br>

##### Tempo em "Lobby"
![GIF](https://user-images.githubusercontent.com/70059776/144785687-952779f0-709b-4827-aed3-797a31630fa1.gif)
<br>*Mostra o tempo que parmaneceu no "lobby". Será útil para saber quanto tempo falta para mudar de sala.*
<br>
<br>

##### VETs Assistant (beta)
<img src="https://user-images.githubusercontent.com/70059776/145365905-067831fe-3068-4b26-8b31-93060c926ab9.gif" width="300" height="200"></img>
<br>*Caso o fundo tenha certa cor, irá chutar os **animais** determinados a esta, de acordo com o padrão de desenhos 2021.*
<br>
<br>

#### Perseguir usuários
![GIF](https://user-images.githubusercontent.com/70059776/152674550-87a520cd-d88f-4446-ae70-621e9715678a.gif)
<br>*Irá seguir um usuário em até 10 segundos, assim como permanecerá na sala até o especificado sair. (não mexa na página principal ou a que será aberta, estará sendo controlada pela primeira -- para desativar, feche a página que foi aberta)*
<br>
<br>



#### Recados ocultos (administracao)
![GIF](https://user-images.githubusercontent.com/70059776/152648368-6d0dd15f-1eff-4f91-b2f9-6f1c81996457.gif)
<br>
![img](https://user-images.githubusercontent.com/70059776/152647593-a9300690-9f86-4ba2-aefb-9d6596c5cda1.png)
<br>
:o hacks!
<br>
*Abrirá recados de perfis que estiverem ocultado a opção de leitura a todos. (para evitar [conflitos](https://pt.wikipedia.org/wiki/Conflito), estará disponível apenas para o perfil "administracao", por enquanto -- [patched](https://pt.wikipedia.org/wiki/Patch_(computa%C3%A7%C3%A3o))? contate-me)*
<br>
<br>


###### YouTube: showing some features
<a href="https://youtu.be/qNQZiHl13w0">
<img src="https://user-images.githubusercontent.com/70059776/144366674-28769d74-3632-4bad-a511-9f599ac0859e.png" width="350" height="200"></img>
</a>



## Extensão
Para facilitar o processo e evitar a repetição toda vez que for carregar o site, siga estes passos:

- [ ] Faça download do arquivo extension.rar<br>
<ins>**[Download extension.rar](https://cdn.discordapp.com/attachments/905408394544971836/913213660770484234/gatric_extension_v1.0.rar)**</ins>

- [ ] Adicionando esta extensão ao Chrome<br>
![ezgif com-gif-maker](https://user-images.githubusercontent.com/70059776/143190589-660aa681-49bf-4455-9e6e-cca765f150c2.gif)

> Contém os arquivos na pasta [extension-for-chrome](https://github.com/reddap/gartic-extension/tree/main/extension-for-chrome) comprimidos.

-----

###### Reporte de bugs ou sugestões no Discord!
`padder#7724 || Deusa#5150`
