let timeout = null;

export const changeValue = (next) => {
    if (timeout !== null) clearTimeout(timeout);

    timeout = setTimeout(() => next(), 500);
};

export function removeSpecialCharacters(input) {
    const regex = /\D/g;

    return input.replace(regex, '');
}
