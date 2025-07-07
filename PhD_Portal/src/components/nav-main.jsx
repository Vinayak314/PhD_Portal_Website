"use client";

import { useLocation } from "react-router-dom"; // for current path
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({ items }) {
  const location = useLocation(); // get current path
  const pathname = location.pathname;

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url;

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={`group ${
                  isActive
                    ? "bg-[#ffffff] text-[#] hover:bg-[#ffffff]"
                    : "hover:text-[#000000] hover:bg-muted hover:bg-[#f0f0f0]/50"
                }`}
              >
                {/* {item.title === "e-Library"? ():()} */}
                <a
                  href={item.url}
                  target={item.title === "e-Library" ? "_blank" : undefined}
                  rel={item.title === "e-Library" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 px-2 py-2 transition-colors rounded-md"
                >
                  <item.icon
                    className={`h-5 w-5 `}
                  />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
