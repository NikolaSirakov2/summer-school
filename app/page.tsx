import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:flex flex-wrap h-screen">
      <div
        className="lg:w-1/2 bg-blue-200 rounded-2xl flex justify-center items-center"
        style={{ height: "50vh" }}
      >
        <h1 className="font-lg text-3xl flex flex-col items-center">
          Добре дошли в<br></br>
          <span className="font-bold block mt-4 text-4xl lg:text-6xl">
            "Лятно Знание"
          </span>
        </h1>
      </div>
      <div
        className="lg:w-1/2 flex justify-center items-center"
        style={{ height: "50vh" }}
      >
        <Image
          src="/class-room.jpg"
          alt="summer"
          width={800}
          height={200}
          className="rounded-2xl"
        />
      </div>
      <div
        className="hidden lg:w-1/2 lg:flex justify-center items-center"
        style={{ height: "50vh" }}
      >
        <Image
          src="/school-yard.jpg"
          alt="summer"
          width={800}
          height={200}
          className="rounded-2xl"
        />
      </div>
      <div
        className="lg:w-1/2 bg-red-200 rounded-2xl flex justify-center lg:items-center"
        style={{ height: "50vh" }}
      >
        <h2 className="font-semibold m-6 lg:mx-10 text-lg">
          Лятната занималня "Лятно знание" предлага на учениците от 1 до
          7 клас възможността да усъвършенстват знанията си по различни учебни
          предмети чрез допълнителни часове, които съответстват на учебната
          програма през годината. В нашата занималня всеки ден е
          изпълнен с нови предизвикателства и вълнуващи преживявания!
        </h2>
      </div>
    </div>
  );
}
