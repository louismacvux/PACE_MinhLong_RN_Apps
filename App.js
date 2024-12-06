import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Text style={styles.header}>Minh Long Vu</Text>
        <View>
          <Text style={styles.head1}>Personal info</Text>
          <Text>Email: minhlong9696@gmail.com</Text>
          <Text>Phone number: (204) 123 4567</Text>
        </View>
        <View>
          <Text style={styles.head1}>Interest</Text>
          <Text>Listen to Music</Text>
          <Text>Watch Movie</Text>
        </View>
        <View>
          <Text style={styles.head1}>Professional Skills</Text>
          <Text>Software Developer</Text>
          <Text>Project Manager</Text>
        </View>
        <View>
          <Text style={styles.head1}>Work Experience</Text>
          <Text style={{ fontWeight: "bold" }}>Languageline Solutions</Text>
          <Text>Interpreter/Translator</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  head1: {
    fontSize: 22,
    fontWeight: "semibold",
    marginTop: 10,
  },
  job: {
    textAlign: "right",
  },
});
