# Random Quote Generator

A small web app that shows a random inspirational quote, one click at a time. Runs entirely in the browser with plain HTML, CSS, and JavaScript. No libraries, no build step, no network calls.

## Features

- Shows a random quote with its author from a built-in collection of 16 quotes
- **New Quote** button picks another quote, and never repeats the current one
- **Copy** button copies the quote and author to the clipboard, with a fallback for older browsers
- Press the **N** key as a shortcut for a new quote
- Short on-screen feedback after copying
- Responsive layout that works on desktop and mobile

## How to Use

Open `index.html` in any modern browser. Click **New Quote** (or press **N**) to see another quote, and **Copy** to copy the current one.

## Files

- `index.html` - page structure
- `styles.css` - styling and responsive layout
- `script.js` - quote data and all behavior

## Running the Tests

`test-runner.html` is a small local test harness used during development. Open it in a browser and it runs functional checks (quote rendering, no-repeat logic, copy feedback, keyboard shortcut) and prints the results on the page. It is not needed to use the app.

## Note

Built with AI assistance as a daily frontend practice project.
