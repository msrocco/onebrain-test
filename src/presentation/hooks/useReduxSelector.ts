import { useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState } from '../../data/store/index'

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector