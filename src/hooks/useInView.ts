import {useRef, useState} from "react";
import {NativeScrollEvent, NativeSyntheticEvent} from "react-native";

const useInView = (threshold = 300) => {
	const ref = useRef(null);
	const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
	const isInView = contentVerticalOffset > threshold;

	const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		setContentVerticalOffset(event.nativeEvent.contentOffset.y);
	};

	return {ref, isInView, handleScroll};
};

export default useInView;
