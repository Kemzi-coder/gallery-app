import React, {useCallback, useEffect} from "react";
import {ActivityIndicator, FlatList, View} from "react-native";
import PhotosService from "../../../services/photos.service";
import useAppDispatch from "../../../hooks/useAppDispatch.hook";
import useAppSelector from "../../../hooks/useAppSelector.hook";
import {
	getIsMorePhotosFetching,
	getIsPhotosFetching,
	getPhotos,
	getPhotosOrderBy,
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
import useIsInView from "../../../hooks/useIsInView";

const PhotosScreen = () => {
	const dispatch = useAppDispatch();

	// Display scroll to top button when the threshold value is reached
	const {ref, isInView, handleScroll} = useIsInView();

	// Selectors
	const photos = useAppSelector(getPhotos);
	const isFetching = useAppSelector(getIsPhotosFetching);
	const isFetchingMore = useAppSelector(getIsMorePhotosFetching);
	const page = useAppSelector(getPhotosPage);
	const perPage = useAppSelector(getPhotosPerPage);
	const orderBy = useAppSelector(getPhotosOrderBy);
	const totalCount = useAppSelector(getPhotosTotalCount);
	const hasMore = getHasMore(page, totalCount, perPage);

	const handleRefresh = useCallback(
		() => dispatch(PhotosService.refresh({page: 1, perPage, orderBy})),
		[dispatch, orderBy, perPage]
	);

	const handleFetchMore = () => {
		if (hasMore && !isFetchingMore) {
			dispatch(setPage(page + 1));
		}
	};

	useEffect(() => {
		// Fetch photos on mount and on page value change
		dispatch(PhotosService.fetchAll({page, perPage, orderBy}));
	}, [dispatch, orderBy, page, perPage]);

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
			hasMore={hasMore}
			photosLength={photos.length}
			isFetchingMore={isFetchingMore}
		/>
	);

	const renderEmpty = () => <PhotosListEmpty onRefresh={handleRefresh} />;

	const renderSeparator = () => <View style={styles.separatorContainer} />;

	const renderHeader = () => <View style={styles.headerContainer} />;

	// Scroll to the top of the list
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
						ListHeaderComponent={renderHeader}
						ListFooterComponent={renderFooter}
						renderItem={renderItem}
						onScroll={handleScroll}
						onRefresh={handleRefresh}
						refreshing={isFetching}
						onEndReached={handleFetchMore}
						onEndReachedThreshold={0.2}
					/>
					<ScrollToTopButton isVisible={isInView} onPress={handlePress} />
				</>
			)}
		</Container>
	);
};

export default PhotosScreen;
