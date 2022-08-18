import {applyMiddleware, legacy_createStore as createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import rootReducer from "./reducers";
import {PhotosAction} from "./reducers/photos/photos.types";

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch &
	ThunkDispatch<RootState, any, PhotosAction>;
export type RootState = ReturnType<typeof store.getState>;

export default store;
