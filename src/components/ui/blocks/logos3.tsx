// This template requires the Embla Auto Scroll plugin to be installed:
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "1",
      description: "GPT-4o",
      image: "https://1min.ai/_next/image?url=https%3A%2F%2Fblog1minai.wordpress.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1minai-ai-chat-with-gpt-4o-illustration.jpg&w=1920&q=75",
      className: "h-12 w-auto",
    },
    {
      id: "2",
      description: "Make Automation",
      image: "https://workveu.com/images/Make.png",
      className: "h-12 w-auto",
    },
    {
      id: "3",
      description: "Voiceflow",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVwOzVey6XcMevohRDman3xgDFw91v8qZfw&s",
      className: "h-12 w-auto",
    },
    {
      id: "4",
      description: "VAPI",
      image: "https://www.marcamoney.com/wp-content/uploads/2024/12/Vapi-raises-20-million-in-Series-A-funding-round-led-by-Bessemer-Venture-Partners.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "5",
      description: "n8n",
      image: "https://images.seeklogo.com/logo-png/47/1/n8n-logo-png_seeklogo-470809.png",
      className: "h-12 w-auto",
    },
    {
      id: "6",
      description: "API",
      image: "https://cdn.vectorstock.com/i/500p/22/36/api-line-icon-on-white-background-vector-43902236.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "7",
      description: "Retell",
      image: "https://bookface-images.s3.amazonaws.com/logos/1a8537326cec1508a5051c913e288dcb0859143f.png?1704748018",
      className: "h-12 w-auto",
    },
    {
      id: "8",
      description: "Twilio",
      image: "https://cdn.intuji.com/2022/05/What-Is-Twilio-scaled-1-1024x576.jpg",
      className: "h-12 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-6">
      <div className="pt-4">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ 
              loop: true,
              align: "start",
              containScroll: "trimSnaps"
            }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={`${logo.className} opacity-80 hover:opacity-100 transition-opacity object-contain`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };