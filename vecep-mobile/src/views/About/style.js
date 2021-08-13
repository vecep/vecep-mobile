import { StyleSheet, StatusBar } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    backgroundColor: "#081a31",
    flexDirection: "column",
  },

  background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  groupMember: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 50,
    marginTop: 20,
    marginBottom: 40,
  },

  title: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "#1B4469",
    textAlign: "center",
  },

  description: {
    textAlign: "center",
  },
});

export default style;
