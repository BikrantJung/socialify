import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { axios } from "../axios/axios";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

interface LoginInput {
  email: string;
  password: string;
}

async function loginUser(loginInput: LoginInput) {
  return await axios.post("auth/login/", loginInput);
}

function useLoginUser(loginInput: LoginInput) {
  return useMutation(() => loginUser(loginInput), {
    onError(error: AxiosError) {
      if (error.response?.data) {
        Object.values(error.response.data).map((item) => toast.error(item));
      }
    },
    onSuccess() {
      toast.success("Logged in successfully");
    },
  });
}

export { useLoginUser };
