"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [email, setEmail] = React.useState("")
  const [emailError, setEmailError] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setSubmitSuccess(false);
    
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://hook.us2.make.com/hh6tddvumfc56amew8omn45698dimx6f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setEmail("");
      } else {
        setEmailError("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      setEmailError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="footer" className="relative border-t border-oritech-gray bg-oritech-bg text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative user-select-text">
            <h2 className="mb-4 text-3xl font-bold tracking-tight font-poppins">Stay Connected</h2>
            <p className="mb-6 text-gray-300 font-poppins font-light">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative" onSubmit={handleSubscribe}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm text-white bg-oritech-gray/30 border-oritech-gray/50 font-poppins font-light"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-oritech-red text-white transition-transform hover:scale-105"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            {emailError && <p className="mt-2 text-red-500 text-sm font-poppins">{emailError}</p>}
            {submitSuccess && <p className="mt-2 text-green-500 text-sm font-poppins">Thank you for subscribing!</p>}
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-oritech-red/10 blur-2xl" />
          </div>
          <div className="user-select-text">
            <h3 className="mb-4 text-lg font-semibold font-poppins">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block transition-colors hover:text-oritech-red w-full text-left text-gray-300 font-poppins font-light"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block transition-colors hover:text-oritech-red w-full text-left text-gray-300 font-poppins font-light"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('vision')} 
                className="block transition-colors hover:text-oritech-red w-full text-left text-gray-300 font-poppins font-light"
              >
                Our Vision
              </button>
              <button 
                onClick={() => scrollToSection('consultation')} 
                className="block transition-colors hover:text-oritech-red w-full text-left text-gray-300 font-poppins font-light"
              >
                Consultation
              </button>
              <button 
                onClick={() => scrollToSection('team')} 
                className="block transition-colors hover:text-oritech-red w-full text-left text-gray-300 font-poppins font-light"
              >
                Team
              </button>
            </nav>
          </div>
          <div className="user-select-text">
            <h3 className="mb-4 text-lg font-semibold font-poppins">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-gray-300 font-poppins font-light">
              <p>Tirana, Albania (Headquarters)</p>
              <p>San Francisco, CA (US Office)</p>
              <p>Phone: +1 (407) 406-9101</p>
              <p>Email: info@oritechai.com</p>
            </address>
          </div>
          <div className="relative user-select-text">
            <h3 className="mb-4 text-lg font-semibold font-poppins">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-oritech-gray hover:bg-oritech-red hover:text-white hover:border-oritech-red">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-oritech-gray/30 text-white border-none">
                    <p className="font-poppins font-light">Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-oritech-gray hover:bg-oritech-red hover:text-white hover:border-oritech-red">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-oritech-gray/30 text-white border-none">
                    <p className="font-poppins font-light">Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.instagram.com/oritech.al?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full border-oritech-gray hover:bg-oritech-red hover:text-white hover:border-oritech-red">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-oritech-gray/30 text-white border-none">
                    <p className="font-poppins font-light">Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-oritech-gray hover:bg-oritech-red hover:text-white hover:border-oritech-red">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-oritech-gray/30 text-white border-none">
                    <p className="font-poppins font-light">Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-white" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-oritech-red"
              />
              <Moon className="h-4 w-4 text-white" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-oritech-gray pt-8 text-center md:flex-row">
          <p className="text-sm text-gray-300 font-poppins font-light">
            © 2025 OriTech. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-oritech-red text-gray-300 font-poppins font-light">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-oritech-red text-gray-300 font-poppins font-light">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-oritech-red text-gray-300 font-poppins font-light">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }