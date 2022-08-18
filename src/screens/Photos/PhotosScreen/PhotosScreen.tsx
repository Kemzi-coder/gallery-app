import React, {useCallback, useEffect} from "react";
import {ActivityIndicator, FlatList, View} from "react-native";
import PhotosService from "../../../services/photos.service";
import useAppDispatch from "../../../hooks/useAppDispatch.hook";
import useAppSelector from "../../../hooks/useAppSelector.hook";
import {
	getIsMorePhotosFetching,
	getIsPhotosFetching,
	getPhotos,
	getPhotosPage,
	getPhotosPerPage,
	getPhotosTotalCount
} from "../../../store/reducers/photos/photos.selectors";
import PhotoItem from "../../../components/PhotoItem/PhotoItem";
import Container from "../../../components/Container/Container";
import {setPage} from "../../../store/reducers/photos/photos.actions";
import getHasMore from "../../../utils/helpers/getHasMore";
import Photo from "../../../types/entities/photo";
import styles from "./PhotosScreen.styles";
import ScrollToTopButton from "../../../components/ScrollToTopButton/ScrollToTopButton";
import PhotosListEmpty from "../PhotosListEmpty/PhotosListEmpty";
import PhotosListFooter from "../PhotosListFooter/PhotosListFooter";
import useInView from "../../../hooks/useInView";

const PhotosScreen = () => {
	const dispatch = useAppDispatch();

	// Display scroll to top button when the threshold value is reached
	const {ref, isInView, handleScroll} = useInView();

	// Selectors
	const photos = useAppSelector(getPhotos);
	const isFetching = useAppSelector(getIsPhotosFetching);
	const isFetchingMore = useAppSelector(getIsMorePhotosFetching);
	const page = useAppSelector(getPhotosPage);
	const perPage = useAppSelector(getPhotosPerPage);
	const totalCount = useAppSelector(getPhotosTotalCount);
	const hasMore = getHasMore(page, totalCount, perPage);

	const handleFetch = useCallback(
		() => dispatch(PhotosService.fetchAll({page, perPage})),
		[dispatch, page, perPage]
	);

	const handleFetchMore = useCallback(() => {
		/* 
			If there are more photos
			and photos is not fetching - fetch more photos
		*/
		if (hasMore && !isFetchingMore) {
			dispatch(setPage(page + 1));
		}
	}, [dispatch, hasMore, isFetchingMore, page]);

	useEffect(() => {
		// Fetch photos on mount and on page value change
		handleFetch();
	}, [handleFetch]);

	const renderItem = ({item}: {item: Photo}) => (
		<View style={styles.itemContainer}>
			<PhotoItem
				id={item.id}
				photoPath={item.urls.small}
				avatarPath={item.user.profile_image.medium}
				description={item.description}
				username={item.user.name}
			/>
		</View>
	);

	const renderFooter = () => (
		<PhotosListFooter
			isFetchingMore={isFetchingMore}
			photosLength={photos.length}
			hasMore={hasMore}
		/>
	);

	const renderEmpty = () => <PhotosListEmpty onRefresh={handleFetch} />;

	const renderSeparator = () => <View style={styles.separatorContainer} />;

	const renderHeader = () => <View style={styles.headerContainer} />;

	// Handle scroll to top button press
	const handlePress = () =>
		ref.current.scrollToOffset({offset: 0, animated: true});

	return (
		<Container>
			{isFetching ? (
				<View style={styles.indicatorContainer}>
					<ActivityIndicator size="large" />
				</View>
			) : (
				<>
					<FlatList
						ref={ref}
						data={photos}
						ListEmptyComponent={renderEmpty}
						ItemSeparatorComponent={renderSeparator}
						ListFooterComponent={renderFooter}
						ListHeaderComponent={renderHeader}
						onEndReached={handleFetchMore}
						onEndReachedThreshold={0.2}
						renderItem={renderItem}
						onScroll={handleScroll}
					/>
					{isInView && <ScrollToTopButton onPress={handlePress} />}
				</>
			)}
		</Container>
	);
};

export default PhotosScreen;
