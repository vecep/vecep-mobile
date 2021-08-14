import { StyleSheet } from "react-native";

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
  },

  description: {
    fontSize: 17,
  },

  list: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  listText: {
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 10,
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
