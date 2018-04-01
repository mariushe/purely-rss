import extractImage from '../extractImage';

test('finding url in an img tag', () => {
    let content = '<img src="www.someaddr.com" alt="alt text">';
    expect(extractImage(content)).toBe('www.someaddr.com');
});