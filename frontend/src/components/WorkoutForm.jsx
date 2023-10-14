
// buat useState workout { title, load, reps }
// buat form ketiganya
// kemudian fetch post dengan header json

import { useState } from "react"
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const workout = {title, load, reps}
        const response = await fetch('/api/workout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){ 
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log("workout added", json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }
  return (
    <form action="" className="create" onSubmit={handleSubmit}>
        <h3>Add New Workout</h3>
        <label>Excercise Title:</label>
        <input type="text" 
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
        /> 
        <label>Load (in kg):</label>
        <input type="number" 
            onChange={(e)=> setLoad(e.target.value)}
            value={load}
        /> 
        <label>Reps:</label>
        <input type="number" 
            onChange={(e)=> setReps(e.target.value)}
            value={reps}
        /> 
        <button type="submit">Add</button>
        
            {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm