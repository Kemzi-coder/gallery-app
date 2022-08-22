import photosReducer, {initialState} from "./index";
import {PhotosInitialState} from "./photos.types";
import Photo from "../../../types/entities/photo";
import {
	addPhotos,
	setIsFetching,
	setIsFetchingMore,
	setPage,
	setPhotos,
	setTotalCount
} from "./photos.actions";

describe("Photos reducer should work properly.", () => {
	it("Should return the initial state", () => {
		expect(photosReducer(undefined, {type: undefined, payload: 5})).toEqual(
			initialState
		);
	});

	it("Should set is fetching flag to true", () => {
		const previousState = {...initialState, isFetching: false};
		const payload = true;
		expect(photosReducer(previousState, setIsFetching(payload))).toEqual({
			...previousState,
			isFetching: payload
		});
	});

	it("Should set is fetching more flag to true", () => {
		const previousState = {...initialState, isFetchingMore: false};
		const payload = true;
		expect(photosReducer(previousState, setIsFetchingMore(payload))).toEqual({
			...previousState,
			isFetchingMore: payload
		});
	});

	it("Should set photos array", () => {
		const previousState: PhotosInitialState = {...initialState, photos: []};

		const payload: Photo[] = [
			{
				description: "",
				urls: {small: "", regular: ""},
				id: "",
				user: {name: "", profile_image: {medium: ""}}
			}
		];

		expect(photosReducer(previousState, setPhotos(payload))).toEqual({
			...previousState,
			photos: payload
		});
	});

	it("Should add photos to the photos array", () => {
		const previousState: PhotosInitialState = {
			...initialState,
			photos: [
				{
					description: "",
					urls: {small: "", regular: ""},
					id: "",
					user: {name: "", profile_image: {medium: ""}}
				}
			]
		};

		const payload: Photo[] = [
			{
				description: "Photo.",
				urls: {small: "", regular: ""},
				id: "4",
				user: {name: "Max", profile_image: {medium: ""}}
			}
		];

		expect(photosReducer(previousState, addPhotos(payload))).toEqual({
			...previousState,
			photos: [...previousState.photos, ...payload]
		});
	});

	it("Should set page number", () => {
		const previousState = {...initialState, page: 1};
		const payload = 2;

		expect(photosReducer(previousState, setPage(payload))).toEqual({
			...previousState,
			page: payload
		});
	});

	it("Should set total count number", () => {
		const previousState = {...initialState, totalCount: 0};
		const payload = 25;

		expect(photosReducer(previousState, setTotalCount(payload))).toEqual({
			...previousState,
			totalCount: payload
		});
	});
});
