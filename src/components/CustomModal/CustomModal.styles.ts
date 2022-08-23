import {StyleSheet} from "react-native";
import Colors from "../../utils/constants/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	modal: {
		backgroundColor: Colors.White,
		padding: 32,
		shadowColor: "#000",
		shadowOpacity: 0.7,
		shadowOffset: {
			width: 10,
			height: 10
		},
		elevation: 4,
		borderRadius: 16,
		alignItems: "flex-start"
	},
	button: {
		marginTop: 16
	}
});

export default styles;
