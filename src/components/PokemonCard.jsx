import { useQuery } from '@tanstack/react-query';
import { PropTypes } from 'prop-types';
import { getPokemon } from '../api/queries/getPokemon';
import Badge from './Badge';

export default function PokemonCard({ pokemonName }) {
  const { data: pokemon } = useQuery({
    queryFn: () => getPokemon(pokemonName),
    queryKey: ['pokemon', pokemonName],
  });

  return (
    pokemon && (
      <article className='flex flex-col border border-slate-200 hover:shadow-lg transition-all ease-in-out duration-300 hover:shadow-slate-800 rounded-md p-5 max-w-xs h-full justify-end'>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className='w-full h-full object-cover'
        />

        <div className='flex justify-between items-center'>
          <h3 className='text-3xl font-bold capitalize'>{pokemon.name}</h3>
          <p className='text-xl font-light'>Pokédex: {pokemon.id}</p>
        </div>

        <div className='flex gap-2 mt-3'>
          {pokemon.types.map((type, index) => {
            return (
              <Badge
                key={index}
                type={type.type.name}
              />
            );
          })}
        </div>
        <div className='flex gap-2 mt-3'>
          <p>
            <span className='text-lg'>Base XP:</span>{' '}
            <span className='font-light text-lg'>
              {pokemon.base_experience}
            </span>
          </p>
          <p>
            <span className='text-lg'>Weight:</span>{' '}
            <span className='font-light text-lg'>{pokemon.weight} kg</span>
          </p>
          <p>
            <span className='text-lg'>Height:</span>{' '}
            <span className='font-light text-lg'>{pokemon.height} inch</span>
          </p>
        </div>
      </article>
    )
  );
}

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};
