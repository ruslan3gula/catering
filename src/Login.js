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

const {width: Width} = Dimensions.get('window');

export default function Login({navigation}, props) {
  const {createUser} = props;
  console.log('createUser is ...', createUser);
  return (
    <View style={styles.container}>
      <StatusBar color="#009faf" />
      <TextInput
        style={styles.input}
        placeholder={'Username'}
        placeholderTextColor={'#000000'}
        underLineColorAndroid="transparent"
        fontColor={'#000000'}
      />

      <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry={true}
        placeholderTextColor={'#000000'}
        underLineColorAndroid="transparent"
      />
      <TouchableOpacity style={styles.login}>
        <Text>Login</Text>
      </TouchableOpacity>

      <View style={styles.btnContainer}>
        <Text style={styles.button}>Don't have an account?</Text>
        <Text style={styles.button}>Signup now</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go back to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Week')}>
        <Text>Go to Week</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => createUser}>
        <Text>Create User</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4dd0e1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    backgroundColor: '#4dd0e1',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  input: {
    width: Width - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    padding: 4,
    backgroundColor: '#88ffff',
    color: '#000000',
    fontWeight: '500',
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  login: {
    flexGrow: 0,
    width: Width - 250,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    padding: 4,
    backgroundColor: '#006064',
    color: 'rgba(225,225,225,0.7)',
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    color: 'rgba(225,225,225,0.6)',
    fontSize: 16,
  },
});
