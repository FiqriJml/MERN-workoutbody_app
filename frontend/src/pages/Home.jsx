import {useEffect, useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)
    // useEffect akan dijalankan setelah setiap rendering komponen
    useEffect(() => {
        // Kode di dalam useEffect akan mengeksekusi efek samping di sini
        // Contoh: Pengambilan data dari API
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workout/')
            const json = await response.json()  

            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) =>(
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>

    )
}

export default Home