import { FlatList, Text } from "react-native";
import { ProductCard } from "../../components";
import { useAppSelector } from "../../redux/hooks";
const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.user);
  const { products } = useAppSelector((state) => state.market);

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <FlatList
      data={favoriteProducts}
      ListEmptyComponent={() => <Text>No favorites</Text>}
      renderItem={({ item }) => <ProductCard showFavoriteButton item={item} />}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
export default Favorites;
