import { useState, useEffect } from 'react';
import { weeklyPlan } from './data';
import { CheckCircle, ChevronRight, Activity, Zap } from 'lucide-react';
import './index.css';

function App() {
  const [currentDay, setCurrentDay] = useState(new Date().getDay()); // 0-6, 0 is Sunday
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [completedExercises, setCompletedExercises] = useState({});

  const toggleExercise = (id) => {
    setCompletedExercises(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const dayData = weeklyPlan[currentDay];

  const days = [
    { id: 1, short: 'M' },
    { id: 2, short: 'T' },
    { id: 3, short: 'W' },
    { id: 4, short: 'T' },
    { id: 5, short: 'F' },
    { id: 6, short: 'S' },
    { id: 0, short: 'S' },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo-area">
          <Zap className="logo-icon" size={28} />
          <h1>Pulse</h1>
        </div>
        <div className="profile-pic">
          <img src="https://ui-avatars.com/api/?name=User&background=6366f1&color=fff" alt="User" />
        </div>
      </header>

      {/* Week Selector */}
      <div className="week-selector">
        {days.map(d => (
          <button 
            key={d.id} 
            className={`day-btn ${currentDay === d.id ? 'active' : ''}`}
            onClick={() => {
              setCurrentDay(d.id);
              setSelectedWorkout(null);
            }}
          >
            {d.short}
          </button>
        ))}
      </div>

      <main className="main-content">
        {!selectedWorkout ? (
          <div className="dashboard animate-fade-in">
            <div className="day-header">
              <h2>{dayData?.day}</h2>
              <p className="day-title">{dayData?.title}</p>
            </div>

            {dayData?.isRest ? (
              <div className="rest-card animate-slide-up">
                <img src={dayData.image} alt="Rest" className="rest-image" />
                <div className="rest-content">
                  <h3>Recovery Day</h3>
                  <ul>
                    {dayData.activities.map((act, i) => (
                      <li key={i}><Activity size={18}/> {act}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="workout-groups">
                {dayData?.workouts?.map((workout, index) => (
                  <div 
                    key={index} 
                    className="workout-group-card animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedWorkout(workout)}
                  >
                    <div className="workout-group-info">
                      <h3>{workout.group}</h3>
                      <p>{workout.exercises.length} Exercises</p>
                    </div>
                    <div className="workout-group-action">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="exercise-view animate-fade-in">
            <button className="back-btn" onClick={() => setSelectedWorkout(null)}>
              ← Back
            </button>
            <div className="exercise-header">
              <h2>{selectedWorkout.group}</h2>
              <p>Complete all exercises below</p>
            </div>
            
            <div className="exercise-list">
              {selectedWorkout.exercises.map((ex, idx) => (
                <div key={ex.id} className={`exercise-card animate-slide-up ${completedExercises[ex.id] ? 'completed' : ''}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <img src={ex.image} alt={ex.name} className="exercise-image" />
                  <div className="exercise-details">
                    <h3>{ex.name}</h3>
                    <p className="sets-reps">{ex.sets} Sets × {ex.reps} Reps</p>
                    {ex.description && <p className="exercise-desc">{ex.description}</p>}
                  </div>
                  <button 
                    className={`check-btn ${completedExercises[ex.id] ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); toggleExercise(ex.id); }}
                  >
                    <CheckCircle size={28} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
