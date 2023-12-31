export async function GET(req, res) {
  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page");

  // get the values
  // that were sent across to us.
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const pass = searchParams.get("pass");
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const phone = searchParams.get("phone");

  console.log(email);
  console.log(pass);
  console.log(firstName);
  console.log(lastName);
  console.log(phone);

  // database call goes here
  const { MongoClient } = require("mongodb");

  // const url = "mongodb://root:example@localhost:27017/";
  const url =
    "mongodb+srv://domon111:CNaQNKhankh7hPSo@cluster0.v8eirmo.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(url);

  const dbName = "app"; //database name

  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("login"); // collection name

  const findResult = await collection.insertOne({
    username: email,
    pass: pass,
    firstName: firstName,
    lastname: lastName,
    phone: phone,
  });

  let valid = true;

  // at the end of the process we need to send something back.
  return Response.json({ data: "valid" });
}
