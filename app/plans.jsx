import {StyleSheet, Text, View } from 'react-native';


export default function Plans () {
  return (
    <View style={styles.container}>
      <Text>Planai</Text>
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
