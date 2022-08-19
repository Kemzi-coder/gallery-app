import React, {FC, memo} from "react";
import {ActivityIndicator, View} from "react-native";
import styles from "./PhotosListFooter.styles";
import CustomText from "../../../components/CustomText/CustomText";

interface PhotosListFooterProps {
	isFetchingMore: boolean;
	photosLength: number;
	hasMore: boolean;
}

const PhotosListFooter: FC<PhotosListFooterProps> = memo(
	({photosLength, hasMore, isFetchingMore}) => (
		<View style={styles.footerContainer}>
			{isFetchingMore && <ActivityIndicator />}
			{!hasMore && photosLength !== 0 && (
				<CustomText>No more photos at the moment</CustomText>
			)}
		</View>
	)
);

export default PhotosListFooter;
