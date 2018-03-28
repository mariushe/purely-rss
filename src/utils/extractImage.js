const FIRST_IMG_REGEX = /<img src="(.*)" alt/i;

export default (content) => {
    const match = content.match(FIRST_IMG_REGEX);
    return match ? match[1] : undefined;
}