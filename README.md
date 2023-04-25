
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
Define the requirements and constraints of the project, including the input and output data, 
the tools and technologies to be used, and any time or budget constraints.

Identify the data fields that need to be modified and determine 
how they will be represented in the local JavaScript application.

Choose a storage mechanism that can store the modified data, such as a database or a local file system.