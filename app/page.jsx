import Header from "./components/Header";
import NavLinks from "./components/NavLinks";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Categories from "./components/Categories";
import WhyUs from "./components/WhyUs";
import PopularItems from "./components/PopularItems";
import Bundles from "./components/Bundles";
import Information from "./components/Information";

export default function Home() {
  return (
    <main>
      <Header />
      <NavLinks />
      <Hero />
      <Benefits />
      <Categories />
      <WhyUs />
      <PopularItems />
      <Bundles />
      <Information />
    </main>
  );
}
// TODO - work on functionality of the app
//  add React Icons
// Add search functionality
// increase inventory to coincide with categories
// make a Modal for app
// update product page
// update  cart page
// make checkout page
//  make responsive
