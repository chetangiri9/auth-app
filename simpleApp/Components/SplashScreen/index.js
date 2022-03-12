import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setAnimating(false);
      navigation.replace('LoginScreen');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CG</Text>
      <ActivityIndicator
        animating={animating}
        color="#307ecc"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.SplashScreen,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  title: {
    fontSize: 48,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
