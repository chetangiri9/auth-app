import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Dashboard = ({route, navigation}) => {
  return (
    <View style={styles.mainBody}>
      <Text style={styles.textStyle}>Welcome {route.params.userName}!</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.replace('LoginScreen')}>
        <Text style={styles.buttonTextStyle}>Return to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 21,
    fontStyle: 'italic',
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    minWidth: 240,
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
