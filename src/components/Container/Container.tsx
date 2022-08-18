import React, {FC, ReactNode} from "react";
import {View} from "react-native";
import styles from "./Container.styles";

interface ContainerProps {
	children: ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => (
	<View style={styles.container}>{children}</View>
);

export default Container;
