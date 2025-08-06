"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "planner-001",
    title: "Minimalist Monthly Planner Bundle",
    description: "Printable PDF bundle: calendar, habit tracker, meal log, and cover sheet.",
    price: "$8",
    image: "/planner1.jpg",
    gumroad: "https://your-gumroad-link.com/l/plannerbundle"
  },
  {
    id: "teacher-002",
    title: "Teacher's Weekly Planner + Grade Tracker",
    description: "Organize lesson plans, grades, and student info with this clean template.",
    price: "$6",
    image: "/planner2.jpg",
    gumroad: "https://your-gumroad-link.com/l/teacherplanner"
  },
  {
    id: "prompts-003",
    title: "30 ChatGPT Prompts for Social Media Creators",
    description: "Generate ideas, hooks, and content outlines fast with this curated prompt pack.",
    price: "$5",
    image: "/prompts.jpg",
    gumroad: "https://your-gumroad-link.com/l/creatorprompts"
  },
  {
    id: "fitness-004",
    title: "Fitness Tracker & Wellness Bundle",
    description: "Workout log, hydration tracker, and printable meal planner in one bundle.",
    price: "$7",
    image: "/fitness.jpg",
    gumroad: "https://your-gumroad-link.com/l/fittrack"
  },
  {
    id: "student-005",
    title: "Back-to-School Student Planner Pack",
    description: "Homework log, assignment tracker, and calendar perfect for students.",
    price: "$6",
    image: "/student.jpg",
    gumroad: "https://your-gumroad-link.com/l/schoolplanner"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">✨ Dcay Digital Downloads ✨</h1>
        <p className="text-lg">AI-crafted planners & prompt packs to simplify your workflow.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
              <p className="text-sm text-gray-700 mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{product.price}</span>
                <Link
                  href={product.gumroad}
                  target="_blank"
                  className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="text-center text-sm text-gray-500 mt-16">
        © 2025 Dcay Digital. Powered by AI.
      </footer>
    </main>
  );
}
