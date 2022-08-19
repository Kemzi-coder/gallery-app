import React, {FC, memo, useCallback, useRef} from "react";
import {Animated} from "react-native";
import {AnimationDuration} from "../utils/constants/animations";

interface AnimationProps {
	fadeIn: () => void;
	fadeOut: () => void;
	fadeValue: Animated.Value;
}

const withFadeAnimations = <P,>(Component: FC<P & AnimationProps>) =>
	memo((props: P) => {
		const fadeValue = useRef(new Animated.Value(0)).current;

		const fadeIn = useCallback(() => {
			Animated.timing(fadeValue, {
				toValue: 1,
				duration: AnimationDuration,
				useNativeDriver: false
			}).start();
		}, [fadeValue]);

		const fadeOut = useCallback(() => {
			Animated.timing(fadeValue, {
				toValue: 0,
				duration: AnimationDuration,
				useNativeDriver: false
			}).start();
		}, [fadeValue]);

		return (
			<Component
				{...props}
				fadeIn={fadeIn}
				fadeOut={fadeOut}
				fadeValue={fadeValue}
			/>
		);
	});

export default withFadeAnimations;
