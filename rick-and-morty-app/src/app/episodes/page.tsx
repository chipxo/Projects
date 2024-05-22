import React from 'react'
import EpisodeItem from '@/components/EpisodeItem'
import { useFetch } from '@/lib/utils'


const EpisodesPage =  async () => {
  const { results } = await useFetch("episode");
  
  const episodes: Episode[] = results;

  return (
    <div className='container my-10'>
      <h2 className='text-2xl font-semibold my-6 text-white'>All the episodes:</h2>

      <div>
        {episodes.map(episode => (
            <div key={episode.id}>
              <EpisodeItem {...episode}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default EpisodesPage