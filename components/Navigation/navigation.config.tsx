import { Fish, Bird, Rabbit, Rat } from "lucide-react";
import { NavigationItemProps } from "./NavigationItem";

export const navigationConfig: (NavigationItemProps & { id: string })[] = [
    {
        id: "fish-page-id",
        mobileDescription: "Fish",
        desktopDescription: "Alarm Clock Fish",
        Icon: Fish,
        target: "/fish",
    },
    {
        id: "bird-page-id",
        mobileDescription: "Bird",
        desktopDescription: "Black Bird",
        Icon: Bird,
        target: "/bird",
    },
    {
        id: "rabbit-page-id",
        mobileDescription: "Rabbit",
        desktopDescription: "White Rabbit",
        Icon: Rabbit,
        target: "/rabbit",
    },
    {
        id: "rat-page-id",
        mobileDescription: "Rat",
        desktopDescription: "Red Rat",
        Icon: Rat,
        target: "/rat",
    },
];
