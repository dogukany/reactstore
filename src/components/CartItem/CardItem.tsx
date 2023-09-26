import { Image, Text, View } from "react-native";
import type { IProduct } from "../../util/types/sliceTypes";
import styles from "./CartItem.styles";

interface CartItemProps {
  item: IProduct;
}

const CartItem = ({ item }: CartItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.imageUrl,
        }}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
};

export default CartItem;
