const getHasMore = (page: number, totalCount: number, perPage: number) => {
	const totalPages = Math.ceil(totalCount / perPage);
	return page < totalPages;
};

export default getHasMore;
