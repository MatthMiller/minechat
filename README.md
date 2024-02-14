# <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/icon.png'/> Minechat</div>

O projeto Minechat é um aplicativo móvel desenvolvido com React Native e Expo, projetado para oferecer uma experiência de chat interativa com vários personagens do jogo Minecraft, através do uso de inteligência artificial.

<br>
<h2 align = "center">Screenshots dentro do app</h2>

<p align="center" style="display: flex;">
  <img height="600" src='./screenshots/chat.png' alt="Chat" />
  <img height="600" src='./screenshots/config.png' alt="Configurações" />
</p>

<br>

## Personagens disponíveis

- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/heads/mooshroom.png'/> <b>Mooshroom</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/heads/pig.png'/> <b>Pig</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/heads/villager.png'/> <b>Villager</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/heads/creeper.png'/> <b>Creeper</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/heads/skeleton.png'/> <b>Skeleton</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/heads/zombie.png'/> <b>Zombie</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/heads/enderman.png'/> <b>Enderman</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/heads/ghast.png'/> <b>Ghast</b></div>

## Temas baseados nos personagens

- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/blocks/stone.png'/> <b>Cave</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/blocks/grass_block.png'/> <b>Village</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/blocks/mycelium.png'/> <b>Mushroom Fields</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/blocks/end_stone.png'/> <b>End</b></div>
- <div style="display: flex; align-items: center; max-height: max-content"><img height="32px" width="32px" style="place-self: center; max-height: max-content" src='./assets/blocks/soul_sand.png'/> <b>Nether</b></div>

<br>

## <h2>Para desenvolvedores</h2>

### Configurando a chave da API

Crie um arquivo chamado `API_KEY.js` na raíz do projeto com sua chave da <a href="https://ai.google.dev/tutorials/web_quickstart?hl=pt-br#set-up-project">API Gemini</a>:

```js
export default API_KEY = '<SUA_CHAVE>';
```

### Instalando módulos

```
npm install
```

### Executando o aplicativo

```
npm run start
```

## Tecnologias e bibliotecas utilizadas:

- Figma
- Android Studio Virtual Device e Logcat
- React Native e Expo
- React Navigation
- Async Storage
- Google AI - API Gemini
