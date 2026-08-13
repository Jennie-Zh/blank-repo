function capitalise(str) {
	if (!str) return '';
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str, maxLength) {
	if (typeof str !== 'string') return '';
	if (str.length <= maxLength) return str;
	if (maxLength <= 3) return '.'.repeat(maxLength);
	return str.slice(0, maxLength - 3) + '...';
}

function camelCase(str) {
	return String(str)
		.toLowerCase()
		.split(/[^a-z0-9]+/i)
		.filter(Boolean)
		.map((word, idx) => (idx === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
		.join('');
}

function reverseString(str) {
	return String(str).split('').reverse().join('');
}

function isPalindrome(str) {
	const s = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
	return s === s.split('').reverse().join('');
}

console.log('capitalise:', capitalise('hello world'));
console.log('truncate:', truncate('This is a long string that needs to be truncated.', 20));
console.log('camelCase:', camelCase('hello world'));
console.log('reverseString:', reverseString('hello world'));
console.log('isPalindrome:', isPalindrome('racecar'));