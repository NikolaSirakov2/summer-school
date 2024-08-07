import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:flex flex-wrap h-screen">
      <div className="lg:w-1/2 lg:h-1/2">
      <div
        className="bg-gradient-to-br from-blue-100 via-blue-300 to-blue-100 rounded-2xl flex justify-center items-center h-[20vh] lg:h-[45vh] m-2 lg:m-6"
      >
        <h1 className="font-lg text-3xl flex flex-col items-center">
          Добре дошли в<br></br>
          <span className="font-bold block mt-4 text-4xl lg:text-6xl">
            "Слънчево Знание"
          </span>
        </h1>
      </div>
      </div>
      <div className="w-[95vw] lg:w-1/2 lg:h-1/2 flex justify-center items-center mx-2 my-8 lg:m-0">
        <Image
          src="/class-room.jpg"
          alt="summer"
          width={800} 
          height={200} 
          layout="responsive" 
          className="rounded-2xl lg:m-6 max-h-[45vh]"
        />
      </div>
      <div className="hidden lg:h-1/2 lg:w-1/2 lg:flex justify-center items-center">
        <Image
          src="/school-yard.jpg"
          alt="summer"
          width={800} 
          height={200} 
          layout="responsive" 
          className="rounded-2xl m-6 max-h-[45vh]"
        />
      </div>
      <div className="lg:w-1/2 lg:h-1/2">
      <div
        className="rounded-2xl flex flex-col justify-center items-center h-[45vh] lg:h-[45vh] m-2 mt-6 lg:m-6 bg-gradient-to-br from-red-100 via-red-300 to-red-100"
      >
        <h2 className="font-semibold m-6 lg:mx-10 lg:text-lg">
          Лятната занималня "Слънчево Знание" предлага на учениците от 1 до
          7 клас възможността да усъвършенстват знанията си по различни учебни
          предмети чрез допълнителни часове, които съответстват на учебната
          програма през годината. В нашата занималня всеки ден е
          изпълнен с нови предизвикателства и вълнуващи преживявания!
        </h2>
        <Link href="/signup">
        <Button className="hover:bg-white hover:text-black" >Влез сега</Button>
        </Link>
      </div>
      </div>
    </div>
  );
}
