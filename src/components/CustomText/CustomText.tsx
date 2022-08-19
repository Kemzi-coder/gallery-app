import React, {FC, memo} from "react";
import {Text, TextProps} from "react-native";
import styles from "./CustomText.styles";

const CustomText: FC<TextProps> = memo(({children, style, ...props}) => (
	<Text style={[styles.text, style]} {...props}>
		{children}
	</Text>
));

export default CustomText;
