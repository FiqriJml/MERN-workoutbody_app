import {useEffect, useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'


const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    // useEffect akan dijalankan setelah setiap rendering komponen
    useEffect(() => {
        // Kode di dalam useEffect akan mengeksekusi efek samping di sini
        // Contoh: Pengambilan data dari API
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workout/')
            const json = await response.json()  

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts()
    }, [dispatch])

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