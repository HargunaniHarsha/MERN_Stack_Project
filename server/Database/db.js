import mongoose from "mongoose";

const Connection = async (username, password) => {
  console.log(username, password); 
  
  const URL = `mongodb+srv://harsha:harshahappy@cluster0.2jxzhfc.mongodb.net/Cluster0?retryWrites=true&w=majority`

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected succefully");
  } catch (error) {
    console.log("Error occured while database connection", error);
  }
};

export default Connection;
