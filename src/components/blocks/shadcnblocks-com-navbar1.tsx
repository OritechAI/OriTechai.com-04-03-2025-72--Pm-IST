import { Book, Menu, Sunset, Trees, Zap, Home, Wrench, Users, MessageSquare, Eye } from "lucide-react";
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
  sectionId?: string;
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
    sectionId?: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
      sectionId?: string;
    };
    signup: {
      text: string;
      url: string;
      sectionId?: string;
    };
  };
  activeSection?: string;
  onNavClick?: (url: string, sectionId: string) => void;
}

const Navbar1 = ({
  logo = {
    url: "#",
    src: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/473403470_988692343235438_2726478844184685232_n.jpg?ccb=11-4&oh=01_Q5AaICOuDFu9QizTOzc9zsleNfsrt32lZVXkpTc3rE38_l3Q&oe=67D2DA20&_nc_sid=5e03e0&_nc_cat=111",
    alt: "OriTech Logo",
    title: "OriTech",
  },
  menu = [
    { title: "Home", url: "/", icon: <Home className="h-5 w-5" />, sectionId: "about" },
    { title: "Services", url: "/services", icon: <Wrench className="h-5 w-5" />, sectionId: "services" },
    { title: "Our Vision", url: "/vision", icon: <Eye className="h-5 w-5" />, sectionId: "vision" },
    { title: "Team", url: "/team", icon: <Users className="h-5 w-5" />, sectionId: "team" },
    { title: "Contact Us", url: "/footer", icon: <MessageSquare className="h-5 w-5" />, sectionId: "footer" }
  ],
  mobileExtraLinks = [
    { name: "Home", url: "/", sectionId: "about" },
    { name: "Services", url: "/services", sectionId: "services" },
    { name: "Vision", url: "/vision", sectionId: "vision" },
    { name: "Team", url: "/team", sectionId: "team" },
  ],
  auth = {
    login: { text: "Log in", url: "#about", sectionId: "about" },
    signup: { text: "Book a call", url: "#consultation", sectionId: "consultation" },
  },
  activeSection,
  onNavClick,
}: Navbar1Props) => {
  const handleItemClick = (url: string, sectionId?: string) => {
    if (onNavClick && sectionId) {
      onNavClick(url, sectionId);
    } else if (sectionId) {
      // Default scrolling behavior
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="py-4 will-change-transform hw-accelerated">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleItemClick('/', 'about'); }} className="flex items-center gap-2">
              <img src={logo.src} className="w-8 h-8 rounded-full" alt={logo.alt} />
              <span className="text-lg font-semibold text-oritech-red">{logo.title}</span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => {
                    const isActive = activeSection === item.sectionId;
                    return (
                      <NavigationMenuItem key={item.title}>
                        <a
                          className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-oritech-red' : 'text-white hover:text-oritech-red'}`}
                          href={`#${item.sectionId}`}
                          onClick={(e) => { 
                            e.preventDefault(); 
                            handleItemClick(item.url, item.sectionId); 
                          }}
                        >
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.title}
                        </a>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-oritech-red hover:text-white hover:border-oritech-red">
              <a 
                href={`#${auth.login.sectionId}`}
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleItemClick(auth.login.url, auth.login.sectionId); 
                }}
              >
                {auth.login.text}
              </a>
            </Button>
            <Button asChild size="sm" className="bg-oritech-red hover:bg-oritech-red/90 text-white">
              <a 
                href={`#${auth.signup.sectionId}`}
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleItemClick(auth.signup.url, auth.signup.sectionId); 
                }}
              >
                {auth.signup.text}
              </a>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleItemClick('/', 'about'); }}
              className="flex items-center gap-2"
            >
              <img src={logo.src} className="w-8 h-8 rounded-full" alt={logo.alt} />
              <span className="text-lg font-semibold text-oritech-red">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-white text-white">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-oritech-bg border-oritech-gray/50 z-[9999]">
                <SheetHeader>
                  <SheetTitle>
                    <a 
                      href="#about" 
                      onClick={(e) => { e.preventDefault(); handleItemClick('/', 'about'); }}
                      className="flex items-center gap-2"
                    >
                      <img src={logo.src} className="w-8 h-8 rounded-full" alt={logo.alt} />
                      <span className="text-lg font-semibold text-oritech-red">{logo.title}</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <div className="flex w-full flex-col gap-4">
                    {menu.map((item) => {
                      const isActive = activeSection === item.sectionId;
                      return (
                        <a 
                          key={item.title} 
                          href={`#${item.sectionId}`}
                          onClick={(e) => { 
                            e.preventDefault(); 
                            handleItemClick(item.url, item.sectionId); 
                          }}
                          className={`flex items-center font-semibold ${isActive ? 'text-oritech-red' : 'text-white hover:text-oritech-red'}`}
                        >
                          {item.icon && <span className="mr-3">{item.icon}</span>}
                          {item.title}
                        </a>
                      );
                    })}
                  </div>
                  <div className="border-t border-oritech-gray/50 py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-oritech-red"
                          href={`#${link.sectionId}`}
                          onClick={(e) => { 
                            e.preventDefault(); 
                            handleItemClick(link.url, link.sectionId); 
                          }}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline" className="border-white text-white hover:bg-oritech-red hover:text-white hover:border-oritech-red">
                      <a 
                        href={`#${auth.login.sectionId}`}
                        onClick={(e) => { 
                          e.preventDefault(); 
                          handleItemClick(auth.login.url, auth.login.sectionId); 
                        }}
                      >
                        {auth.login.text}
                      </a>
                    </Button>
                    <Button asChild className="bg-oritech-red hover:bg-oritech-red/90 text-white">
                      <a 
                        href={`#${auth.signup.sectionId}`}
                        onClick={(e) => { 
                          e.preventDefault(); 
                          handleItemClick(auth.signup.url, auth.signup.sectionId); 
                        }}
                      >
                        {auth.signup.text}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar1 };