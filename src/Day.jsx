import { useParams } from 'react-router-dom';
import dummy from './data.json'

export default function Day(){
    // dummy.words

    const {day}=useParams(); // useParams:브라우저 주소창에 적힌 변수값을 문자열 형태로 뽑아옴

    const wordList=dummy.words.filter(word=>(
        word.day===Number(day) // 문자열 -> 숫자로
    ))
    console.log(wordList);

    return(
        <div>
            <table>
                <tbody>
                    {wordList.map(word=>(
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}