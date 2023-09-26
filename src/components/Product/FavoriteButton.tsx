import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styles from "./FavoriteButton.styles";

interface FavoriteButtonProps {
  isFavorite: boolean;
  handleFavorite: () => void;
}

const FavoriteButton = ({
  isFavorite,
  handleFavorite,
}: FavoriteButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleFavorite}>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={30}
        color={isFavorite ? "red" : "black"}
      />
    </TouchableOpacity>
  );
};
export default FavoriteButton;
