const importContentOfCssFile = (url) => {
	return fetch(url)
		.then((fetchedData) => fetchedData.text())
		.then((text) => {
			return text;
		});
}

export { importContentOfCssFile };
