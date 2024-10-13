'use client'

import { usePathname } from 'next/navigation'
import NavigationItem from "./NavigationItem";
import { navigationConfig } from "./navigation.config";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="sticky md:fixed bottom-0 md:bottom-auto md:top-0 bg-orange-50 w-full order-last md:order-none">
            <ul className="flex flex-row justify-center">
                {navigationConfig.map((navigationItemConfig) => {
                    const isActive = pathname === navigationItemConfig.target;

                    return (
                        <NavigationItem
                            key={navigationItemConfig.id}
                            Icon={navigationItemConfig.Icon}
                            mobileDescription={navigationItemConfig.mobileDescription}
                            desktopDescription={navigationItemConfig.desktopDescription}
                            target={navigationItemConfig.target}
                            isActive={isActive}
                        />
                    );
                })}
            </ul>
        </nav>
    )
}
