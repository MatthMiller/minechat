import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ConfigHeader = ({ handleBackToChat }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.mainHeader}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonWrapper}
          onPress={() => handleBackToChat()}
        >
          <View style={styles.buttonContainer}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/arrow-left.png')}
            />
            <Text style={styles.text}>Voltar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#C6C6C6',

    borderBottomWidth: 2,
    borderBottomColor: '#060606',
  },
  mainHeader: {
    paddingHorizontal: 10,
    paddingVertical: 14,

    flexDirection: 'row',
    borderBottomWidth: 7,
    borderBottomColor: '#585858',
  },
  buttonWrapper: {
    paddingHorizontal: 7,
    paddingVertical: 7,
    width: 'max-content',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    display: 'flex',
    height: 16,
    width: 9.14,
  },
  text: {
    fontFamily: 'Monocraft',
    fontSize: 21,
    lineHeight: 21,
    color: '#4C4C4C',
  },
});

export default ConfigHeader;
