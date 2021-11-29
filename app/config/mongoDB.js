const MONGO_DB = require("mongodb");
const MongoClient = MONGO_DB.MongoClient;
const url = "mongodb://gooorang:gooorang@cluster0-shard-00-00.er7kb.mongodb.net:27017,cluster0-shard-00-01.er7kb.mongodb.net:27017,cluster0-shard-00-02.er7kb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-jbiqvv-shard-0&authSource=admin&retryWrites=true&w=majority";

try {
  const M_CONNECT = MongoClient.connect(url, {
    useUnifiedTopology: true,
  });
   console.log("suceeeesss");
  module.exports = { MONGO_DB, M_CONNECT };
} catch (ex) {
  console.log(err);
}
