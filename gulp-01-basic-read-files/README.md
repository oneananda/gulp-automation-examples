# gulp-01-basic-read-files

This project demonstrates a basic Gulp task setup that copies files from a source folder to a destination folder. It’s a simple example to help you understand how to use Gulp to automate file management tasks.

## Overview

The Gulp task defined in this project reads all files from the `source-folder` and copies them to the `destination-folder`. This is accomplished using Gulp's streaming build system, which makes file operations fast and efficient.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Gulp CLI](https://gulpjs.com/) installed globally. You can install it using:
  
  ```
  npm install --global gulp-cli
  ```

## Installation

1. Clone this repository or copy the project files to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running:

   ```bash
   npm install gulp
   ```

## Project Structure

```
gulp-01-basic-read-files/
├── gulpfile.js         # Gulp task file
├── package.json        # Project metadata and dependencies
├── source-folder/      # Folder containing the source files to be copied
└── destination-folder/ # Folder where the files will be copied to (generated after running Gulp)
```

## Usage

1. **Prepare Your Folders:**
   - Place the files you want to copy into the `source-folder`.
   - Ensure the `destination-folder` exists or let Gulp create it during the copy process.

2. **Run the Gulp Task:**
   - In the project directory, execute the default Gulp task by running:

     ```
     gulp
     ```

   - This command will run the `copyHTML` task defined in `gulpfile.js`, copying all files from `source-folder` to `destination-folder`.

## How It Works

- **gulpfile.js:**
  - The file imports necessary functions (`src`, `dest`, and `series`) from Gulp.
  - The `copyHTML` function uses `src` to read all files from `source-folder` and then pipes these files to `dest`, which writes them into `destination-folder`.
  - The default task is defined as a series that runs the `copyHTML` function.

## Customization

- **File Patterns:**  
  You can modify the file matching pattern in the `src` method if you want to copy specific types of files (e.g., only HTML files). For example, to copy only `.html` files:
  
  ```
  return src('source-folder/*.html')
  ```

- **Additional Tasks:**  
  You can extend this Gulp setup by adding more tasks such as minification, concatenation, or live reloading. Check out the [Gulp documentation](https://gulpjs.com/docs/en/getting-started/quick-start) for more details.

## Acknowledgments

- [Gulp](https://gulpjs.com/) for providing a robust streaming build system.
- The Node.js community for continual support and updates.

Happy coding!
