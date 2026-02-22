# Etch-A-Sketch

Etch-A-Sketch is a browser-based sketchpad built to practice and demonstrate HTML, CSS, and JavaScript fundamentals. Inspired by the classic <a href="https://en.wikipedia.org/wiki/Etch_A_Sketch">Etch A Sketch</a>, this project recreates a simple drawing experience using a dynamic grid and hover interactions.

---

## Overview

This project generates a 16×16 grid of square div elements in the browser. When a user hovers over a square, it turns black, allowing the user to draw by moving the mouse across the grid.

The grid is created dynamically using JavaScript, and all interactivity is handled through DOM manipulation and event listeners.

---

## Features

- 16×16 grid (256 total squares)
- Squares change color on hover
- Grid generated dynamically with JavaScript
- Built using only HTML, CSS, and vanilla JavaScript

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

No frameworks or external libraries are used.

---

## How It Works

1. JavaScript creates a container grid.
2. 256 square div elements are generated and appended to the container.
3. Each square listens for a `mouseover` event.
4. When triggered, the square's background color changes to black.

---

## Learning Objectives

This project helps reinforce:

- DOM manipulation
- Event handling
- Dynamic element creation
- CSS Grid or Flexbox layout
- Separation of concerns (structure, style, behavior)

---

## License

This project is open source and intended for educational purposes.
