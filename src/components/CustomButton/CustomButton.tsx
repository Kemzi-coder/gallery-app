import React, {FC, useEffect} from "react";
import {
	Animated,
	GestureResponderEvent,
	Pressable,
	PressableProps,
	ViewStyle
} from "react-native";
import CustomText from "../CustomText/CustomText";
import styles from "./CustomButton.styles";
import Colors from "../../utils/constants/colors";
import withFadeAnimations from "../../HOCs/withFadeAnimations";

interface CustomButtonProps extends PressableProps {
	text: string;
	isPressed?: boolean;
	onPressIn?: (e: GestureResponderEvent) => void;
	onPressOut?: (e: GestureResponderEvent) => void;
	style: ViewStyle;
}

const CustomButton: FC<CustomButtonProps> = withFadeAnimations(
	({text, isPressed, style, fadeOut, fadeIn, fadeValue, ...props}) => {
		const pressedIsPassed = isPressed !== undefined;

		useEffect(() => {
			if (isPressed === true && pressedIsPassed) {
				fadeIn();
			} else if (isPressed === false && pressedIsPassed) {
				fadeOut();
			}
		}, [fadeIn, fadeOut, isPressed, pressedIsPassed]);

		const backgroundColor = fadeValue.interpolate({
			inputRange: [0, 1],
			outputRange: [Colors.Primary, Colors.Accent]
		});

		const handlePressOut = (e: GestureResponderEvent) => {
			if (!pressedIsPassed) {
				// Activate fade out animation
				fadeOut();
			}

			if (props.onPressOut !== undefined) {
				props.onPressOut(e);
			}
		};

		const handlePressIn = (e: GestureResponderEvent) => {
			if (!pressedIsPassed) {
				// Activate fade in animation
				fadeIn();
			}

			if (props.onPressIn !== undefined) {
				props.onPressIn(e);
			}
		};

		return (
			<Animated.View style={[[{backgroundColor}], styles.button, style]}>
				<Pressable
					onPressOut={handlePressOut}
					onPressIn={handlePressIn}
					{...props}
				>
					<CustomText style={styles.text}>{text}</CustomText>
				</Pressable>
			</Animated.View>
		);
	}
);

export default CustomButton;
