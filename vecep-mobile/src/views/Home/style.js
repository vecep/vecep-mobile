import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  scrollView: {
    backgroundColor: "#081a31",
    flexDirection: "column",
  },

  title: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "#1B4469",
  },

  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 50,
    marginTop: 20,
    marginBottom: 40,
  },

  statistics: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#282727",
    paddingVertical: 70,
    paddingHorizontal: 10,
    textAlign: "center",
    width: "100%",
  },

  statisticsText: {
    color: "#E5E5E5",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default style;
