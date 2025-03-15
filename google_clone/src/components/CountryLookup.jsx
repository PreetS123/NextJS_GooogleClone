"use client";
import React, { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("India");

  const fetchCountry = async () => {
    const response = await fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country))
      .catch((err) => console.log("Error ::", err));
  };
  useEffect(() => {
    fetchCountry();
  }, []);
  return <div>{country}</div>;
};

export default CountryLookup;
