"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

type Props = {
    children: React.ReactNode;
};

export default function Providers({ children }: Props) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster position="top-center" />
            {children}
        </QueryClientProvider>
    );
}
