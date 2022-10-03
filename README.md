# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#Important note
### Bofore runnning the frontend (i.e) vitasoft_part 1 , need to start backend server (i.e) vitasoft_part2-b- repository
## `npm start`
 Runs the backend server on port 3001
 which connects with the MongoDB cluster
 Open [http://localhost:3001](http://localhost:3001) to view it in your browser.
 
 
 
 


#Backend Part
###ADD ON
you can also change MongoDB cluster in .env file which is in  vitasoft_part2-b- repository

in my case it contains
###DATABASE_URL=mongodb+srv://admin1:admin@cluster0.imzz1.mongodb.net/test
 
### Im using REST client instead of postman here.
route.rest constains all the request

###GET http://localhost:3001/
will get all the data present in DB.

###DELETE http://localhost:3001/form/delete-details/:id
will delete the data respective to ID

######PATCH http://localhost:3001/update/:id
Content-Type: application/json

{
    "firstName":"Mals"
}

will update the value respective to the ID
