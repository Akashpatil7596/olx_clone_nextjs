"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import GoogleSVG from "./GoogleSVG";
import { useLogin } from "@/hooks/api-request/login";
import SpinnerSVG from "./SpinnerSVG";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface InputForm {
    email: string;
    password: string;
}

export default function AuthForm({ page }: { page: string }) {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<InputForm>();

    const { mutate, isPending, isError, error } = useLogin({ key: page, url: "https://6759175d60576a194d1309f8.mockapi.io/api/v1/todo" });

    const onSubmit: SubmitHandler<InputForm> = (data: InputForm) => {
        mutate(data, {
            onSuccess: (response) => {
                if (page === "login") {
                    router.push("/dashboard");
                }

                if (page === "register") {
                    router.push("/login");
                }
            },
            onError: (err) => {
                console.error("Login failed:", err);
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
        });
    };

    return (
        <>
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block text-gray-700">Email Address</label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        name="email"
                        placeholder="Enter Email Address"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        autoFocus
                        autoComplete="on"
                    />
                    {errors.email && errors.email.type === "required" && <p className="errorMsg text-sm text-red-600 mt-1">Email is required.</p>}
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true, minLength: 6 })}
                        name="password"
                        placeholder="Enter Password"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
focus:bg-white focus:outline-none"
                    />
                    {errors.password && errors.password.type === "required" && <p className="errorMsg text-sm text-red-600 mt-1">Password is required.</p>}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="errorMsg text-sm text-red-600 mt-1">Password should be at-least 6 characters.</p>
                    )}
                </div>

                {page === "login" && (
                    <div className="text-right mt-2">
                        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                            Forgot Password?
                        </a>
                    </div>
                )}

                <button
                    type="submit"
                    className="flex items-center justify-center w-full bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
px-4 py-3 mt-6"
                >
                    Log In {isPending && <SpinnerSVG />}
                </button>
            </form>
            <hr className="my-6 border-gray-300 w-full" />

            <button
                type="button"
                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
                <div className="flex items-center justify-center">
                    <GoogleSVG />
                    <span className="ml-4">{page === "login" ? "Log in with Google" : "Sign up with Google"}</span>
                </div>
            </button>

            {page === "login" && (
                <p className="mt-8">
                    Need an account?{" "}
                    <Link href={"/register"} className="text-blue-500 hover:text-blue-700 font-semibold">
                        Create an account
                    </Link>
                </p>
            )}

            {page === "register" && (
                <p className="mt-8">
                    Already a Member?{" "}
                    <Link href="/login" className="text-blue-500 hover:text-blue-700 font-semibold">
                        Log in to an account
                    </Link>
                </p>
            )}
        </>
    );
}
