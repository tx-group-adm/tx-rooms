/**
 * Get the slugified version of the string.
 * 
 * @note this is how we will match the user-provided input, which 
 * can be filled with a mix of upper/lower-case, special characters, spaces. etc.
 * 
 * @param {String} srcString 
 * @returns {String}
 */
const slugify = srcString => {
    if (typeof srcString !== 'string') {
        throw new TypeError(`slugify expects a string, got ${typeof srcString}`);
    }

    return srcString
    .trim()
    .toLowerCase()
    // Remove all characters expect letters and numbers
    .replace(/[^0-9a-zA-Zäü]+/gm, '')
    // remove all whitespace
    .replace(/\s+/g, '');
}

module.exports = {
    slugify
}