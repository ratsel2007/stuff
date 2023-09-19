import { useSelector } from "react-redux"
import { State } from "../store/store"
import { Loading } from "./global/loading"
import * as dayjs from 'dayjs'

import { Step1 } from "./step1"
import { Step2 } from "./step2"
import { Step3 } from "./step3"
import { useEffect, useState } from "react"
import axios from "axios"

export const Mainboard = () => {
    const {currentUser} = useSelector((state: State) => state.user)

    const isUseFirstTimeLine = dayjs(currentUser?.startDate).isBefore('2006-12-22')
    const isUseSecondTimeLine = dayjs(currentUser?.startDate).isBefore('2021-02-10')

    const isOfficer = dayjs(currentUser?.startDate).isBefore(dayjs(currentUser?.oficcerDate))

    const [startTimeLine, setStartTimeLine] = useState(null)

    useEffect(() => {
        const checkStartTimeLine = async() => {
            if(isUseFirstTimeLine && !isOfficer) {
                const {data} = await axios.get('http://localhost:3001/itemTime1')
                console.log(data);
                
            } else if (isUseFirstTimeLine && isOfficer) {
                const {data} = await axios.get('http://localhost:3001/officerItemTime1')
                console.log(data);
            }
                
        }

        checkStartTimeLine()
    }, [])

    if(!currentUser) {
        return <Loading />
    }

    return (
    <>
        {isUseFirstTimeLine && <Step1 />}
        {isUseSecondTimeLine && <Step2 />}
        <Step3 />
    </>
    )
}