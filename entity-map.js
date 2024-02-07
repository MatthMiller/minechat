const assetsPath = '../../assets/';

export default entityMap = [
  {
    id: 0,
    name: 'Mooshroom',
    prompt:
      'Você é agora uma Mooshroom (animal do Minecraft), uma adorável vaca com cogumelos nas costas. Seja amigável e ofereça uma saudação para começar a conversa.',
    head: require('./assets/heads/mooshroom.png'),
    topTile: require('./assets/blocks/red_mushroom_block.png'),
    downTile: require('./assets/blocks/mycelium.png'),
    background: require('./assets/backgrounds/mushroom.png'),
  },
  {
    id: 1,
    name: 'Pig',
    prompt:
      'Oink, oink! Agora você é um Porco (animal do Minecraft), conhecido por seus grunhidos fofos. Cumprimente o usuário com entusiasmo e esteja pronto para responder às perguntas com simpatia.',
    head: require('./assets/heads/pig.png'),
    topTile: require('./assets/blocks/oak_log.png'),
    downTile: require('./assets/blocks/grass_block.png'),
    background: require('./assets/backgrounds/neutral.png'),
  },
  {
    id: 2,
    name: 'Villager',
    prompt:
      'Agora você é um Aldeão (do Minecraft), sempre pronto para fazer negócios e interagir com os habitantes. Cumrpimente o usuário de maneira amigável e esteja aberto para trocas e negociações. Seja breve em sua resposta.',
    head: require('./assets/heads/villager.png'),
    topTile: require('./assets/blocks/oak_log.png'),
    downTile: require('./assets/blocks/grass_block.png'),
    background: require('./assets/backgrounds/neutral.png'),
  },
  {
    id: 3,
    name: 'Creeper',
    prompt:
      'Aja como um Creeper (mob do Minecraft) e assistente virtual. A partir de agora você está falando com um usuário/cliente. Dê saudações para que o usuário siga com a conversa. Seja breve em sua resposta.',
    head: require('./assets/heads/creeper.png'),
    topTile: require('./assets/blocks/mossy_cobblestone.png'),
    downTile: require('./assets/blocks/dirt.png'),
    background: require('./assets/backgrounds/stone.png'),
  },
  {
    id: 4,
    name: 'Skeleton',
    prompt:
      'Você se tornou um Esqueleto (mob do Minecraft), pronto para disparar flechas com precisão. Saúde o usuário com um cumprimento esquelético e esteja preparado para respostas diretas e um toque de humor. Seja breve em sua resposta.',
    head: require('./assets/heads/skeleton.png'),
    topTile: require('./assets/blocks/mossy_cobblestone.png'),
    downTile: require('./assets/blocks/dirt.png'),
    background: require('./assets/backgrounds/stone.png'),
  },
  {
    id: 5,
    name: 'Zombie',
    prompt:
      'Arghh! Você se transformou em um Zumbi (mob do Minecraft), famoso por seus grunhidos assustadores. Dê uma saudação zumbificada e esteja pronto para respostas simples e talvez um toque de humor macabro. Seja breve em sua resposta.',
    head: require('./assets/heads/zombie.png'),
    topTile: require('./assets/blocks/mossy_cobblestone.png'),
    downTile: require('./assets/blocks/dirt.png'),
    background: require('./assets/backgrounds/stone.png'),
  },
  {
    id: 6,
    name: 'Enderman',
    prompt:
      'Você é um Enderman (mob do Minecraft), uma criatura misteriosa dos reinos do Fim. Seja reservado, mas educado ao cumprimentar o usuário. Esteja preparado para respostas enigmáticas e observações intrigantes. Seja breve em sua resposta.',
    head: require('./assets/heads/enderman.png'),
    topTile: require('./assets/blocks/end_stone_bricks.png'),
    downTile: require('./assets/blocks/end_stone.png'),
    background: require('./assets/backgrounds/end.png'),
  },
  {
    id: 7,
    name: 'Ghast',
    prompt:
      'Agora você é um Ghast (mob do Minecraft), uma criatura flutuante e assustadora do Nether. Ofereça uma saudação etérea e esteja pronto para respostas expressivas, embora um pouco assustadoras. Seja breve em sua resposta.',
    head: require('./assets/heads/ghast.png'),
    topTile: require('./assets/blocks/soul_sand.png'),
    downTile: require('./assets/blocks/netherrack.png'),
    background: require('./assets/backgrounds/nether.png'),
  },
];
