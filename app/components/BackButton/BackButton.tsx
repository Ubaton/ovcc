"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import React from 'react'

const BackButton = () => {
    const router = useRouter();
  return (
    <div>
        {/* Back Button */}
        <button
            onClick={() => router.back()}
            className="fixed top-5 left-5 z-50 flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-black transition duration-300 cursor-pointer"
        >
            <ChevronLeft size={18} />
        Back
        </button>
      
    </div>
  )
}

export default BackButton
