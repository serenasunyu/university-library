"use client";

import AuthForm from '@/components/AuthForm';
import { signUpSchema } from '@/lib/validations';
import React from 'react';

const page = () => (
    <AuthForm 
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullName: "",
        universityId: 0,
        universityCard: "",
        email: "",
        password: "",
      }}

      onSubmit={() => {}}
    />
);

export default page;