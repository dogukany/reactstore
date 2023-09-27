import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 100,
    resizeMode: "cover",
  },
  details: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "column",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  favoriteButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  price: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
