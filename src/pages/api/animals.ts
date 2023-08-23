import data from "./animals.json";
import type { NextApiRequest, NextApiResponse } from "next";

interface Animal {
  id: string;
  image: string;
  name: string;
  type: string;
  breed: string;
  gender: string;
  age_in_months: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  description: string;
  owner: {
    name: string;
    phone: string;
  };
}

export const getAnimalById = (
  id: string | string[] | undefined
): Animal | null => {
  return data.find((animal) => animal.id === id) ?? null;
};

const def = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;
  const animal = getAnimalById(id as string);

  if (!animal) {
    res.status(404).json({ message: "Pet not found" });
  } else {
    res.json(animal);
  }
};

export default def;