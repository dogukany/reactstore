import BottomSheet from "@gorhom/bottom-sheet";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useRef } from "react";
import { View } from "react-native";
import MapView, { MapMarker, PROVIDER_GOOGLE } from "react-native-maps";
import InformationModal from "../../components/Map/InformationModal/InformationModal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLocation } from "../../redux/slices/mapSlice";
const Home = () => {
  const dispatch = useAppDispatch();
  const { location } = useAppSelector((state) => state.map);

  const modalBottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View style={{ flex: 1 }}>
      <ExpoStatusBar translucent />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        onPress={(e) => {
          dispatch(setLocation(e.nativeEvent.coordinate));
          modalBottomSheetRef.current?.snapToIndex(0);
        }}
      >
        {location && (
          <MapMarker
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
          />
        )}
      </MapView>
      <InformationModal ref={modalBottomSheetRef} coords={location} />
    </View>
  );
};
export default Home;
