import { ScrollView, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { View, Text } from "../components/Themed";


export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Three</Text>
      <View styles={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabThreeScreen.tsx" /> */}
      <ScrollView>
        <Text style={styles.title}>More text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scrollMore text, is there a scroll</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
