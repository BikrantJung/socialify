import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { axios } from "../axios/axios";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { IUserRegister } from "../types/auth/register.types";

async function createUser(registerInput: IUserRegister) {
  return await axios.post("auth/register/", registerInput, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

function useCreateUser(registerInput: IUserRegister) {
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
