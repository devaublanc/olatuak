import { AVPlaybackStatusSuccess, ResizeMode, Video } from "expo-av";
import { Link, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { View } from "react-native";

export default function Modal() {
  const navigation = useNavigation();
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = navigation.canGoBack();
  const video = useRef<any>(null);
  const [status, setStatus] = useState<AVPlaybackStatusSuccess>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}

      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />

      <Video
        ref={video}
        style={{
          alignSelf: "flex-start",
          marginTop: 0,
          paddingTop: 0,
          width: "100%",
          height: 300,
        }}
        source={{
          uri: "https://deliverys6.quanteec.com/contents/encodings/live/a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d/master.m3u8",
        }}
        shouldPlay
        useNativeControls={false}
        resizeMode={ResizeMode.STRETCH}
        isLooping
      />
    </View>
  );
}
