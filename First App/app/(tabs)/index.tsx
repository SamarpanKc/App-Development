import {
  StyleSheet,
  Text,
  Image,
  Alert,
  Pressable,
  SafeAreaView,
  useColorScheme,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Router, useRouter } from "expo-router";

const index = () => {
  const [text, setText] = useState("");
  const [submittedText, setsubmittedText] = useState("");
  const router = useRouter();

  const handleSubmit = () =>{
    setsubmittedText(text)
    setText("");
  }

  const theme = useColorScheme();
  const istxtDarkMode = theme === "dark";
  const isLightMode = theme === "light";

  const background = isLightMode ? "#ededed" : "#080808";
  const txtbackground = istxtDarkMode ? "#ededed" : "#080808";

  return (
    <SafeAreaView style={[style.container, { backgroundColor: background }]}>
      <Text
        style={[
          style.text,
          { color: txtbackground },
          { fontSize: 32 },
          { marginTop: 12 },
        ]}
      >
        Samarpan KC
      </Text>

      <Image
        style={{ width: 360, height: 220, borderRadius: 9 }}
        source={{
          uri: "https://images.pexels.com/photos/15910063/pexels-photo-15910063/free-photo-of-landscape-with-the-matterhorn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
      />
      <View style={[style.input]}>
        <TextInput
          placeholder="Enter you Name"
          style={{ color: "black", borderColor: txtbackground, backgroundColor:"white", borderRadius:6, padding:10}}
          value={text}
          onChangeText={(text)=>{setText(text)}}
        />
      </View>
      <Pressable style={style.button}>
        <Text style={[style.text]} onPress={handleSubmit}>Submit</Text>
      </Pressable>
      {submittedText ? (<Text style={{color:txtbackground}}>Hello {submittedText} 👋</Text>): null}
      
      <Pressable
        style={style.button}
        onPress={() => {
          router.push("/App");
        }}
        onLongPress={() => {
          Alert.alert("You got long press 🤧");
        }}
      >
        <Text style={[style.text]}>Chats</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default index;

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#ededed",
    width: "100%",
    height: "100%",
    marginTop: 32,
    fontFamily: "Poppins",
  },
  button: {
    width: "auto",
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "lightgreen",
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    width: "80%",
    paddingHorizontal: 6,
    borderRadius: 8,
  },
});
