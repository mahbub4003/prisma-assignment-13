"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [objCookie, setObjCookie] = useState({});
  const [isTheme, setIsTheme] = useState(false);
  useEffect(() => {
    (async () => {
      const cookie = await cookieStore.getAll();

      const theme = cookie[0].value.split(":");

      const key = theme[0].trim();
      const value = theme[1].trim();

      const jsonObject = { [key]: value };
      setObjCookie(jsonObject);
    })();
  }, []);

  return (
    <div className="text-center bg-gray-300 w-96 m-auto mt-12">
      <h1 className=" text-2xl">
        {isTheme ? objCookie.theme.toUpperCase() : "LIGHT"}
      </h1>
      <button
        className="bg-green-200 p-2 my-4 text-lg hover:text-white hover:bg-green-400 duration-500 w-[100%]"
        onClick={() => setIsTheme(!isTheme)}
      >
        {isTheme ? " Lihgt" : "Dark"}
      </button>
    </div>
  );
};

export default Page;
