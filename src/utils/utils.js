export const getTodayDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDay()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const compareRecordDate = (dateInSlash, dateInHyphen) => {
    try {
        const date = new Date(dateInSlash);
        date.setHours(0, 0, 0, 0);
        const compared_date = new Date(dateInHyphen);
        compared_date.setHours(0, 0, 0, 0);
        return date.getTime() === compared_date.getTime();
    } catch (error) {
        throw error;
    }
};
