'use client'

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import { Button } from "./ui/button";
import { useCollection } from "react-firebase-hooks/firestore";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

/**
 * The app sidebar component.
 *
 * This component renders a sidebar with a header, a series of menu items,
 * and a footer. The sidebar is collapsible on mobile devices.
 *
 * The component takes a single prop, `variant`, which is a string indicating
 * the type of sidebar to render. The default is "sidebar", which renders a
 * full-height sidebar. If the value is "floating", the sidebar is rendered
 * as a floating panel.
 *
 * The `collapsible` prop is a boolean indicating whether the sidebar should
 * be collapsible on mobile devices. The default is `true`.
 *
 */
export function AppSidebar() {

const [data, loading, error] = useCollection()

  const menuOptions = (
    <>
      <NewDocumentButton />
    </>
  );

  return (
    <div>
      <Sidebar variant="sidebar" collapsible="offcanvas">
        <SidebarContent>
          <SidebarHeader>
             {/* The header of the sidebar. This is a simple div with a title. */}
            <div className="m-auto pt-2 text-lg font-semibold">Menu</div>
          </SidebarHeader>
          <NewDocumentButton />
          <SidebarGroup>
             {/* * The first menu group. This is a simple div with a title. */}
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                 {/* * The menu items. Each item is a div with an icon and a title. */}
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
             {/* * The second menu group. This is a simple div with a title. */}
            <SidebarGroupLabel>Shared With Me</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                 {/* * The menu items. Each item is a div with an icon and a title. */}
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
           {/* * The footer of the sidebar. This is a simple div with a title. */}
          <SidebarFooter></SidebarFooter>
          <SidebarRail />
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
