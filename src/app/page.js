"use client";
import { useState } from "react";

export default function Home() {
  const [userPreference, setUserPreference] = useState("");

  const reqHeader = new Headers();
  const token = reqHeader.get("theme");
  console.log(token, "middleware");

  const handlePreferenceChange = (preference) => {
    // Set the user preference in a cookie
    document.cookie = `userPreference=${preference}`;
    setUserPreference(preference);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl text-red-400 p-6">Cookie Setting </h1>
      <p>
        Current User Preference:
        <span className="bg-gray-300 font-bold p-3">
          {" "}
          {userPreference || "None"}
        </span>
      </p>
      <button
        className="bg-green-400 rounded p-3 m-3 hover:bg-green-600 hover:text-white duration-700"
        onClick={() => handlePreferenceChange("theme: dark")}
      >
        Set Dark Theme
      </button>
      <button
        className="bg-green-400 rounded p-3 m-3 hover:bg-green-600 hover:text-white duration-700"
        onClick={() => handlePreferenceChange("language: en")}
      >
        Set English Language
      </button>
    </div>
  );
}
