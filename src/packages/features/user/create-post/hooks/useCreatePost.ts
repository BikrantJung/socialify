import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import { useMutation } from "@tanstack/react-query";

import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

interface CreatePostInput {
  postTiele: string;
  password: string;
}

async function createPost(loginInput: CreatePostInput) {
  return await axios.post("user/create-post", loginInput);
}

function useCreatePost(loginInput: CreatePostInput) {
  return useMutation(() => createPost(loginInput), {
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

export { useCreatePost };
