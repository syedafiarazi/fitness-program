import { useState } from "react";
import "./App.css";

const workoutData = {
  "DAY 1": {
    warmup: "https://youtu.be/-p0PA9Zt8zk?si=LosZvon78hB6hbFb",
    exercises: [
      {
        name: "Bodyweight Squats",
        sets: "3",
        reps: "10-12",
        rest: "60 secs",
        video: "https://youtu.be/l83R5PblSMA?si=9cM84lLhJSUipq9q",
      },
      {
        name: "Wall Push-Ups",
        sets: "3",
        reps: "max",
        rest: "60 secs",
        video: "https://youtu.be/3OM4y5rXM8c?si=ZdteVRziE_GOhbsu",
      },
      {
        name: "Glute Bridges",
        sets: "3",
        reps: "12-15",
        rest: "60 secs",
        video: "https://youtu.be/OUgsJ8-Vi0E?si=wQtUAIGIZi7Y-q2P",
      },
      {
        name: "Standing Side Bends",
        sets: "3",
        reps: "12-15",
        rest: "30 secs",
        video: "https://youtu.be/wY9nQ-yfRwo?si=FVlZKTWpstVsRrci",
      },
      {
        name: "Plank",
        sets: "3",
        reps: "max sec",
        rest: "30 secs",
        video: "https://youtu.be/pvIjsG5Svck?si=ZIzHpG5Svck?si=ZIzHp7Xy",
      },
    ],
  },

  "DAY 2": {
    warmup: "https://youtu.be/mf6CZ5_7dfc?si=3hntjAwGaxjrbZ2Z",
    exercises: [
      {
        name: "Arm Circles",
        sets: "3",
        reps: "15 secs clockwise, 15 sec anti",
        rest: "30 secs",
        video: "https://youtu.be/xBl8xP1z8WA?si=fpKOWa5MBYhXdfBs",
      },
      {
        name: "Modified Push-Ups (Wall)",
        sets: "3",
        reps: "5-10",
        rest: "60 secs",
        video: "https://youtu.be/3OM4y5rXM8c?si=ZdteVRziE_GOhbsu",
      },
      {
        name: "Tricep Kick Backs with Water Bottles",
        sets: "3",
        reps: "12-15",
        rest: "30 secs",
        video: "https://youtu.be/avofUAfLfpM?si=bzg73AR5MOMdXHDz",
      },
      {
        name: "Overhead Press with Water Bottles",
        sets: "3",
        reps: "10-12",
        rest: "30 secs",
        video: "https://youtu.be/xBOHevVmqso?si=lMzX0WAp90x3zsyX",
      },
      {
        name: "Bicep Curls with Water Bottles",
        sets: "3",
        reps: "8-10",
        rest: "30 secs",
        video: "https://youtu.be/D5U2mknMu44?si=FGZb63Nd6uzIIf3c",
      },
    ],
  },

  "DAY 3": {
    warmup: "https://youtu.be/DgjiFOKWsfg?si=h5EpHEvSuHnGWYGc",
    exercises: [
      {
        name: "Step Touches (Side-to-Side)",
        sets: "3",
        reps: "12-15",
        rest: "30 secs",
        video: "https://youtu.be/wH9hsR7Ck_M?si=R8Ms7AmlAH4HbQxw",
      },
      {
        name: "Squats",
        sets: "3",
        reps: "10-12",
        rest: "60 secs",
        video: "https://youtube.com/shorts/CsPAsICeRsM?si=o8baUXNd3vhr52fp",
      },
      {
        name: "Standing Calf Raises",
        sets: "3",
        reps: "15-20",
        rest: "30 secs",
        video: "https://youtu.be/cqDMYUaIXvw?si=DRKDkzybVaX7pV2-",
      },
      {
        name: "RDL with Water Bottles",
        sets: "3",
        reps: "10-12",
        rest: "30 secs",
        video: "https://youtube.com/shorts/PPz0x59s080?si=vYY9xJVeUhSn-HXM",
      },
      {
        name: "Side Lying Leg Lifts",
        sets: "3",
        reps: "10-12",
        rest: "30 secs",
        video: "https://youtu.be/pNismoYr1Fg?si=UpZ2Xvq6LkTW6VII",
      },
    ],
  },

  "DAY 4": {
    warmup: "https://youtu.be/auX4JdW-UjI?si=w7K0ZkeQwONdu8yT",
    exercises: [
      {
        name: "Dead Bug (Alternate Arm/Leg)",
        sets: "3",
        reps: "10-12",
        rest: "30 secs",
        video: "https://youtu.be/o4GKiEoYClI?si=ujQSwNxLynV9M_Nt",
      },
      {
        name: "Russian Twists",
        sets: "3",
        reps: "12-15",
        rest: "30 secs",
        video: "https://youtu.be/DJQGX2J4IVw?si=1K9mCl1qlNmCvStQ",
      },
      {
        name: "Side Plank (Modified Knees)",
        sets: "3",
        reps: "max",
        rest: "30 secs",
        video: "https://youtu.be/igs_hXbcNHE?si=M1KmTejAtr6Z28Sl",
      },
      {
        name: "Plank Shoulder Taps",
        sets: "3",
        reps: "8-10 per side",
        rest: "30 secs",
        video: "https://youtu.be/jgQ49dXfznk?si=iJPUNWNQBcQH-ZsK",
      },
      {
        name: "Crunches",
        sets: "3",
        reps: "15",
        rest: "30 secs",
        video: "https://youtu.be/O0pIQ2UqeCY?si=-69qYa7ebQncAoOU",
      },
    ],
  },

  "DAY 5": {
    warmup: "https://youtu.be/-p0PA9Zt8zk?si=LosZvon78hB6hbFb",
    exercises: [
      {
        name: "Lateral Raises with Water Bottles",
        sets: "3",
        reps: "10-12",
        rest: "60 secs",
        video: "https://youtu.be/dr8ItbfGAVE?si=c2ousJHK4tklUwOt",
      },
      {
        name: "Alternate Lunges",
        sets: "4",
        reps: "15 (per leg)",
        rest: "30 secs",
        video: "https://youtu.be/tTej-ax9XiA?si=fljEugqcQ0YZOV0I",
      },
      {
        name: "Mountain Climbers",
        sets: "3",
        reps: "30 secs",
        rest: "30 secs",
        video: "https://youtube.com/shorts/hZb6jTbCLeE?si=O8YgjFcLHirAjsb9",
      },
      {
        name: "Bicep Curls with Water Bottles",
        sets: "3",
        reps: "10-12",
        rest: "30 secs",
        video: "https://youtu.be/D5U2mknMu44?si=Tt-jg1lw3mp64PI7",
      },
      {
        name: "YTW",
        sets: "3",
        reps: "15",
        rest: "30 secs",
        video: "https://youtu.be/QdGTI4Lshg4?si=NLD0Nlr0kFBnkTYZ",
      },
    ],
  },
};


