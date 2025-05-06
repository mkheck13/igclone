import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from './components/HeaderComponent';
import PostComponent from './components/PostComponent';
import StoriesComponent from './components/StoriesComponent';
import FooterComponent from './components/FooterComponent';


// div = View
// h1, p = Text
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
      <PostComponent />
      <FooterComponent />
      <StatusBar style='light'/>
    </SafeAreaView>
  );
}


//This "styles" is created using a built in componet called StyleSheet that allows us to style or components

//Flex 1 takes up all the available space in the parent component
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',

  },
});
