import { ResizeMode, Video } from "expo-av";
import { Image } from "expo-image";
import { Stack, useSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { getSpotById, getSpotM3u8, getSpotThumbnail } from "../data/spot";
import { Text } from "../ui/Text";

const screenWidth = Dimensions.get("window").width;
const videoWidth = screenWidth;
const videHeight = (screenWidth * 214) / 380;

export default function Modal() {
  const video = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { spotId } = useSearchParams();
  const spot = getSpotById(spotId as string);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Stack.Screen
        options={{
          title: spot?.name,
        }}
      />
      <Image
        cachePolicy={"none"}
        source={{
          uri: getSpotThumbnail(spotId as string),
        }}
        style={{
          width: videoWidth,
          height: videHeight,
          display: isPlaying ? "none" : "flex",
          marginBottom: 8,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <TouchableOpacity
        onPress={() => video.current?.presentFullscreenPlayer()}
      >
        <Video
          ref={video}
          style={{
            alignSelf: "flex-start",
            marginTop: 0,
            paddingTop: 0,
            width: videoWidth,
            height: videHeight,
          }}
          source={{
            uri: getSpotM3u8(spotId as string),
          }}
          shouldPlay
          useNativeControls={false}
          resizeMode={ResizeMode.STRETCH}
          isLooping
          onPlaybackStatusUpdate={s => {
            if (s.isLoaded) {
              setIsPlaying(s.isPlaying);
            }
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
