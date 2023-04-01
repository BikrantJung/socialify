import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axios } from "../axios/axios";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { IUserRegister } from "../types/auth/register.types";
import { IPost } from "../types/posts/post.types";

async function fetchPosts(): Promise<IPost[]> {
  const { data } = await axios.get("post/all");
  return data;
}

function useFetchPosts() {
  return useQuery(["posts"], fetchPosts, {
    onError(error: AxiosError) {
      if (error.response?.data) {
        Object.values(error.response.data).map((item) => toast.error(item));
      }
    },
  });
}

export { useFetchPosts };
