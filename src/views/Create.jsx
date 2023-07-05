import { useForm } from "react-hook-form";
import { createPlayer } from "../api/server";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePlayer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();


  // submit the form to mi-linux API

  const onSubmit = async (values) => {
    setSubmitting(true);
    await createPlayer(values)
      .then((response) => {
        if (response) {
          setSubmitting(false);
          navigate("/");
        } else {
          throw new Error(response.message);
        }
      })
      .catch((error) => {
        setErrorMsg(
          error?.message
            ? error.message
            : "Server returned an error. Please try again!"
        );
        setSubmitting(false);
      });
    setSubmitting(false);
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <h1 className="text-xl md:text-2xl font-semibold text-center">
          Add a Football Player
        </h1>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
          {errorMsg && (
            <p className="text-sm text-red-500 text-center">{errorMsg}</p>
          )}
          <div className="bg-white px-6 py-12 shadow-md sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    {...register("name", {
                      required: true,
                      minLength: 3,
                    })}
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <span className="text-xs text-red-500">
                  {errors.name?.type === "required" && (
                    <span>Player name is required.</span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span>Player name should be minumum of 3 characters.</span>
                  )}
                </span>
              </div>
              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Position
                </label>
                <div className="mt-2">
                  <input
                    id="position"
                    name="position"
                    type="text"
                    {...register("position", {
                      required: true,
                      minLength: 3,
                    })}
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <span className="text-xs text-red-500">
                  {errors.position?.type === "required" && (
                    <span>Position is required.</span>
                  )}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <input
                      id="country"
                      name="country"
                      type="text"
                      {...register("country", {
                        required: true,
                      })}
                      className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <span className="text-xs text-red-500">
                    {errors.country?.type === "required" && (
                      <span>Country is required.</span>
                    )}
                  </span>
                </div>
                <div>
                  <label
                    htmlFor="club"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Club
                  </label>
                  <div className="mt-2">
                    <input
                      id="club"
                      name="club"
                      type="text"
                      {...register("club", {
                        required: true,
                      })}
                      className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <span className="text-xs text-red-500">
                    {errors.club?.type === "required" && (
                      <span>Club is required.</span>
                    )}
                  </span>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  disabled={submitting}
                >
                  {submitting ? "Submitting" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
