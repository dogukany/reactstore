import { View, ActivityIndicator } from "react-native";
import styles from "./Loading.styles";
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};
export default Loading;
