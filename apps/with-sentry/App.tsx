import { Paragraph, Strong } from "@acme/ui";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  const onTriggerError = useCallback(() => {
    throw new Error("This is an error");
  }, []);

  return (
    <View style={styles.container}>
      <Paragraph>
        Hello from an <Strong>EAS</Strong> monorepo (with-sentry)
      </Paragraph>
      <Button title="Trigger error" onPress={onTriggerError} />
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
