import { Request, Response } from "express";
import { User } from "../../entity/User";
import NodeMailer from 'nodemailer';
import { isSet } from "util/types";

export default async (req: Request, res: Response) => {
  const users = await User.find({
    select: ["id", "name", "citizenshipNumber", "email"],
    where: { verified: false },
  });

  //node-mailer
  if (users[0]){
    var transporter = NodeMailer.createTransport({
    service: "gmail",
      auth: {
        user: "truef373@gmail.com",
        pass: "gttvcbqbrmxnshrj",
      },
    });
  
    var mailOptions = {
      from: "youremail@gmail.com",
      to: users[0]['email'],
      subject: "Verification Mail",
      text: "Your account has been successfully verified.",
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  // console.log(users[0]['email']);
  return res.send({ users });
};
