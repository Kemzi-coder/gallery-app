import React, {FC, ReactNode} from "react";
import {Modal, ModalProps, View} from "react-native";
import styles from "./CustomModal.styles";
import CustomButton from "../CustomButton/CustomButton";

interface CustomModalProps extends ModalProps {
	isVisible: boolean;
	onClose: () => void;
	children: ReactNode;
}

const CustomModal: FC<CustomModalProps> = ({
	onClose,
	isVisible,
	children,
	...props
}) => (
	<Modal
		animationType="fade"
		transparent
		visible={isVisible}
		onRequestClose={onClose}
		{...props}
	>
		<View style={styles.container}>
			<View style={styles.modal}>
				{children}
				<CustomButton style={styles.button} onPress={onClose} text="Close" />
			</View>
		</View>
	</Modal>
);

export default CustomModal;
