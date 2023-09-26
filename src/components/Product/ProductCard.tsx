import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ProductsStackParamList } from "../../navigation/ProductsStackNavigator";
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
  showFavoriteButton?: boolean;
  showCartButton?: boolean;
  shouldNavigateToProductDetails?: boolean;
}

type Props = NativeStackNavigationProp<
  ProductsStackParamList,
  "ProductDetails"
>;

const ProductCard = ({
  item,
  showCartButton,
  showFavoriteButton,
  shouldNavigateToProductDetails,
}: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<Props>();
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

  const navigateToProductDetails = () => {
    if (shouldNavigateToProductDetails) {
      navigation.navigate("ProductDetails", { product: item });
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateToProductDetails}
    >
      <Image
        style={styles.image}
        source={{
          uri: item.imageUrl,
        }}
      />
      {showFavoriteButton && (
        <FavoriteButton
          isFavorite={isFavorite}
          handleFavorite={handleFavorite}
        />
      )}
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        {showCartButton && (
          <Button
            text={isInCart ? "Remove from cart" : "Add to cart"}
            onPress={handleCart}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
export default ProductCard;
