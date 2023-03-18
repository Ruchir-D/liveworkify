import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({workout}) => {

    const { dispatch } = useWorkoutsContext();
    const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
        method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok) {
        dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
}

    return (
        <div className="bg-white p-4 rounded-sm drop-shadow-lg m-4">
            <h4 className="text-2xl font-bold all uppercase text-rose-700 ">{workout.title}</h4>
            <p className="text-xl"><b>Load (KG): </b>{workout.load}</p>
            <p className="text-xl"><b>Reps: </b>{workout.reps}</p>
            <button onClick={handleClick} className="bg-rose-700 hover:bg-rose-800 mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
            
        </div>
    )
}

export default WorkoutDetails