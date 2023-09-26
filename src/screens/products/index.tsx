import { useEffect } from "react";
import { FlatList } from "react-native";
import { Loading, ProductCard } from "../../components";
import { fetchProducts } from "../../redux/actions/marketActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Products = () => {
  const dispatch = useAppDispatch();

  const { products, status } = useAppSelector((state) => state.market);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <FlatList
      style={{ flex: 1 }}
      initialNumToRender={15}
      maxToRenderPerBatch={15}
      windowSize={15}
      ListFooterComponent={status === "loading" && <Loading />}
      data={products}
      renderItem={({ item }) => (
        <ProductCard
          showCartButton
          showFavoriteButton
          shouldShowDescription
          item={item}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      onEndReached={() => dispatch(fetchProducts())}
    />
  );
};

export default Products;
