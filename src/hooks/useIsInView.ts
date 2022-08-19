import {
	MutableRefObject,
	useCallback,
	useEffect,
	useRef,
	useState
} from "react";
import {NativeScrollEvent, NativeSyntheticEvent} from "react-native";

interface UseIsInViewReturn {
	ref: MutableRefObject<any>;
	isInView: boolean;
	handleScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const useIsInView = (threshold = 300): UseIsInViewReturn => {
	const ref = useRef(null);
	const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
	const isInView = contentVerticalOffset > threshold;

	useEffect(() => () => setContentVerticalOffset(0), []);

	const handleScroll = useCallback(
		(e: NativeSyntheticEvent<NativeScrollEvent>) => {
			setContentVerticalOffset(e.nativeEvent.contentOffset.y);
		},
		[]
	);

	return {ref, isInView, handleScroll};
};

export default useIsInView;
