import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { formatEpisode, useFetch } from '@/lib/utils'
import Image from 'next/image'

import defaultImage from '@public/rick-and-morty.jpg'

import defaultEpisodeImage from '@public/ricka-and-morty-episode-img.jpg'


const EpisodeItem = async ({ name, air_date, characters, episode }: Episode) => {
  const charactersUrls = characters.map(url => {
    const parts = url.split('/');
  return parseInt(parts[parts.length - 1]);
  })

  const episodeCharacters: Character[] = await useFetch(`character/${charactersUrls}`)
 
  return (
            <div className='border rounded-md my-2 p-2 grid bg-accent/90'>
              <Dialog>
                <DialogTrigger className='w-full text-start'>
                  <div className='grid grid-cols-[0.4fr,_1fr] gap-2'>
                  <div className='relative rounded-sm overflow-hidden'>

                    <Image src={defaultImage} alt={'defaultImage'}
                      className='object-cover blur-md'
                    />
                    <p className='absolute inset-0 grid place-items-center font-semibold text-white'>{formatEpisode(episode)}</p>
                    </div>
                    <div className='flex flex-col p-2'>
                      <p className='font-bold lg:text-2xl'>{name}</p>
                      
                      <p className='mt-4'>Air date: {air_date}</p>
                    </div>
                    </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className='grid grid-cols-[1fr_0.9fr] p-2'>
                  <div>

                      <DialogTitle><h2 className='text-2xl'>
                        {name}
                        </h2>
                        </DialogTitle>
                      <DialogDescription>
                      

                        <p className='my-2'>Air date: {air_date}</p>

                        <p className='my-2'>Featured characters:</p>
                        {episodeCharacters.map((episodeCharacter, i: number) => i < 3 &&  (
                          <div key={episodeCharacter.id}
                          className=''
                          >{episodeCharacter.name} {} </div>
                          ))}
                      </DialogDescription>
                            <Button className='mt-4'>Show more</Button>
                          </div>
                          <div className='relative rounded-sm overflow-hidden'>

                          <Image src={defaultEpisodeImage} alt={'defaultImage'}
                      className='object-cover h-full blur-lg border'
                    />
                            <div className='absolute inset-0 grid place-items-center font-semibold text-white'>{formatEpisode(episode)}</div>
                            </div>
                   
                  </DialogHeader>
           
                </DialogContent>
              </Dialog>
            </div>
  )
}

export default EpisodeItem