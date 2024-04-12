

const express = require("express")
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express()
app.use(express.json())


const dbPath = path.join(__dirname, "recipedatabase.db");

let db = null;


const initializeDBAndServer = async () => {
    try {
      db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
      });
      app.listen(6000, () => {
        console.log("Server Running at http://localhost:6000/");
      });
    } catch (e) {
      console.log(`DB Error: ${e.message}`);
      process.exit(1);
    }
  };
  
  initializeDBAndServer();






// For Getting Recipe List
app.get("/res", async (req,res) => {
   try{ const sqlQuery = `
    SELECT * FROM recipes;
    `;
    const response = await db.all(sqlQuery)
    res.json(response);
}catch(e){
    console.log(`DB Error: ${e.message}`)
    process.exit(1);
}

})

// For getting Each Recipe Details
app.get("/recipe/:id" , async (req,res) => {
  try{
    const {id} = req.params
    // console.log(id)
    const sqlQuery = `
    SELECT * FROM recipes WHERE id = ${id};
    `
    const response = await db.get(sqlQuery)
    res.json(response)
  }catch(e){
    console.log(`DB Error: ${e.message}`)
    process.exit(1);
  }
})


app.post("/signup/user", async (req,res) => {
  try{
    const {userDetails} = req.body;
    const {id,username,password,email} = userDetails
    const sqlQuery = `
    INSERT INTO users(id,username,password,email)
    VALUES(
      ${id},
      "${username}",
      "${password}",
      "${email}"
    );
    `
    db.run(sqlQuery);
    res.json("Query Executed");

  }catch(e){
    console.log(`DB Error: ${e.message}`)
    process.exit(1);
  }
})



app.post("/login/check", async (req,res) => {
  try{
    const {userDetails} = req.body;
    const {username,password} = userDetails;
    const userQuery= `SELECT * FROM users WHERE username LIKE '${username}';`

    const dbUser = db.get(userQuery)
    if (dbUser === undefined){
      res.json("Redirect to Signup")
    } 
    else{
      res.json("Redirect to Home");
    }


  }catch(e){
    console.log(`DB Error: ${e.message}`)
    process.exit(1);
  }
})









// app.get("/api",(req,res) => {
//     res.json({"users":["benny"]})
// })


// app.listen(5000, () => {
//     console.log("Server started on Port 5000");
// })