"use client";

import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

function classNames(...classes: string[]) {
    console.log("...classes", ...classes);

    return classes.filter(Boolean).join(" ");
}

export default function NavbarMiddle({ navigation }: { navigation: any[] }) {
    const [current, setCurrent] = useState(navigation);

    return (
        <>
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {current.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? "page" : undefined}
                            className={classNames(
                                item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            onClick={() => {
                                const data = current?.map((e) =>
                                    item.name === e.name ? { name: e.name, href: "#", current: true } : { name: e.name, href: "#", current: false }
                                );
                                setCurrent(data);
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
