import {StyleSheet} from "react-native";
import Colors from "../../utils/constants/colors";

const styles = StyleSheet.create({
	item: {
		width: "100%",
		shadowColor: "#000",
		shadowOpacity: 0.7,
		shadowOffset: {
			width: 10,
			height: 10
		},
		borderRadius: 16,
		elevation: 4,
		overflow: "hidden"
	},
	userInfo: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 16
	},
	content: {
		padding: 16,
		backgroundColor: Colors.White,
		alignItems: "flex-start"
	},
	description: {
		color: Colors.Light,
		marginBottom: 16
	},
	username: {
		color: Colors.Primary,
		fontSize: 16
	},
	photo: {
		width: "100%",
		height: 200,
		resizeMode: "cover"
	},
	avatar: {
		width: 36,
		height: 36,
		borderRadius: 36 / 2,
		marginRight: 16,
		borderWidth: 1,
		borderColor: Colors.Light
	}
});

export default styles;
