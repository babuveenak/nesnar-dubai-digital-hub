import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import aiHumanCollaboration from "@/assets/ai-human-collaboration.jpg";
import techInfrastructure from "@/assets/tech-infrastructure.jpg";
import enterpriseSoftware from "@/assets/enterprise-software.jpg";
import Autoplay from "embla-carousel-autoplay";

const TechnologyCarousel = () => {
  const slides = [
    {
      image: aiHumanCollaboration,
      title: "AI & Human Collaboration",
      description: "Empowering teams with intelligent technology solutions",
    },
    {
      image: techInfrastructure,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud-native platforms",
    },
    {
      image: enterpriseSoftware,
      title: "Enterprise Solutions",
      description: "Advanced analytics and business intelligence",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Innovation</h2>
            <p className="text-xl text-muted-foreground">
              Driving digital transformation with cutting-edge solutions
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-card">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                      <div className="p-8 text-foreground">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-lg text-muted-foreground">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCarousel;
