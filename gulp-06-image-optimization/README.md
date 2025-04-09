# gulp-06-image-optimization

A Gulp task setup for image optimization using [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin). This project processes and optimizes JPEG, PNG, and SVG files to reduce file sizes while maintaining visual quality.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **JPEG Optimization:** Uses `imagemin.mozjpeg` with quality set to 75 and enables progressive rendering.
- **PNG Optimization:** Uses `imagemin.optipng` with an optimization level of 5.
- **SVG Optimization:** Uses `imagemin.svgo` while preserving the viewBox and IDs to ensure SVG files remain scalable and accessible.

## Installation

Before running the task, make sure you have [Node.js](https://nodejs.org/) installed. Then, install the dependencies using npm or yarn.

Using **npm**:

```bash
npm install gulp gulp-imagemin --save-dev
```

Or using **yarn**:

```bash
yarn add gulp gulp-imagemin --dev
```

## Usage

This project contains a Gulp task defined in `gulpfile.mjs` which optimizes images stored in `source-folder/images` and outputs them to `destination-folder/images`.

To run the image optimization task, execute:

```bash
npx gulp
```

If you want to run the specific task directly:

```bash
npx gulp optimizeImages
```

### Command Explanation

- **Source Folder:** `source-folder/images/**/*.{png,jpg,jpeg,svg}` – Includes all PNG, JPG, JPEG, and SVG images in the specified folder and its subdirectories.
- **Destination Folder:** `destination-folder/images` – The optimized images will be saved here.

## Configuration

You can adjust the image optimization settings in the `gulpfile.mjs`:

- **JPEG:** Change the quality and progressive settings in `imagemin.mozjpeg({ quality: 75, progressive: true })`.
- **PNG:** Tweak the optimization level with `imagemin.optipng({ optimizationLevel: 5 })`.
- **SVG:** Modify the SVGO plugin settings in `imagemin.svgo({ plugins: [{ removeViewBox: false }, { cleanupIDs: false }] })`.

Feel free to modify the file paths or optimization parameters to suit your project needs.

## Project Structure

```
gulp-06-image-optimization/
├── source-folder/
│   └── images/
│       ├── example.png
│       ├── example.jpg
│       └── example.svg
├── destination-folder/
│   └── images/      <-- Optimized images will be output here
├── gulpfile.mjs
├── package.json
└── README.md
```

- **gulpfile.mjs:** Contains the Gulp task for image optimization.
- **source-folder/images:** Place your original images here.
- **destination-folder/images:** The optimized images will be saved here after running the task.

## Contributing

Contributions are welcome! If you’d like to improve the Gulp task or add new features, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Open a pull request describing your changes in detail.

## License

This project is licensed under the [MIT License](LICENSE).