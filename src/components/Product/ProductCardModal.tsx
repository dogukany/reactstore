import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { Image, Text, View } from "react-native";

import { Ref, forwardRef, useCallback, useMemo } from "react";
import type { IProduct } from "../../util/types/sliceTypes";
import styles from "./ProductCardModal.styles";

interface ProductCardModalProps {
  item: IProduct;
}

const ProductCardModal = forwardRef(
  (props: ProductCardModalProps, ref: Ref<BottomSheetModal>) => {
    const snapPoints = useMemo(() => ["50%"], []);
    const renderBackdrop = useCallback(
      (props) => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.4}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: props.item.imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{props.item.name}</Text>
          <Text style={styles.description}>{props.item.description}</Text>
        </View>
      </BottomSheetModal>
    );
  }
);

export default ProductCardModal;
