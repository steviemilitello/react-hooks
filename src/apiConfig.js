let apiUrl
const apiUrls = {
	production: 'https://library-express-api.herokuapp.com',
	development: 'https://library-express-api.herokuapp.com',
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

export default apiUrl
