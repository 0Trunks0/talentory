
import { PaymentButton } from "@/Components/payment/PaymentButton";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      

      <section className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">Freelancing Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our wide range of freelancing services to find the perfect solution for your needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src="https://fiverr-res.cloudinary.com/image/upload/w_800/f_auto,q_auto/v1/attachments/generic_asset/asset/da6ec76c2e90e9a0b79ba58ba5ee7344-1631173799957/java%20vs%20javascript-min.jpg" alt="Service 1" className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">Programming & Tech</h3>
              <p className="text-center text-muted-foreground">Discover freelance opportunities in programming and tech, from software development to data analysis, and connect with clients seeking your expertise.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src="https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg" alt="Service 2" className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">Graphics & Design</h3>
              <p className="text-center text-muted-foreground">Find freelance gigs in graphic design and creative projects, connecting with clients who need stunning visuals and innovative design solutions.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/298014076/original/af255f6975cbb3f02e24009ec11b0c3406045fe5/make-translation-and-typing.png" alt="Service 3" className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">Writing & Translation</h3>
              <p className="text-center text-muted-foreground">Explore freelance opportunities in writing and translation, where you can work on diverse projects and help clients communicate effectively across languages.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src="https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/0e58c7ec91d8ee64e13d372de3ee2da7-1593443459781/promo%20video%20-%20fiverr.jpg" alt="Service 4" className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">Video & Animation</h3>
              <p className="text-center text-muted-foreground">Discover freelance opportunities in video and animation, where you can create captivating content and bring ideas to life through dynamic visuals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
