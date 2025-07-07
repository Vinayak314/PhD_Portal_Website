// File: src/components/nav-user.tsx (or .jsx if you prefer JS)

"use client"

import { Pencil } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export function NavUser({ user }) {
  const { state } = useSidebar()

  return (
    <SidebarMenu>
      {state == "collapsed" ? (
        <SidebarMenuItem className="mt-20">
          <Link to="profile">
          <SidebarMenuButton className="justify-center">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="rounded-lg text-black font-bold">
                {user.name?.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
          </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ) : (
        <Link to="profile">

        <SidebarMenuItem className="mt-20 relative flex flex-col items-center justify-center rounded-xl p-4 gap-2">
          <button className="absolute right-3 top-3 text-white hover:text-foreground">
            <Pencil className="hidden h-4 w-4" />
          </button>
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-xl text-black font-bold">
              {user.name?.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>

          <div className="text-center">
            <p className="text-sm font-semibold text-white">{user.name}</p>
            <p className="text-xs text-white">{user.institution}</p>
            <p className="text-xs font-medium mt-1 text-white">
              Enrollment ID : {user.enrollmentId}
            </p>
          </div>
        </SidebarMenuItem>
        </Link>
      )}
    </SidebarMenu>
  )
}
