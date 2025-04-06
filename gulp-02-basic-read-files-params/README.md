# gulp-02-basic-read-files-params

This project demonstrates an enhanced Gulp task that copies files from a source folder to a destination folder based on a file type parameter provided via the command line. Using the `minimist` package, you can specify which file type to copy, making the task more flexible and customizable.

## Overview

The Gulp task reads files from the `source-folder` and copies them to the `destination-folder`. By default, it copies all files (`*.*`). However, you can narrow down the selection by providing the `--fileType` parameter. For example, you can copy only `.txt` or `.html` files.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Gulp CLI](https://gulpjs.com/) installed globally:
  
  ```
  npm install --global gulp-cli
  ```

## Installation

1. Clone this repository or copy the project files to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running:

   ```
   npm install gulp minimist
   ```

## Project Structure

```
gulp-02-basic-read-files-params/
├── gulpfile.js         # Gulp task file with parameterized file copying
├── package.json        # Project metadata and dependencies
├── source-folder/      # Folder containing the source files to be copied
└── destination-folder/ # Folder where the files will be copied to (created after running Gulp)
```

## Usage

1. **Prepare Your Folders:**
   - Place the files you want to copy into the `source-folder`.
   - The `destination-folder` will be created if it doesn't already exist.

2. **Run the Gulp Task with a Parameter:**
   - In the project directory, execute the default Gulp task along with the `--fileType` parameter. For example:

     ```
     gulp --fileType=txt
     ```

     This command copies only `.txt` files. To copy all files, you can use the default or `*.*`:

     ```
     gulp --fileType="*.*"
     ```

   - You can also specify other file types like `.html`:

     ```
     gulp --fileType=html
     ```

   - Note: If you provide a file type that does not match any files in the `source-folder` (e.g., `gulp --fileType=htmls`), no files will be copied.

## How It Works

- **gulpfile.js:**
  - The file imports `src`, `dest`, and `series` from Gulp along with the `minimist` module for parsing command-line arguments.
  - The `options` object is created by parsing the process arguments, with a default `fileType` value of `'*'`.
  - The `copyFiles` function determines the file matching pattern based on the `fileType` provided:
    - If `fileType` is `'*'` or `'*.*'`, all files in `source-folder` are copied.
    - Otherwise, only files with the specified extension are selected.
  - The task logs the pattern used for copying and then pipes the matching files from `source-folder` to `destination-folder`.
  - The default Gulp task is defined using `series(copyFiles)`.

## Customization

- **Modifying File Patterns:**  
  You can adjust the file matching logic in `copyFiles()` if you need more complex patterns or want to handle multiple file types.

- **Additional Tasks:**  
  Extend this Gulp setup by adding more tasks such as minification, concatenation, or live reloading as per your project requirements.

## Acknowledgments

- [Gulp](https://gulpjs.com/) for providing a powerful streaming build system.
- [Minimist](https://www.npmjs.com/package/minimist) for easy command-line argument parsing.

Happy coding!
