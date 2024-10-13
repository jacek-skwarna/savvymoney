import NavigationItem from "./NavigationItem";
import { navigationConfig } from "./navigation.config";

export default function Navigation() {
    return (
        <nav className="bg-orange-50 w-full order-last md:order-none">
            <ul className="flex flex-row justify-center">
                {navigationConfig.map((navigationItemConfig) => (
                    <NavigationItem
                        key={navigationItemConfig.id}
                        Icon={navigationItemConfig.Icon}
                        mobileDescription={navigationItemConfig.mobileDescription}
                        desktopDescription={navigationItemConfig.desktopDescription}
                        target={navigationItemConfig.target}
                    />
                ))}
            </ul>
        </nav>
    )
}
