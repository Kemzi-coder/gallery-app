export type PhotosOrderBy = "latest" | "oldest" | "popular";

export interface GetPhotosParams {
	perPage: number;
	page: number;
	orderBy: PhotosOrderBy;
}
