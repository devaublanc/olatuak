import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Video, AVPlaybackStatusSuccess, ResizeMode } from "expo-av";
import { useRef, useState } from "react";

export default function App() {
  const video = useRef<any>(null);
  const [status, setStatus] = useState<AVPlaybackStatusSuccess>();
  console.log({ status });
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://deliverys6.quanteec.com/contents/encodings/live/a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d/master.m3u8",
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        onPlaybackStatusUpdate={status => {
          console.log({ status });
        }}
      />
    </View>
  );
}

// {
//     "thumbnail": "https://deliverys6.quanteec.com/contents/encodings/live/a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d/thumbnail.jpg",
//     "poster": "https://deliverys6.quanteec.com/contents/encodings/live/a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d/poster.jpg",
//     "mpd": "https://deliverys6.quanteec.com/contents/encodings/live/a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d/mpd.mpd",
//     "m3u8": "https://deliverys6.quanteec.com/contents/encodings/live/a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d/master.m3u8",
//     "alternativeBaseUrls": [
//         "https://deliverys6.quanteec.com",
//         "https://deliverys6.quanteec.com",
//         "https://deliverys5.quanteec.com"
//     ]
// }

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: "100%",
    height: 300,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
