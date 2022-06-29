import {lazy} from 'react';
const Hero = lazy(() => import('../components/Hero'));
const Home = () => {
  return (
<Hero/>
  );
};

export default Home;
