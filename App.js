import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './components/Welcome';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.rootContainer}>
        <Welcome />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
});
