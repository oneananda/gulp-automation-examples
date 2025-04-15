# gulp-12-automated-version-bumping

### Explanation of the Workflow

- **`bump` Task:**  
  This task uses *gulp-bump* to read the current version from `package.json` and increment it by the specified type (in this example, a patch bump). Changing the option to `'minor'` or `'major'` will increment accordingly.

- **`commit` Task:**  
  Once the version is updated, this task runs *gulp-git* to commit the updated file(s). Here the commit message uses the convention `chore: bump version`, which you may customize to follow your project’s commit message style.

- **`tag` Task:**  
  After committing the change, *gulp-tag-version* reads the version from `package.json` and creates a Git tag that usually corresponds to that version. The optional prefix (here set to `'v'`) means that a version of `1.0.1` will result in a tag named `v1.0.1`.

- **`release` Task:**  
  Finally, the `release` task bundles these steps together in a series so that running `gulp release` in the command line will perform all three actions one after the other.

---