function getYoutubeId(url) {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/
  );

  return match ? match[1] : null;
}


function WorkoutCard({ workout, number }) {
  const videoId = getYoutubeId(workout.video);

  return (
    <article className="workout-card">

      <a
        href={workout.video}
        target="_blank"
        rel="noopener noreferrer"
        className="thumbnail-container"
      >
        {videoId ? (
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={`${workout.name} demonstration`}
            className="thumbnail"
          />
        ) : (
          <div className="thumbnail-fallback">▶</div>
        )}

        <div className="play-circle">
          ▶
        </div>

        <div className="exercise-number">
          {String(number).padStart(2, "0")}
        </div>
      </a>

      <div className="card-content">

        <h3>{workout.name}</h3>

        <div className="stats">

          <div className="stat">
            <span className="stat-icon">↻</span>
            <div>
              <small>SETS</small>
              <strong>{workout.sets}</strong>
            </div>
          </div>

          <div className="stat">
            <span className="stat-icon">×</span>
            <div>
              <small>REPS</small>
              <strong>{workout.reps}</strong>
            </div>
          </div>

          <div className="stat">
            <span className="stat-icon">◷</span>
            <div>
              <small>REST</small>
              <strong>{workout.rest}</strong>
            </div>
          </div>

        </div>

        <a
          href={workout.video}
          target="_blank"
          rel="noopener noreferrer"
          className="watch-link"
        >
          Watch exercise
          <span>↗</span>
        </a>

      </div>
    </article>
  );
}


function App() {
  const days = Object.keys(workoutData);
  const [selectedDay, setSelectedDay] = useState("DAY 1");

  const currentWorkout = workoutData[selectedDay];

  return (
    <div className="app">

      <header className="topbar">

        <div className="brand">
          <div className="brand-icon">✦</div>

          <div>
            <h1>AFIA</h1>
            <span>TRAINING PLAN</span>
          </div>
        </div>

        <div className="plan-info">
          <span>5</span>
          <small>TRAINING DAYS</small>
        </div>

        <div className="plan-info">
          <span>6</span>
          <small>CARDIO DAYS</small>
        </div>

        <div className="steps">
          <strong>5,000</strong>
          <span>STEPS / DAY</span>
        </div>

      </header>


      <main className="main-content">

        <section className="intro">

          <div>
            <span className="eyebrow">YOUR WEEKLY PLAN</span>

            <h2>
              Stronger
              <span> every day.</span>
            </h2>

            <p>
              Follow your training plan, watch each exercise,
              and keep your focus on the work.
            </p>
          </div>

          <div className="progress-box">
            <span>WEEKLY ROUTINE</span>

            <div className="progress-dots">
              {days.map((day, index) => (
                <div
                  key={day}
                  className={
                    selectedDay === day
                      ? "progress-dot active"
                      : "progress-dot"
                  }
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

        </section>


        <nav className="day-navigation">

          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={
                selectedDay === day
                  ? "day-button active"
                  : "day-button"
              }
            >
              {day}
            </button>
          ))}

        </nav>


        <section className="workout-area">

          <div className="section-header">

            <div>
              <span className="section-label">TODAY'S SESSION</span>
              <h2>{selectedDay}</h2>
            </div>

            <div className="exercise-total">
              <strong>{currentWorkout.exercises.length}</strong>
              <span>EXERCISES</span>
            </div>

          </div>


          <a
            href={currentWorkout.warmup}
            target="_blank"
            rel="noopener noreferrer"
            className="warmup-banner"
          >

            <div className="warmup-icon">
              ▶
            </div>

            <div className="warmup-text">
              <span>START HERE</span>
              <strong>Warm-up / Follow Along</strong>
            </div>

            <div className="warmup-arrow">
              ↗
            </div>

          </a>


          <div className="workout-grid">

            {currentWorkout.exercises.map((workout, index) => (
              <WorkoutCard
                key={workout.name}
                workout={workout}
                number={index + 1}
              />
            ))}

          </div>

        </section>

      </main>


      <footer>
        <span>AFIA TRAINING PLAN</span>
        <span>CONSISTENCY OVER PERFECTION</span>
      </footer>

    </div>
  );
}

export default App;