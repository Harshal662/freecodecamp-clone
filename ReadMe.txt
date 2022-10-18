This is a simple copy of website freeCodeCamp.org


Heroku - 


To run it -

1. Open terminal in the main directory
2. run npm install
3. nodemon app.js


In .env file -

Note: You need to add your google credentials for using google login features 
CLIENT_ID=
CLIENT_SECRET=                ........(both are of google api)
ATLAS_URI =mongodb+srv://Harshal:Harshal@cluster0.meqpq6g.mongodb.net/?retryWrites=true&w=majority
 

You can download mongodb and host it locally by changing (in app.js)

[ 
mongoose.connect(process.env.ATLAS_URI,
 { useNewUrlParser: true, useUnifiedTopology: true });
] 

(process.env.ATLAS_URI -> http://localhost:3000/<nameofdb>)


and also start mongodb and mongod before running the app.js
