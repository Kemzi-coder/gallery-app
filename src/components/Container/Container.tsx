import React, {FC, memo, ReactNode} from "react";
import {View} from "react-native";
import styles from "./Container.styles";

interface ContainerProps {
	children: ReactNode;
}

const Container: FC<ContainerProps> = memo(({children}) => (
	<View style={styles.container}>{children}</View>
));

export default Container;
