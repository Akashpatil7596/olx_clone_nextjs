import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex shrink-0 items-center">
            <Image alt="Your Company" src="./coca-cola.svg" width={"100"} height={"100"} className="h-8 w-auto" />
        </div>
    );
}
