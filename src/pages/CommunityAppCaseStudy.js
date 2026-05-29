import React from "react";

const wireframes = [
  "Home Page",
  "Create Post Page",
  "Neighbours Page",
  "Chat Page",
  "Profile Page",
];

const midFidelity = [
  "Home Page",
  "Create Event Page",
  "Create Post Page",
  "Neighbours Page",
  "Chat Page",
  "Profile Page",
];

const highFidelity = [
  "Home Page",
  "Create Event Page",
  "Create Post Page",
  "Neighbours Page",
  "Chat Page",
  "Profile Page",
];

export default function CommunityConnectCaseStudy() {
  return (
    <div 
      className="bg-[#2e7d32] text-white overflow-hidden" 
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >

      {/* HERO */}
      <section className="relative px-8 md:px-20 pt-24 pb-32 overflow-hidden bg-[#1b5e20]">

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#79CD7D]/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[0.35em] text-sm font-semibold text-green-300 mb-6">
                UI/UX CASE STUDY
              </p>

              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
                HyperLocal
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-green-100 max-w-xl">
                A mobile-first community networking platform designed
                to help residents connect with neighbors, share updates,
                organize local events, and build trusted community interactions.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm backdrop-blur-sm">
                  UI/UX Design
                </div>

                <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm backdrop-blur-sm">
                  Figma
                </div>

                <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm backdrop-blur-sm">
                  Mobile App
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center items-center min-h-[700px]">

              {/* MAIN PHONE - HOME */}
              <div className="relative z-30 w-[290px] rotate-[-6deg]">

                <div className="bg-black rounded-[2.5rem] p-[8px] shadow-[0_35px_120px_rgba(0,0,0,0.28)]">

                  <div className="relative overflow-hidden rounded-[2rem] bg-black">

                    {/* DYNAMIC ISLAND */}
                    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 z-20 w-[90px] h-[22px] bg-black rounded-b-3xl"></div>

                    <img
                      src="/communityapp/high-fidelity/Home Page.png"
                      alt="Home Page"
                      className="w-full"
                    />

                  </div>

                </div>

              </div>

              {/* SECOND PHONE - NEIGHBOURS */}
              <div className="absolute top-10 -left-4 md:-left-10 z-20 w-[230px] rotate-[-16deg]">

                <div className="bg-black rounded-[2.3rem] p-[7px] shadow-[0_30px_100px_rgba(0,0,0,0.22)]">

                  <div className="relative overflow-hidden rounded-[1.8rem] bg-black">

                    {/* DYNAMIC ISLAND */}
                    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 z-20 w-[78px] h-[20px] bg-black rounded-b-3xl"></div>

                    <img
                      src="/communityapp/high-fidelity/Neighbours Page.png"
                      alt="Neighbours Page"
                      className="w-full"
                    />

                  </div>

                </div>

              </div>

              {/* THIRD PHONE - CHAT */}
              <div className="absolute bottom-0 right-0 md:right-2 z-10 w-[230px] rotate-[14deg]">

                <div className="bg-black rounded-[2.3rem] p-[7px] shadow-[0_30px_100px_rgba(0,0,0,0.22)]">

                  <div className="relative overflow-hidden rounded-[1.8rem] bg-black">

                    {/* DYNAMIC ISLAND */}
                    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 z-20 w-[78px] h-[20px] bg-black rounded-b-3xl"></div>

                    <img
                      src="/communityapp/high-fidelity/Chat Page.png"
                      alt="Chat Page"
                      className="w-full"
                    />

                  </div>

                </div>

              </div>

              {/* BACKGROUND BLURS */}
              <div className="absolute top-0 left-10 w-72 h-72 bg-[#79CD7D]/20 blur-3xl rounded-full"></div>

              <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#A5D6A7]/20 blur-3xl rounded-full"></div>

            </div>

          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#2E7D32] mb-5">
              Overview
            </p>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Building stronger communities through localized digital interaction.
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-relaxed text-zinc-600">

            <p>
              Residents often rely on scattered WhatsApp groups and
              disconnected communication channels for local interaction,
              resulting in missed updates, unverified contacts,
              and poor engagement.
            </p>

            <p>
              HyperLocal Community Connect was designed as a mobile-first
              platform focused on neighborhood communication, trusted
              interactions, local events, announcements, and real-time chat.
            </p>

          </div>

        </div>

      </section>

      {/* PROBLEM + GOAL */}
      <section className="px-8 md:px-20 py-32 bg-[#2e7d32]/10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          {/* PROBLEM */}
          <div>

            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-300 mb-5">
              Problem
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Community communication lacked structure and trust.
            </h2>

            <p className="mt-8 text-lg text-green-100 leading-relaxed">
              Existing social platforms are too broad and cluttered
              with irrelevant content, making localized interaction
              inefficient and difficult to manage.
            </p>

          </div>

          {/* GOAL */}
          <div>

            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-300 mb-5">
              Goal
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Create a trusted hyper-local platform for meaningful neighborhood interactions.
            </h2>

            <p className="mt-8 text-lg text-green-100 leading-relaxed">
              The application was designed to simplify local communication,
              event participation, help requests, and neighborhood engagement
              through an intuitive mobile-first experience.
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
                value: "4 Weeks",
              },
              {
                title: "Role",
                value: "UI/UX Designer",
              },
              {
                title: "Tools",
                value: "Figma",
              },
              {
                title: "Platform",
                value: "Mobile App",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#F7FFF5] rounded-[2rem] p-10"
              >

                <p className="text-sm uppercase tracking-[0.2em] text-[#2E7D32] mb-5">
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
      <section className="px-8 md:px-20 py-32 bg-[#2e7d32]/10">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-300 mb-5">
            Design Process
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-20">
            From user research to high-fidelity mobile interfaces.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Research & Problem Analysis",
              "Empathy Map & User Persona",
              "Pain Points & Desk Research",
              "User Journey Mapping",
              "Wireframing",
              "Mid Fidelity Design",
              "High Fidelity UI",
              "Prototype & Testing",
            ].map((step, i) => (

              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-[2rem] border border-white/10 p-10"
              >

                <p className="text-green-300 font-semibold mb-4">
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

      {/* RESEARCH INSIGHTS */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#2E7D32] mb-5">
            Research Insights
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding the challenges faced in local community communication.
          </h2>

          <div className="grid lg:grid-cols-3 gap-10 mt-24">

            {[
              {
                title: "Unorganized Communication",
                desc: "Residents relied on noisy WhatsApp groups where important updates often got ignored.",
              },
              {
                title: "Lack of Trusted Connections",
                desc: "Users struggled to find verified nearby people and reliable local services.",
              },
              {
                title: "Low Community Engagement",
                desc: "There was no centralized platform focused specifically on neighborhood interaction.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#F7FFF5] rounded-[2rem] p-10"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#D1FFC7] flex items-center justify-center text-[#2E7D32] font-bold text-xl mb-8">
                  0{i + 1}
                </div>

                <h3 className="text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PAIN POINTS */}
      <section className="px-8 md:px-20 py-32 bg-[#2e7d32]/10">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-300 mb-5">
            Pain Points
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Identifying the major frustrations users face in local community communication.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">

            {[
              {
                title: "Irrelevant Content Overload",
                desc: "Users struggle to find important local information due to excessive unrelated content on existing social platforms.",
              },
              {
                title: "Lack of Community Trust",
                desc: "Residents hesitate to interact because many platforms lack neighborhood verification and safety measures.",
              },
              {
                title: "Disconnected Communication",
                desc: "Community discussions, announcements, and help requests are scattered across multiple apps and groups.",
              },
              {
                title: "Difficult Event Awareness",
                desc: "Residents often miss local events and activities because updates are not centralized or organized properly.",
              },
              {
                title: "Poor Local Engagement",
                desc: "Existing platforms do not encourage meaningful neighborhood interaction and collaboration.",
              },
              {
                title: "Complex User Experience",
                desc: "Complicated interfaces reduce usability, especially for users unfamiliar with advanced social platforms.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-[2rem] border border-white/10 p-10"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#D1FFC7] flex items-center justify-center text-[#2E7D32] font-bold text-xl mb-8">
                  0{i + 1}
                </div>

                <h3 className="text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg text-green-100 leading-relaxed">
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

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#2E7D32] mb-5">
            Empathy Map
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding user emotions, behaviors, and frustrations.
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-24">

            {[
              {
                title: "Says",
                points: [
                  "I need help quickly",
                  "Community groups are too noisy",
                  "I wish there was a trusted local platform",
                ],
              },
              {
                title: "Thinks",
                points: [
                  "Will someone respond?",
                  "Can I trust nearby people?",
                  "How do I find reliable services?",
                ],
              },
              {
                title: "Does",
                points: [
                  "Posts in WhatsApp groups",
                  "Calls neighbors directly",
                  "Searches for recommendations",
                ],
              },
              {
                title: "Feels",
                points: [
                  "Frustrated when ignored",
                  "Hesitant to trust strangers",
                  "Relieved when help is found",
                ],
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#F7FFF5] rounded-[2rem] p-10 border border-green-100"
              >

                <h3 className="text-3xl font-bold mb-8 text-[#2E7D32]">
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

      {/* PERSONA */}
      <section className="px-8 md:px-20 py-32 bg-[#2e7d32]/10">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-300 mb-5">
            User Persona
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding the primary user of the platform.
          </h2>

          <div className="mt-24 bg-white/10 rounded-[3rem] p-10 md:p-14 border border-white/10">

            <div className="grid lg:grid-cols-[280px_1fr] gap-14">

              {/* LEFT */}
              <div>

                <div className="w-40 h-40 rounded-full bg-green-500/20 flex items-center justify-center text-6xl">
                  👩
                </div>

                <h3 className="text-4xl font-bold mt-8">
                  Priya Shah
                </h3>

                <p className="text-lg text-green-200 mt-2 font-medium">
                  Working Professional
                </p>

                <div className="mt-8 space-y-4 text-green-100">

                  <p><span className="font-semibold text-white">Age:</span> 28</p>
                  <p><span className="font-semibold text-white">Location:</span> Ahmedabad</p>
                  <p><span className="font-semibold text-white">Tech Skill:</span> Moderate</p>

                </div>

              </div>

              {/* RIGHT */}
              <div className="grid md:grid-cols-2 gap-10">

                <div className="bg-white rounded-[2rem] p-8 text-zinc-900">
                  <h4 className="text-2xl font-bold mb-5">
                    Goals
                  </h4>

                  <ul className="space-y-4 text-zinc-600">
                    <li>• Find trusted local help</li>
                    <li>• Stay updated with nearby events</li>
                    <li>• Connect with neighbors</li>
                  </ul>
                </div>

                <div className="bg-white rounded-[2rem] p-8 text-zinc-900">
                  <h4 className="text-2xl font-bold mb-5">
                    Pain Points
                  </h4>

                  <ul className="space-y-4 text-zinc-600">
                    <li>• Too many irrelevant messages</li>
                    <li>• Unverified contacts</li>
                    <li>• Missed updates</li>
                  </ul>
                </div>

                <div className="bg-white rounded-[2rem] p-8 text-zinc-900">
                  <h4 className="text-2xl font-bold mb-5">
                    Motivations
                  </h4>

                  <ul className="space-y-4 text-zinc-600">
                    <li>• Build trusted community interactions</li>
                    <li>• Stay connected locally</li>
                    <li>• Improve neighborhood engagement</li>
                  </ul>
                </div>

                <div className="bg-white rounded-[2rem] p-8 text-zinc-900">
                  <h4 className="text-2xl font-bold mb-5">
                    Needs
                  </h4>

                  <ul className="space-y-4 text-zinc-600">
                    <li>• Easy communication</li>
                    <li>• Verified users</li>
                    <li>• Organized information</li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CURRENT USER FLOW */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#2E7D32] mb-5">
            Current User Flow
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding how residents currently communicate
            and interact within local communities.
          </h2>

          <p className="mt-10 text-xl text-zinc-600 leading-relaxed max-w-4xl">
            Before designing the solution, the existing community interaction
            process was analyzed to identify communication gaps,
            usability challenges, and opportunities for improvement.
          </p>

          {/* VERTICAL FLOW */}
          <div className="mt-24 max-w-4xl mx-auto">

            {[
              {
                title: "Need Information",
                desc: "Residents look for help, updates, services, or community announcements.",
              },
              {
                title: "Search Multiple Platforms",
                desc: "Users browse WhatsApp groups, Facebook pages, or local contacts.",
              },
              {
                title: "Irrelevant Content",
                desc: "Important neighborhood information gets mixed with unrelated posts.",
              },
              {
                title: "Delayed Responses",
                desc: "Communication becomes slow due to scattered conversations and inactive groups.",
              },
              {
                title: "Lack of Trust",
                desc: "Users hesitate to interact because identities and information are not verified.",
              },
              {
                title: "Low Community Engagement",
                desc: "Residents miss opportunities to participate in local activities and events.",
              },
            ].map((step, i) => (

              <div key={i} className="flex flex-col items-center">

                {/* CARD */}
                <div className="w-full bg-[#f7fff5] rounded-[2.5rem] p-10 border border-[#D1FFC7] shadow-sm">

                  <div className="flex items-start gap-8">

                    {/* NUMBER */}
                    <div className="w-16 h-16 rounded-2xl bg-[#D1FFC7] flex items-center justify-center text-[#2E7D32] font-bold text-2xl shrink-0">
                      0{i + 1}
                    </div>

                    {/* CONTENT */}
                    <div>

                      <h3 className="text-3xl font-bold leading-tight">
                        {step.title}
                      </h3>

                      <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
                        {step.desc}
                      </p>

                    </div>

                  </div>

                </div>

                {/* CONNECTOR */}
                {i !== 5 && (

                  <div className="h-24 flex items-center justify-center">

                    <div className="relative flex flex-col items-center">

                      {/* LINE */}
                      <div className="w-[3px] h-16 bg-[#79CD7D] rounded-full"></div>

                      {/* ARROW HEAD */}
                      <div
                        className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[16px] border-t-[#2E7D32]"
                      ></div>

                    </div>

                  </div>

                )}

              </div>

            ))}

          </div>

          {/* SUMMARY */}
          <div className="mt-24 bg-[#f7fff5] rounded-[3rem] p-12 border border-[#D1FFC7]">

            <h3 className="text-4xl font-bold">
              Key Observation
            </h3>

            <p className="mt-8 text-xl text-zinc-600 leading-relaxed max-w-5xl">
              The existing communication process lacked a centralized,
              trusted, and community-focused platform. Residents relied on
              fragmented communication channels that created confusion,
              delayed interactions, and reduced neighborhood engagement.
              These insights guided the design of a secure and mobile-first
              hyper-local community platform.
            </p>

          </div>

        </div>

      </section>

      {/* DESK RESEARCH */}
      <section className="px-8 md:px-20 py-32 bg-[#2e7d32]/10">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-300 mb-5">
            Desk Research
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding existing community communication challenges and user behavior.
          </h2>

          <p className="mt-10 text-xl text-green-100 leading-relaxed max-w-4xl">
            Initial research was conducted to understand how residents currently
            communicate within neighborhoods, the limitations of existing platforms,
            and opportunities for creating a dedicated hyper-local community experience.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-24">

            {[
              {
                title: "Existing Platforms Are Too Broad",
                desc: "Traditional social media platforms expose users to irrelevant global content instead of localized neighborhood interactions.",
              },
              {
                title: "Lack of Trust & Verification",
                desc: "Residents often hesitate to engage with unknown users due to lack of secure and verified community systems.",
              },
              {
                title: "Scattered Communication Channels",
                desc: "Community announcements, events, and local help requests are spread across multiple disconnected platforms.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-[2rem] border border-white/10 p-10"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#D1FFC7] flex items-center justify-center text-[#2E7D32] font-bold text-xl mb-8">
                  0{i + 1}
                </div>

                <h3 className="text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg text-green-100 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

          {/* RESEARCH FINDINGS */}
          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] border border-white/10 p-10">

              <h3 className="text-3xl font-bold mb-8">
                Research Findings
              </h3>

              <ul className="space-y-5 text-lg text-green-100 leading-relaxed">

                <li>• Users prefer localized and relevant content over generic feeds.</li>

                <li>• Residents want a safer and more trusted communication environment.</li>

                <li>• Mobile-first experiences are preferred for daily community interaction.</li>

                <li>• Event participation increases when updates are centralized.</li>

                <li>• Users expect quick communication and easy navigation.</li>

              </ul>

            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] border border-white/10 p-10">

              <h3 className="text-3xl font-bold mb-8">
                Design Opportunities
              </h3>

              <ul className="space-y-5 text-lg text-green-100 leading-relaxed">

                <li>• Create a mobile-first hyper-local experience.</li>

                <li>• Encourage trusted neighborhood interaction.</li>

                <li>• Simplify community announcements and updates.</li>

                <li>• Provide intuitive communication tools.</li>

                <li>• Design clean and accessible interfaces for all age groups.</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* USER JOURNEY MAPPING */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#2E7D32] mb-5">
            User Journey Mapping
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding user actions, emotions, pain points,
            and opportunities throughout the community interaction journey.
          </h2>

          <div className="mt-24 overflow-x-auto border border-zinc-200 rounded-[2rem]">

            <table className="w-full min-w-[1100px] border-collapse">

              {/* HEADER */}
              <thead className="bg-[#2E7D32] text-white">

                <tr>

                  <th className="p-6 text-left text-sm uppercase tracking-wider border-r border-green-600">
                    Stage
                  </th>

                  {[
                    "Recognize Need",
                    "Ask for Help in WhatsApp/In-Person",
                    "Wait for Reply",
                    "Get Help Manually",
                    "End",
                  ].map((item, i) => (

                    <th
                      key={i}
                      className="p-6 text-left text-sm uppercase tracking-wider border-r last:border-r-0 border-green-600"
                    >
                      {item}
                    </th>

                  ))}

                </tr>

              </thead>

              {/* BODY */}
              <tbody className="bg-white">

                {[
                  {
                    title: "User Goal",
                    color: "text-[#2E7D32]",
                    data: [
                      "Solve the problem",
                      "Get help or contact of someone useful",
                      "Receive timely support",
                      "Get the issue resolved",
                      "Done",
                    ],
                  },
                  {
                    title: "User Action",
                    color: "text-zinc-900",
                    data: [
                      "Realizes a problem",
                      "Types message in WhatsApp group or asks nearby person",
                      "Waits for replies or pings others",
                      "Calls someone or asks again",
                      "No follow-up",
                    ],
                  },
                  {
                    title: "User Thought",
                    color: "text-zinc-600 italic",
                    data: [
                      "“I need to fix this quickly.”",
                      "“Should I message the group? Will they respond?”",
                      "“Has anyone seen my message?”",
                      "“I hope this plumber is available.”",
                      "“Okay, finally done.”",
                    ],
                  },
                  {
                    title: "User Emotion",
                    color: "text-orange-500",
                    data: [
                      "Annoyed / frustrated",
                      "Hesitant / unsure",
                      "Frustrated / impatient",
                      "Rushed or relieved",
                      "Neutral",
                    ],
                  },
                  {
                    title: "Pain Points",
                    color: "text-red-500",
                    data: [
                      "Doesn’t know who to ask",
                      "Group is noisy or inactive",
                      "Message ignored or missed",
                      "Unverified help, no trust",
                      "No follow-up or feedback",
                    ],
                  },
                  {
                    title: "Opportunities Missed",
                    color: "text-[#2E7D32] font-medium",
                    data: [
                      "Show trusted people nearby",
                      "Use categories",
                      "Push notifications to responders",
                      "Verified contacts + in-app chat",
                      "Track success + endorse helpful users",
                    ],
                  },
                ].map((row, idx) => (

                  <tr
                    key={idx}
                    className="border-t border-zinc-200"
                  >

                    {/* LEFT TITLE */}
                    <td className="p-6 font-bold border-r border-zinc-200 bg-[#F7FFF5] min-w-[220px]">
                      {row.title}
                    </td>

                    {/* DATA */}
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
      <section className="px-8 md:px-20 py-32 bg-[#2e7d32]/10">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-300 mb-5">
            Wireframes
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Exploring layout structure, navigation,
            and mobile interaction flows through low-fidelity wireframes.
          </h2>

          <div className="mt-24">

            <h3 className="text-4xl font-bold">
              Low-Fidelity Mobile Wireframes
            </h3>

            <p className="mt-5 text-lg text-green-100 leading-relaxed max-w-3xl">
              The initial wireframes focused on creating a simple and intuitive
              mobile-first experience for neighborhood communication,
              local interactions, event participation, and real-time chat.
            </p>

            {/* WIREFRAMES GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-16">

              {wireframes.map((screen, i) => (

                <div
                  key={i}
                  className="flex flex-col items-center"
                >

                  {/* PHONE FRAME */}
                  <div className="relative w-full max-w-[270px]">

                    {/* LEFT BUTTONS */}
                    <div className="absolute -left-[2px] top-24 w-[2px] h-10 bg-zinc-700 rounded-full"></div>
                    <div className="absolute -left-[2px] top-36 w-[2px] h-14 bg-zinc-700 rounded-full"></div>

                    {/* RIGHT BUTTON */}
                    <div className="absolute -right-[2px] top-32 w-[2px] h-16 bg-zinc-700 rounded-full"></div>

                    {/* PHONE BODY */}
                    <div className="bg-black rounded-[1.9rem] p-[7px] shadow-[0_25px_80px_rgba(0,0,0,0.18)]">

                      {/* SCREEN */}
                      <div className="relative overflow-hidden rounded-[1.45rem] bg-black">

                        {/* DYNAMIC ISLAND */}
                        {/*<div className="absolute top-[1px] left-1/2 -translate-x-1/2 z-20 w-[72px] h-[18px] bg-black rounded-b-2xl"></div>*?}

                        {/* IMAGE */}
                        <img
                          src={`/communityapp/wireframes/${screen}.png`}
                          alt={screen}
                          className="w-full"
                        />

                      </div>

                    </div>

                  </div>

                  {/* LABEL */}
                  <p className="text-sm text-green-100 text-center mt-5 px-2 leading-relaxed">
                    {screen}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* MID FIDELITY */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#2E7D32] mb-5">
            Mid Fidelity Design
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Refining layouts, interaction patterns,
            and usability through structured mid-fidelity mobile screens.
          </h2>

          <div className="mt-24">

            <h3 className="text-4xl font-bold">
              Mid-Fidelity Mobile Screens
            </h3>

            <p className="mt-5 text-lg text-zinc-600 leading-relaxed max-w-3xl">
              The mid-fidelity designs focused on improving spacing,
              visual hierarchy, navigation clarity, and content organization
              while maintaining a clean and community-friendly mobile experience.
            </p>

            {/* MID FIDELITY GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-20">

              {midFidelity.map((screen, i) => (

                <div
                  key={i}
                  className="flex flex-col items-center"
                >

                  {/* PHONE FRAME */}
                  <div className="relative w-full max-w-[270px]">

                    {/* LEFT BUTTONS */}
                    <div className="absolute -left-[2px] top-24 w-[2px] h-10 bg-zinc-700 rounded-full"></div>
                    <div className="absolute -left-[2px] top-36 w-[2px] h-14 bg-zinc-700 rounded-full"></div>

                    {/* RIGHT BUTTON */}
                    <div className="absolute -right-[2px] top-32 w-[2px] h-16 bg-zinc-700 rounded-full"></div>

                    {/* PHONE BODY */}
                    <div className="bg-black rounded-[1.9rem] p-[7px] shadow-[0_25px_80px_rgba(0,0,0,0.18)]">

                      {/* SCREEN */}
                      <div className="relative overflow-hidden rounded-[1.45rem] bg-black">

                        {/* DYNAMIC ISLAND */}
                        <div className="absolute top-[1px] left-1/2 -translate-x-1/2 z-20 w-[72px] h-[18px] bg-black rounded-b-2xl"></div>

                        {/* IMAGE */}
                        <img
                          src={`/communityapp/mid-fidelity/${screen}.png`}
                          alt={screen}
                          className="w-full"
                        />

                      </div>

                    </div>

                  </div>

                  {/* LABEL */}
                  <p className="text-sm text-zinc-600 text-center mt-5 px-2 leading-relaxed">
                    {screen}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* HIGH FIDELITY UI */}
      <section className="px-8 md:px-20 py-32 bg-[#2e7d32]/10">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-300 mb-5">
            High Fidelity UI
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Final mobile interfaces crafted to create
            a friendly, trustworthy, and engaging community experience.
          </h2>

          <div className="mt-24">

            <h3 className="text-4xl font-bold">
              High-Fidelity Mobile Screens
            </h3>

            <p className="mt-5 text-lg text-green-100 leading-relaxed max-w-3xl">
              The final UI focused on creating a clean and modern mobile-first
              experience using soft color palettes, clear visual hierarchy,
              rounded components, and intuitive interaction patterns.
            </p>

            {/* UI GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-20">

              {highFidelity.map((screen, i) => (

                <div
                  key={i}
                  className="flex flex-col items-center"
                >

                  {/* PHONE FRAME */}
                  <div className="relative w-full max-w-[270px]">

                    {/* LEFT BUTTONS */}
                    <div className="absolute -left-[2px] top-24 w-[2px] h-10 bg-zinc-700 rounded-full"></div>
                    <div className="absolute -left-[2px] top-36 w-[2px] h-14 bg-zinc-700 rounded-full"></div>

                    {/* RIGHT BUTTON */}
                    <div className="absolute -right-[2px] top-32 w-[2px] h-16 bg-zinc-700 rounded-full"></div>

                    {/* PHONE BODY */}
                    <div className="bg-black rounded-[1.9rem] p-[7px] shadow-[0_25px_80px_rgba(0,0,0,0.22)]">

                      {/* SCREEN */}
                      <div className="relative overflow-hidden rounded-[1.45rem] bg-black">

                        {/* DYNAMIC ISLAND */}
                        <div className="absolute top-[1px] left-1/2 -translate-x-1/2 z-20 w-[72px] h-[18px] bg-black rounded-b-2xl"></div>

                        {/* IMAGE */}
                        <img
                          src={`/communityapp/high-fidelity/${screen}.png`}
                          alt={screen}
                          className="w-full"
                        />

                      </div>

                    </div>

                  </div>

                  {/* LABEL */}
                  <p className="text-sm text-green-100 text-center mt-5 px-2 leading-relaxed">
                    {screen}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* DESIGN SYSTEM */}
      <section className="px-8 md:px-20 py-32 bg-white text-zinc-900">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#2E7D32] mb-5">
            Design System
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Creating a clean, trustworthy, and community-friendly visual identity.
          </h2>

          <div className="grid lg:grid-cols-2 gap-14 mt-24">

            {/* COLOR PALETTE */}
            <div className="bg-[#F7FFF5] rounded-[3rem] p-12">

              <h3 className="text-3xl font-bold mb-10">
                Color Palette
              </h3>

              <div className="space-y-8">

                {[
                  {
                    name: "Coral Red",
                    hex: "#E63946",
                  },
                  {
                    name: "Forest Green",
                    hex: "#2E7D32",
                  },
                  {
                    name: "Light Mint Green",
                    hex: "#79CD7D",
                  },
                  {
                    name: "Soft Sage Green",
                    hex: "#A5D6A7",
                  },
                  {
                    name: "Pastel Lime",
                    hex: "#D1FFC7",
                  },
                  {
                    name: "Pale Green Tint",
                    hex: "#E6FFDF",
                  },
                ].map((color, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-6"
                  >

                    {/* COLOR BOX */}
                    <div
                      className="w-24 h-24 rounded-3xl border border-zinc-200"
                      style={{ backgroundColor: color.hex }}
                    ></div>

                    {/* DETAILS */}
                    <div>

                      <h4 className="text-2xl font-bold">
                        {color.name}
                      </h4>

                      <p className="mt-2 text-zinc-500 text-lg">
                        {color.hex}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* TYPOGRAPHY */}
            <div className="bg-[#F7FFF5] rounded-[3rem] p-12">

              <h3 className="text-3xl font-bold mb-10">
                Typography
              </h3>

              <h1 className="text-7xl font-bold leading-none">
                Poppins
              </h1>

              <p className="mt-8 text-lg text-zinc-600 leading-relaxed">
                A modern sans-serif typeface selected to improve readability,
                accessibility, and visual consistency across mobile screens.
              </p>

              {/* TYPOGRAPHY STYLES */}
              <div className="mt-14 space-y-8">

                <div className="pb-8 border-b border-zinc-200">

                  <p className="text-sm uppercase tracking-wider text-zinc-500 mb-3">
                    Heading Style
                  </p>

                  <h2 className="text-4xl font-bold">
                    Bold & Clear Hierarchy
                  </h2>

                </div>

                <div className="pb-8 border-b border-zinc-200">

                  <p className="text-sm uppercase tracking-wider text-zinc-500 mb-3">
                    Body Text
                  </p>

                  <p className="text-lg text-zinc-600 leading-relaxed">
                    Clean and readable text optimized for mobile usability
                    and comfortable content scanning.
                  </p>

                </div>

                <div>

                  <p className="text-sm uppercase tracking-wider text-zinc-500 mb-3">
                    Buttons & Labels
                  </p>

                  <button className="px-6 py-3 rounded-full bg-[#2E7D32] text-white font-semibold">
                    COMMUNITY BUTTON
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* DESIGN PRINCIPLES */}
          <div className="grid md:grid-cols-3 gap-10 mt-20">

            {[
              {
                title: "Trust & Safety",
                desc: "Green tones and soft visuals create a welcoming and trustworthy community experience.",
              },
              {
                title: "Mobile-First Design",
                desc: "Layouts were designed specifically for mobile interaction and one-hand usability.",
              },
              {
                title: "Clear Visual Hierarchy",
                desc: "Consistent spacing, typography, and components improve readability and navigation.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#F7FFF5] rounded-[3rem] p-12"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#D1FFC7] flex items-center justify-center text-[#2E7D32] font-bold text-xl mb-8">
                  0{i + 1}
                </div>

                <h3 className="text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* OUTCOME */}
      <section className="px-8 md:px-20 py-36 bg-[#2E7D32] text-white">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.25em] text-sm text-[#D1FFC7] font-semibold mb-5">
            Outcome
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            A hyper-local community platform focused on connection, trust, and meaningful neighborhood interactions.
          </h2>

          <p className="mt-10 text-xl text-green-100 leading-relaxed max-w-4xl mx-auto">
            The Hyper-Local Community Connect app transformed fragmented
            neighborhood communication into a centralized mobile-first experience
            where residents can interact, share updates, organize events,
            seek help, and build stronger local communities through secure
            and accessible digital interactions.
          </p>

        </div>

      </section>

    </div>
  );
}