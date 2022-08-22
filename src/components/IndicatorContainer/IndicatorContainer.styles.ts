import {StyleSheet} from "react-native";
import Colors from "../../utils/constants/colors";

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		opacity: 0.4,
		backgroundColor: Colors.Primary,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default styles;
