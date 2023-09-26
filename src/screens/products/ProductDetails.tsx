import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";
import type { ProductsStackParamList } from "../../navigation/ProductsStackNavigator";

type Props = NativeStackScreenProps<ProductsStackParamList, "ProductDetails">;
const ProductDetails = ({ route }: Props) => {
  const product = route.params.product;

  console.log(product.imageUrl);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.details}>{product.description}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.shipping}>{product.shippingMethod}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  details: {
    fontSize: 16,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  shipping: {
    fontSize: 16,
    marginVertical: 10,
  },
});
export default ProductDetails;
