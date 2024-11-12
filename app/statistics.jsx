import {StyleSheet, Text, View } from 'react-native';


export default function Statistics () {
  return (
    <View style={styles.container}>
      <Text>Statistikos</Text>
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