# gulp-11-cache-busting

**gulp-11-cache-busting** is a Gulp plugin that appends unique hash strings to file names to prevent browser caching issues. It also integrates with HTML templating to automatically update asset file references when file names change.

## Features

- **Cache Busting:** Automatically appends hash strings (e.g., `style.1a2b3c4d.css`) to static assets such as CSS and JS files.
- **HTML Integration:** Scans and updates file references in HTML files to ensure they point to the hashed assets.
- **Flexible Options:** Configure hash length, delimiters, and file filtering via options.

## Installation

Install the plugin using npm:

```bash
npm install --save-dev gulp-11-cache-busting
```

Ensure you also have [Gulp](https://gulpjs.com/) installed in your project.

## Usage

Below is an example setup using **gulp-11-cache-busting**.


