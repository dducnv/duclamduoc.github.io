"use client";
import { useEffect } from "react";
import { useParams } from 'next/navigation'
export  function AnimateScript() {
  const params = useParams<{ tag: string; item: string }>()
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".animate").forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("show");
        }, index * 150);
      });
    }, 0);
  }, [params]);
  return null; // Không cần render gì cả, chỉ chạy script
}
