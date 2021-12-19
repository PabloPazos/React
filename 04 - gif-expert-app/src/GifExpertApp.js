import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {
	// No es conveniente agregar así elementos porque no sabría cuándo renderizar, salvo que
	// vayas a quedar estático.
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

	const [categories, setCategories] = useState(['One Punch']);

	// const handleApp = () => {
	// 	// setCategories([...categories, 'HunterXHunter']);
	// 	setCategories((cats) => [...cats, 'HunterXHunter']);
	// };

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category) => (
					// Si pasara i como parámetro, y fuese key={i} evitaría el error, pero está mal esa
					// práctica.
					// El key NO puede ser el índice, y DEBE ser único.
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
