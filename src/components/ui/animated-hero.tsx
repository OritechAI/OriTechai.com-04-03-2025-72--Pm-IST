import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Autopilot", "Efficiency", "Trust"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {/* Removed "Read our launch article" button */}
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-light user-select-text font-poppins">
              <span className="text-white">Automations that runs your business on</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-oritech-red user-select-text font-poppins"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center font-bold user-select-text font-poppins">
              <span>BREATHE LIFE INTO YOUR SYSTEMS</span>
              <br/>
              <span>WITH CUTTING-EDGE AI SOLUTIONS</span>
            </p>
          </div>
          <div className="flex flex-row gap-3">
            {/* Fixed About us button with dark text */}
            <Button 
              size="lg" 
              className="gap-4 bg-white text-black hover:bg-white/90 border-white user-select-text font-poppins" 
              variant="outline"
              onClick={() => {
                const visionSection = document.getElementById('vision');
                if (visionSection) {
                  window.scrollTo({
                    top: visionSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              About us
            </Button>
            <Button 
              size="lg" 
              className="gap-4 user-select-text font-poppins"
              onClick={() => {
                const consultationSection = document.getElementById('consultation');
                if (consultationSection) {
                  window.scrollTo({
                    top: consultationSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Book a consultation <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };