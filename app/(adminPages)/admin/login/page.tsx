"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"; // For navigation in Next.js
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username must be at least 1 characters" }),
  password: z
    .string()
    .min(1, { message: "Password must be at least 1 characters" }),
});

// Default Admin Credentials
const defaultCredentials = {
  username: "admin",
  password: "password123",
};

const AdminLogin = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, password } = values;

    // Check credentials
    if (
      username === defaultCredentials.username &&
      password === defaultCredentials.password
    ) {
      // Create session (store in localStorage for simplicity)
      localStorage.setItem("adminSession", "true");

      // Redirect to the admin dashboard
      router.push("/admin/dashboard");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  }

  return (
    <div>
      <section className="w-[25%] mx-auto mt-10">
        <h1 className="text-center text-2xl font-bold">Admin Login</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            method="POST"
            className="space-y-8"
          >
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="w-full bg-[#B52F31] text-white" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </section>
    </div>
  );
};

export default AdminLogin;
