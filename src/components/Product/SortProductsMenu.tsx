import { useAppDispatch } from "../../redux/hooks";
import { useState } from "react";
import { Menu } from "react-native-paper";
import { sortProductsByPrice } from "../../redux/slices/marketSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SortProductsMenu = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const dispatch = useAppDispatch();

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      contentStyle={{ backgroundColor: "white" }}
      anchor={
        <MaterialCommunityIcons
          name="sort"
          size={24}
          color="black"
          onPress={openMenu}
        />
      }
    >
      <Menu.Item
        onPress={() => dispatch(sortProductsByPrice("asc"))}
        title="Price: Low to High"
      />
      <Menu.Item
        onPress={() => dispatch(sortProductsByPrice("desc"))}
        title="Price: High to Low"
      />
    </Menu>
  );
};
export default SortProductsMenu;
