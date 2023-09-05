import { useState , useEffect } from 'react'

export const DateTime = () => {

    const [date,setDate] = useState<Date>(new Date());
    
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p> {date.toLocaleTimeString()}</p>
            <p> {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime