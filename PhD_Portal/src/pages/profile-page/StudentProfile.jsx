"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Calendar, Phone, Mail, GraduationCap, BookOpen, FileText, Menu, X } from "lucide-react"
import { Briefcase } from "lucide-react";


export default function StudentProfile() {
  const [activeSection, setActiveSection] = useState("personal")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <div className="flex-1 space-y-4 lg:pr-16">
          {/* Header */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Student Profile
          </h1>
          {/* Fixed Student Profile Card (Full width) */}
          <div className="top-4 z-10">
            <Card className="w-full p-0 overflow-hidden border border-gray-300 border-b-4 border-b-gray-300 rounded-md shadow">
              {/* Top red section */}
              <div className="bg-[#B7202E] text-white p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Avatar overlapping both sections */}
                  <Avatar className="w-24 h-24 border-4 border-white bg-white">
                    <AvatarImage
                      src="/placeholder.svg?height=96&width=96"
                      alt="Profile"
                    />
                    <AvatarFallback className="bg-blue-500 text-white text-2xl">
                      SV
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      Mr. Random
                    </h2>
                    <p className="text-lg mb-1">
                      K. J. Somaiya School Of Engineering
                    </p>
                    <p className="text-base mb-0">
                      Second Year B.Tech Computer Engineering
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom white section (25%) */}
              <div className="bg-white text-black px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-black" />
                    <span>1600</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-black" />
                    <span>24/06/2005</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-black" />
                    <span>1234567890</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-black" />
                    <span className="truncate">Random@somaiya.edu</span>
                  </div>
                </div>
              </div>
            </Card>            
          </div>

          <div className="grid grid-cols-4">

          <div className="col-span-3 space-y-6 ">
            {activeSection === "personal" && <PersonalDetails/>}
            {activeSection === "educational" && <EducationDetails />}
            {activeSection === "program" && <ProgramDetails />}
          </div>

          <div className="h-64 col-span-1 bg-white shadow-lg border border-gray-300 border-b-4 border-b-gray-300 rounded-md overflow-auto">
              <div className="p-4">
                <nav className="space-y-2">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      activeSection === "personal"
                        ? "bg-gray-100 text-[#ED1C24]"
                        : "text-black"
                    } hover:bg-gray-100`}
                    onClick={() => setActiveSection("personal")}
                  >
                    <User
                      className={`w-4 h-4 mr-2 ${
                        activeSection === "personal"
                          ? "text-[#ED1C24]"
                          : "text-black"
                      }`}
                    />
                    Personal Details
                  </Button>

                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      activeSection === "educational"
                        ? "bg-gray-100 text-[#ED1C24]"
                        : "text-black"
                    } hover:bg-gray-100`}
                    onClick={() => setActiveSection("educational")}
                  >
                    <GraduationCap
                      className={`w-4 h-4 mr-2 ${
                        activeSection === "educational"
                          ? "text-[#ED1C24]"
                          : "text-black"
                      }`}
                    />
                    Educational Details
                  </Button>

                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      activeSection === "program"
                        ? "bg-gray-100 text-[#ED1C24]"
                        : "text-black"
                    } hover:bg-gray-100`}
                    onClick={() => setActiveSection("program")}
                  >
                    <BookOpen
                      className={`w-4 h-4 mr-2 ${
                        activeSection === "program"
                          ? "text-[#ED1C24]"
                          : "text-black"
                      }`}
                    />
                    Program Details
                  </Button>
                </nav>
              </div>
            </div>
          </div>
          
        </div>

        {/* Right Sidebar Navigation */}
      </div>
    </div>
  );
}

const PersonalDetails = ()=>{
  return(
            <section id="personal" className="w-inherit pr-4">
              <Card className="border border-gray-300 border-b-4 border-b-gray-300 rounded-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Personal Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name</label>
                      <p className="text-gray-900">something</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Name</label>
                      <p className="text-gray-900">something</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      <p className="text-gray-900">Male</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
                      <p className="text-gray-900">Unmarried</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Aadhar Number</label>
                      <p className="text-gray-900">XXXXXXXX1234</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nearest Railway Station</label>
                      <p className="text-gray-900">Vidyavihar Station</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Residential Address</label>
                      <div className="text-gray-900 space-y-1">
                        <p>Flat No. , Building Name</p>
                        <p>Land Mark, Street Name</p>
                        <p>Area, State, Pin Code - 400077</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Permanent Address</label>
                      <div className="text-gray-900 space-y-1">
                        <p>Flat No., Building Name</p>
                        <p>Land Mark, Street Name</p>
                        <p>Area, State, Pin Code - 4000</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                      <p className="text-gray-900">1234567890</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Mobile</label>
                      <p className="text-gray-900">1234567890</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Primary Email</label>
                      <p className="text-gray-900">abc@gmail.com</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Email</label>
                      <p className="text-gray-900">abc@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
            );
}

const EducationDetails = () => {
  return(
            <section id="educational" className="w-inherit pr-4">
              <Card className="border border-gray-300 border-b-4 border-b-gray-300 rounded-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5" />
                    <span>Educational Details</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">

                  {/* UG Block */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Undergraduate Or Equivalent</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="text-gray-600">Degree Name</p>
                        <p className="font-medium text-black">Bachelors Of Technology (B. Tech)</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Institute Name</p>
                        <p className="font-medium text-black">K. J. Somaiya School Of Engineering</p>
                      </div>
                      <div>
                        <p className="text-gray-600">University Name</p>
                        <p className="font-medium text-black">Somaiya Vidyavihar University</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Year Of Passing</p>
                        <p className="font-medium text-black">2021</p>
                      </div>
                    </div>
                  </div>

                  {/* PG Block */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Postgraduate Or Equivalent</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="text-gray-600">Degree Name</p>
                        <p className="font-medium text-black">Masters Of Technology (M. Tech)</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Institute Name</p>
                        <p className="font-medium text-black">K. J. Somaiya School Of Engineering</p>
                      </div>
                      <div>
                        <p className="text-gray-600">University Name</p>
                        <p className="font-medium text-black">Somaiya Vidyavihar University</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Year Of Passing</p>
                        <p className="font-medium text-black">2023</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Employment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="text-gray-600">Designation</p>
                        <p className="font-medium text-black">Full Stack Web Developer</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Organization Name</p>
                        <p className="font-medium text-black">K. J. Somaiya School Of Engineering</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Duration</p>
                        <p className="font-medium text-black">10mo 20 d (05/24 to 01/25)</p>
                      </div>
                        </div>
                  </div>

                </CardContent>
              </Card>


            </section>
  );
}

const ProgramDetails=() => {
  return(
            <section id="program" className="w-inherit pr-4">
              <Card className="border border-gray-300 border-b-4 border-b-gray-300 rounded-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Program Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                      <p className="text-gray-900">Computer Engineering</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year of Admission</label>
                      <p className="text-gray-900">2022</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Semester</label>
                      <p className="text-gray-900">4th Semester</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Guide Name</label>
                      <p className="text-gray-900">Dr. Rajesh Kumar</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Guide Email</label>
                      <p className="text-gray-900">rajesh.kumar@somaiya.edu</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        Undergoing
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Domain of Research</label>
                      <p className="text-gray-900">Artificial Intelligence and Machine Learning</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Topic of Research</label>
                      <p className="text-gray-900">Deep Learning Applications in Computer Vision</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"> Research Description</label>
                    <p className="text-gray-700 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bonds wih Institute</label>
                    <p className="text-gray-700 leading-relaxed">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                      laudantium.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Scholarship</label>
                    <p className="text-gray-700 leading-relaxed">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    </p>
                  </div>


                </CardContent>
              </Card>
            </section>
            );
}