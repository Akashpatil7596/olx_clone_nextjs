import OTPInput from "@/components/OTPInput";

export default function Page() {
    return (
        <div
            className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
  flex items-center justify-center flex-col gap-4"
        >
            <div className="otp-text">
                <h1 className=" text-2xl font-semibold">🤖 Enter OTP... </h1>
            </div>
            <div className="otp-box"></div>
            <OTPInput />
        </div>
    );
}
