import Image from "next/image";
import NotFound from "@/assets/404-page.png";
import Link from "next/link";

const notFound = () => {
  return (
    <section className="mt-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col space-y-5 justify-center items-center min-h-screen">
        <Image src={NotFound} alt="Page not found" width={400} height={500} />

        <h1 className="text-dark font-bold text-3xl lg:text-4xl tracking-wider text-center">Opps! Page Not Found</h1>

        <Link href='/'>
  <button className="border-2 border-purple-500 text-purple-600 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
  ← Back to Homepage
</button>
        </Link>
      </div>
    </section>
  );
};

export default notFound;
