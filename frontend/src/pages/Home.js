import { useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// Components
import WorkoutDetails from '../components/WorkoutDetails.js';
import WorkoutForm from '../components/WorkoutForm.js';

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext();

    useEffect(()=> {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const json = await response.json();

            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts();
    },[])
    return (
        <div className="home max-w-[1640px] flex flex-row bg-rose-100">
            <div className='w-3/4'>
                <div className='workouts'>
                    {workouts && workouts.map((workout)=> (
                        <WorkoutDetails key={workout._id} workout = {workout} />
                    ))}
                </div>
            </div>
            <div className='w-1/4'>
                <WorkoutForm />
            </div>
        </div>
    )
}

export default Home