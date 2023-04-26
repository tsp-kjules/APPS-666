
# APPS-901

## Story
As a user, I want to be able to modify data in a provided JSON file through a local JavaScript application, 
store the changes, and track the differences between the initial JSON file and the modified version.

The application should allow me to make changes to the data, save those changes, 
and render the modified data upon restarting the application. Changes in the data should be easily identifiable.

## Conditions of Satisfaction
The user can view and modify data from the provided JSON file within the local JavaScript application.

The user can save modified data, and the data should be retrievable from a storage mechanism after the application is restarted.

Upon restarting the application, the modified data is retrieved and displayed, instead of the original JSON data (if changes are present).

The application highlights or identifies the differences between the initial JSON file and the modified version.

The application's source code is managed using a version control system (e.g., Git).

The source code repository includes a clear commit history and follows best practices for version control.

## Starting Point
STEP 1. Use local JavaScript application to read and write JSON files.
 Use FS module.

STEP 2. Load the initial JSON file and display the data to user.
Use React Framework.

STEP 3. Allow users to modify the data and sve changes. Use event listener
to detect changes. Use fs module to write changes back to JSON file.

 STEP 4. Store the modified data in a separate JSON file.
   Use a similar naming convention.


 STEP 5.Track the differences between the original and modified JSON files.
   Use deep-diff to compare the two files and highlight the differences.

 STEP 6. After restarting application, load the modified data from the
 modified JSON.

 STEP 7. Provide a clear and user-friendly interface for the user to
 view the differences between the original and modified JSON files.
   Use an UI framework to build the interface.
   Highlight the difference using colors or other visual cues.