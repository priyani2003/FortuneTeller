
import { router } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function RevealScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Here is your Fortune!</Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarJlqCxZ8swcgkDNWHV82hEdGeyV-koDS6xdYgr7oRAi_RYuhU5kWKr8&s=10',
        }}
        style={styles.image}
      />

      <View style={styles.fortuneBox}>
        <Text style={styles.fortuneText}>
          Your self esteem is about to grow by randomly deleting a single
          line of code that you didn't even write.
        </Text>
      </View>

      <Button
        title="Go Back"
        color="#00cc66"
        onPress={() => router.back()}
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
    backgroundColor: '#E0F7FA',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginBottom: 20,
  },
  fortuneBox: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#D1702A',
  },
  fortuneText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#D1702A',
    lineHeight: 24,
  },
});
