import mongoose from 'mongoose';

const connection = async () => {
    try {
        // const URL = `mongodb://Ranveer1234:Ranveer1234@inshort-clone-shard-00-00.tphgs.mongodb.net:27017,inshort-clone-shard-00-01.tphgs.mongodb.net:27017,inshort-clone-shard-00-02.tphgs.mongodb.net:27017/INSHORT-CLONE?ssl=true&replicaSet=atlas-134ev1-shard-0&authSource=admin&retryWrites=true&w=majority`;
        const URL = `mongodb+srv://Ranveer123:Ranveer123@inshort-clone.tphgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with database", error);
    }
}
export default connection;