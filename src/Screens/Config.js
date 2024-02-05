import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ConfigHeader from '../Components/ConfigHeader';
import ConfigContent from '../Components/ConfigContent';

const Config = ({ navigation }) => {
  const handleBackToChat = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ConfigHeader handleBackToChat={handleBackToChat} />
      <ConfigContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Config;
