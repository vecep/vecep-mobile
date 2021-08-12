import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  border: {
    backgroundColor: "#081a31",
    width: "100%",
    height: "100%",
  },

  background: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  title: {
    marginTop: 70,
    fontSize: 25,
    fontWeight: "bold",
    color: "#1B4469",
  },

  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 50,
    height: "40%",
  },

  wave: {
    position: "absolute",
  },

  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    height: "40%",
    paddingBottom: 20,
    backgroundColor: "#282727",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
    backgroundColor: "#48A7FF",
  },

  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 21.5,
    marginRight: 7,
  },
});

export default style;
