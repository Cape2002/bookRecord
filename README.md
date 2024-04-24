

## Book Record Managaemnt System

>>This is a book record management API Backend Application

## Routes and Endpoints

### /users
POST: Create a New User
GET :Get all lists of users

### /users/{id}
GET: Get a user by ID
PUT: Update a user by Id
DELETE: Delete a user by Id( chack if she/he still have an issued book) && ( is there any finr collected from the student)


### /users/subscription-details/{id}
GET: Get users subscription details
1. Date of subscription
2. Valid till
3. Fine if any

### /books

GET: Get all books
POST: Create/Add a new book


### /books/{id}
GET: Get a book by Id
PUT: Update a book by its Id

### /books/issued
GET: Get all issued Books

### /books/issued/withfine
GET: Get all issued books with fine

#### Subscription Types
 >>Basic (3 months)
 >>Standard (6 months)
 >>Premium (12 months)

 #### Commands
 >>npm init
 >>npm init -y (if we dont want any questions then use this command)
 >>npm i express
 >>npm i nodemon --save-dev


 MONGO DB
 >>its a database
 >>this is a non relational databse
>>it doesn't has a  structure
in table each row is called entry or tuple
and colum is called entity or fields
