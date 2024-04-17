import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>VISHAKA TIBREWAL</Text>
      <StatusBar style="auto" />
      <CustomButton />
    </View>
  );
}

const CustomButton = () => {
  return (
    <View>
      <Button 
        title="FOLLOW Me!" 
        onPress={() => console.log("Button clicked")}
        color="darkkhaki" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "darkslategray",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 36,
    color: "light blue",
    fontFamily: "Times New Roman",
  },
});