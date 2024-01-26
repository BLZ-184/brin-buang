import { signUp } from "@/lib/firebase/service";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await signUp(req.body, (status) => {
      console.log(status);
      if (status) {
        console.log(status);
        res
          .status(200)
          .send({ status: true, statusCode: 200, message: "Success" });
      } else {
        console.log(status);
        res
          .status(400)
          .send({ status: false, statusCode: 400, message: "Failed" });
      }
    });
    return;
  } else {
    res.status(405).send({
      status: false,
      statusCode: 405,
      message: "Only POST requests allowed",
    });
  }
}
