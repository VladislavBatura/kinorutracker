(() => {
	let kinopoiskUrl = window.location.origin.match('kinopoisk.ru');
    if(!kinopoiskUrl || kinopoiskUrl.lenght < 1){
    	return;
    }
    
    const titleHeader = document.querySelector('h1[itemprop="name"]');
    if(!titleHeader || titleHeader.lenght < 1){
    	return;
    }
    
    const movieName = titleHeader.childNodes[0]?.innerHTML;
	const originalMovieName = document.querySelector('span[class*=originalTitle]').innerHTML;
    if((!movieName || movieName.lenght < 1) || (!originalMovieName || originalMovieName.lenght < 1)){
    	return;
    }
    
    const buttonElem = document.createElement('button');
    buttonElem.style.cssText = "border: medium; padding: 0px; cursor: pointer;background: white;height: 4rem;margin: 1rem 1rem;";
    buttonElem.title = "Search on RuTracker";
    buttonElem.innerHTML = '<img src="https://i.imgur.com/wOjpyEc.png" alt="RuTracker" style="width: 64px; height: 32px; object-fit: contain; background: linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%); padding: 5px; border-radius: 10px; transition: transform 0.3s ease-in-out; transform: scale(1);">';
    buttonElem.onclick = () => {window.location.href = 'https://rutracker.org/forum/tracker.php?nm=' + (movieName + ' %2F ' + originalMovieName)};
    titleHeader.parentNode.prepend(buttonElem);
})()