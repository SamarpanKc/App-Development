import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const App = () => {
  const dummy = [
    {
      id: "1",
      name: "Aarav Thapa",
      message: "You: Hello!",
      image:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "2",
      name: "Sita Sharma",
      message: "Sita: How are you?",
      image:
        "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "3",
      name: "Kushal Rai",
      message: "You: What's up?",
      image:
        "https://images.unsplash.com/photo-1652154543373-96260b9796e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "4",
      name: "Anjali Karki",
      message: "Anjali: Let's chat!",
      image:
        "https://images.unsplash.com/photo-1675747158955-40f78753b5ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "5",
      name: "Bibek Limbu",
      message: "You: Party tonight?",
      image:
        "https://images.unsplash.com/photo-1572651198362-377a3298e433?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "6",
      name: "Priya Gurung",
      message: "Priya: Good to see you.",
      image:
        "https://plus.unsplash.com/premium_photo-1668127296489-c9436ab6b5b2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "7",
      name: "Rohan Magar",
      message: "You: How's it going?",
      image:
        "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "8",
      name: "Smriti Bhandari",
      message: "Smriti: See you soon.",
      image:
        "https://images.unsplash.com/photo-1579105728744-9d6b14a45389?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "9",
      name: "Niraj Khatri",
      message: "You: Are you free?",
      image:
        "https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "10",
      name: "Deepa Nepali",
      message: "Deepa: Let's meet up.",
      image:
        "https://images.unsplash.com/photo-1637009981953-e924ff5c7f01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "11",
      name: "Sagar Tamang",
      message: "You: What's the plan?",
      image:
        "https://images.unsplash.com/photo-1526667900883-4a817696e7e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "12",
      name: "Kabita Chettri",
      message: "Kabita: How's your day?",
      image:
        "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "13",
      name: "Prabin Shrestha",
      message: "You: How's the weather?",
      image:
        "https://images.unsplash.com/photo-1617788600025-215aa836ab4c?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "14",
      name: "Manisha Yadav",
      message: "Manisha: Let's connect.",
      image:
        "https://images.unsplash.com/photo-1499470932971-a90681ce8530?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "15",
      name: "Roshan Chaudhary",
      message: "You: Any updates?",
      image:
        "https://images.unsplash.com/photo-1665003600097-6d70a9bc98f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace with actual image URL
    {
      id: "16",
      name: "Sunita Joshi",
      message: "Sunita: What are you doing?",
      image:
        "https://images.unsplash.com/photo-1677070041822-eb487df50859?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "17",
      name: "Bikash Pandey",
      message: "You: Are you there?",
      image:
        "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "18",
      name: "Laxmi Tiwari",
      message: "Laxmi: How was your trip?",
      image:
        "https://images.unsplash.com/photo-1652154543373-96260b9796e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "19",
      name: "Suraj Adhikari",
      message: "You: Need your help.",
      image:
        "https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "20",
      name: "Jyoti Basnet",
      message: "Jyoti: I'm coming soon.",
      image:
        "https://images.unsplash.com/photo-1652324122068-14802bb59e15?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const istxtDarkMode = theme === "dark";

  const backgroundC = isDarkTheme ? "#050508" : "#ededed";
  const txtbackground = istxtDarkMode ? "#ededed" : "#080808";

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: backgroundC }]}>
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        contentContainerStyle={styles.circleContainer}
      >
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
      </ScrollView>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "500",
          color: txtbackground,
          padding: 10,
        }}
      >
        Chats
      </Text>

      <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <View style={[styles.card, {}]}>
        <Image
          style={[styles.profileImg, {}]}
          source={{
            uri: item.image,
          }}
        />
        <View style={[styles.messageBox, {}]}>
          <View style={[styles.text, {}]}>
            <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: txtbackground,
          }}
            >
          {item.name}
            </Text>
            <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: txtbackground,
          }}
            >
          {item.message}
            </Text>
          </View>
          {/* Text End */}

          <View style={[styles.icon, {}]}>
            <Ionicons name="call" size={24} color={txtbackground} />
            <FontAwesome name="video-camera" size={24} color={txtbackground} />
          </View>
          {/* Icon  */}

        </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{height: 5}} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#ededed",
  },
  scrollView: {
    width: "100%",
  },
  circleContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 26,
    gap: 10,
  },
  box1: {
    width: 70,
    height: 70,
    backgroundColor: "red",
    borderRadius: 50,
  },
  box2: {
    width: 70,
    height: 70,
    backgroundColor: "blue",
    borderRadius: 50,
  },
  box3: {
    width: 70,
    height: 70,
    backgroundColor: "green",
    borderRadius: 50,
  },
  box4: {
    width: 70,
    height: 70,
    backgroundColor: "orange",
    borderRadius: 50,
  },
  card: {
    // flex: 2,
    width: "100%",
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    justifyContent:"center",
    gap:12,
  },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  messageBox:{
    width:"76%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  text: {
  },
  icon:{
    flexDirection:"row",
    gap:12,
  }
});
