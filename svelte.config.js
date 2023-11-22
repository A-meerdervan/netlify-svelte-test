// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// die target:  stond er niet in de auto generated
		// versie van deze file, ik heb hem uit de 
		// tutorial video toegevoegd. Nu weer weg gehaald na error
		// en nu werkt het weer! Dus geen target: bla bla tegenwoordig.
		adapter: adapter()
	}
};

export default config;
