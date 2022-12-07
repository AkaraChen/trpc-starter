export const createGreet = (name = 'world') => {
    return [...name]
        .map((item, index) => index
            ? item
            : item.toUpperCase())
        .join('');
};
