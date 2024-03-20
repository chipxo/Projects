import BookNow from "./sections/BookNow/BookNow";
import BookNow2 from "./sections/BookNow/BookNow2";
import Header from "./sections/Header/Header";
import NavBar from "./sections/NavBar/NavBar";
import Steps from "./sections/Steps/Steps";
import WhatTouristSay from "./sections/WhatTouristSay/WhatTouristSay";
import WhyChooseUs from "./sections/WhyChooseUs/WhyChooseUs";

const App = () => (
  <>
    <Header />
    <NavBar />
    <WhyChooseUs />
    <Steps />
    <BookNow />
    <BookNow2 />
    <WhatTouristSay />
  </>
);

export default App;
