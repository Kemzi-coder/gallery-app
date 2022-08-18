import React, {useEffect} from "react";
import {RouteProp} from "@react-navigation/native";
import {ActivityIndicator, Image} from "react-native";
import PhotosService from "../../../services/photos.service";
import Container from "../../../components/Container/Container";
import useAppSelector from "../../../hooks/useAppSelector.hook";
import {
	getIsPhotoFetching,
	getPhotoUrl
} from "../../../store/reducers/photo/photo.selectors";
import useAppDispatch from "../../../hooks/useAppDispatch.hook";
import styles from "./PhotoScreen.styles";
import IndicatorContainer from "../../../components/IndicatorContainer/IndicatorContainer";

const PhotoScreen = ({route}: {route: RouteProp<{params: {id: string}}>}) => {
	const dispatch = useAppDispatch();
	const {id} = route.params;

	// Selectors
	const photoUrl = useAppSelector(getPhotoUrl);
	const isFetching = useAppSelector(getIsPhotoFetching);

	useEffect(() => {
		dispatch(PhotosService.fetchOneById(id));
	}, [dispatch, id]);

	return (
		<Container>
			{isFetching ? (
				<IndicatorContainer>
					<ActivityIndicator size="large" />
				</IndicatorContainer>
			) : (
				<Image source={{uri: photoUrl}} style={styles.photo} />
			)}
		</Container>
	);
};

export default PhotoScreen;
