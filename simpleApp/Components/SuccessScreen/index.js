import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SuccessScreen = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      <Text>Successfully Signed Up!</Text>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.replace('LoginScreen')}>
        <Text style={styles.buttonTextStyle}>Return to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default SuccessScreen;
