import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ChatContent = ({ chatHistoryChanged, chatInstance }) => {
  const [localHistory, setLocalHistory] = React.useState([]);

  const Message = ({ item, index }, props) => {
    console.log(item, index, props);

    if (item.role === 'model') {
      return (
        <View key={index}>
          <View
            // Selecionando o primeiro elemento (depois do primeiro
            // prompt de configuração)
            style={
              localHistory.length - 2 === index
                ? [styles.messageTop, styles.firstMessageTop]
                : styles.messageTop
            }
          >
            <Image
              source={require('../../assets/heads/creeper.png')}
              style={styles.messageHead}
            />
            <Text style={styles.messageAuthor}>Creeper IA</Text>
          </View>
          <Text style={styles.messageContent}>
            {item.parts[0].text.replace(/\*\*|\*/g, '')}
          </Text>
        </View>
      );
    } else if (item.role === 'user') {
      // Sumindo com o primeiro prompt de configuração
      // A array está invertida, por isso estou tentando buscar
      if (localHistory.length - 1 === index) return;

      return (
        <View key={index}>
          <View style={styles.messageTop}>
            <Text style={styles.messageAuthor}>Você</Text>
          </View>
          <Text style={styles.messageContent}>{item.parts[0].text}</Text>
        </View>
      );
    }

    return <Text key={'erro'}>Erro no ChatContent.js</Text>;
  };

  React.useEffect(() => {
    console.log('chatHistoryChanged', chatHistoryChanged);
  }, [chatHistoryChanged]);

  React.useEffect(() => {
    console.log('chatInstance no ChatContent.js?', chatInstance);
    updateLocalHistory();
  }, [chatInstance]);

  const updateLocalHistory = async () => {
    try {
      const newHistory = await chatInstance.getHistory();
      setLocalHistory(newHistory);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/stone-background.png')}
      style={styles.chat}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.backgroundOverlay}></View>

      {localHistory?.length ? (
        <FlatList
          data={[...localHistory].reverse()}
          style={styles.flatList}
          renderItem={Message}
          keyExtractor={(item) => item.index}
          inverted={true} // Torna a ordem reversa
        />
      ) : (
        <Text>Sem nada no histórico...</Text>
      )}

      {/* Gambiarra pra renderizar o componente
      de novo depois de atualizar esse state
      no ChatBottom.js */}
      {chatHistoryChanged ? '' : ''}
    </ImageBackground>
  );
};

// 🐣🐔
// 🐣🐔 PROXIMA ETAPA:
// 🐣🐔 escrever no entity-map os mobs.
// 🐣🐔 conseguir enviar mensagem, usar a instancia do chat no estado (ja existe)
// 🐣🐔 pra dar o sendmessage

const styles = StyleSheet.create({
  chat: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'cover',
    ...StyleSheet.absoluteFillObject,
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  flatList: {
    // paddingVertical: 24,
    // paddingTop: 21,
    paddingHorizontal: 10,
  },
  messageContent: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 21,
    borderRadius: 5,
    zIndex: 1,
    fontFamily: 'Monocraft',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    fontSize: 14,
    lineHeight: 18,
    color: '#F5F5F5',
  },
  firstMessageTop: {
    marginTop: 21,
  },
  messageTop: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 21,
    gap: 8,
    marginBottom: 8,
  },
  messageAuthor: {
    textTransform: 'uppercase',
    fontFamily: 'Monocraft',
    fontSize: 14,
    lineHeight: 19,
    color: '#D4D4D4',
  },
  messageHead: {
    height: 24,
    width: 24,
  },
});

export default ChatContent;
