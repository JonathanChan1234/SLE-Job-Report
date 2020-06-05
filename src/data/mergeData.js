export const mergeData = (oldData, newData) => {
    const mergeData = [];
    for (let i = 0; i < oldData.length; ++i) {
        mergeData.push({});
        mergeData[i].name = oldData[i][2];
        mergeData[i].orderDate = oldData[i][1];
    }
    for (let i = 0; i < newData.length; ++i) {
        mergeData.push({});
        mergeData[oldData.length + i].name = newData[i][1];
        mergeData[oldData.length + i].orderDate = newData[i][3];
    }
    return mergeData;
};
