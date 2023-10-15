import mongoose from "mongoose";

mongoose.Promise = global.Promise;

export default async function connect() {
    try {
        await mongoose.connect(process.env.AZURE_URI);
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}

// export default async function connect() {
//     await mongoose.connect(process.env.ATLAS_URI);
//     console.log("Database Connected");
// }