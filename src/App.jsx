import React, { lazy, Suspense } from "react";
import {
  Hero,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  PopularProducts,
} from "./sections";
import Nav from "./components/Nav";
const CustomerReviews = lazy(() => import("./sections/CustomerReviews"));
const Footer = lazy(() => import("./sections/Footer"));

function App() {
  return (
    <main className="relative bg-amber-50">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding bg-pale-blue">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding py-10 bg-pale-blue">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <Suspense
          fallback={<div className="text-blue-500">Loading reviews ..</div>}
        >
          <CustomerReviews />
        </Suspense>
      </section>
      <section className="padding-x sm:py-32 p-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Suspense fallback={<div>Loading Footer ...</div>}>
          <Footer />
        </Suspense>
      </section>
    </main>
  );
}

export default App;
