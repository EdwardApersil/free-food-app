

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center mt-32 rounded">
      <div className="absolute inset-0">
        {/* <Image
          src="/hero-pic.png"
          alt="hero picture"
          width={1500}
          height={300}
          objectPosition="center"
          quality={100}
          objectFit="cover"
        //   className="filter blur-md"
        /> */}
      </div>
      <div className="relative z-10 text-center text-gray-600 p-4">
        <h1 className="text-6xl font-bold">Discover the Best Free Foods</h1>
        <p className="text-lg text-gray-300 mt-4">Find the perfect food that is free to eat, delivered to your doorstep</p>
        <div className="mt-8">
          <button className="px-8 py-3 bg-green-500 text-white rounded">Discover Now</button>
        </div>
      </div>
    </div>
  );
}