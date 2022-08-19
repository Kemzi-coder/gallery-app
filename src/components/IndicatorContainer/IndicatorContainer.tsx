import React, {FC, memo} from "react";
import {View, ViewProps} from "react-native";
import styles from "./IndicatorContainer.styles";

const IndicatorContainer: FC<ViewProps> = memo(
	({style, children, ...props}) => (
		<View style={[styles.container, style]} {...props}>
			{children}
		</View>
	)
);

export default IndicatorContainer;
