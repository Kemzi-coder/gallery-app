import React, {FC, memo} from "react";
import {Image, Pressable, View, ViewProps} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./PhotoItem.styles";
import CustomText from "../CustomText/CustomText";
import ScreenNames from "../../utils/constants/screenNames";

interface PhotoItemProps extends ViewProps {
	id: string;
	photoPath: string;
	avatarPath: string;
	username: string;
	description: string;
}

const PhotoItem: FC<PhotoItemProps> = memo(
	({id, photoPath, avatarPath, username, description}) => {
		const navigation =
			useNavigation<
				NativeStackNavigationProp<{[ScreenNames.Photo]: {id: string}}>
			>();

		const handlePress = () => {
			navigation.navigate(ScreenNames.Photo, {id});
		};

		return (
			<Pressable onPress={handlePress} style={styles.item}>
				{({pressed}) => (
					<>
						<Image style={styles.photo} source={{uri: photoPath}} />
						<View style={styles.content}>
							<View style={styles.userInfo}>
								<Image style={styles.avatar} source={{uri: avatarPath}} />
								<CustomText numberOfLines={1} style={styles.username}>
									{username}
								</CustomText>
							</View>
							{description && (
								<CustomText numberOfLines={2} style={styles.description}>
									{description}
								</CustomText>
							)}
							<CustomButton disabled isPressed={pressed} text="See more" />
						</View>
					</>
				)}
			</Pressable>
		);
	}
);

export default PhotoItem;
