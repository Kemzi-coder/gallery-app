import React, {FC, useState} from "react";
import {
	ActivityIndicator,
	Image,
	ImageProps,
	StyleProp,
	View,
	ViewStyle
} from "react-native";
import IndicatorContainer from "../IndicatorContainer/IndicatorContainer";
import styles from "./CustomImage.styles";

interface CustomImageProps extends ImageProps {
	imageContainerStyle?: StyleProp<ViewStyle>;
}

const CustomImage: FC<CustomImageProps> = ({
	source,
	imageContainerStyle,
	...props
}) => {
	const [src, setSrc] = useState(source);
	const [isLoading, setIsLoading] = useState(false);

	const handleError = () => setSrc(require("../../assets/images/fallback.png"));

	const handleLoadStart = () => setIsLoading(true);

	const handleLoadEnd = () => setIsLoading(false);

	return (
		<View style={[styles.container, imageContainerStyle]}>
			<Image
				onLoadStart={handleLoadStart}
				onLoadEnd={handleLoadEnd}
				onError={handleError}
				source={src}
				{...props}
			/>
			{isLoading && (
				<IndicatorContainer>
					<ActivityIndicator />
				</IndicatorContainer>
			)}
		</View>
	);
};

export default CustomImage;
