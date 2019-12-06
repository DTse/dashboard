/**
   * Sort numbers.
   * @param {number} a
   * @param {number} b
   * @param {string} field
   * @return {number} a
**/ 
const sortNumbers = (field, orderBy) => (a, b) => {
    if(orderBy === 'desc'){
        return b[field] - a[field];
    }
    return a[field] - b[field];
};

export { sortNumbers }