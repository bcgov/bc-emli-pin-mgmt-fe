/**
 * Adds a 'data-test' attribute only when in test or dev enviorment
 * @example
 * <h1 {...testAttr(name)} />
 *
 * @param {string} val
 *
 * @returns <h1 data-test='name' />
 */
export const testAttr = (val) => {
	return process.env.NODE_ENV === 'production' ? {} : { 'data-testid': val }
}

/**
 * Used to find an element(s) by it class name for testing
 *
 * @param {*} container
 * @param {string} className
 *
 * @returns An array of the elements found by their class names.
 */
export const getByClass = (container, className) => {
	return container.getElementsByClassName(className)
}
