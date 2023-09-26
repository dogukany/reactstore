import BottomSheet from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { View } from "react-native";
import MapView, { MapMarker, PROVIDER_GOOGLE } from "react-native-maps";
import InformationModal from "../../components/Map/InformationModal/InformationModal";
const Home = () => {
  const [clickedLocation, setClickedLocation] = useState(null);
  const modalBottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        onPress={(e) => {
          setClickedLocation({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
          modalBottomSheetRef.current?.snapToIndex(0);
        }}
      >
        {clickedLocation && (
          <MapMarker
            coordinate={{
              latitude: clickedLocation?.latitude,
              longitude: clickedLocation?.longitude,
            }}
          />
        )}
      </MapView>
      <InformationModal ref={modalBottomSheetRef} coords={clickedLocation} />
    </View>
  );
};
export default Home;
