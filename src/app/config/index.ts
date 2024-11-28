import dotenv from "dotenv";
import path from 'path'

// Configure dotenv to load environment variables from a specific file
// The path is constructed using the current working directory
dotenv.config({ 
    path: path.join(process.cwd(), ".env") // Specify the path to the .env file
});
    