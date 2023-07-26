import dayjs from "dayjs"
import { useState } from "react";
import { ItemLine } from "./ItemLine";

export const ItemBox = ({name, duration}) => {
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

    // console.log(people[0][`${name}`]);

    const currentDate = dayjs(new Date())
    const [itemArray, setItemArray] = useState([])



    const checkItemCount = () => {
        let startDate = dayjs(people[0].startDate)
        let result = []

      
        while(startDate.isBefore(currentDate)) {
            if(startDate.isAfter(currentDate)) {
                break
            }
            startDate = dayjs(startDate).add(duration, 'month')
            result.push({"date": startDate.format('DD.MM.YY'), "use": false});      
        } 
        
        for(let i=0;i<people[0][`${name}`];i++) {
            result[i].use = true;
        }

        setItemArray([...result])

        console.log(result);

        
    }
    

    return <div className="item-box">
        <div>{name}</div>
        <button onClick={() => checkItemCount()}>
          check
        </button>
        <ItemLine data={itemArray} />
        
    </div>
}