# 💪 Fitness Program — Workout Planner

A modern, dark-themed React workout planner built from a structured personal training plan. The website provides a simple and visual way to follow daily workouts, view exercise instructions, check sets/reps/rest periods, and open the corresponding YouTube exercise videos.

The application is designed to be responsive, easy to navigate, and suitable for both desktop and mobile screens.

🌐 **Live Website:**
https://syedafiarazi.github.io/fitness-program/

---

## 📌 Project Overview

The Fitness Program website was created to convert a structured workout plan into an interactive web application.

The original workout plan contains:

* Multiple training days
* Five exercises per training day
* Exercise names
* Number of sets
* Repetitions or time-based instructions
* Rest periods
* YouTube video links
* Separate warm-up videos
* Cardio/step targets
* Active rest and rest days

Instead of requiring the workout plan to be opened as a spreadsheet every time, the information was converted into a responsive web interface.

The website allows the user to select a workout day and immediately see all exercises planned for that session.

---

# ✨ Features

## 🗓️ Weekly Workout Navigation

The website provides dedicated tabs for each workout day.

Users can switch between:

* Day 1
* Day 2
* Day 3
* Day 4
* Day 5
* Rest

Selecting a day dynamically updates the workout information displayed on the page.

Each training day also displays its workout category, such as:

* Full Body
* Arms
* Lower Body
* Core

---

## 🏋️ Exercise Information

Every exercise is displayed with its relevant training information.

Each workout card includes:

* Exercise number
* Exercise name
* Exercise thumbnail
* Sets
* Repetitions or duration
* Rest period
* YouTube video button

This keeps the important information visible without requiring the user to open another page.

---

## 🎥 YouTube Integration

Each exercise contains its corresponding YouTube URL.

The application extracts the YouTube video ID from the URL and automatically generates a YouTube thumbnail.

For example:

```text
https://youtu.be/VIDEO_ID
```

is converted into a thumbnail using:

```text
https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg
```

The thumbnail and "Watch" button both link directly to the original YouTube video.

The application supports multiple YouTube URL formats, including:

```text
https://youtu.be/VIDEO_ID
```

```text
https://www.youtube.com/watch?v=VIDEO_ID
```

```text
https://youtube.com/shorts/VIDEO_ID
```

---

## 🔥 Warm-Up Videos

Each training day also has a separate warm-up video.

A dedicated **Warm-up Video** button appears at the top of the selected workout.

This allows the user to start the warm-up before beginning the individual exercises.

---

# 🎨 User Interface

The interface was designed specifically to avoid the common problem of a website appearing as a small centered container with large amounts of unused space.

The application uses the entire available screen.

### Design characteristics

* Dark theme
* Full-screen layout
* High contrast
* Yellow/gold accent colour
* Dark exercise cards
* Compact information layout
* Responsive design
* Sidebar navigation
* Weekly workout tabs
* YouTube thumbnail previews
* Clear sets/reps/rest information

The darker design was chosen to create a focused fitness-dashboard experience while keeping text and important workout information clearly visible.

---

# 🖥️ Layout

The application is divided into several major sections.

## Sidebar

The left sidebar contains the application branding and navigation.

It includes:

* Workout section
* My Plan
* Overview
* Consistency reminder

The sidebar also contains a motivational message:

> Small steps every day lead to big results.

---

## Header

The main header displays:

**Weekly Workout Plan**

along with a short description of the training schedule.

It also provides high-level statistics such as:

* Training days
* Total exercises
* Daily step target

---

## Day Selector

The day selector allows the user to quickly switch between workout sessions.

The currently selected day is highlighted using the yellow accent colour.

This makes it easy to identify which workout is currently being viewed.

---

## Workout Header

The selected workout displays:

* Current day
* Workout category
* Workout description
* Warm-up video

For example:

```text
DAY 1 / Full Body
Lower body, upper body & core
```

---

## Exercise List

The exercises are displayed in horizontal cards.

Each card contains:

```text
Exercise Number
        ↓
YouTube Thumbnail
        ↓
Exercise Name
        ↓
Sets
        ↓
Reps / Time
        ↓
Rest
        ↓
Watch Button
```

This layout keeps all the relevant information visible at the same time.

---

# 📱 Responsive Design

The application is responsive and adapts to different screen sizes.

