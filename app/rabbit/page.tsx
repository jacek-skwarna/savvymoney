import { Rabbit as RabbitIcon } from "lucide-react";

export default function Rabbit() {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-center">
                <RabbitIcon size={48} />
            </div>

            <p className="text-lg text-center font-semibold">Rabbit</p>
        </div>
    );
}
