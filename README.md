<a href="https://youtu.be/qNQZiHl13w0">
<p align="center">
  <img src="https://i.imgur.com/6DhIvSz.png" />
</p>
</a>

[![Github All Releases](https://img.shields.io/github/downloads/reddap/gartic-extension/total.svg)](https://github.com/reddap/gartic-extension/releases/download/1.8.7/Gatric.1.8.7.rar)

-----


#### <p align="center"> Version for kids of a extension created for fun. :) </p>


**[Download Gatric v1.8.7](https://github.com/reddap/gartic-extension/releases/download/1.8.7/Gatric.1.8.7.rar)**  **_(última versão)_**
<br>

- [Introdução](https://github.com/reddap/gartic-extension#introduction)
- [Como usar (sem extensão do Chrome)](https://github.com/reddap/gartic-extension#usagem)
- [Demonstração](https://github.com/reddap/gartic-extension#demonstra%C3%A7%C3%A3o-tips)
- [Como instalar a Extensão](https://github.com/reddap/gartic-extension#extens%C3%A3o)
- [Ajuda](https://github.com/reddap/gartic-extension#sugest%C3%B5espedidos-no-discord)

## Introduction 


Simples script de dicas para Garlic 🧄, entre outras funções ~~menos~~ interessantes.

Configurado para o tema de animais, alimentos, objetos e geral (caso a sala contenha o nome destes), irá chutar 1 palavra por segundo após receber 1 letra, sendo o primeiro chute imediato.


##### Todas as funcionalidades:
- acertar automaticamente palavras com dica;
- não desconectar-se da sala por ausência;
- mudar cores;
- quick tip/report;
- mostrar ping;
- mostrar tempo que ficou no lobby;
- perseguir determinado usuário;
- mostrar duração de partida;
- detectar cores para auxiliar VETs;
- mostrar salas denunciadas.
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
Uso rápido para testes ou pouco uso, não necessitando qualquer download e instalação.<br>
Alguma dúvida sobre o tutorial acima, acesse mais explicado em [para_leigos.md](https://github.com/reddap/gartic-extension/blob/main/for%20children.md).
<br>
<br>

##### Tools box (Hint/Report, isAFK, TIPs, VETs, cronômetro)
![image](https://user-images.githubusercontent.com/70059776/154936994-66f93acb-ca99-436a-8181-06fa77509b7c.png)
<br>*Funções estarão ativas enquanto a caixa estiver marcada.<br>
Caso "is AFK" estiver marcada, a conta não sairá da sala por ausência.*<br>
**Hint**: irá dar dica antes de apertar em desenhar. (inútil, não?)<br>
**Report**: irá denunciar sem aparecer aviso de confirmação.<br>
**Cronômetro**: ao entrar em sala e a partida finalizar, iniciará o cronômetro. Voltará a zero ao terminar partida.
<br>
<br>

##### Script para dicas (TIPs)
![GIF](https://user-images.githubusercontent.com/70059776/155624171-f1986598-b6ba-4552-be53-1115e7cb3775.gif)
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

#### Seguir usuários
![GIF](https://user-images.githubusercontent.com/70059776/155762134-e8422d12-cee3-47c0-91c0-01b756c18cd1.gif)

<br>*Irá seguir um usuário em até 14 segundos, assim como permanecerá na sala até o especificado sair. (v2: irá sair da sala quando o usuário estiver offline, logo, quando utilizador quiser entrar em uma sala normalmente, deverá clicar em "stop", parando assim a observação. - 17/02/2022)*
<br>
<br>
![image](https://user-images.githubusercontent.com/70059776/152868212-a588f3de-68a2-4e31-8fc7-bc455a895a3d.png)<br>
*Aprovado por "spikdk".*
<br>
<br>

#### Entrar em conta deletada (**necessita ações antes da exclusão, logo não irá logar em contas deletadas a muito tempo*)

![GIF](https://user-images.githubusercontent.com/70059776/152722202-5c3721f0-8dfa-4a6c-9cb2-1d4cc4bd6886.gif) <br>
<br>
*Entrar em alguma conta que foi apagada por qualquer motivo. (script avulso, <ins>não adaptado à extensão geral</ins>)*
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
<ins>**[Download extension.rar](https://github.com/reddap/gartic-extension/releases/download/1.8.7/Gatric.1.8.7.rar)**</ins>

- [ ] Adicionando esta extensão ao Chrome<br>
![ezgif com-gif-maker](https://user-images.githubusercontent.com/70059776/143190589-660aa681-49bf-4455-9e6e-cca765f150c2.gif)

> Contém os arquivos na pasta [extension-for-chrome](https://github.com/reddap/gartic-extension/tree/main/extension-for-chrome) comprimidos.

<br>

-----

<br>
<br>

_Thansks pelos 50+ downloads!_ <br>
_Aqui são alguns comentários aleatórios sobre a extensão (ou não) recebidos em algum dia._ <br>

![image](https://user-images.githubusercontent.com/70059776/155742268-a3cfb9d8-8490-4091-b549-c85ec2e03b76.png)

#### <p align="center">Sugestões, dúvidas ou reporte de bugs no Discord!</p>
### <p align="center"> padder#7724 </p>

<br>
<br>

###### _editado 25/02/2022_


