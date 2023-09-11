function MakeMultiFilter(originalArray) {
    var currentArray = originalArray;

    function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria === 'function') {
            currentArray = currentArray.filter(filterCriteria);
        }
        if (typeof filterCriteria !== 'function'){
            return currentArray;
        }
        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }
        return arrayFilterer;
    }
    return arrayFilterer;
}







