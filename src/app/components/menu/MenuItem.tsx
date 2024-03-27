import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <Image
          src={"/pizza.png"}
          width={145}
          height={143}
          objectFit={"contain"}
          alt="pizza"
          className="max-h-auto block mx-auto"
        />
      </div>
      <h4 className="font-semibold my-2 text-xl">Pepperoni</h4>
      <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      <button className="bg-primary text-white rounded-full px-4 py-2">Add to cart $12</button>
    </div>
  );
}
