import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const ElevatedButton = ({
  children,
  height,
  width,
  borderWidth,
  paddingVertical,
  paddingHorizontal,
  dontAnimate,
  onPressHandler,
}) => {
  const [isButtonPressIn, setIsButtonPressIn] = React.useState(false);

  const styles = StyleSheet.create({
    wrapper: {
      borderColor: '#131313',
      backgroundColor: '#C6C6C6',
      flexDirection: 'row',

      borderWidth: borderWidth ? borderWidth : 0,
      height: height ? height : 'auto',
      width: width ? width : 'auto',
      paddingHorizontal: paddingHorizontal ? paddingHorizontal : 'auto',
      paddingVertical: paddingVertical ? paddingVertical : 'auto',
    },
    leftLine: {
      width: 2,
    },
    leftLineUp: {
      flex: 1,
      backgroundColor: isButtonPressIn && !dontAnimate ? '#4A484B' : '#F7F7F7',
    },
    leftLinePixel: {
      height: 2,
      backgroundColor: '#8F8B91',
    },
    middle: {
      flex: 1,
    },
    middleLineUp: {
      height: 2,
      backgroundColor: isButtonPressIn && !dontAnimate ? '#4A484B' : '#F7F7F7',
    },
    middleContent: {
      flex: 1,
      backgroundColor: isButtonPressIn && !dontAnimate ? '#8B8B8B' : '#C6C6C6',
      justifyContent: 'center',
      alignItems: 'center',
    },
    middleLineDown: {
      backgroundColor: isButtonPressIn && !dontAnimate ? '#F7F7F7' : '#4A484B',
      height: 2,
    },
    rightLine: {
      width: 2,
    },
    rightLinePixel: {
      height: 2,
      backgroundColor: '#8F8B91',
    },
    rightLineDown: {
      flex: 1,
      backgroundColor: isButtonPressIn && !dontAnimate ? '#F7F7F7' : '#4A484B',
    },
  });

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsButtonPressIn(true)}
      onPressOut={() => setIsButtonPressIn(false)}
      onPress={() => {
        if (onPressHandler) {
          onPressHandler();
        }
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.leftLine}>
          <View style={styles.leftLineUp}></View>
          <View style={styles.leftLinePixel}></View>
        </View>
        <View style={styles.middle}>
          <View style={styles.middleLineUp}></View>
          <View style={styles.middleContent}>{children}</View>
          <View style={styles.middleLineDown}></View>
        </View>
        <View style={styles.rightLine}>
          <View style={styles.rightLinePixel}></View>
          <View style={styles.rightLineDown}></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ElevatedButton;
