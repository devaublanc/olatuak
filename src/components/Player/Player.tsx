import { useRoute } from '@react-navigation/native';
import {
  AVPlaybackStatus,
  ResizeMode,
  Video as ExpoVideo,
  VideoFullscreenUpdate,
  VideoFullscreenUpdateEvent,
} from 'expo-av';
import { useCallback, useRef, useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';

import { PlayerPlaceholder } from './PlayerPlaceholder';
import { SpotDetailScreenProps } from '../../screens/SpotDetailScreen';
import { getSpotById } from '../../utils/spot';

const screenWidth = Dimensions.get('window').width;
const videoWidth = screenWidth;
const videoHeight = (screenWidth * 214) / 380;

export function Player() {
  const video = useRef<ExpoVideo>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const {
    params: { spotId },
  } = useRoute<SpotDetailScreenProps['route']>();

  const onFullscreenUpdate = useCallback((event: VideoFullscreenUpdateEvent) => {
    if (event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_DID_DISMISS) {
      video.current?.playAsync();
    }
  }, []);

  const onPlayBackStatusUpdate = useCallback((event: AVPlaybackStatus) => {
    if (event.isLoaded) {
      setIsPlaying(event.isPlaying);
    }
  }, []);

  return (
    <>
      {!isPlaying && <PlayerPlaceholder width={videoWidth} height={videoHeight} />}

      <TouchableOpacity onPress={() => video.current?.presentFullscreenPlayer()}>
        <ExpoVideo
          ref={video}
          style={{
            width: videoWidth,
            height: videoHeight,
          }}
          source={{
            uri: getSpotById(spotId).metadata?.m3u8 as string,
          }}
          shouldPlay
          useNativeControls={false}
          resizeMode={ResizeMode.STRETCH}
          isLooping
          onFullscreenUpdate={onFullscreenUpdate}
          onPlaybackStatusUpdate={onPlayBackStatusUpdate}
        />
      </TouchableOpacity>
    </>
  );
}
