import React from "react";

const studentWireframes = [
  "Student Login Screen",
  "Student Dashboard",
  "Student Job List",
  "Student Job Details",
  "Student Application Status",
  "Student Profile",
];

const recruiterWireframes = [
  "Recruiter Login Screen",
  "Recruiter Dashboard",
  "Recruiter Job Details",
  "Recruiter Applications Received",
  "Recruiter Candidate Profile",
  "Recruiter Profile",
];

const adminWireframes = [
  "Admin Login Screen",
  "Admin Dashboard",
  "Admin Manage Users",
  "Admin Manage Jobs",
  "Admin Reports and Analytics",
  "Admin Profile",
];

const studentWeb = [
  "Student Login Screen",
  "Student Dashboard",
  "Student Job Listings",
  "Student Applications",
  "Student Interviews",
  "Student Profile",
];

const recruiterWeb = [
  "Recruiter Login Screen",
  "Recruiter Dashboard",
  "Recruiter Manage Jobs",
  "Recruiter Applications",
  "Recruiter Candidates",
  "Recruiter Interviews",
  "Recruiter Profile",
];

const adminWeb = [
  "Admin Login Screen",
  "Admin Dashboard",
  "Admin Manage Users",
  "Admin Manage Jobs",
  "Admin Analytics & Reports",
  "Admin Profile",
];

const studentMobile = [
  "Welcome Student",
  "Student Login Screen",
  "Student Dashboard",
  "Student Job Listings",
  "Student Applications",
  "Student Interviews",
  "Student Profile",
];

const recruiterMobile = [
  "Welcome Recruiter",
  "Recruiter Login Screen",
  "Recruiter Dashboard",
  "Recruiter Manage Jobs",
  "Recruiter Applications",
  "Recruiter Candidates",
  "Recruiter Interviews",
  "Recruiter Profile",
];

const adminMobile = [
  "Welcome Admin",
  "Admin Login Screen",
  "Admin Dashboard",
  "Admin Manage Users",
  "Admin Manage Jobs",
  "Admin Analytics & Reports",
  "Admin Profile",
];

