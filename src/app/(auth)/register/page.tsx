import AuthForm from "@/components/AuthForm";
import GoogleSVG from "@/components/GoogleSVG";
import Link from "next/link";

export default function Page() {
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img
                    src="https://images.unsplash.com/photo-1733411676590-951bda1c25b8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div
                className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
            >
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Sign up for your account</h1>

                    <AuthForm page={"register"} />

                    {/* <form className="mt-6" action="#" method="POST">
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Enter Email Address"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                autoFocus
                                autoComplete="on"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name=""
                                id=""
                                placeholder="Enter Password"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                                required
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                        >
                            Sign Up
                        </button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />

                    <button
                        type="button"
                        className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                    >
                        <div className="flex items-center justify-center">
                            <GoogleSVG />
                            <span className="ml-4">Sign up with Google</span>
                        </div>
                    </button>

                    <p className="mt-8">
                        Already a Member?{" "}
                        <Link href="/login" className="text-blue-500 hover:text-blue-700 font-semibold">
                            Log in to an account
                        </Link>
                    </p> */}
                </div>
            </div>
        </section>
    );
}
