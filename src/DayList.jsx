import dummy from "./data.json"
import { Link } from "react-router-dom";

export default function DayList(){
    console.log(dummy);
    
    return(
        <div className="List">
            <ul className="list_day">
                {dummy.days.map(day=>(
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li> // key값이 필요한 이유?? -> 바뀐 부분을 효율적으로 수정함, data추가,삭제 시 오류 발생이 적음
                ))}
            </ul>
        </div>
    )
}