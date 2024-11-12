import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={'/logs'} asChild>
        <Pressable style={styles.pressBox} children>
          <Text>
            Training logs
          </Text>
        </Pressable>
      </Link>
      <Link href={'/statistics'} asChild>
        <Pressable style={styles.pressBox} children>
          <Text>
            Statistics
          </Text>
        </Pressable>
      </Link>
      <Link href={'/plans'} asChild>
        <Pressable style={styles.pressBox} children>
          <Text>
            Planning
          </Text>
        </Pressable>
      </Link>
      <Link href={'/addActivity'} asChild>
        <Pressable style={styles.pressBox} children>
          <Text>
            Add Activity
          </Text>
        </Pressable>
      </Link>
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
  pressBox: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
})
