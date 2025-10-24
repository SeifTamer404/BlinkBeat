# BlinkBeat — React Reaction Timer

> Press the button to start the timer. Press it again before the timer ends to win — otherwise you lose.

## Project Overview

BlinkBeat is a tiny web game built with **React** that demonstrates using **refs** to control timers without unnecessary re-renders, and **React Portal** to render a result modal above the app UI. The core mechanic is simple: press the button to start a short countdown (for example, 5 seconds). If the player presses the same button again before the countdown finishes, they win; if not, they lose.

This project is part of a **learning journey** to practice advanced React concepts like refs and portals.

## Features

- Minimal, focused UI for quick play sessions.
- `useRef` for showing the modal and displaying the player name.
- `useImperativeHandle` for detaching the ResultModal component from the TimerChallenge component.  
- Result modal rendered via `ReactDOM.createPortal` for clean layering.
- Easy to extend with sounds, score tracking, or difficulty levels.

## Tech Stack

- React (functional components + Hooks)
- ReactDOM.createPortal
- Plain CSS
yarn
```

## License

Free to use for learning and personal projects.
