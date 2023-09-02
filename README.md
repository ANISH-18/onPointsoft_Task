# onPointsoft_Task
#To install Dependency:  npm install

# Database Name: onPOintSoft

Build the authentication system using nodejs, expressjs and mongodb. The authentication includes Registertration and Login.
Database created to store the data is MongoDb: onPointSoft  and collection: users.

Register Route
http://localhost:8081/register
name, email, password.

Created /register endpoint to create new user. The API accept user details such as (name, email, password) and validate them, store them in database.
The validation added is for the registration user details.
name: should contain atleast 4 letters or it will give a response back "failed" and "name must be greater than 4"
email: should contain @ and .com , no normal text without that will not allowed. response "failed" and message: "email` is invalid " 
while registration if email already exists. Repsonse "fialed" message: "email already exists"
password : must contain atleast 1 uppercase, 1 lowercase, 1 digit, 1 symbol.  response "failed"
Password is hashed and stored using bcrypt, a password-hashing function
If response is "success" message"User registered"

Login Route
http://localhost:8081/login
email, password.


Created /login endpoint to login the user. The api accepts user details such as email, password and validate them.
The validation added is for the login user details.
email: should contain @ and .com , no normal text without that will not allowed. response "failed" and message: "email` is invalid " 
checks if email address is existing or not. respone if email not exists "failed". message: "Invalid EMail"
password: password is compared with hashed password stored in the database and gives respone, if any error then response is "failed" and message: "Invalid email and password".
If response is "success" message: "Authentication Success".


![register](https://github.com/ANISH-18/onPointsoft_Task/assets/123977257/5bc3ed89-a4fa-498b-89a4-36ca3674ce8c)

![email address](https://github.com/ANISH-18/onPointsoft_Task/assets/123977257/cea12560-071c-4e01-b593-a546aa8f6e00)

![password](https://github.com/ANISH-18/onPointsoft_Task/assets/123977257/7b8e4cd2-22f5-439d-98e8-7f9202af5615)

![login](https://github.com/ANISH-18/onPointsoft_Task/assets/123977257/262a7618-6e6b-4c54-999d-870f7dbb10f3)

![login err](https://github.com/ANISH-18/onPointsoft_Task/assets/123977257/162e3a8b-5871-455a-a9db-4fe951357d38)

