//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort(sortBandNames);

function sortBandNames(name1, name2) {
	return (startsWithArticle(name1).localeCompare(startsWithArticle(name2)));
}
function startsWithArticle(string) {
	if(string.startsWith('A ')) {
		string = string.slice(2);
	}
	else if(string.startsWith('An ')) {
		string  = string.slice(3);
	}
	else if(string.startsWith('The ')) {
		string = string.slice(4);
	}
	return string;
}

const bandsList = document.querySelector('#bands');
bands.forEach((element)=> {
	const article = document.createElement("li");
	article.textContent = element;

	bandsList.appendChild(article);
})