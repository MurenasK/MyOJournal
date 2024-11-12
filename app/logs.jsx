import {StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import exercises from '../assets/data/exercises.json';
import ExerciseListItem from '../components/ExerciseListItem';
import { StatusBar } from 'expo-status-bar';



export default function Logs () {
  return (
    <View style={ styles.container }>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({item}) => <ExerciseListItem item={item} />}
      />
      <StatusBar style='auto' />
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    gap: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})