import { Paragraph, Strong } from "@acme/ui";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { version as RNVersion } from "react-native/package.json";

export default function App() {
  return (
    <View style={styles.container}>
      <Paragraph>
        Hello from an <Strong>EAS</Strong> monorepo (ejected - {RNVersion})
      </Paragraph>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
