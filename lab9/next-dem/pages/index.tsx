import type { NextPage } from 'next'

type UserData = {
  name: string,
  location: string,
  exercise: string
};

const Home: NextPage = () => {
  const userData: UserData = {
    name: "Metee Yingyongwatthanakit",
    location: "Khon Kaen",
    exercise: "Jogging"
  };

  return (
    <div>
      <h1>Hello, {userData.name}</h1>
      <h2>He lives in {userData.location}</h2>
      <h3>His favorite  exercise is {userData.exercise}</h3>
    </div>
  )
};

export default Home;
