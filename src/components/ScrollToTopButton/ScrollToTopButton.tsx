import React, {FC, useEffect} from "react";
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
import withFadeAnimations from "../../HOCs/withFadeAnimations";

interface ScrollToTopButtonProps extends PressableProps {
	isVisible?: boolean;
}

const ScrollToTopButton: FC<ScrollToTopButtonProps> = withFadeAnimations(
	({style, isVisible, fadeValue, fadeIn, fadeOut, ...props}) => {
		const visibleIsPassed = isVisible !== undefined;

		useEffect(() => {
			// Start opacity animation on mount
			if (visibleIsPassed) {
				const animate = isVisible === true ? fadeIn : fadeOut;
				animate();
			}
		}, [fadeIn, fadeOut, fadeValue, isVisible, visibleIsPassed]);

		return (
			<Animated.View style={{opacity: visibleIsPassed ? fadeValue : 1}}>
				<Pressable
					style={[styles.button, style as StyleProp<ViewStyle>]}
					{...props}
				>
					<Icon size={24} name="arrow-up" color={Colors.Lighter} />
				</Pressable>
			</Animated.View>
		);
	}
);

export default ScrollToTopButton;
