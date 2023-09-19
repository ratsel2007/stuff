import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../interfaces/itemInterface";

interface ItemState {
    allItems: IItem[]
}

const initialState: ItemState = {
    allItems: [
        {
            "name": "шапка-ушанка",
            "count": 0,
             "duration": 0
        },
        {  
            "name": "фуражка",
            "count": 0,
            "duration": 0
        },
        {
            "name": "пилотка",
            "count": 0,
            "duration": 0
        },
        {
            "name": "куртка демисезонная/зимняя",
            "count": 0,
            "duration": 0
        },
        {
            "name": "китель",
            "count": 0,
            "duration": 0
        },
        {
            "name": "куртка п/ш",
            "count": 0,
            "duration": 0
        },
        {
            "name": "брюки",
            "count": 0,
            "duration": 0
        },
        {
            "name": "рубашка",
            "count": 0,
            "duration": 0
        },
        {
            "name": "галстук",
            "count": 0,
            "duration": 0
        },
        {
            "name": "перчатки п/ш",
            "count": 0,
            "duration": 0
        },
        {
            "name": "кепка летняя",
            "count": 0,
            "duration": 0
        },
        {
            "name": "костюм летний",
            "count": 0,
            "duration": 0
        },
        {
            "name": "костюм зимний",
            "count": 0,
            "duration": 0
        },
        {
            "name": "белье х/б",
            "count": 0,
            "duration": 0
        },
        {
            "name": "белье зимнее",
            "count": 0,
            "duration": 0
        },
        {
            "name": "носки х/б",
            "count": 0,
            "duration": 0
        },
        {
            "name": "носки п/ш",
            "count": 0,
            "duration": 0
        },
        {
            "name": "полуботинки",
            "count": 0,
            "duration": 0
        },
        {
            "name": "ботинки с в/б",
            "count": 0,
            "duration": 0
        },
        {
            "name": "сапоги зимние",
            "count": 0,
            "duration": 0
        },
        {
            "name": "ремень поясной (портупея)",
            "count": 0,
            "duration": 0
        },
        {
            "name": "ремень брючный",
            "count": 0,
            "duration": 0
        }
    ]
}

export const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {}
})

export const {actions, reducer} = itemSlice