import {Action} from "../../../types/store";
import ActionTypes from "./photos.constants";
import Photo from "../../../types/entities/photo";

export type SetPhotos = Action<typeof ActionTypes.SET_PHOTOS, Photo[]>;

export type SetIsFetching = Action<typeof ActionTypes.SET_IS_FETCHING, boolean>;