### Desktop

On larger screens:

* Sidebar remains visible
* Exercise cards use a horizontal layout
* YouTube thumbnails are larger
* Workout information is displayed in columns

### Tablet

On medium-sized screens:

* Sidebar is hidden
* Main content uses the full width
* Exercise cards become more compact

### Mobile

On smaller screens:

* Day tabs become a two-column layout
* Exercise cards reduce their information density
* Less important metadata is hidden
* Exercise thumbnails remain visible
* YouTube buttons remain accessible

This allows the workout plan to be used from a phone while exercising.

---

# 🧰 Technology Stack

The project uses the following technologies.

## React

React is used to build the interactive user interface.

React provides:

* Component-based development
* State management
* Dynamic rendering
* Efficient UI updates

---

## Vite

Vite is used as the development and build tool.

It provides:

* Fast local development
* Hot module replacement
* Production builds
* Lightweight configuration

---

## JavaScript

JavaScript handles:

* Workout data
* Day selection
* YouTube ID extraction
* Dynamic exercise rendering
* User interactions

---

## CSS

Custom CSS is used for the complete visual design.

No external UI framework is required.

The CSS handles:

* Dark theme
* Layout
* Responsive design
* Cards
* Navigation
* Buttons
* Typography
* Hover effects
* Thumbnails
* Mobile layouts

---

## Git

Git is used for version control.

The project is stored in a GitHub repository:

```text
https://github.com/syedafiarazi/fitness-program
```

---

## GitHub Pages

GitHub Pages is used to host the production website.

The live application is available at:

```text
https://syedafiarazi.github.io/fitness-program/
```

---

# 📂 Project Structure

The main project structure is:

```text
fitness-program/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 📄 Important Files

## `src/App.jsx`

This is the main React component.

It contains:

* Workout data
* Day selection
* YouTube URL processing
* Exercise cards
* Workout navigation
* Page structure

The workout information is stored in a JavaScript object.

Example:

```javascript
const workoutData = {
  "DAY 1": {
    title: "Full Body",
    subtitle: "Lower body, upper body & core",
    warmup: "WARMUP_VIDEO_URL",
    exercises: [
      {
        name: "Bodyweight Squats",
        sets: "3",
        reps: "10–12",
        rest: "60 secs",
        video: "YOUTUBE_VIDEO_URL"
      }
    ]
  }
};
```

This makes the workout plan easy to update without changing the UI.

---

## `src/App.css`

This file contains the main application styling.

It controls:

* Dark theme
* Sidebar
* Header
* Workout tabs
* Exercise cards
* Buttons
* YouTube thumbnails
* Statistics
* Responsive layouts

The design uses CSS Grid and Flexbox to create the full-screen dashboard.

---

## `src/index.css`

This file contains global styles that ensure the application uses the full browser viewport.

The default Vite styling was removed so it would not interfere with the custom dashboard design.

---

## `src/main.jsx`

This is the React entry point.

It loads the main `App` component and renders it into the HTML root element.

---

## `vite.config.js`

Vite is configured specifically for GitHub Pages.

The important configuration is:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/fitness-program/',
});
```

The `base` property is necessary because this is a GitHub Pages project site rather than a root-domain site.

---

# 📊 Workout Data

The workout data was taken from the provided training plan and converted into structured JavaScript data.

The website currently represents:

* 5 training days
* 5 exercises per training day
* 25 exercises
* Warm-up videos
* Sets
* Repetitions
* Time-based exercises
* Rest periods
* Cardio requirements
* Step targets
* Active rest
* Rest day

The data is separated from the UI logic so that the workout schedule can be modified easily.

---

# 🔗 YouTube Thumbnail System

Rather than manually downloading and storing every exercise image, the application generates thumbnails directly from YouTube.

The application uses:

```javascript
function getYoutubeId(url) {
  if (!url) return null;

  const patterns = [
    /youtu\.be\/([^?&/]+)/,
    /youtube\.com\/watch\?v=([^?&/]+)/,
    /youtube\.com\/shorts\/([^?&/]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);

    if (match) {
      return match[1];
    }
  }

  return null;
}
```

The returned ID is then used to construct the thumbnail URL.

This means that changing a YouTube video link automatically changes the thumbnail displayed by the application.

---

# 🚀 Running the Project Locally

