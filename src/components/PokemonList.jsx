import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import PokemonCard from './PokemonCard';
import { getPokemons } from '../api/queries/getPokemons';
import { Fragment, useEffect } from 'react';

export default function PokemonList() {
  const { data, status, fetchNextPage, error } = useInfiniteQuery({
    getNextPageParam: (lastPage) => lastPage.next,
    queryFn: ({ pageParam }) => getPokemons({ url: pageParam }),
    queryKey: ['pokemons'],
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending') {
    return <p>Cargando...</p>;
  }

  if (status === 'error') {
    return <p>Hubo un error: {error.message}</p>;
  }

  return (
    <>
      <h1 className='md:text-8xl text-5xl font-bold mb-6'>Pokemons</h1>
      <section className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-3 w-full'>
        {data &&
          data.pages.map((page) => {
            return page.results.map((pokemon, index) => {
              return (
                <Fragment key={pokemon.name}>
                  {index === page.results.length - 1 ? (
                    <div ref={ref}>
                      <PokemonCard pokemonName={pokemon.name} />
                    </div>
                  ) : (
                    <PokemonCard pokemonName={pokemon.name} />
                  )}
                </Fragment>
              );
            });
          })}
      </section>
    </>
  );
}
