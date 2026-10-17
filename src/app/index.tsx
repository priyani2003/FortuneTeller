import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import { router } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FORTUNE TELLER</Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUPTWkOWi-vTnxPVCyX19Va-HRR9AFG9C0xp20kx1fW17COAJT-J_ngs&s=10',
        }}
        style={styles.image}
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Coding can be tough. But the universe has a plan for your code.
          Are you about to become a coding wizard, or will your code
          surprise us? Find out!
        </Text>
      </View>

      <Button
        title="Reveal My Coding Destiny"
        color="#00cc66"
        onPress={() => router.push('/reveal')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F5F5F5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#D1702A',
    lineHeight: 24,
  },
});
