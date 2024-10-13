import Link from "next/link";
import { LucideIcon } from "lucide-react";

export interface NavigationItemProps {
    mobileDescription: string;
    desktopDescription: string;
    Icon: LucideIcon;
    target: string;
};

export default function NavigationItem(props: NavigationItemProps) {
    const {
        mobileDescription,
        desktopDescription,
        Icon,
        target,
    } = props;

    return (
        <li className="flex">
            <Link href={target} className="flex flex-col justify-center content-center justify-items-center items-center gap-2 pt-2 pr-3 pb-3 pl-3 rounded-t-lg md:rounded-t-none md:rounded-b-lg text-sm hover:bg-amber-800 hover:text-white">
                <Icon />
                <span className="md:hidden">{mobileDescription}</span>
                <span className="hidden md:inline">{desktopDescription}</span>
            </Link>
        </li>
    )
}
