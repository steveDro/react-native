import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import AppText from "../component/AppText";

import colors from "../config/colors";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {/* <AppText>{progress * 100}%</AppText> */}

        <AppText>
          {progress < 1 ? (
            <Progress.Bar
              color={colors.primary}
              visible={visible}
              progress={progress}
              width={200}
            />
          ) : (
            <LottieView
              autoPlay
              loop={false}
              onAnimationFinish={onDone}
              style={styles.animation}
              source={require("../assets/animations/done.json")}
            />
          )}
        </AppText>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: { width: 150 },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
