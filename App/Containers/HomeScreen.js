import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './Style/HomeScreenStyle';

const Button = ({buttonTitle, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        buttonTitle={'Using Redux'}
        onPress={() => navigation.navigate('ReduxScreen')}
      />
      <Button
        buttonTitle={'Using ReduxSauce'}
        onPress={() => navigation.navigate('ReduxSauceScreen')}
      />
    </View>
  );
};
