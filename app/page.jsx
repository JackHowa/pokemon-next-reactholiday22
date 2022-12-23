export default async function Home() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
  const data = await res.json()

  return (
    <main style={{
			display: 'grid',
			padding: '2rem',
			gridTemplateColumns: '10rem 1fr',
		}}>
      <ul>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}><a href={pokemon.name}>{pokemon.name}</a></li>
        ))}
      </ul>
    </main>
  )
}
