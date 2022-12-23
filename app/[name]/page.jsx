import { notFound } from 'next/navigation';

// takes in the name property from the folder [name] and displays it on the page

async function fetchPokemonByName(name) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

	if (!res.ok) {
		return undefined;
	}
	
	const data = await res.json()
	return data
}

export default async function Name({ params }) {
	const pokemon = await fetchPokemonByName(params.name);

	if (!pokemon) {
		notFound();
	}

	return (
		<main>
			<h1>{pokemon.name}</h1>
			<p>Base Experience: {pokemon.base_experience}</p>
		</main>
	)
}