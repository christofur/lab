export const fetchRandomData = () => {
    return {
        type: 'FETCH_RANDOM_DATA',
    }
};

export const adjustColourValues = (elem) => {
    return {
        type: 'ADJUST_COLOUR_VALUES',
        elem
    }
}