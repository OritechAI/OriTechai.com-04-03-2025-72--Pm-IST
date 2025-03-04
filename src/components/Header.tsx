import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Wrench, Users, MessageSquare, Eye } from 'lucide-react';
import { Navbar1 } from '@/components/blocks/shadcnblocks-com-navbar1';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { title: 'Home', url: '/', icon: <Home className="h-5 w-5" />, sectionId: 'about' },
    { title: 'Services', url: '/services', icon: <Wrench className="h-5 w-5" />, sectionId: 'services' },
    { title: 'Our Vision', url: '/vision', icon: <Eye className="h-5 w-5" />, sectionId: 'vision' },
    { title: 'Team', url: '/team', icon: <Users className="h-5 w-5" />, sectionId: 'team' },
    { title: 'Contact Us', url: '/footer', icon: <MessageSquare className="h-5 w-5" />, sectionId: 'footer' }
  ];

  const mobileExtraLinks = [
    { name: "Home", url: "/", sectionId: "about" },
    { name: "Services", url: "/services", sectionId: "services" },
    { name: "Vision", url: "/vision", sectionId: "vision" },
    { name: "Team", url: "/team", sectionId: "team" },
  ];

  const authOptions = {
    login: { text: "Our Vision", url: "#vision", sectionId: "vision" },
    signup: { text: "Book a call", url: "#consultation", sectionId: "consultation" },
  };

  const logo = {
    url: "#about",
    src: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/473403470_988692343235438_2726478844184685232_n.jpg?ccb=11-4&oh=01_Q5AaICOuDFu9QizTOzc9zsleNfsrt32lZVXkpTc3rE38_l3Q&oe=67D2DA20&_nc_sid=5e03e0&_nc_cat=111",
    alt: "OriTech Logo",
    title: "OriTech",
  };

  useEffect(() => {
    // Set mounted after component is mounted for better initial render
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (url: string, sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Header variants for animation
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren" 
      } 
    }
  };

  return (
    <motion.div 
      className={`fixed left-0 right-0 z-[10000] transition-all duration-300 ${
        scrolled ? 'bg-[#1a1a1a]/80 shadow-lg backdrop-blur-md border-b border-oritech-gray/20' : 'bg-[#1a1a1a]/80'
      }`}
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
      variants={headerVariants}
      style={{ 
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform, opacity",
        top: "0",
        marginTop: "-0.5vh" // Move header 0.5% of viewport height higher
      }}
    >
      <Navbar1 
        logo={logo}
        menu={navItems}
        mobileExtraLinks={mobileExtraLinks}
        auth={authOptions}
        activeSection={activeSection}
        onNavClick={scrollToSection}
      />
    </motion.div>
  );
};

export default Header;