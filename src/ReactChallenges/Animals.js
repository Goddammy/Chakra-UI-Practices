import react from 'react';
import AnimalList from './AnimalList';
import { FaCat, FaDog} from "react-icons/fa";
import { GiChicken, GiCow, GiHorseHead, GiSheep } from "react-icons/gi";

function Animals() {
  const mamals = [
    {
      name: 'dog',
      avater: <FaDog color="#CBD5E0"/>
    },
    {
      name: 'cat',
      avater: <FaCat color="#CBD5E0"/>
    },
    {
      name: 'chicken',
      avater: <GiChicken color="#CBD5E0"/>
    },
    {
      name: 'cow',
      avater: <GiCow color="#CBD5E0"/>
    },
    {
      name: 'sheep',
      avater: <GiSheep color="#CBD5E0"/>
    },
    {
      name: 'horse',
      avater: <GiHorseHead color="#CBD5E0"/>
    },
  ];

  return <AnimalList mamals={mamals} />;
}

export default Animals;
