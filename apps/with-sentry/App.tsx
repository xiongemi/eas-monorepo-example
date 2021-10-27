import { Paragraph, Strong } from "@acme/ui";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { Button, StyleSheet, View } from "react-native";
import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://2034b43a8da54401be835e15d1031bb9@o58562.ingest.sentry.io/5878591",
});

export default function App() {
  const onTriggerCrash = useCallback(() => {
    throw new Error("This is an unhandled error causing a crash");
  }, []);

  const onTriggerCaught = useCallback(() => {
    Sentry.Native.captureException(new Error("This is a handled error"));
  }, []);

  return (
    <View style={styles.container}>
      <Paragraph>
        Hello from an <Strong>EAS</Strong> monorepo (with-sentry)
      </Paragraph>
      <Button title="Trigger crash error" onPress={onTriggerCrash} />
      <Button title="Trigger cuaght error" onPress={onTriggerCaught} />
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
