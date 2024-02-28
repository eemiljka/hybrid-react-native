import {StatusBar} from 'expo-status-bar';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/views/Home';
import Navigator from './src/navigators/Navigator';

const App = () => {
  return (
    <>
      <Navigator></Navigator>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
