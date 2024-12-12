"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useLogin } from "@/hooks/api-request/login";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function OTPInput() {
    const [otp, setOtp] = useState("");

    const router = useRouter();

    const { mutate, isPending, isError, error } = useLogin({ key: "verification", url: "https://6759175d60576a194d1309f8.mockapi.io/api/v1/todo" });

    const handleSubmit = () => {
        if (otp.length === 6) {
            mutate(
                { otp },
                {
                    onSuccess: (response) => {
                        router.push("/login");
                    },
                    onError: (err) => {
                        toast.error(err.message, {
                            style: {
                                border: "1px solid #ad183b",
                                padding: "10px",
                                color: "#fff",
                                backgroundColor: "#ad183b",
                            },
                            iconTheme: {
                                primary: "#fff",
                                secondary: "#ad183b",
                            },
                        });
                    },
                    onSettled: () => {
                        console.log("OOOOKKKKKk");

                        setOtp("");
                    },
                }
            );
        } else {
            toast.error("Please enter a valid 6-digit OTP.", {
                style: {
                    border: "1px solid #ad183b",
                    padding: "10px",
                    color: "#fff",
                    backgroundColor: "#ad183b",
                },
                iconTheme: {
                    primary: "#fff",
                    secondary: "#ad183b",
                },
            });
        }
    };

    return (
        <>
            <InputOTP maxLength={6} onChange={(value: string) => setOtp(value)}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>

            <button
                onClick={handleSubmit}
                disabled={isPending}
                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded
mt-4 px-4 py-2"
            >
                {isPending ? "Verifying..." : "Verify"}
            </button>
        </>
    );
}
