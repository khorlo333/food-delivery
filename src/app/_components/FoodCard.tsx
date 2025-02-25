import Image from "next/image";

export default function FoodCard({ name }: { name: string }) {
  return (
    <div>
      <h2>{name}</h2>
      <div className="flex gap-5 flex-wrap">
        {Array.from(Array(6)).map((_: any, index: any) => {
          return (
            <div key={index} className="w-[350px] p-5 bg-slate-200 rounded-2xl">
              <Image
                className="rounded-lg"
                alt="food image"
                width={350}
                height={300}
                src="https://res.cloudinary.com/dlvvsmj6j/image/upload/v1740020447/enav18kbs2wsihqn4ahu.png"
              />
              <div className="flex gap-3 justify-between items-center w-full">
                <h3 className="font-bold text-[22px]">Food name</h3>
                <p>$12.99</p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                aspernatur mollitia, dolores sint eos id?
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
