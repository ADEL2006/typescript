import * as U from './util'
// prettier-ignore
export const picsmUrl = (width: number, height: number): string =>  `https://picsum.photos/${width}/${height}`
export const randomImage = (
  w: number = 1000,
  h: number = 800,
  delta: number = 200
): string => picsmUrl(U.random(w, w + delta), U.random(h, h + delta))

export const randomAvatar = () => {
  const size = U.random(200, 400)
  return picsmUrl(size, size)
}
