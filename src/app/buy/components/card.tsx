import { CircleCheck } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface RewardsCardProps {
  title: string;
  description: string;
  price: string;
  onBuy?: () => void;
  image?: string;
  status: string;
}

const Card: React.FC<RewardsCardProps> = ({
  title,
  description,
  price,
  onBuy,
  image,
  status,
}) => {
  const isPurchased = status === "purchased";
  const displayStatus = isPurchased ? "Comprado" : "Pendente";

  return (
    <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-md dark:bg-gray-800 dark:shadow-gray-700">
      {image && (
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="h-48 w-full object-cover sm:h-56"
        />
      )}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-sm font-medium text-gray-500 capitalize dark:text-gray-400">
          {displayStatus}
        </p>
        <p className="flex-1 text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            <Image
              src={"/dolares.png"}
              alt="Icon credits"
              width={24}
              height={24}
            />
            {price}
          </span>
          <Button
            onClick={onBuy}
            disabled={isPurchased}
            className="flex items-center gap-2 px-4 py-2"
            variant={isPurchased ? "outline" : "default"} // Ajuste opcional, dependendo da sua implementação de botão
          >
            {isPurchased ? (
              <>
                <CircleCheck />
                Comprado
              </>
            ) : (
              "Comprar"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
