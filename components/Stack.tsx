import { stack } from "@/data/config";
import Image from "next/image";

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {stack.title}
        </h2>
      </div>
      <div className="w-full flex flex-wrap gap-6 -m-2">
        {stack.stack.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              className="hover:scale-110 duration-300 cursor-pointer"
              src={item.Icon}
              alt=""
              width={60}
              height={60}
            />
            <span>{item.Name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
