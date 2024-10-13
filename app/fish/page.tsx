import { Fish as FishIcon } from "lucide-react";

export default function Fish() {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-center">
                <FishIcon size={48} />
            </div>

            <p className="text-lg text-center font-semibold">Alarm clock fish</p>
        </div>
    );
}
