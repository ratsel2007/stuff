import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actions as UserActions } from "../store/user/userSlice"

const rootActions = {
    ...UserActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}