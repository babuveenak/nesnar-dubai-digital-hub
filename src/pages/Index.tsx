import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatisticsCounter from "@/components/StatisticsCounter";
import TechnologyCarousel from "@/components/TechnologyCarousel";
import { Database, Cloud, Users, Zap, Shield, TrendingUp } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import heroBackground from "@/assets/hero-background.jpg";
import aiHumanCollaboration from "@/assets/ai-human-collaboration.jpg";
import techInfrastructure from "@/assets/tech-infrastructure.jpg";
import enterpriseSoftware from "@/assets/enterprise-software.jpg";
import oracleServices from "@/assets/oracle-services.jpg";
import salesforceServices from "@/assets/salesforce-services.jpg";

const Index = () => {
  const services = [
    {
      title: "Oracle Practice",
      icon: <Database className="w-12 h-12 text-primary" />,
      description: "Oracle EBS Migration, Support & Upgrade, and Oracle Fusion ERP implementations across Financials, SCM, HCM, and Customer Applications.",
    },
    {
      title: "Salesforce Solutions",
      icon: <Cloud className="w-12 h-12 text-primary" />,
      description: "End-to-end Salesforce services including implementation, customization, integration, and ongoing support.",
    },
    {
      title: "Digital Transformation",
      icon: <Zap className="w-12 h-12 text-primary" />,
      description: "Modernize your enterprise with cloud-native solutions and cutting-edge digital transformation strategies.",
    },
    {
      title: "Managed Services",
      icon: <Shield className="w-12 h-12 text-primary" />,
      description: "24/7 application support, maintenance, and optimization for your mission-critical systems.",
    },
  ];

  const industries = [
    "Public Sector",
    "Retail",
    "Manufacturing",
    "Finance",
    "Healthcare",
  ];

  const heroSlides = [
    {
      image: aiHumanCollaboration,
      title: "Software is complex. We make it simple.",
      subtitle: "Leading Oracle and Salesforce consulting partner serving enterprises across UAE, GCC, and MENA regions since 2015.",
    },
    {
      image: heroBackground,
      title: "Transform Your Enterprise",
      subtitle: "Expert Oracle and Salesforce solutions driving digital transformation for leading organizations.",
    },
    {
      image: techInfrastructure,
      title: "Cloud-Native Innovation",
      subtitle: "Scalable cloud solutions and enterprise ERP implementations tailored to your business needs.",
    },
    {
      image: enterpriseSoftware,
      title: "Enterprise Excellence",
      subtitle: "70+ professionals delivering world-class technology solutions across 15+ countries.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Carousel Section */}
      <section className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] md:h-[700px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
                  <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl mx-auto text-center text-primary-foreground">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
                          {slide.subtitle}
                        </p>
                        {index === 0 && (
                          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                            <Button asChild size="lg" variant="secondary" className="text-lg">
                              <Link to="/contact">Contact Us</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                              <Link to="/services">Our Services</Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-background/80 hover:bg-background" />
          <CarouselNext className="right-4 bg-background/80 hover:bg-background" />
        </Carousel>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions powered by Oracle and Salesforce platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={service.title} className="shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{ 
                  backgroundImage: `url(${index === 0 ? oracleServices : index === 1 ? salesforceServices : ''})`,
                  backgroundColor: index > 1 ? 'hsl(var(--secondary))' : undefined
                }} />
                <CardContent className="pt-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Nesnar</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Established in 2015, Nesnar Software Services LLC is a Dubai-based IT consulting and technology services company with a global presence.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With 70+ professionals across development centers in India and offices worldwide, we deliver enterprise-grade Oracle and Salesforce solutions to clients across the UAE, GCC, and MENA regions.
              </p>
              <Button asChild variant="default">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">70+</div>
                  <p className="text-muted-foreground">Professionals</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <StatisticsCounter />

      {/* Technology Carousel */}
      <TechnologyCarousel />

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading organizations across multiple sectors
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <Card key={industry} className="shadow-card">
                <CardContent className="px-8 py-4">
                  <p className="font-medium text-lg">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our Oracle and Salesforce expertise can drive your digital transformation.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
