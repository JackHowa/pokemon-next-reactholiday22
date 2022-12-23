import Link from "next/link"

export default async function PokemonLayout({ children }) {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon')
	const data = await res.json()
	return (
		<div style={{
			display: 'grid',
			padding: '2rem',
			gridTemplateColumns: '10rem 1fr',
		}}>
			<aside>
				<ul>
					{
						data.results.map((pokemon) => (
							<li key={pokemon.name}><Link href={`/${pokemon.name}`}>{pokemon.name}</Link></li>
						))
					}
				</ul>
			</aside>
			{children}
		</div>
	)
};