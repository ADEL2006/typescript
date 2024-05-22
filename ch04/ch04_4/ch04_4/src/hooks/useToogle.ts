import {useState, useCallback} from 'react'

export const useToogle = (initialChecked: boolean = false): [boolean, () => void] => {
  const [checked, setChecked] = useState<boolean>(initialChecked)
  const toogleChecked = useCallback(() => setChecked(checked => !checked), [])
  return [checked, toogleChecked]
}
