import { FlatList, StyleSheet, Text, View } from "react-native";
import { ProductCard } from "../../components";
import Button from "../../components/Button/Button";
import { useAppSelector } from "../../redux/hooks";
const Cart = () => {
  const { cart } = useAppSelector((state) => state.user);
  const { products } = useAppSelector((state) => state.marketplace);

  const cartProducts = products.filter((product) => cart.includes(product.id));

  const totalPrice = cartProducts.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartProducts}
        renderItem={({ item }) => <ProductCard showCartButton item={item} />}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={() => <Text>Cart is empty</Text>}
      />

      <View style={styles.checkoutContainer}>
        <Text style={styles.checkoutText}>Total: {totalPrice}</Text>
        <Button text="Checkout" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkoutContainer: {
    flex: 0,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
  },
  checkoutText: {
    textAlign: "center",
    fontSize: 15,
    paddingVertical: 10,
  },
});
export default Cart;
