import BottomSheet from "@gorhom/bottom-sheet";
import { Ref, forwardRef, useMemo } from "react";
import { Text, View } from "react-native";
import styles from "./InformationModal.styles";

interface InformationModalProps {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const InformationModal = forwardRef(
  (props: InformationModalProps, ref: Ref<BottomSheet>) => {
    const snapPoints = useMemo(() => ["25%"], []);

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View style={styles.container}>
          <Text style={styles.latlon}>Latitude: {props.coords?.latitude}</Text>
          <Text style={styles.latlon}>
            Longitude: {props.coords?.longitude}
          </Text>
        </View>
      </BottomSheet>
    );
  }
);

export default InformationModal;
