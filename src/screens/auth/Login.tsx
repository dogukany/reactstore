import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import Button from "../../components/Button/Button";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/slices/userSlice";
import { MainNavigatorProp } from "../../util/types/navigationTypes";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainNavigatorProp>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(setUser({ username, password }));
    navigation.navigate("Main");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Ionicons name="logo-react" size={200} color="black" />
      <Text style={styles.field}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
      <Text style={styles.field}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <Button onPress={handleLogin} text="Login" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: "10%",
    paddingTop: 20,
  },
  field: {
    fontSize: 12,
    textAlign: "left",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Login;
