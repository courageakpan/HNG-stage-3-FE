import Navbar from "@/components/shared/Navbar";
import CategoryHeader from "@/components/shared/categoryHeader";
import Production from "@/components/category/headphones/production"
import Product from "@/components/shared/production"
import About from "@/components/shared/about"
import Footer from "@/components/shared/footer"


export default function HeadphonesPage() {
  return (
    <><main>
      <Navbar/>
      <CategoryHeader title="Headphones" />
      <Production/>
      <Product/>
      <About/>
      <Footer/>
    </main>
    </>
  );
}
