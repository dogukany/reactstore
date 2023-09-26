import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "#888",
  },
  deleteButton: {
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    fontSize: 18,
    color: "red",
  },
  details: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
