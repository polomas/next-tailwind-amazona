import User from "../../models/User";
import data from "../../Utils/data";
import db from "../../Utils/db";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  res.send({ message: "seed successfully" });
};
export default handler;
