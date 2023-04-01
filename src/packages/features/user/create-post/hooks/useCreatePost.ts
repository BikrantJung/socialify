import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { ICreatePost } from "../create-post.types";
import { axios } from "@/packages/axios/axios";

async function createPost(createPostInput: ICreatePost) {
  return await axios.post("user/create-post/", createPostInput, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

function useCreatePost(createPostInput: ICreatePost) {
  const queryClient = useQueryClient();
  return useMutation(() => createPost(createPostInput), {
    onError(error: AxiosError) {
      if (error.response?.data) {
        Object.values(error.response.data).map((item) => toast.error(item));
      }
    },
    onSuccess(data: any) {
      toast.success("New post created");
      queryClient.setQueryData(["posts"], (oldData: any) => {
        return [data.data, ...oldData];
      });
    },
  });
}

export { useCreatePost };
