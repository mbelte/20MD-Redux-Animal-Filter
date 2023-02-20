import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import animals from "./animalsSchema";
import { z } from 'zod'


mongoose.connect("mongodb://localhost:27017/animals");

const AnimalsSchema = z.object({
  name: z.string().max(20),
  image: z.string().url().max(255),
  specie: z.string().max(20)
})

type AnimalsType = z.infer<typeof AnimalsSchema>


const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});


app.get("/animals", (req: Request, res: Response) => {
  animals.find()
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

app.post("/animals", (req: Request<any, any, AnimalsType>, res: Response) => {
  console.log(AnimalsSchema.parse(req.body))

  const { name, image, specie } = req.body
  animals.create({
    name,
    image,
    specie
  });
  res.send({status: 'success'});
});



app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
