import { Rat as RatIcon } from "lucide-react";

import RatGridItem from "../../components/RatGridItem/RatGridItem";

export default function PageRat() {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-center">
                <RatIcon size={48} />
            </div>

            <p className="text-lg text-center font-semibold">Rat</p>

            <div className="grid grid-cols-1 gap-2 h-52">
                <div className="grid grid-cols-2 gap-2">
                    <RatGridItem>1</RatGridItem>
                    <RatGridItem>2</RatGridItem>
                </div>

                <RatGridItem>3</RatGridItem>
            </div>
        </div>
    );
}