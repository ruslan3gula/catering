import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Menu from './Menu';
import Menu2 from './Menu2';

export default function Day({navigation}) {
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Menu2" component={Menu2} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#4dd0e1',
  },
  item: {
    backgroundColor: '#006064',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#FF80AB',
  },
});
