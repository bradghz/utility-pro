/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */

module.exports = {

	// START Editing Project Variables.
	// Project options.
	project: 'Utility Pro', // Project Name.
	projectURL: 'https://updev.test', // Local project URL of your already running WordPress site. Could be something like wpgulp.local or localhost:8888.
	productURL: './', // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
	browserAutoOpen: false,
	injectChanges: true,

	// Style options.
	styleSRC: './develop/scss/*.scss', // Path to main .scss file.
	styleDestination: './', // Path to place the compiled CSS file. Default set to root folder.
	outputStyle: 'expanded', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,

	// JS Vendor options.
	//jsVendorSRC: './develop/js/assets/js/vendor/*.js', // Path to JS vendor folder.
	//jsVendorDestination: './assets/js/', // Path to place the compiled JS vendors file.
	//jsVendorFile: 'vendors', // Compiled JS vendors file name. Default set to vendors i.e. vendors.js.

	// JS Custom options.
	jsCustomSRC: './develop/js/*.js', // Path to JS custom scripts folder.
	jsCustomDestination: './js/', // Path to place the compiled JS custom scripts file.
	//jsCustomFile: 'custom', // Compiled JS custom file name. Default set to custom i.e. custom.js.

	// Images options.
	// imagesSRC: './assets/img/raw/**.{png,jpg,gif,svg}', // Source folder of images which should be optimized.
	imgSRC: './develop/images/*', // Source folder of images which should be optimized and watched.
	imgDST: './images/', // Destination folder of optimized images. Must be different from the imagesSRC folder.

	// Watch files paths.
	styleWatchFiles: './develop/scss/**/*.scss', // Path to all *.scss files inside css folder and inside them.
	//vendorJSWatchFiles: './assets/js/vendor/*.js', // Path to all vendor JS files.
	customJSWatchFiles: './develop/js/*.js', // Path to all custom JS files.
	projectPHPWatchFiles: './**/*.php', // Path to all PHP files.

	// Translation options.
	textDomain: 'utility-pro', // Your textdomain here.
	translationFile: 'utility-pro.pot', // Name of the transalation file.
	translationDestination: './develop/languages', // Where to save the translation files.
	packageName: 'utility-pro', // Package name.
	bugReport: 'https://AhmadAwais.com/contact/', // Where can users report bugs.
	lastTranslator: 'Carrie Dils <carriedils@gmail.com>', // Last translator Email ID.
	//team: 'WPTie <your_email@email.com>', // Team's Email ID.

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	BROWSERS_LIST: [
		'last 2 version',
		'> 1%',
		'ie >= 9',
		'ie_mob >= 10',
		'ff >= 30',
		'chrome >= 34',
		'safari >= 7',
		'opera >= 23',
		'ios >= 7',
		'android >= 4',
		'bb >= 10'
	]

	// STOP Editing Project Variables.
};
