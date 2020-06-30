module.exports = {
	testEnvironment: 'jsdom',
	roots: ['<rootDir>'],
	transform: {
		'\\.(js|jsx)?$': 'babel-jest'
	},
	testMatch: ['<rootDir>/components/**/__tests__/*.test.js?(x)'],
	setupFiles: ['<rootDir>/config/setupTests.js'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$': '<rootDir>/config/fileMock.js',
		'\\.(css|scss)$': 'identity-obj-proxy'
	},
	displayName: 'rcom-common-ui',
	setupFilesAfterEnv: [
		'@testing-library/jest-dom'
	]
};
