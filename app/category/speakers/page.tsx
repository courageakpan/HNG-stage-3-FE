import Navbar from "@/components/shared/Navbar";
import CategoryHeader from "@/components/shared/categoryHeader";
import Body from "@/components/category/speakers/body"
import Product from "@/components/shared/production"
import About from "@/components/shared/about"
import Footer from "@/components/shared/footer"


export default function HeadphonesPage() {
  return (
    <><main>
      <Navbar/>
      <CategoryHeader title="Speakers" />
      <Body/>
      <Product/>
      <About/>
      <Footer/>
    </main>
    </>
  );
}
