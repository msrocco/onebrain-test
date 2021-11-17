import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../data/store'

export const useReduxDispatch = () => useDispatch<AppDispatch>() 
