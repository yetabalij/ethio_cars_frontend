"use client";

import withAuth from "@/app/_hoc/withAuth";
import AdminNavigation from "@/app/_components/AdminNavigation";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios"; // For making API calls

// Define the form schema using Zod
const schema = z.object({
  carName: z.string().min(1, "Car name is required"),
  carModel: z.string().min(1, "Car model is required"),
  carYear: z
    .number()
    .min(1900, "Car year must be after 1900")
    .max(new Date().getFullYear(), "Car year cannot be in the future"),
  carPrice: z.number().min(0, "Car price cannot be negative"),
});

type FormData = z.infer<typeof schema>;

const AdminDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Call your POST API here
      const response = await axios.post("/api/cars", data); // Replace with your API endpoint
      console.log("API Response:", response.data);

      // Reset the form after successful submission
      reset();
      alert("Car added successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to add car. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1 min-h-screen bg-gray-800">
        <AdminNavigation />
      </div>
      <div className="col-span-5">
        <div className="bg-gray-800 text-white h-10">
          <div className="flex ml-10 justify-center">
            <div className="flex mt-2 gap-2">
              <Link href="/">Home</Link>
              <Link href="/#">Place Holder</Link>
              <Link href="/#">Place Holder</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="carName"
              >
                Car Name
              </label>
              <input
                {...register("carName")}
                id="carName"
                type="text"
                placeholder="Enter car name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.carName && (
                <p className="text-red-500 text-xs italic">
                  {errors.carName.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="carModel"
              >
                Car Model
              </label>
              <input
                {...register("carModel")}
                id="carModel"
                type="text"
                placeholder="Enter car model"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.carModel && (
                <p className="text-red-500 text-xs italic">
                  {errors.carModel.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="carYear"
              >
                Car Year
              </label>
              <input
                {...register("carYear", { valueAsNumber: true })} // Parse as number
                id="carYear"
                type="number"
                placeholder="Enter car year"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.carYear && (
                <p className="text-red-500 text-xs italic">
                  {errors.carYear.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="carPrice"
              >
                Car Price
              </label>
              <input
                {...register("carPrice", { valueAsNumber: true })} // Parse as number
                id="carPrice"
                type="number"
                placeholder="Enter car price"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.carPrice && (
                <p className="text-red-500 text-xs italic">
                  {errors.carPrice.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withAuth(AdminDashboard);