export default function CampusHireCaseStudy() {
  return (
<div className="bg-[#f6f8f5] text-zinc-900 overflow-hidden">

      {/* HERO */}
      <section className="relative px-8 md:px-20 pt-24 pb-32">

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-200/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="uppercase tracking-[0.35em] text-sm font-semibold text-green-700 mb-6">
                UI/UX CASE STUDY
              </p>

              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
                CampusHire
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-zinc-600 max-w-xl">
                A centralized internship and placement management platform
                designed to simplify communication, improve transparency,
                and streamline recruitment workflows for students,
                recruiters, and administrators.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <div className="px-5 py-3 rounded-full bg-white border border-zinc-200 text-sm shadow-sm">
                  UI/UX Design
                </div>

                <div className="px-5 py-3 rounded-full bg-white border border-zinc-200 text-sm shadow-sm">
                  Figma
                </div>

                <div className="px-5 py-3 rounded-full bg-white border border-zinc-200 text-sm shadow-sm">
                  Responsive Design
                </div>

              </div>

            </div>

            {/* HERO IMAGE */}
            <div className="relative">

              <div className="bg-[#1b1b1b] rounded-[1.8rem] p-[10px] shadow-[0_40px_120px_rgba(0,0,0,0.16)]">

                <div className="overflow-hidden rounded-[1.3rem] bg-white">

                  <img
                    src="/campushire/web/Student Dashboard.png"
                    alt="Hero"
                    className="w-full"
                  />

                </div>

              </div>

              {/* FLOATING MOBILE */}
              <div className="absolute -bottom-14 -left-10 hidden md:block">

                <div className="relative w-[180px]">

                  <div className="absolute -left-[2px] top-20 w-[2px] h-10 bg-zinc-700 rounded-full"></div>
                  <div className="absolute -left-[2px] top-32 w-[2px] h-14 bg-zinc-700 rounded-full"></div>

                  <div className="absolute -right-[2px] top-28 w-[2px] h-16 bg-zinc-700 rounded-full"></div>

                  <div className="bg-black rounded-[1.9rem] p-[7px] shadow-2xl">

                    <div className="relative overflow-hidden rounded-[1.45rem] bg-black">

                      <div className="absolute top-[1px] left-1/2 -translate-x-1/2 z-20 w-[72px] h-[18px] bg-black rounded-b-2xl"></div>

                      <img
                        src="/campushire/mobile/Student Dashboard.png"
                        alt="Mobile"
                        className="w-full"
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="px-8 md:px-20 py-32 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
              Overview
            </p>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Reimagining placement workflows through a centralized digital platform.
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-relaxed text-zinc-600">

            <p>
              Traditional placement systems heavily rely on emails,
              spreadsheets, and fragmented communication channels,
              creating inefficient workflows and poor coordination.
            </p>

            <p>
              CampusHire was designed as a modern recruitment ecosystem
              that streamlines placement management through organized dashboards,
              application tracking, recruiter management, and responsive interfaces.
            </p>

          </div>

        </div>

      </section>

      {/* PROBLEM + GOAL */}
      <section className="px-8 md:px-20 py-32 bg-[#f6f8f5]">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-20">

            <div>

              <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
                Problem
              </p>

              <h2 className="text-5xl font-bold leading-tight">
                Placement activities were fragmented and difficult to manage.
              </h2>

              <p className="mt-8 text-lg text-zinc-600 leading-relaxed">
                Traditional placement systems relied heavily on emails,
                spreadsheets, and disconnected communication channels,
                causing delays, inefficient workflows, and lack of transparency.
              </p>

            </div>

            <div>

              <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
                Goal
              </p>

              <h2 className="text-5xl font-bold leading-tight">
                Build a centralized platform for a seamless recruitment experience.
              </h2>

              <p className="mt-8 text-lg text-zinc-600 leading-relaxed">
                CampusHire was designed to simplify internship and placement
                workflows through organized dashboards, application tracking,
                recruiter management, and responsive interfaces.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECT DETAILS */}
      <section className="px-8 md:px-20 py-32 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

            {[
              {
                title: "Timeline",
                value: "4 Months",
              },
              {
                title: "Role",
                value: "UI/UX Designer",
              },
              {
                title: "Tools",
                value: "Figma, FigJam",
              },
              {
                title: "Platform",
                value: "Web & Mobile",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#f6f8f5] rounded-[2rem] p-10 h-full flex flex-col justify-between"
              >

                <p className="text-sm uppercase tracking-[0.2em] text-green-700 mb-5">
                  {item.title}
                </p>

                <h3 className="text-2xl font-bold leading-snug">
                  {item.value}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* DESIGN PROCESS */}
      <section className="px-8 md:px-20 py-32 bg-[#f6f8f5]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            Design Process
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-20">
            From research and wireframes to high-fidelity responsive interfaces.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

            {[
              "Research & Documentation",
              "Empathy Mapping & User Personas",
              "User Journey Mapping & User Flows",
              "Low Fidelity Wireframes",
              "Mid Fidelity Wireframes",
              "High Fidelity UI",
              "Responsive Design",
              "Prototyping & Testing",
            ].map((step, i) => (

              <div
                key={i}
                className="bg-white border border-zinc-200 rounded-[2rem] p-10 h-full flex flex-col"
              >

                <p className="text-green-700 font-semibold mb-4">
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

      {/* USER ROLES */}
      <section className="px-8 md:px-20 py-32 bg-white">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            User Roles
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-20">
            Designed for every stakeholder involved in the placement process.
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Students",
                desc: "Apply for internships, track applications, attend interviews, and manage profiles.",
              },
              {
                title: "Recruiters",
                desc: "Post jobs, review candidates, shortlist applicants, and schedule interviews.",
              },
              {
                title: "Administrators",
                desc: "Manage users, oversee placement activities, and analyze recruitment reports.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#f6f8f5] rounded-[2rem] p-10"
              >

                <h3 className="text-3xl font-bold">
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

      {/* RESEARCH INSIGHTS */}
      <section className="px-8 md:px-20 py-32 bg-[#f6f8f5]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            Research Insights
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding the challenges faced during internship
            and placement management workflows.
          </h2>

          <div className="grid lg:grid-cols-3 gap-10 mt-24">

            {[
              {
                title: "Fragmented Communication",
                desc: "Placement activities relied heavily on emails, spreadsheets, and disconnected platforms, causing delays and confusion.",
              },
              {
                title: "Lack of Transparency",
                desc: "Students faced difficulties tracking applications, interview schedules, and recruitment updates efficiently.",
              },
              {
                title: "Inefficient Workflow Management",
                desc: "Recruiters and administrators struggled with manual processes for candidate management, approvals, and reporting.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white border border-zinc-200 rounded-[2rem] p-10"
              >

                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 font-bold text-xl mb-8">
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

      {/* EMPATHY MAPS */}
      <section className="px-8 md:px-20 py-32 bg-white">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            Empathy Maps
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding user emotions, frustrations, motivations, and expectations.
          </h2>

          <div className="space-y-24 mt-24">

            {[
              {
                title: "Student Empathy Map",
                emoji: "🎓",
                says: [
                  "I need quick access to opportunities",
                  "I don’t want to miss placement updates",
                ],
                thinks: [
                  "Will I get shortlisted?",
                  "Is my application status updated?",
                ],
                does: [
                  "Applies for internships",
                  "Tracks interview schedules",
                ],
                feels: [
                  "Anxious about placements",
                  "Excited for opportunities",
                ],
              },
              {
                title: "Recruiter Empathy Map",
                emoji: "💼",
                says: [
                  "I need qualified candidates quickly",
                  "Managing applications should be easier",
                ],
                thinks: [
                  "How can I reduce hiring time?",
                  "Which candidates fit best?",
                ],
                does: [
                  "Posts job openings",
                  "Shortlists applicants",
                ],
                feels: [
                  "Overwhelmed with applications",
                  "Focused on efficient hiring",
                ],
              },
              {
                title: "Admin Empathy Map",
                emoji: "🛠️",
                says: [
                  "All placement activities should be centralized",
                  "Tracking reports must be simple",
                ],
                thinks: [
                  "How do I improve workflow efficiency?",
                  "Are users facing issues?",
                ],
                does: [
                  "Monitors system activity",
                  "Manages users and reports",
                ],
                feels: [
                  "Responsible for smooth operations",
                  "Concerned about transparency",
                ],
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#f6f8f5] rounded-[3rem] p-10 md:p-14"
              >

                <div className="flex items-center gap-6 mb-12">

                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl">
                    {item.emoji}
                  </div>

                  <h3 className="text-4xl font-bold">
                    {item.title}
                  </h3>

                </div>

                <div className="grid md:grid-cols-2 gap-8">

                  {[
                    {
                      label: "Says",
                      data: item.says,
                    },
                    {
                      label: "Thinks",
                      data: item.thinks,
                    },
                    {
                      label: "Does",
                      data: item.does,
                    },
                    {
                      label: "Feels",
                      data: item.feels,
                    },
                  ].map((section, idx) => (

                    <div
                      key={idx}
                      className="bg-white rounded-[2rem] p-8 border border-zinc-200"
                    >

                      <h4 className="text-2xl font-bold mb-6">
                        {section.label}
                      </h4>

                      <ul className="space-y-4 text-zinc-600 leading-relaxed">

                        {section.data.map((point, j) => (

                          <li key={j}>
                            • {point}
                          </li>

                        ))}

                      </ul>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* USER PERSONAS */}
      <section className="px-8 md:px-20 py-32 bg-[#f6f8f5]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            User Personas
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding the primary users involved in the placement ecosystem.
          </h2>

          <div className="space-y-24 mt-24">

            {/* STUDENT PERSONA */}
            <div className="bg-white rounded-[3rem] border border-zinc-200 p-10 md:p-14">

              <div className="grid lg:grid-cols-[280px_1fr] gap-14">

                {/* LEFT */}
                <div>

                  <div className="w-40 h-40 rounded-full bg-green-100 flex items-center justify-center text-6xl">
                    🎓
                  </div>

                  <h3 className="text-4xl font-bold mt-8">
                    Aarav Patel
                  </h3>

                  <p className="text-lg text-green-700 mt-2 font-medium">
                    Final Year Student
                  </p>

                  <div className="mt-8 space-y-4 text-zinc-600">

                    <p><span className="font-semibold text-zinc-900">Age:</span> 22</p>
                    <p><span className="font-semibold text-zinc-900">Location:</span> Ahmedabad</p>
                    <p><span className="font-semibold text-zinc-900">Tech Skill:</span> Intermediate</p>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="grid md:grid-cols-2 gap-10">

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Goals
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Apply to internships easily</li>
                      <li>• Track application status</li>
                      <li>• Stay updated about interviews</li>
                      <li>• Manage profile efficiently</li>
                    </ul>
                  </div>

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Pain Points
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Missed email updates</li>
                      <li>• Confusing application tracking</li>
                      <li>• Multiple disconnected platforms</li>
                      <li>• Delayed recruiter communication</li>
                    </ul>
                  </div>

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Motivations
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Secure a good internship</li>
                      <li>• Improve career opportunities</li>
                      <li>• Build professional experience</li>
                    </ul>
                  </div>

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Needs
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Easy navigation</li>
                      <li>• Real-time notifications</li>
                      <li>• Organized dashboards</li>
                      <li>• Mobile accessibility</li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>

            {/* RECRUITER PERSONA */}
            <div className="bg-white rounded-[3rem] border border-zinc-200 p-10 md:p-14">

              <div className="grid lg:grid-cols-[280px_1fr] gap-14">

                {/* LEFT */}
                <div>

                  <div className="w-40 h-40 rounded-full bg-green-100 flex items-center justify-center text-6xl">
                    💼
                  </div>

                  <h3 className="text-4xl font-bold mt-8">
                    Riya Sharma
                  </h3>

                  <p className="text-lg text-green-700 mt-2 font-medium">
                    HR Recruiter
                  </p>

                  <div className="mt-8 space-y-4 text-zinc-600">

                    <p><span className="font-semibold text-zinc-900">Age:</span> 29</p>
                    <p><span className="font-semibold text-zinc-900">Location:</span> Bangalore</p>
                    <p><span className="font-semibold text-zinc-900">Tech Skill:</span> Advanced</p>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="grid md:grid-cols-2 gap-10">

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Goals
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Post jobs efficiently</li>
                      <li>• Review applications faster</li>
                      <li>• Shortlist qualified candidates</li>
                      <li>• Manage interview scheduling</li>
                    </ul>
                  </div>

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Pain Points
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Manual candidate filtering</li>
                      <li>• Poor communication tracking</li>
                      <li>• Too many spreadsheets</li>
                      <li>• Delayed responses</li>
                    </ul>
                  </div>

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Motivations
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Hire skilled candidates</li>
                      <li>• Save recruitment time</li>
                      <li>• Improve hiring workflow</li>
                    </ul>
                  </div>

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Needs
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Candidate filtering</li>
                      <li>• Organized applicant data</li>
                      <li>• Interview management tools</li>
                      <li>• Fast communication system</li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>

            {/* ADMIN PERSONA */}
            <div className="bg-white rounded-[3rem] border border-zinc-200 p-10 md:p-14">

              <div className="grid lg:grid-cols-[280px_1fr] gap-14">

                {/* LEFT */}
                <div>

                  <div className="w-40 h-40 rounded-full bg-green-100 flex items-center justify-center text-6xl">
                    🛠️
                  </div>

                  <h3 className="text-4xl font-bold mt-8">
                    Neha Verma
                  </h3>

                  <p className="text-lg text-green-700 mt-2 font-medium">
                    Placement Administrator
                  </p>

                  <div className="mt-8 space-y-4 text-zinc-600">

                    <p><span className="font-semibold text-zinc-900">Age:</span> 35</p>
                    <p><span className="font-semibold text-zinc-900">Location:</span> Pune</p>
                    <p><span className="font-semibold text-zinc-900">Tech Skill:</span> Advanced</p>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="grid md:grid-cols-2 gap-10">

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Goals
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Manage placement activities</li>
                      <li>• Monitor platform usage</li>
                      <li>• Generate reports efficiently</li>
                      <li>• Ensure smooth workflows</li>
                    </ul>
                  </div>

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Pain Points
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Difficult data management</li>
                      <li>• Manual monitoring processes</li>
                      <li>• Unorganized records</li>
                      <li>• Delayed updates</li>
                    </ul>
                  </div>

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Motivations
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Improve placement efficiency</li>
                      <li>• Centralize workflows</li>
                      <li>• Enhance transparency</li>
                    </ul>
                  </div>

                  <div className="bg-[#f6f8f5] rounded-[2rem] p-8">
                    <h4 className="text-2xl font-bold mb-5">
                      Needs
                    </h4>

                    <ul className="space-y-4 text-zinc-600 leading-relaxed">
                      <li>• Centralized dashboard</li>
                      <li>• Analytics & reporting</li>
                      <li>• User management system</li>
                      <li>• Workflow monitoring tools</li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* USER JOURNEY MAPPING */}
      <section className="px-8 md:px-20 py-32 bg-white">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            User Journey Mapping
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Understanding user actions, emotions, pain points, and opportunities throughout the placement journey.
          </h2>

          {[
            {
              title: "Student Journey",
              steps: [
                {
                  step: "Login",
                  action: "Enter credentials and login",
                  goal: "Access the portal",
                  thought: "I want to see available jobs 😐",
                  pain: "Login issues",
                  opportunity: "Add quick login options",
                },
                {
                  step: "Browse Jobs",
                  action: "Browse job listings and filters",
                  goal: "Find relevant jobs",
                  thought: "Which job matches my skills? 🤔",
                  pain: "Too many irrelevant jobs",
                  opportunity: "Smart job recommendation",
                },
                {
                  step: "Apply Job",
                  action: "Submit application",
                  goal: "Apply successfully",
                  thought: "Hope I get shortlisted 😟",
                  pain: "Complex forms",
                  opportunity: "Simplify application process",
                },
                {
                  step: "Track Application",
                  action: "Check application status",
                  goal: "Stay updated",
                  thought: "Did recruiter review it? 😬",
                  pain: "No real-time updates",
                  opportunity: "Live status tracking",
                },
                {
                  step: "Interview",
                  action: "Attend interview",
                  goal: "Perform well",
                  thought: "I need to do my best 😰",
                  pain: "Scheduling conflicts",
                  opportunity: "Smart scheduling system",
                },
                {
                  step: "Offer Decision",
                  action: "Accept/Reject offer",
                  goal: "Choose best job",
                  thought: "Is this right for me? 🤯",
                  pain: "Lack of clarity",
                  opportunity: "Offer comparison tool",
                },
              ],
            },

            {
              title: "Recruiter Journey",
              steps: [
                {
                  step: "Login",
                  action: "Login to dashboard",
                  goal: "Access system",
                  thought: "Need qualified candidates 😐",
                  pain: "Slow login",
                  opportunity: "Fast authentication",
                },
                {
                  step: "Post Job",
                  action: "Create job listing",
                  goal: "Publish job",
                  thought: "Will I get applicants? 🤔",
                  pain: "Long forms",
                  opportunity: "Job templates",
                },
                {
                  step: "Review Applications",
                  action: "Check candidates",
                  goal: "Shortlist applicants",
                  thought: "Who is suitable? 🧐",
                  pain: "Too many applications",
                  opportunity: "AI filtering",
                },
                {
                  step: "Shortlist",
                  action: "Filter profiles",
                  goal: "Select candidates",
                  thought: "Best fit? 🤔",
                  pain: "Manual effort",
                  opportunity: "Auto shortlisting",
                },
                {
                  step: "Interview",
                  action: "Schedule interviews",
                  goal: "Evaluate candidates",
                  thought: "Is this person right? 😬",
                  pain: "Scheduling issues",
                  opportunity: "Integrated calendar",
                },
                {
                  step: "Hire",
                  action: "Send offer",
                  goal: "Complete hiring",
                  thought: "Final selection done 🎉",
                  pain: "Delayed response",
                  opportunity: "Offer tracking system",
                },
              ],
            },

            {
              title: "Admin Journey",
              steps: [
                {
                  step: "Login",
                  action: "Access admin panel",
                  goal: "System control",
                  thought: "System must run smoothly 😐",
                  pain: "Security risks",
                  opportunity: "Multi-factor authentication",
                },
                {
                  step: "Manage Users",
                  action: "Verify users",
                  goal: "Control access",
                  thought: "Are users genuine? 🤔",
                  pain: "Large dataset",
                  opportunity: "Auto verification",
                },
                {
                  step: "Manage Jobs",
                  action: "Approve listings",
                  goal: "Ensure validity",
                  thought: "Is job real? 🧐",
                  pain: "Fake postings",
                  opportunity: "Approval workflow",
                },
                {
                  step: "Monitor",
                  action: "Track placements",
                  goal: "Monitor progress",
                  thought: "Placement status? 📊",
                  pain: "No dashboard",
                  opportunity: "Real-time analytics",
                },
                {
                  step: "Analytics",
                  action: "View reports",
                  goal: "Analyze trends",
                  thought: "What’s happening? 📈",
                  pain: "Complex reports",
                  opportunity: "Visual dashboards",
                },
                {
                  step: "System Updates",
                  action: "Manage system",
                  goal: "Keep updated",
                  thought: "Everything should work fine 🔔",
                  pain: "Manual updates",
                  opportunity: "Automated notifications",
                },
              ],
            },
          ].map((journey, idx) => (

            <div key={idx} className="mt-32">

              {/* JOURNEY TITLE */}
              <h3 className="text-4xl font-bold mb-10">
                {journey.title}
              </h3>

              {/* TABLE */}
              <div className="border border-zinc-200 rounded-2xl overflow-x-auto">
                <table className="w-full border border-zinc-200 rounded-2xl overflow-hidden">

                  {/* HEADER */}
                  <thead className="bg-green-700 text-white text-sm uppercase tracking-wider">
                    <tr>
                      <th className="p-4 text-left">Step</th>
                      <th className="p-4 text-left">User Action</th>
                      <th className="p-4 text-left">Goal</th>
                      <th className="p-4 text-left">Thoughts & Feelings</th>
                      <th className="p-4 text-left">Pain Point</th>
                      <th className="p-4 text-left">Opportunity</th>
                    </tr>
                  </thead>

                  {/* BODY */}
                  <tbody>
                    {journey.steps.map((item, i) => (
                      <tr
                        key={i}
                        className="border-t border-zinc-200 hover:bg-[#f6f8f5] transition"
                      >

                        <td className="p-4 font-semibold">
                          {item.step}
                        </td>

                        <td className="p-4">
                          {item.action}
                        </td>

                        <td className="p-4">
                          {item.goal}
                        </td>

                        <td className="p-4 italic text-zinc-600">
                          "{item.thought}"
                        </td>

                        <td className="p-4 text-red-500">
                          {item.pain}
                        </td>

                        <td className="p-4 text-green-700 font-medium">
                          {item.opportunity}
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* USER FLOWS */}
      <section className="px-8 md:px-20 py-32 bg-[#f6f8f5]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            User Flows
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Mapping complete workflows for students, recruiters,
            and administrators across the placement ecosystem.
          </h2>

          {[
            {
              title: "Student User Flow",
              desc: "The student workflow focuses on authentication, job exploration, application tracking, interview management, and profile handling.",
              image: "Student User Flow",
            },
            {
              title: "Recruiter User Flow",
              desc: "The recruiter workflow streamlines job posting, candidate review, shortlisting, interview scheduling, and recruitment management.",
              image: "Recruiter User Flow",
            },
            {
              title: "Admin User Flow",
              desc: "The admin workflow centralizes user management, job approvals, analytics, reports, and overall platform administration.",
              image: "Admin User Flow",
            },
          ].map((flow, i) => (

            <div
              key={i}
              className="mt-32"
            >

              <h3 className="text-4xl font-bold">
                {flow.title}
              </h3>

              <p className="mt-5 text-lg text-zinc-600 leading-relaxed max-w-3xl">
                {flow.desc}
              </p>

              {/* FLOW IMAGE */}
              <div className="mt-16 bg-white rounded-[2rem] p-5 border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

                <div className="overflow-hidden rounded-[1.5rem]">

                  <img
                    src={`/campushire/${flow.image}.png`}
                    alt={flow.title}
                    className="w-full"
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* WIREFRAMES */}
      <section className="px-8 md:px-20 py-32 bg-white">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            Wireframes
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Exploring layouts, structure, and user flows through low-fidelity wireframes.
          </h2>

          {[
            {
              title: "Student Portal",
              desc: "Focused on application tracking, job discovery, interviews, and profile management.",
              data: studentWireframes,
            },
            {
              title: "Recruiter Portal",
              desc: "Designed for candidate management, job postings, and recruitment workflows.",
              data: recruiterWireframes,
            },
            {
              title: "Admin Portal",
              desc: "Provides centralized control over users, jobs, reports, and platform management.",
              data: adminWireframes,
            },
          ].map((section, idx) => (

            <div key={idx} className="mt-32">

              <h3 className="text-4xl font-bold">
                {section.title}
              </h3>

              <p className="mt-5 text-lg text-zinc-600 leading-relaxed max-w-3xl">
                {section.desc}
              </p>

              <div className="grid lg:grid-cols-2 gap-12 mt-16">

                {section.data.map((screen, i) => (

                  <div key={i} className="flex flex-col items-center">

                    <div className="bg-white rounded-[1.8rem] p-[10px] border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] w-full">

                      <div className="overflow-hidden rounded-[1.3rem] bg-[#f8f8f8]">

                        <img
                          src={`/campushire/wireframes/${screen}.png`}
                          alt={screen}
                          className="w-full"
                        />

                      </div>

                    </div>

                    <p className="text-sm text-zinc-600 text-center mt-5 px-4">
                      {screen}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* DESIGN SYSTEM */}
      <section className="px-8 md:px-20 py-32 bg-[#f6f8f5]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            Design System
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-24">
            Building consistency through typography, colors, and visual hierarchy.
          </h2>

          <div className="grid lg:grid-cols-2 gap-14">

            {/* COLORS */}
            <div className="bg-white rounded-[3rem] p-12 border border-zinc-200">

              <h3 className="text-3xl font-bold mb-10">
                Color Palette
              </h3>

              <div className="grid grid-cols-3 gap-6">

                {[
                  "#14532d",
                  "#15803d",
                  "#16a34a",
                  "#4ade80",
                  "#bbf7d0",
                  "#ecfdf5",
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
            <div className="bg-white rounded-[3rem] p-12 border border-zinc-200">

              <h3 className="text-3xl font-bold mb-10">
                Typography
              </h3>

              <h1 className="text-7xl font-bold">
                Segoe UI
              </h1>

              <p className="mt-8 text-lg text-zinc-600 leading-relaxed">
                A clean sans-serif typeface selected for readability,
                hierarchy, and modern dashboard aesthetics across
                web and mobile interfaces.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* KEY FEATURES */}
      <section className="px-8 md:px-20 py-32 bg-white">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            Key Features
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Powerful features designed to simplify and enhance
            the placement management experience.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">

            {[
              {
                title: "Centralized Dashboard",
                desc: "Unified dashboards for students, recruiters, and administrators with organized workflows and quick access to important activities.",
              },
              {
                title: "Job & Internship Management",
                desc: "Students can explore opportunities while recruiters can create, manage, and monitor job postings efficiently.",
              },
              {
                title: "Application Tracking",
                desc: "Real-time tracking of applications, interview schedules, and recruitment progress for better transparency.",
              },
              {
                title: "Candidate Management",
                desc: "Recruiters can review applications, shortlist candidates, and manage hiring workflows seamlessly.",
              },
              {
                title: "Responsive Experience",
                desc: "Optimized web and mobile interfaces ensure accessibility and usability across multiple devices.",
              },
              {
                title: "Reports & Analytics",
                desc: "Administrative dashboards provide insights, reports, and monitoring tools for placement activities.",
              },
            ].map((feature, i) => (

              <div
                key={i}
                className="bg-[#f6f8f5] rounded-[2rem] p-10"
              >

                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 font-bold text-xl mb-8">
                  0{i + 1}
                </div>

                <h3 className="text-3xl font-bold leading-tight">
                  {feature.title}
                </h3>

                <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
                  {feature.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WEB UI */}
      <section className="px-8 md:px-20 py-32 bg-[#f6f8f5]">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            High Fidelity Web UI
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Dashboard-driven interfaces crafted for seamless placement management.
          </h2>

          {[
            {
              title: "Student Portal",
              desc: "Modern dashboard interfaces focused on usability, clarity, and accessibility.",
              data: studentWeb,
            },
            {
              title: "Recruiter Portal",
              desc: "Efficient workflows for candidate shortlisting and recruitment management.",
              data: recruiterWeb,
            },
            {
              title: "Admin Portal",
              desc: "Comprehensive management interfaces for overseeing platform operations.",
              data: adminWeb,
            },
          ].map((section, idx) => (

            <div key={idx} className="mt-32">

              <h3 className="text-4xl font-bold">
                {section.title}
              </h3>

              <p className="mt-5 text-lg text-zinc-600 leading-relaxed max-w-3xl">
                {section.desc}
              </p>

              <div className="grid lg:grid-cols-2 gap-12 mt-16">

                {section.data.map((screen, i) => (

                  <div
                    key={i}
                    className="flex flex-col items-center"
                  >

                    <div className="bg-[#1b1b1b] rounded-[1.8rem] p-[10px] shadow-[0_20px_80px_rgba(0,0,0,0.16)] w-full">

                      <div className="overflow-hidden rounded-[1.3rem] bg-white">

                        <img
                          src={`/campushire/web/${screen}.png`}
                          alt={screen}
                          className="w-full"
                        />

                      </div>

                    </div>

                    <p className="text-sm text-zinc-600 text-center mt-5 px-4">
                      {screen}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* MOBILE EXPERIENCE */}
      <section className="px-8 md:px-20 py-32 bg-white">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-green-700 mb-5">
            Mobile Experience
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-5xl">
            Responsive mobile interfaces designed for accessibility,
            usability, and seamless placement management on the go.
          </h2>

          {[
            {
              title: "Student Portal",
              desc: "A streamlined mobile experience for job discovery, application tracking, interview updates, and profile management.",
              data: studentMobile,
            },
            {
              title: "Recruiter Portal",
              desc: "Responsive recruitment workflows focused on candidate review, application management, and hiring activities.",
              data: recruiterMobile,
            },
            {
              title: "Admin Portal",
              desc: "Mobile-friendly administrative interfaces designed for monitoring users, reports, and placement operations.",
              data: adminMobile,
            },
          ].map((section, idx) => (

            <div key={idx} className="mt-32">

              <h3 className="text-4xl font-bold">
                {section.title}
              </h3>

              <p className="mt-5 text-lg text-zinc-600 leading-relaxed max-w-3xl">
                {section.desc}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16">

                {section.data.map((screen, i) => (

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
                            src={`/campushire/mobile/${screen}.png`}
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

          ))}

        </div>

      </section>

      {/* OUTCOME */}
      <section className="px-8 md:px-20 py-36 bg-[#14532d] text-white">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.25em] text-sm text-green-200 font-semibold mb-5">
            Outcome
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            A modern placement platform focused on clarity, efficiency, and seamless communication.
          </h2>

          <p className="mt-10 text-xl text-green-100 leading-relaxed max-w-4xl mx-auto">
            CampusHire transformed fragmented placement activities into
            a centralized recruitment ecosystem that improves usability,
            workflow efficiency, transparency, and communication between
            students, recruiters, and administrators.
          </p>

        </div>

      </section>

    </div>
  );
}