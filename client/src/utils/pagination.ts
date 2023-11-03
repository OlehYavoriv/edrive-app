export const itemsPerPage = 10;

export const calculateIndexes = (currentPage: number, itemsPerPage: number) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return { indexOfLastItem, indexOfFirstItem };
};
