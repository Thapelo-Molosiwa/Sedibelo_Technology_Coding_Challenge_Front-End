# User Data Table

This is a simple HTML web page that displays user data in a tabular format with functionalities for searching, filtering, and pagination. The data is fetched from a JSON file named `users.json`.

## Usage

To use this application, follow these steps:

1. Ensure you have the following files in your project directory:
   - `index.html`: Contains the HTML structure of the application.
   - `style.css`: Contains the CSS styles for the application.
   - `script.js`: Contains the JavaScript code for the application.
   - `users.json`: Contains the user data in JSON format.

2. Open the `index.html` file in a web browser.

3. You will see a user data table with options to search for users, filter users by designation, and navigate through pages.

## File Descriptions

- `index.html`: This file contains the HTML structure of the web page. It includes elements for the user interface such as the search input, dropdown for filtering, table to display user data, and pagination controls.

- `style.css`: This file contains the CSS styles for styling the user interface elements. It includes styles for the table, search input, dropdown, pagination, and responsive design.

- `script.js`: This file contains the JavaScript code to add functionality to the web page. It includes code to fetch user data from the `users.json` file, populate the table with data, implement search and filtering functionalities, and handle pagination.

- `users.json`: This file contains the user data in JSON format. Each user object contains properties such as name, surname, designation, and department.

## Functionality

- **Search**: Users can enter a search term in the search input field to filter users based on their name, surname, designation, or department. The table will update dynamically as the user types.

- **Filter**: Users can select a designation from the dropdown menu to filter users based on their designation. The table will update to display only users with the selected designation.

- **Pagination**: Users can navigate through pages of user data using the "Previous" and "Next" buttons in the pagination section. The number of users displayed per page can be configured in the JavaScript code.

## Responsive Design

The application includes responsive design to ensure optimal viewing experience across various devices. Media queries are used to adjust the layout and styling of elements for different screen sizes.

## Dependencies

- jQuery: The application uses jQuery library for DOM manipulation and AJAX requests.

## Compatibility

The application is compatible with modern web browsers that support HTML5, CSS3, and JavaScript. It has been tested on commonly used browsers such as Google Chrome, Mozilla Firefox, and Microsoft Edge.

## Credits

This application was created by Thapelo. Feel free to reach out for any questions or feedback.



--- 
