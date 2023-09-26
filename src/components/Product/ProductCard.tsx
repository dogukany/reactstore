import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToCart,
  addToFavorites,
  removeFromCart,
  removeFromFavorites,
} from "../../redux/slices/userSlice";
import type { IProduct } from "../../util/types/sliceTypes";
import Button from "../Button/Button";
import FavoriteButton from "./FavoriteButton";
import styles from "./ProductCard.styles";
import ProductCardModal from "./ProductCardModal";

interface ProductCardProps {
  item: IProduct;
  showFavoriteButton?: boolean;
  showCartButton?: boolean;
  shouldShowDescription?: boolean;
}

const ProductCard = ({
  item,
  showCartButton,
  showFavoriteButton,
  shouldShowDescription,
}: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

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

  const showDescription = () => {
    if (shouldShowDescription) bottomSheetModalRef.current?.present();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={showDescription}>
      <ProductCardModal item={item} ref={bottomSheetModalRef} />
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
