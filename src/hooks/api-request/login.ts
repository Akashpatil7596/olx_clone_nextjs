"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLogin = <TData extends Record<string, any>>({ key, url }: { key: string; url: string }) => {
    return useMutation({
        mutationKey: [key],
        mutationFn: (data: TData) => axios.post(url, data),
    });
};
