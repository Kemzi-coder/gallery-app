import photoReducer, {initialState} from "./index";
import Photo from "../../../types/entities/photo";
import {setIsFetching, setPhoto} from "./photo.actions";

describe("Photo reducer should work properly.", () => {
	it("Should return the initial state", () => {
		expect(photoReducer(undefined, {type: undefined, payload: false})).toEqual(
			initialState
		);
	});

	it("Should set is fetching flag to true", () => {
		const previousState = {...initialState, isFetching: false};
		const payload = true;
		expect(photoReducer(previousState, setIsFetching(payload))).toEqual({
			...previousState,
			isFetching: payload
		});
	});

	it("Should set photo object", () => {
		const previousState = initialState;
		const photo: Photo = {
			description: "My name is Max.",
			urls: {small: "", regular: ""},
			user: {name: "Max", profile_image: {medium: ""}},
			id: ""
		};
		expect(photoReducer(previousState, setPhoto(photo))).toEqual({
			...previousState,
			photo
		});
	});
});
