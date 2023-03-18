import {
  AVPlaybackStatus,
  ResizeMode,
  Video,
  VideoFullscreenUpdate,
  VideoFullscreenUpdateEvent,
} from "expo-av";
import { Image } from "expo-image";

import { useCallback, useRef, useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { getSpotM3u8, getSpotThumbnail } from "../data/spot";
import { RootStackParamList } from "../navigation/RootStack";

const screenWidth = Dimensions.get("window").width;
const videoWidth = screenWidth;
const videHeight = (screenWidth * 214) / 380;

export type SpotDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SpotDetail"
>;
export function SpotDetailScreen({ route }: SpotDetailScreenProps) {
  const video = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const {
    params: { spotId },
  } = route;

  const onFullscreenUpdate = useCallback(
    (event: VideoFullscreenUpdateEvent) => {
      if (event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_DID_DISMISS) {
        video.current?.playAsync();
      }
    },
    []
  );

  const onPlayBackStatusUpdate = useCallback((event: AVPlaybackStatus) => {
    if (event.isLoaded) {
      setIsPlaying(event.isPlaying);
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
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
          onFullscreenUpdate={onFullscreenUpdate}
          onPlaybackStatusUpdate={onPlayBackStatusUpdate}
        />
      </TouchableOpacity>
    </View>
  );
}
