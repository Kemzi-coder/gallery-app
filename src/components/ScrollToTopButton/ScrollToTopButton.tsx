import React, {FC, useEffect, useRef} from "react";
import {
	Animated,
	Pressable,
	PressableProps,
	StyleProp,
	ViewStyle
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./ScrollToTopButton.styles";
import Colors from "../../utils/constants/colors";

const ScrollToTopButton: FC<PressableProps> = ({style, ...props}) => {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		// Start opacity animation on mount
		const startAnimation = () => {
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true
			}).start();
		};

		startAnimation();
	}, [fadeAnim]);

	return (
		<Animated.View style={{opacity: fadeAnim}}>
			<Pressable
				style={[styles.button, style as StyleProp<ViewStyle>]}
				{...props}
			>
				<Icon size={24} name="arrow-up" color={Colors.Lighter} />
			</Pressable>
		</Animated.View>
	);
};

export default ScrollToTopButton;
