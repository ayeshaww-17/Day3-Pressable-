import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';

       const App=()=> {
        const press=(presstype)=>{
          console.log(presstype);
        }
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.title}>PressAble</Text>
      <Pressable style={styles.press}
      onPress={() => press("onPress")} 
      onPressIn={() => press("onPressIn")} 
      onPressOut={() => press("onPressOut")} 
      onLongPress={() => press("onLongPress")}
      /*style={({ pressed }) => [
        {
          opacity: pressed
            ? 0.5
            : 1
        }
      ]}*/>
        <Text style={styles.text}>Press Me</Text>
      </Pressable>
    </View></SafeAreaView>
  );
}

const styles = StyleSheet.create({
 title:{
  fontSize:30,
  fontFamily:'bold',
  textAlign:'center',
  marginTop:20,
 },
 press:{
  padding:20,
  opacity:0.5,
  textAlign:'center',
  backgroundColor:'#98B82A',
  borderRadius: 50,
  marginTop:200,
 },
 text:{
  textAlign:'center',
  color:'#330000	',
  fontSize:20,
 },
});
export default App;
