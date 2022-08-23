import React, {useEffect, useState} from "react";
import useAppSelector from "../../hooks/useAppSelector.hook";
import {getPhotosHasError} from "../../store/reducers/photos/photos.selectors";
import CustomText from "../CustomText/CustomText";
import CustomModal from "../CustomModal/CustomModal";
import {getPhotoHasError} from "../../store/reducers/photo/photo.selectors";

const ErrorModal = () => {
	const photosError = useAppSelector(getPhotosHasError);
	const photoError = useAppSelector(getPhotoHasError);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(photosError || photoError);
	}, [photoError, photosError]);

	const handleClose = () => {
		setIsVisible(false);
	};

	return (
		<CustomModal isVisible={isVisible} onClose={handleClose}>
			<CustomText>Something went wrong.</CustomText>
		</CustomModal>
	);
};

export default ErrorModal;