## 1. Clone the repository

```bash
git clone https://github.com/syedafiarazi/fitness-program.git
```

Move into the project:

```bash
cd fitness-program
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Start the development server

```bash
npm run dev
```

Vite will provide a local URL, normally:

```text
http://localhost:5173
```

Open that URL in a browser.

---

# 🏗️ Creating a Production Build

To create a production build:

```bash
npm run build
```

Vite generates the production files inside:

```text
dist/
```

You can preview the production build locally with:

```bash
npm run preview
```

---

# 🌐 GitHub Pages Deployment

The project uses the `gh-pages` package to deploy the Vite production build.

The deployment scripts in `package.json` are:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Running:

```bash
npm run deploy
```

performs the following:

1. Builds the React application.
2. Creates the production `dist` folder.
3. Publishes the `dist` folder to the `gh-pages` branch.
4. GitHub Pages serves that branch as the website.

---

# 🔄 Updating the Website

When workout information or UI code is changed:

### 1. Make your changes

Edit the React files.

### 2. Test locally

```bash
npm run dev
```

### 3. Build and deploy

```bash
npm run deploy
```

### 4. Push the source code

```bash
git add .
git commit -m "Update workout program"
git push origin main
```

The `gh-pages` branch is updated separately by:

```bash
npm run deploy
```

---

# ⚙️ GitHub Pages Configuration

The GitHub repository uses:

```text
Repository:
https://github.com/syedafiarazi/fitness-program
```

GitHub Pages source:

```text
Branch: gh-pages
Folder: / (root)
```

Vite base path:

```text
/fitness-program/
```

Live site:

```text
https://syedafiarazi.github.io/fitness-program/
```

---

# 🧪 Development Workflow

The project was developed using an incremental workflow:

```text
Workout Plan
     ↓
Structured Workout Data
     ↓
React Application
     ↓
Workout Day Navigation
     ↓
Exercise Cards
     ↓
YouTube Integration
     ↓
Responsive Dark UI
     ↓
Vite Production Build
     ↓
Git Repository
     ↓
GitHub Pages
```

This structure makes it possible to continue improving the application without rebuilding it from scratch.

---

# 🔮 Possible Future Improvements

The current version focuses on displaying the workout plan clearly. Future versions could add:

### Workout Tracking

Allow users to mark exercises as completed.

```text
☑ Bodyweight Squats
☑ Wall Push-Ups
☐ Glute Bridges
☐ Standing Side Bends
☐ Plank
```

### Progress Tracking

Track:

* Completed workouts
* Weekly consistency
* Number of sessions
* Exercise progression

### Workout Timer

Add timers for:

* Rest periods
* Planks
* Mountain climbers
* Other timed exercises

### Local Storage

Save workout completion status directly in the browser using `localStorage`.

### Progress Dashboard

Add charts showing:

* Weekly completion
* Monthly consistency
* Completed sessions
* Exercise history

### Exercise Search

Allow users to search for a particular exercise.

### Filtering

Exercises could be filtered by:

* Upper body
* Lower body
* Core
* Full body
* Cardio

### Custom Workout Editing

Allow workout information to be edited directly from the website instead of changing the source code.

### PWA Support

The application could be converted into a Progressive Web App so it can be installed on a phone like an application.

---

# 🔐 Privacy

The current application does not require:

* User accounts
* Passwords
* A database
* Personal authentication
* A backend server

The workout data is stored directly in the React application.

The application therefore functions as a static website.

---

# 📜 License

This project is intended for personal use.

If you plan to distribute or modify the project publicly, add an appropriate open-source license to the repository.

---

# 💪 Project Goal

The main goal of the Fitness Program project is to turn a spreadsheet-based workout schedule into a simple, visual, and easy-to-use digital workout dashboard.

Instead of searching through a spreadsheet for:

* Which exercise to perform
* How many sets to complete
* How many repetitions to perform
* How long to rest
* Which video to watch

all of the information is available in one interface.

---

## 🌐 Live Project

**GitHub Repository**

https://github.com/syedafiarazi/fitness-program

**Live Website**

https://syedafiarazi.github.io/fitness-program/

---

## 💛 Built With

* React
* JavaScript
* Vite
* CSS
* Git
* GitHub
* GitHub Pages
* YouTube thumbnails/videos
