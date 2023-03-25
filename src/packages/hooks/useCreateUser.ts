import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { axios } from "../axios/axios";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

interface RegisterInput {
  email: string;
  password: string;
  username: string;
}

async function createUser(registerInput: RegisterInput) {
  return await axios.post("auth/register/", registerInput);
}

function useCreateUser(registerInput: RegisterInput) {
  return useMutation(() => createUser(registerInput), {
    onError(error: AxiosError) {
      if (error.response?.data) {
        Object.values(error.response.data).map((item) => toast.error(item));
      }
    },
    onSuccess() {
      toast.success("Registered successfully");
    },
  });
}

export { useCreateUser };