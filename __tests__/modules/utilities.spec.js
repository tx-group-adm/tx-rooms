const { slugify } = require('../../modules/utilities');

describe('slugify', () => {
    test('should slugify strings with special characters', () => {
        const fixture = 'foo::::::+&bar'
        const expected = 'foobar';
        const actual = slugify(fixture);
        expect(actual).toEqual(expected);
    });     
    
    test('should return lowercase', () => {
        const fixture = 'FOO BAR'
        const expected = 'foobar';
        const actual = slugify(fixture);
        expect(actual).toEqual(expected);
    });   
    
    test('should normalize whitespace', () => {
        const fixture = 'F  O      O B   A   R'
        const expected = 'foobar';
        const actual = slugify(fixture);
        expect(actual).toEqual(expected);
    });     
    
    test('should remove anything that isnt a letter or a number', () => {
        const fixture = '!@#$%^--&*()_+FOO`BAR<>?,./:;"{[}]|\\1234567890'
        const expected = 'foobar1234567890';
        const actual = slugify(fixture);
        expect(actual).toEqual(expected);
    });   
    
    test('should expect a string', () => 
        expect(() => {
            slugify()
        }).toThrow('slugify expects a string, got undefined')
    ); 
    
    test('should allow special alpha chars', () => {
        const fixture = 'ä';
        const expected = 'ä';
        const actual = slugify(fixture);
        expect(actual).toEqual(expected);
    });   
})