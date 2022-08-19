import React, {FC, memo} from "react";
import {View} from "react-native";
import styles from "./PhotosListEmpty.styles";
import CustomText from "../../../components/CustomText/CustomText";
import CustomButton from "../../../components/CustomButton/CustomButton";

interface PhotosListEmptyProps {
	onRefresh: () => void;
}

const PhotosListEmpty: FC<PhotosListEmptyProps> = memo(({onRefresh}) => (
	<View style={styles.emptyContainer}>
		<CustomText style={styles.emptyText}>No photos at the moment</CustomText>
		<CustomButton onPress={onRefresh} text="Refresh" />
	</View>
));

export default PhotosListEmpty;
