import React from 'react';
import './App.css';
import Post from  './Post'
function App() {
	return (
		<div className="App">
			<div class = 'app__header'>
				<h2>Instagram</h2>
			</div>
			<Post username='Samuel Bandeira' caption = 'Wow! React' imageUrl='https://material-ui.com/static/images/themes-light.jpg'/>
			<Post username ='Jame Bond' caption = 'First React! Impresive' imageUrl='https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8'/>
		</div>	
	);
}

export default App;
