# 🚀 gulp-09-browser-sync-livereload

Automatically refresh the browser when files change — perfect for rapid development and testing.

## 📦 Features

- Live browser reloading on file changes
- Watches HTML, CSS, and JS files
- Fast feedback loop for efficient development

## 🛠️ Installation

```bash
npm install
```

If you haven’t already, install Gulp CLI globally:

```bash
npm install -g gulp-cli
```

## 📁 File Structure

```
project/
│
├── gulpfile.js         # Gulp tasks
├── package.json        # Dependencies
├── index.html          # Example HTML
├── css/
│   └── styles.css      # Example CSS
└── js/
    └── script.js       # Example JS
```

## 🚀 Usage

Run the default Gulp task:

```bash
gulp
```

This will:
- Start a local server at `http://localhost:3000/`
- Automatically reload the browser when changes are detected in HTML, CSS, or JS files

## 📄 Example Gulp Task (`gulpfile.js`)

```js
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const paths = {
  html: './*.html',
  css: './css/**/*.css',
  js: './js/**/*.js',
};

function serve() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch(paths.html).on('change', browserSync.reload);
  gulp.watch(paths.css).on('change', browserSync.reload);
  gulp.watch(paths.js).on('change', browserSync.reload);
}

exports.default = serve;
```

## ✅ Requirements

- Node.js (v12+ recommended)
- Gulp CLI

---



