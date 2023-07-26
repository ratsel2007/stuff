import dayjs from "dayjs";
import 'dayjs/locale/ru';
import { ItemBox } from "./ItemBox";

export const Main = () => {
    const people = [
        {
            "name": "Тогушев",
            "startDate": "11-06-2012",
            "officerDate": "11-06-2012",
            "шапка-ушанка": 2,
            "костюм летний": 3,
            "галстук": 6,
            "рубашка": 3
        }
    ]

    const rules = [
            {"name": "шапка-ушанка", "duration": 36, "count": 1},
            // {"name": "костюм летний", "duration": 24, "count": 1},
            // {"name": "галстук", "duration": 12, "count": 2},
            // {"name": "рубашка", "duration": 12, "count": 2},

    ]

// const date = dayjs(people[0].startDate).add(24, 'month');
// console.log(date);

    return <div>
        {
            rules.map((item, index) => {
                return <ItemBox key={index} name={item.name} duration={item.duration} count={item.count}/>
            })
        }
        </div>
}