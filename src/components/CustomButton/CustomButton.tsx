import React, {FC} from "react";
import {Pressable, PressableProps, StyleProp, ViewStyle} from "react-native";
import CustomText from "../CustomText/CustomText";
import styles from "./CustomButton.styles";

interface CustomButtonProps extends PressableProps {
	text: string;
}

const CustomButton: FC<CustomButtonProps> = ({text, style, ...props}) => (
	<Pressable style={[styles.button, style as StyleProp<ViewStyle>]} {...props}>
		<CustomText style={styles.text}>{text}</CustomText>
	</Pressable>
);

export default CustomButton;
