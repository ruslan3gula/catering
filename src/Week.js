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
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ({navigation}) {
  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const Day = ({weekDay}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Day', {name: weekDay})}>
      <Text style={styles.title}>{weekDay}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Day weekDay={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={weekDay}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
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
