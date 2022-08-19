const getHasMore = (
	page: number,
	totalCount: number,
	perPage: number
): boolean => {
	const totalPages = Math.ceil(totalCount / perPage);
	return page < totalPages;
};

export default getHasMore;
