import { MessageSquare, Zap, Database, Code2, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Feature() {
  const services = [
    {
      icon: <MessageSquare className="w-8 h-8 stroke-1 text-oritech-red" />,
      title: 'AI Chatbots',
      description: 'Intelligent agents that engage customers 24/7. Our chatbots provide instant support, qualify leads, and collect valuable customer data while you focus on growing your business. They can handle multiple conversations simultaneously and seamlessly integrate with your existing systems.',
    },
    {
      icon: <Zap className="w-8 h-8 stroke-1 text-oritech-red" />,
      title: 'AI Voice Agents',
      description: 'Natural voice assistants for seamless customer interactions. Our voice agents sound remarkably human, understand context, and can handle complex dialogues. They provide a personalized experience for your customers while reducing operational costs and increasing efficiency.',
    },
    {
      icon: <Database className="w-8 h-8 stroke-1 text-oritech-red" />,
      title: 'B2B Lead Generation',
      description: 'AI-powered systems that identify quality leads efficiently. Our lead generation solutions use advanced algorithms to target high-value prospects, automate outreach, and nurture relationships. Get more qualified meetings and grow your sales pipeline without expanding your team.',
    },
    {
      icon: <Code2 className="w-8 h-8 stroke-1 text-oritech-red" />,
      title: 'Custom AI Projects',
      description: 'Tailor-made solutions for your unique business challenges. We build custom AI applications designed specifically for your workflow and objectives. From process automation to innovative customer experiences, we help you leverage AI to gain a competitive advantage in your industry.',
    }
  ];

  return (
    <div className="w-full py-20 lg:py-40 feature-grid">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>AI Services</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-white font-poppins user-select-text">
                Our AI Services
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-300 text-left font-poppins user-select-text">
                Cutting-edge AI automation solutions for businesses
              </p>
            </div>
          </div>

          {/* Tech Partners Logo Carousel */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-8">
              <img src="https://1min.ai/_next/image?url=https%3A%2F%2Fblog1minai.wordpress.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1minai-ai-chat-with-gpt-4o-illustration.jpg&w=1920&q=75" 
                   alt="GPT-4o" 
                   className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                   loading="lazy" />
              <img src="https://workveu.com/images/Make.png" 
                   alt="Make Automation" 
                   className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                   loading="lazy" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVwOzVey6XcMevohRDman3xgDFw91v8qZfw&s" 
                   alt="Voiceflow" 
                   className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                   loading="lazy" />
              <img src="https://www.marcamoney.com/wp-content/uploads/2024/12/Vapi-raises-20-million-in-Series-A-funding-round-led-by-Bessemer-Venture-Partners.jpg" 
                   alt="VAPI" 
                   className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                   loading="lazy" />
              <img src="https://images.seeklogo.com/logo-png/47/1/n8n-logo-png_seeklogo-470809.png" 
                   alt="n8n" 
                   className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                   loading="lazy" />
              <img src="https://cdn.intuji.com/2022/05/What-Is-Twilio-scaled-1-1024x576.jpg" 
                   alt="Twilio" 
                   className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                   loading="lazy" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-oritech-gray/30 backdrop-blur-sm rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex flex-col border border-oritech-gray/50 hw-accelerated transition-all duration-300 hover:bg-oritech-gray/40">
              <div className="flex items-center mb-4">
                {services[0].icon}
                <h3 className="ml-3 text-xl tracking-tight text-white font-bold font-poppins user-select-text">{services[0].title}</h3>
              </div>
              <p className="text-gray-300 text-base font-poppins user-select-text">
                {services[0].description}
              </p>
            </div>
            <div className="bg-oritech-gray/30 backdrop-blur-sm rounded-md aspect-square p-6 flex flex-col border border-oritech-gray/50 hw-accelerated transition-all duration-300 hover:bg-oritech-gray/40">
              <div className="flex items-center mb-4">
                {services[1].icon}
                <h3 className="ml-3 text-xl tracking-tight text-white font-bold font-poppins user-select-text">{services[1].title}</h3>
              </div>
              <p className="text-gray-300 text-base font-poppins user-select-text">
                {services[1].description}
              </p>
            </div>

            <div className="bg-oritech-gray/30 backdrop-blur-sm rounded-md aspect-square p-6 flex flex-col border border-oritech-gray/50 hw-accelerated transition-all duration-300 hover:bg-oritech-gray/40">
              <div className="flex items-center mb-4">
                {services[2].icon}
                <h3 className="ml-3 text-xl tracking-tight text-white font-bold font-poppins user-select-text">{services[2].title}</h3>
              </div>
              <p className="text-gray-300 text-base font-poppins user-select-text">
                {services[2].description}
              </p>
            </div>
            <div id="custom-ai-card" className="bg-oritech-gray/30 backdrop-blur-sm rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex flex-col border border-oritech-gray/50 hw-accelerated transition-all duration-300 hover:bg-oritech-gray/40">
              <div className="flex items-center mb-4">
                {services[3].icon}
                <h3 className="ml-3 text-xl tracking-tight text-white font-bold font-poppins user-select-text">{services[3].title}</h3>
              </div>
              <p className="text-gray-300 text-base font-poppins user-select-text">
                {services[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}