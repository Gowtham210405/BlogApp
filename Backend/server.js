import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    const port = process.env.PORT || 4000;

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
.catch((error) => {
    console.log("MongoDB Connection Error:", error);
});