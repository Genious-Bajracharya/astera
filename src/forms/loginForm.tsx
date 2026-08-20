'use client'
import { useForm } from "react-hook-form";
import { Login } from "@/api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";



type LoginFormData = {
  username: string;
  password: string;
};

export default function LoginForm() {
    const router = useRouter()
  const {
    register,   
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

    const handleLogin = async (data: LoginFormData) => {
    try {
        const response = await Login(data); // assuming Login expects { email, password }
        if(response.data.token){
            Cookies.set("authtoken",response.data.token)
        }
        else{
            console.log("no token")
        }
        router.push('/admin/admindashboard')
        console.log("Login success:", response);
        // maybe set a cookie, redirect, etc.
    } catch (error) {
        console.error("Login failed:", error);
    }
    }; 

  const onSubmit = (data: LoginFormData) => {
    handleLogin(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 max-w-sm mx-auto">
      <input
        {...register("username", {
          required: "Email is required",
        })}
        placeholder="username"
        className="border p-2 w-full"
      />
      {errors.username && <p className="text-red-500">{errors.username.message}</p>}

      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        placeholder="Password"
        className="border p-2 w-full"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
}

