import app from "./app.js";
import config from "./config/config.js";
import connectDB from "./database/connectDB.js";

await connectDB();

app.listen(config.port, () => {
    console.log(`Server Listening On http://localhost:${config.port}`);
});