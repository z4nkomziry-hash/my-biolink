// app/utils/db.js
"use client";

export const getDB = () => {
  if (typeof window === "undefined") return { users: {} };
  const data = localStorage.getItem("biolink_db");
  return data ? JSON.parse(data) : { users: {} };
};

export const saveDB = (db) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("biolink_db", JSON.stringify(db));
  }
};
