export const paginate = (query, { page, perPage }) => {
    const offset = (page - 1) * perPage;
    const limit = perPage;

    return {
        ...query,
        offset,
        limit,
    };
}
