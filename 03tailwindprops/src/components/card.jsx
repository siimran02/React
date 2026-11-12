import React from 'react'

function Card({themename="HC", post="Not assigned yet", image="https://images.pexels.com/photos/36954299/pexels-photo-36954299.jpeg?cs=srgb&dl=pexels-tuba-sen-2151030023-36954299.jpg&fm=jpg&_gl=1*1jja20b*_ga*NjIxNDU0ODkuMTc5MzE4NzE3OQ..*_ga_8JE65Q40S6*czE3OTQ0NzAxMDYkbzIkZzEkdDE3OTQ0NzAxMjYkajQwJGwwJGgw"}) {
  return (
    <div>
        <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
            <div>
                  <img className="size-48 rounded-md shadow-xl object-cover" alt="cover"src={image}/>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-medium">{themename}</span>
              <span className="font-medium text-sky-500">{post}</span>
              <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
              <span>No. 4</span>
              <span>·</span>
              <span>2025</span>
              </span>
            </div>
        </div>
    </div>
  )
}

export default Card

