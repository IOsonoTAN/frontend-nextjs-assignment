# Appsynth Frontend Assignment 
\* **Confidential Please don't disclose this assignment to anyone.**
\* Deadline on April 6, 2023

## Story and Goals
We plan to launch a CRUD system for use in our back office, so we need your help to create the system from Next.js with React.js and Typescript, and the structure is flexible, easy to understand, and easy to be supported by your team members.

## Your task
Here are the requirements of the CRUD system, and we focus on creating a user controller first.
1. The design is unnecessary, you can design whatever you like, but the function must work well, and we prefer to use any framework to reduce your time.
2. We need a list of users, which you can get from our API. The list shows only the id, first, and last names with pagination.
3. We need a dialog popup to show the user another detailed data from a row.
4. We need a create user form and send it to our API.
5. We need a calendar dialog to select the user's birthday.
6. We need confirmation after submission, such as a toast or an alert message in the popup, and refresh the new data from the API.
7. We need to delete users as well.
8. We also need to change the user's first name, last name, and date of birth.

## Available APIs
We finished the backend with APIs in this project; you can install all packages before running the project and reaching APIs.

**Get a user list**
- Query strings available are page and limit as a number.
```
GET http://localhost:3000/api/users?page=1&limit=1
```

- Example response from the API.
```json
{
    "data": [
        {
            "id": 693,
            "email": "akakob@hip.tg",
            "avatar": "https://www.gravatar.com/avatar/56c9d0b690c522224dd1257fa0e89027",
            "address": "1197 Vizuk Way",
            "suffix": "Esq.",
            "firstName": "Kathryn",
            "lastName": "Fattori",
            "phoneNumber": "2165768886",
            "gender": "Female",
            "birthday": "10/26/1980"
        }
    ],
    "pagination": {
        "page": 1,
        "pages": 30,
        "limit": 1,
        "count": 30
    }
}
```

**Create a user**
```
POST http://localhost:3000/api/users
```
- Request bodies are required
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phoneNumber": "string",
  "gender": "string",
  "avatar": "string",
  "address": "string",
  "suffix": "string",
  "birthday": "string"
}
```

## Extra points
- [ ] Live demo on Heroku.
- [ ] Implement a unit test.
- [ ] Implement an e2e test.
- [ ] Lazy loading.
- [ ] Backdrop when refreshing the data.
- [ ] Handle state to disable and block user actions when sending a request.
- [ ] Mobile Responsiveness.
- [ ] Nice UX.
- [ ] Accessibility.

## Before you start
1. You can use this repository while you are developing the app.
2. To submit the test assignment, please **close the "Assignment Done" issue in the "issues" tab.**
3. We will review the code **only after you close the "Assignment Done" issue.**
4. Feel free to reach out if you encounter any problems or have questions - good communication is a big part of the role.
5. We wish you good luck, and we're looking forward to reviewing your code 😎

