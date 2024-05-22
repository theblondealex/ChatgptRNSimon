import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { ReText } from "react-native-redash";

const content = [
  {
    title: "Let's create.",
    bg: Colors.lime,
    fontColor: Colors.pink,
  },
  {
    title: "Let's brainstorm.",
    bg: Colors.brown,
    fontColor: Colors.sky,
  },
  {
    title: "Let's discover.",
    bg: Colors.orange,
    fontColor: Colors.blue,
  },
  {
    title: "Let's go.",
    bg: Colors.teal,
    fontColor: Colors.yellow,
  },
  {
    title: "ChatGPT.",
    bg: Colors.green,
    fontColor: Colors.pink,
  },
];

const AnimatedIntro = () => {
  return (
    <View style={styles.wrapper}>
      <ReText text="test" style={{ fontSize: 20 }} />
    </View>
  );
};
export default AnimatedIntro;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
