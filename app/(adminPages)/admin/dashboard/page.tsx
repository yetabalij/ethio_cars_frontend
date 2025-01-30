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
  make: z.string().optional(),
  model: z.string().optional(),
  price: z.number().min(0, "Price cannot be negative").optional(),
  year: z.number().min(1900, "Year must be after 1900").optional(),
  mileage: z.number().min(0, "Mileage cannot be negative").optional(),
  condition: z.string().optional(),
  color: z.string().optional(),
  images: z.array(z.string()).optional(),
  engine: z.string().optional(),
  fuel: z.string().optional(),
  transmission: z.string().optional(),
  drive_type: z.string().optional(),
  seats: z.number().min(1, "Seats must be at least 1").optional(),
  plate: z.string().optional(),
  to_rent: z.boolean().optional(),
  commission: z.number().min(0, "Commission cannot be negative").optional(),
  sold: z.boolean().optional(),
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
      const response = await axios.post(
        "http://localhost:5000/api/engine-cars/",
        data
      ); // Replace with your API endpoint
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
      <div className="col-span-1 bg-gray-800">
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
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Make */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="make"
                >
                  Make
                </label>
                <input
                  {...register("make")}
                  id="make"
                  type="text"
                  placeholder="Enter car make"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.make && (
                  <p className="text-red-500 text-xs italic">
                    {errors.make.message}
                  </p>
                )}
              </div>

              {/* Model */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="model"
                >
                  Model
                </label>
                <input
                  {...register("model")}
                  id="model"
                  type="text"
                  placeholder="Enter car model"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.model && (
                  <p className="text-red-500 text-xs italic">
                    {errors.model.message}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  {...register("price", { valueAsNumber: true })}
                  id="price"
                  type="number"
                  placeholder="Enter car price"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.price && (
                  <p className="text-red-500 text-xs italic">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* Year */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="year"
                >
                  Year
                </label>
                <input
                  {...register("year", { valueAsNumber: true })}
                  id="year"
                  type="number"
                  placeholder="Enter car year"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.year && (
                  <p className="text-red-500 text-xs italic">
                    {errors.year.message}
                  </p>
                )}
              </div>

              {/* Mileage */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="mileage"
                >
                  Mileage
                </label>
                <input
                  {...register("mileage", { valueAsNumber: true })}
                  id="mileage"
                  type="number"
                  placeholder="Enter car mileage"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.mileage && (
                  <p className="text-red-500 text-xs italic">
                    {errors.mileage.message}
                  </p>
                )}
              </div>

              {/* Condition */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="condition"
                >
                  Condition
                </label>
                <input
                  {...register("condition")}
                  id="condition"
                  type="text"
                  placeholder="Enter car condition"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.condition && (
                  <p className="text-red-500 text-xs italic">
                    {errors.condition.message}
                  </p>
                )}
              </div>

              {/* Color */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="color"
                >
                  Color
                </label>
                <input
                  {...register("color")}
                  id="color"
                  type="text"
                  placeholder="Enter car color"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.color && (
                  <p className="text-red-500 text-xs italic">
                    {errors.color.message}
                  </p>
                )}
              </div>

              {/* Engine */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="engine"
                >
                  Engine
                </label>
                <input
                  {...register("engine")}
                  id="engine"
                  type="text"
                  placeholder="Enter car engine"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.engine && (
                  <p className="text-red-500 text-xs italic">
                    {errors.engine.message}
                  </p>
                )}
              </div>

              {/* Fuel */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fuel"
                >
                  Fuel
                </label>
                <input
                  {...register("fuel")}
                  id="fuel"
                  type="text"
                  placeholder="Enter car fuel type"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.fuel && (
                  <p className="text-red-500 text-xs italic">
                    {errors.fuel.message}
                  </p>
                )}
              </div>

              {/* Transmission */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="transmission"
                >
                  Transmission
                </label>
                <input
                  {...register("transmission")}
                  id="transmission"
                  type="text"
                  placeholder="Enter car transmission"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.transmission && (
                  <p className="text-red-500 text-xs italic">
                    {errors.transmission.message}
                  </p>
                )}
              </div>

              {/* Drive Type */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="drive_type"
                >
                  Drive Type
                </label>
                <input
                  {...register("drive_type")}
                  id="drive_type"
                  type="text"
                  placeholder="Enter car drive type"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.drive_type && (
                  <p className="text-red-500 text-xs italic">
                    {errors.drive_type.message}
                  </p>
                )}
              </div>

              {/* Seats */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="seats"
                >
                  Seats
                </label>
                <input
                  {...register("seats", { valueAsNumber: true })}
                  id="seats"
                  type="number"
                  placeholder="Enter number of seats"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.seats && (
                  <p className="text-red-500 text-xs italic">
                    {errors.seats.message}
                  </p>
                )}
              </div>

              {/* Plate */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="plate"
                >
                  Plate
                </label>
                <input
                  {...register("plate")}
                  id="plate"
                  type="text"
                  placeholder="Enter car plate number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.plate && (
                  <p className="text-red-500 text-xs italic">
                    {errors.plate.message}
                  </p>
                )}
              </div>

              {/* To Rent */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="to_rent"
                >
                  To Rent
                </label>
                <input
                  {...register("to_rent")}
                  id="to_rent"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                {errors.to_rent && (
                  <p className="text-red-500 text-xs italic">
                    {errors.to_rent.message}
                  </p>
                )}
              </div>

              {/* Commission */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="commission"
                >
                  Commission
                </label>
                <input
                  {...register("commission", { valueAsNumber: true })}
                  id="commission"
                  type="number"
                  placeholder="Enter commission"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.commission && (
                  <p className="text-red-500 text-xs italic">
                    {errors.commission.message}
                  </p>
                )}
              </div>

              {/* Sold */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="sold"
                >
                  Sold
                </label>
                <input
                  {...register("sold")}
                  id="sold"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                {errors.sold && (
                  <p className="text-red-500 text-xs italic">
                    {errors.sold.message}
                  </p>
                )}
              </div>
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
