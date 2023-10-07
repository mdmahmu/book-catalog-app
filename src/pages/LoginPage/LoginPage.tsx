"use client";

import { Button, Label, TextInput } from "flowbite-react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-60px)]">
      <form className="flex w-96 flex-col gap-4 -mt-16">
        <h2 className="text-3xl text-white font-semibold text-center mb-5">
          Login to your account
        </h2>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@example.com"
            required
            type="email"
            className="w-96"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput className="w-96" id="password1" required type="password" />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
