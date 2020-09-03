import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>its HOME page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Go back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
