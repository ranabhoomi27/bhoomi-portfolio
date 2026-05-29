import React from "react";

const wireframes = [
  "Login Page",
  "Home Page",
  "Product Details Page",
  "Cart Page",
  "Checkout Page",
  "Order Confirm Page",
];

const highFidelity = [
  "Landing Page",
  "Login Page",
  "Home Page",
  "Products Page",
  "Product Details Page",
  "Cart Page",
  "Checkout Page",
  "Order Confirm Page",
];

export default function GameVaultCaseStudy() {
  return (
    <div
      className="bg-[#F6F4FF] text-white overflow-hidden"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >

      {/* HERO */}
      <section className="relative px-8 md:px-20 pt-24 pb-32 overflow-hidden bg-[#0F003E]">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/30 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-700/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[0.35em] text-sm font-semibold text-purple-300 mb-6">
                UI/UX CASE STUDY
              </p>

              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
                Game Vault
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-purple-100 max-w-xl">
                A modern gaming accessories e-commerce application designed
                to help gamers discover, purchase, and manage premium gaming
                products through an immersive and user-friendly shopping experience.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm backdrop-blur-sm">
                  UI/UX Design
                </div>

                <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm backdrop-blur-sm">
                  Figma
                </div>

                <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm backdrop-blur-sm">
                  E-Commerce App
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center items-center min-h-[700px]">

              {/* MAIN PHONE - HOME PAGE */}
              <div className="relative z-30 w-[300px] rotate-[-6deg]">

                <div className="bg-black rounded-[2.5rem] p-[8px] shadow-[0_35px_120px_rgba(0,0,0,0.45)]">

                  <div className="relative overflow-hidden rounded-[2rem] bg-black">

                    {/* DYNAMIC ISLAND */}
                    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 z-20 w-[90px] h-[22px] bg-black rounded-b-3xl"></div>

                    <img
                      src="/gamingstore/high-fidelity/Home Page.png"
                      alt="Home Page"
                      className="w-full"
                    />

                  </div>

                </div>

              </div>

              {/* SECOND PHONE - PRODUCT DETAILS */}
              <div className="absolute top-10 -left-4 md:-left-10 z-20 w-[240px] rotate-[-16deg]">

                <div className="bg-black rounded-[2.3rem] p-[7px] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">

                  <div className="relative overflow-hidden rounded-[1.8rem] bg-black">

                    {/* DYNAMIC ISLAND */}
                    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 z-20 w-[78px] h-[20px] bg-black rounded-b-3xl"></div>

                    <img
                      src="/gamingstore/high-fidelity/Product Details Page.png"
                      alt="Product Details Page"
                      className="w-full"
                    />

                  </div>

                </div>

              </div>

              {/* THIRD PHONE - CART PAGE */}
              <div className="absolute bottom-0 right-0 md:right-2 z-10 w-[240px] rotate-[14deg]">

                <div className="bg-black rounded-[2.3rem] p-[7px] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">

                  <div className="relative overflow-hidden rounded-[1.8rem] bg-black">

                    {/* DYNAMIC ISLAND */}
                    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 z-20 w-[78px] h-[20px] bg-black rounded-b-3xl"></div>

                    <img
                      src="/gamingstore/high-fidelity/Cart Page.png"
                      alt="Cart Page"
                      className="w-full"
                    />

                  </div>

                </div>

              </div>

              {/* GLOW EFFECTS */}
              <div className="absolute top-0 left-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>

              <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full"></div>

            </div>

          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#150054] mb-5">
              Overview
            </p>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Creating a premium gaming shopping experience for modern gamers.
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-relaxed text-zinc-600">

            <p>
              Gamers often struggle with cluttered e-commerce platforms,
              poor product discovery, and confusing checkout experiences
              while shopping for gaming accessories online.
            </p>

            <p>
              Game Vault was designed as a sleek and immersive mobile-first
              e-commerce application focused on gaming products,
              simplified purchasing flows, engaging product visuals,
              and a smooth checkout experience.
            </p>

          </div>

        </div>

      </section>

      {/* PROBLEM + GOAL */}
      <section className="px-8 md:px-20 py-32 bg-[#120049]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          {/* PROBLEM */}
          <div>

            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-purple-300 mb-5">
              Problem
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Gaming shoppers faced overwhelming and outdated shopping experiences.
            </h2>

            <p className="mt-8 text-lg text-purple-100 leading-relaxed">
              Existing online stores lacked intuitive navigation,
              engaging visuals, streamlined checkout systems,
              and personalized gaming-focused shopping experiences.
            </p>

          </div>

          {/* GOAL */}
          <div>

            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-purple-300 mb-5">
              Goal
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Design an immersive gaming marketplace with a seamless purchasing journey.
            </h2>

            <p className="mt-8 text-lg text-purple-100 leading-relaxed">
              The application aimed to simplify product discovery,
              enhance user engagement, and improve conversion
              through visually appealing and user-centered design.
            </p>

          </div>

        </div>

      </section>

      {/* PROJECT DETAILS */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Timeline",
                value: "5 Weeks",
              },
              {
                title: "Role",
                value: "UI/UX Designer",
              },
              {
                title: "Tools",
                value: "Figma, Miro",
              },
              {
                title: "Platform",
                value: "Mobile App",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#F6F4FF] rounded-[2rem] p-10"
              >

                <p className="text-sm uppercase tracking-[0.2em] text-[#150054] mb-5">
                  {item.title}
                </p>

                <h3 className="text-2xl font-bold">
                  {item.value}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* DESIGN PROCESS */}
      <section className="px-8 md:px-20 py-32 bg-[#150054]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-purple-300 mb-5">
            Design Process
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-20">
            From gaming research to immersive e-commerce interfaces.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Research & Competitor Analysis",
              "Empathy Mapping",
              "User Persona",
              "User Journey Mapping",
              "Wireframing",
              "Visual Design",
              "High Fidelity UI",
              "Prototype & Testing",
            ].map((step, i) => (

              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-[2rem] border border-white/10 p-10"
              >

                <p className="text-purple-300 font-semibold mb-4">
                  0{i + 1}
                </p>

                <h3 className="text-2xl font-bold leading-snug">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MIND MAP */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#150054] mb-5">
            Mind Mapping
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl mx-auto">
            Structuring features, shopping flows,
            and user interactions for the gaming marketplace.
          </h2>

          <div className="mt-20 bg-[#F6F4FF] rounded-[3rem] p-10">

            <img
              src="/gamingstore/mind map.png"
              alt="Mind Map"
              className="w-full rounded-[2rem]"
            />

          </div>

        </div>

      </section>

      {/* RESEARCH INSIGHTS */}
      <section className="px-8 md:px-20 py-32 bg-[#120049]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-purple-300 mb-5">
            Research Insights
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding gamer behavior, shopping patterns, and frustrations.
          </h2>

          <div className="grid lg:grid-cols-3 gap-10 mt-24">

            {[
              {
                title: "Complex Product Discovery",
                desc: "Users found it difficult to quickly discover relevant gaming accessories across cluttered shopping platforms.",
              },
              {
                title: "Lack of Gaming Experience",
                desc: "Traditional e-commerce interfaces failed to create immersive experiences aligned with gamer aesthetics.",
              },
              {
                title: "Checkout Drop-Off",
                desc: "Long and confusing checkout processes reduced purchase completion and user satisfaction.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white/10 rounded-[2rem] p-10 border border-white/10"
              >

                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-200 font-bold text-xl mb-8">
                  0{i + 1}
                </div>

                <h3 className="text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg text-purple-100 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* EMPATHY MAP */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#150054] mb-5">
            Empathy Map
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding gamer expectations, emotions, and shopping behavior.
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-24">

            {[
              {
                title: "Says",
                points: [
                  "I want premium gaming products",
                  "The app should feel modern",
                  "Checkout should be quick",
                ],
              },
              {
                title: "Thinks",
                points: [
                  "Is this product authentic?",
                  "Will it improve my setup?",
                  "Can I trust this platform?",
                ],
              },
              {
                title: "Does",
                points: [
                  "Compares accessories online",
                  "Reads reviews before buying",
                  "Adds products to wishlist or cart",
                ],
              },
              {
                title: "Feels",
                points: [
                  "Excited about gaming upgrades",
                  "Frustrated by poor navigation",
                  "Satisfied with smooth purchases",
                ],
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#F6F4FF] rounded-[2rem] p-10 border border-purple-100"
              >

                <h3 className="text-3xl font-bold mb-8 text-[#150054]">
                  {item.title}
                </h3>

                <ul className="space-y-5 text-lg text-zinc-600 leading-relaxed">

                  {item.points.map((point, j) => (

                    <li key={j}>
                      • {point}
                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* USER PERSONA */}
      <section className="px-8 md:px-20 py-32 bg-[#120049]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-purple-300 mb-5">
            User Persona
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding the primary target gamer and shopper.
          </h2>

          <div className="mt-24 bg-white/10 rounded-[3rem] p-10 md:p-14 border border-white/10">

            <div className="grid lg:grid-cols-[280px_1fr] gap-14">

              {/* LEFT */}
              <div>

                <div className="w-40 h-40 rounded-full bg-purple-500/20 flex items-center justify-center text-6xl">
                  🎮
                </div>

                <h3 className="text-4xl font-bold mt-8">
                  Aarav Patel
                </h3>

                <p className="text-lg text-purple-200 mt-2 font-medium">
                  Competitive Gamer
                </p>

                <div className="mt-8 space-y-4 text-purple-100">

                  <p><span className="font-semibold text-white">Age:</span> 22</p>
                  <p><span className="font-semibold text-white">Location:</span> Ahmedabad</p>
                  <p><span className="font-semibold text-white">Tech Skill:</span> Advanced</p>

                </div>

              </div>

              {/* RIGHT */}
              <div className="grid md:grid-cols-2 gap-10">

                <div className="bg-white rounded-[2rem] p-8 text-zinc-900">
                  <h4 className="text-2xl font-bold mb-5">
                    Goals
                  </h4>

                  <ul className="space-y-4 text-zinc-600">
                    <li>• Buy premium gaming accessories</li>
                    <li>• Improve gaming performance</li>
                    <li>• Discover trending gaming gear</li>
                  </ul>
                </div>

                <div className="bg-white rounded-[2rem] p-8 text-zinc-900">
                  <h4 className="text-2xl font-bold mb-5">
                    Pain Points
                  </h4>

                  <ul className="space-y-4 text-zinc-600">
                    <li>• Fake products online</li>
                    <li>• Slow checkout process</li>
                    <li>• Poor product categorization</li>
                  </ul>
                </div>

                <div className="bg-white rounded-[2rem] p-8 text-zinc-900">
                  <h4 className="text-2xl font-bold mb-5">
                    Motivations
                  </h4>

                  <ul className="space-y-4 text-zinc-600">
                    <li>• Upgrade gaming setup</li>
                    <li>• Enhance gaming experience</li>
                    <li>• Stay updated with latest gear</li>
                  </ul>
                </div>

                <div className="bg-white rounded-[2rem] p-8 text-zinc-900">
                  <h4 className="text-2xl font-bold mb-5">
                    Needs
                  </h4>

                  <ul className="space-y-4 text-zinc-600">
                    <li>• Fast product discovery</li>
                    <li>• Secure checkout</li>
                    <li>• Easy navigation</li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* USER JOURNEY MAP */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#150054] mb-5">
            User Journey Mapping
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding the gamer shopping journey from product discovery to purchase completion.
          </h2>

          <div className="mt-24 overflow-x-auto border border-zinc-200 rounded-[2rem]">

            <table className="w-full min-w-[1100px] border-collapse">

              <thead className="bg-[#150054] text-white">

                <tr>

                  <th className="p-6 text-left text-sm uppercase tracking-wider border-r border-purple-700">
                    Stage
                  </th>

                  {[
                    "Browse Products",
                    "View Product",
                    "Add To Cart",
                    "Checkout",
                    "Order Complete",
                  ].map((item, i) => (

                    <th
                      key={i}
                      className="p-6 text-left text-sm uppercase tracking-wider border-r last:border-r-0 border-purple-700"
                    >
                      {item}
                    </th>

                  ))}

                </tr>

              </thead>

              <tbody className="bg-white">

                {[
                  {
                    title: "User Goal",
                    color: "text-[#150054]",
                    data: [
                      "Find gaming gear",
                      "Check product details",
                      "Save products",
                      "Complete payment",
                      "Receive confirmation",
                    ],
                  },
                  {
                    title: "User Action",
                    color: "text-zinc-900",
                    data: [
                      "Explores categories",
                      "Reads reviews and specs",
                      "Adds items to cart",
                      "Enters payment details",
                      "Tracks order",
                    ],
                  },
                  {
                    title: "User Thought",
                    color: "text-zinc-600 italic",
                    data: [
                      "“Which accessory fits my setup?”",
                      "“Is this product worth buying?”",
                      "“Can I get a discount?”",
                      "“I hope checkout is secure.”",
                      "“Great, order placed!”",
                    ],
                  },
                  {
                    title: "User Emotion",
                    color: "text-orange-500",
                    data: [
                      "Curious",
                      "Excited",
                      "Confident",
                      "Focused",
                      "Satisfied",
                    ],
                  },
                  {
                    title: "Pain Points",
                    color: "text-red-500",
                    data: [
                      "Too many products",
                      "Lack of detailed visuals",
                      "Hidden charges",
                      "Complex checkout",
                      "No tracking clarity",
                    ],
                  },
                  {
                    title: "Opportunities",
                    color: "text-[#150054] font-medium",
                    data: [
                      "Smart filtering",
                      "Immersive product previews",
                      "Transparent pricing",
                      "One-tap checkout",
                      "Real-time updates",
                    ],
                  },
                ].map((row, idx) => (

                  <tr
                    key={idx}
                    className="border-t border-zinc-200"
                  >

                    <td className="p-6 font-bold border-r border-zinc-200 bg-[#F6F4FF] min-w-[220px]">
                      {row.title}
                    </td>

                    {row.data.map((item, i) => (

                      <td
                        key={i}
                        className={`p-6 align-top border-r last:border-r-0 border-zinc-200 leading-relaxed ${row.color}`}
                      >
                        {item}
                      </td>

                    ))}

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* WIREFRAMES */}
      <section className="px-8 md:px-20 py-32 bg-[#120049]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-purple-300 mb-5">
            Wireframes
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Exploring navigation flow, layouts,
            and shopping interactions through low-fidelity wireframes.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-20">

            {wireframes.map((screen, i) => (

              <div
                key={i}
                className="flex flex-col items-center"
              >

                <div className="relative w-full max-w-[270px]">

                  <div className="absolute -left-[2px] top-24 w-[2px] h-10 bg-zinc-700 rounded-full"></div>
                  <div className="absolute -left-[2px] top-36 w-[2px] h-14 bg-zinc-700 rounded-full"></div>

                  <div className="absolute -right-[2px] top-32 w-[2px] h-16 bg-zinc-700 rounded-full"></div>

                  <div className="bg-black rounded-[1.9rem] p-[7px] shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

                    <div className="relative overflow-hidden rounded-[1.45rem] bg-black">

                      <img
                        src={`/gamingstore/wireframes/${screen}.png`}
                        alt={screen}
                        className="w-full"
                      />

                    </div>

                  </div>

                </div>

                <p className="text-sm text-purple-100 text-center mt-5 px-2 leading-relaxed">
                  {screen}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* DESIGN SYSTEM */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#150054] mb-5">
            Design System
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Creating a futuristic and immersive visual identity for gamers.
          </h2>

          <div className="grid lg:grid-cols-2 gap-14 mt-24">

            {/* COLORS */}
            <div className="bg-[#F6F4FF] rounded-[3rem] p-12">

              <h3 className="text-3xl font-bold mb-10">
                Color Palette
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                {[
                  "#0F003E",
                  "#100044",
                  "#120049",
                  "#13004F",
                  "#150054",
                  "#16005A",
                  "#18005F",
                  "#190065",
                  "#1B006A",
                  "#1C0070",
                ].map((color, i) => (

                  <div
                    key={i}
                    className="h-28 rounded-2xl"
                    style={{ backgroundColor: color }}
                  ></div>

                ))}

              </div>

            </div>

            {/* TYPOGRAPHY */}
            <div className="bg-[#F6F4FF] rounded-[3rem] p-12">

              <h3 className="text-3xl font-bold mb-10">
                Typography
              </h3>

              <h1 className="text-7xl font-bold leading-none">
                Open Sans
              </h1>

              <p className="mt-8 text-lg text-zinc-600 leading-relaxed">
                Open Sans was selected for its readability,
                clean structure, and modern digital appearance
                optimized for mobile shopping experiences.
              </p>

              <div className="mt-14 space-y-8">

                <div className="pb-8 border-b border-zinc-200">

                  <p className="text-sm uppercase tracking-wider text-zinc-500 mb-3">
                    Heading Style
                  </p>

                  <h2 className="text-4xl font-bold">
                    Strong Gaming Hierarchy
                  </h2>

                </div>

                <div className="pb-8 border-b border-zinc-200">

                  <p className="text-sm uppercase tracking-wider text-zinc-500 mb-3">
                    Body Text
                  </p>

                  <p className="text-lg text-zinc-600 leading-relaxed">
                    Clean and highly readable typography optimized
                    for product browsing and shopping interactions.
                  </p>

                </div>

                <div>

                  <p className="text-sm uppercase tracking-wider text-zinc-500 mb-3">
                    Buttons & Labels
                  </p>

                  <button className="px-6 py-3 rounded-full bg-[#150054] text-white font-semibold">
                    BUY NOW
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* KEY FEATURES */}
      <section className="px-8 md:px-20 py-32 bg-[#120049]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-purple-300 mb-5">
            Key Features
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Features designed to create a seamless gaming shopping experience.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">

            {[
              {
                title: "Gaming Product Catalog",
                desc: "Users can browse gaming accessories through organized categories and visually rich product listings.",
              },
              {
                title: "Advanced Product Details",
                desc: "Detailed specifications, reviews, pricing, and visuals help users make confident purchase decisions.",
              },
              {
                title: "Smart Cart Management",
                desc: "Users can manage quantities, save products, and review pricing before checkout.",
              },
              {
                title: "Fast Checkout",
                desc: "Simplified checkout flows improve speed, usability, and conversion rates.",
              },
              {
                title: "Secure Payments",
                desc: "Users can complete purchases safely using secure payment methods.",
              },
              {
                title: "Order Confirmation",
                desc: "Clear order tracking and confirmation screens improve user trust and satisfaction.",
              },
            ].map((feature, i) => (

              <div
                key={i}
                className="bg-white/10 rounded-[2rem] p-10 border border-white/10"
              >

                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-200 font-bold text-xl mb-8">
                  0{i + 1}
                </div>

                <h3 className="text-3xl font-bold leading-tight">
                  {feature.title}
                </h3>

                <p className="mt-6 text-lg text-purple-100 leading-relaxed">
                  {feature.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HIGH FIDELITY */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#150054] mb-5">
            High Fidelity UI
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Final interfaces crafted to deliver an immersive and premium gaming shopping experience.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-20">

            {highFidelity.map((screen, i) => (

              <div
                key={i}
                className="flex flex-col items-center"
              >

                <div className="relative w-full max-w-[270px]">

                  <div className="absolute -left-[2px] top-24 w-[2px] h-10 bg-zinc-700 rounded-full"></div>
                  <div className="absolute -left-[2px] top-36 w-[2px] h-14 bg-zinc-700 rounded-full"></div>

                  <div className="absolute -right-[2px] top-32 w-[2px] h-16 bg-zinc-700 rounded-full"></div>

                  <div className="bg-black rounded-[1.9rem] p-[7px] shadow-[0_25px_80px_rgba(0,0,0,0.25)]">

                    <div className="relative overflow-hidden rounded-[1.45rem] bg-black">

                      <div className="absolute top-[1px] left-1/2 -translate-x-1/2 z-20 w-[72px] h-[18px] bg-black rounded-b-2xl"></div>

                      <img
                        src={`/gamingstore/high-fidelity/${screen}.png`}
                        alt={screen}
                        className="w-full"
                      />

                    </div>

                  </div>

                </div>

                <p className="text-sm text-zinc-600 text-center mt-5 px-2 leading-relaxed">
                  {screen}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* OUTCOME */}
      <section className="px-8 md:px-20 py-36 bg-[#0F003E] text-white">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.25em] text-sm text-purple-300 font-semibold mb-5">
            Outcome
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            A futuristic gaming e-commerce experience designed for speed, immersion, and seamless shopping.
          </h2>

          <p className="mt-10 text-xl text-purple-100 leading-relaxed max-w-4xl mx-auto">
            Game Vault transformed traditional online shopping into an
            engaging gaming-focused experience through immersive visuals,
            streamlined navigation, modern UI patterns, and user-centered
            shopping flows tailored specifically for gamers and tech enthusiasts.
          </p>

        </div>

      </section>

    </div>
  );
}