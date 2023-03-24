import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import { useMutation } from "@tanstack/react-query";

interface RegisterInput {
  email: string;
  password: string;
  username: string;
}

async function createUser(registerInput: RegisterInput) {
  const { email, password, username } = registerInput;
  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  if (user) {
    await createProfile(user.id);
  }
  //   Create profile after user is created
  async function createProfile(id: string) {
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .insert({
        id,
        username,
      });
    if (profileError) throw profileError;
    return profileData;
  }
}

function useCreateUser(registerInput: RegisterInput) {
  return useMutation(() => createUser(registerInput), {});
}

export { useCreateUser };
