import { Image, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToCart,
  addToFavorites,
  removeFromCart,
  removeFromFavorites,
} from "../../redux/slices/userSlice";
import { IProduct } from "../../util/types/sliceTypes";
import Button from "../Button/Button";
import FavoriteButton from "./FavoriteButton";
import styles from "./ProductCard.styles";

interface ProductCardProps {
  item: IProduct;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const { cart, favorites } = useAppSelector((state) => state.user);

  const isFavorite = favorites.includes(item.id);
  const isInCart = cart.includes(item.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item.id));
    } else {
      dispatch(addToFavorites(item.id));
    }
  };

  const handleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(addToCart(item.id));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.imageUrl,
        }}
      />
      <FavoriteButton isFavorite={isFavorite} handleFavorite={handleFavorite} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Button
          text={isInCart ? "Remove from cart" : "Add to cart"}
          onPress={handleCart}
        />
      </View>
    </View>
  );
};
export default ProductCard;
