"use client";

import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { useState } from "react";

function classNames(...classes: string[]) {
    console.log("...classes", ...classes);

    return classes.filter(Boolean).join(" ");
}

export default function HamburgerMenu({ navigation }: { navigation: any[] }) {
    const [current, setCurrent] = useState(navigation);

    return (
        <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                            item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                    >
                        {item.name}
                    </DisclosureButton>
                ))}
            </div>
        </DisclosurePanel>
    );
}
