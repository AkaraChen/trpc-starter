export const createGreet = (name = 'world') => {
    return `Hello, ${[...name]
        .map((item, index) => index
            ? item
            : item.toUpperCase())
        .join('')}!`;
};
