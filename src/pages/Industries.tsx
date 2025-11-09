import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ShoppingCart, Factory, Landmark, Heart } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Public Sector",
      description: "Empowering government organizations with secure, scalable enterprise solutions that enhance citizen services and operational efficiency.",
      solutions: ["Oracle EBS", "Oracle Fusion", "Citizen Portal Integration", "Compliance Management"],
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary" />,
      title: "Retail",
      description: "Transform retail operations with integrated systems for inventory, customer engagement, and omnichannel commerce.",
      solutions: ["Salesforce Commerce", "Oracle Retail", "Inventory Management", "Customer Experience"],
    },
    {
      icon: <Factory className="w-12 h-12 text-primary" />,
      title: "Manufacturing",
      description: "Streamline production, supply chain, and quality management with end-to-end ERP solutions.",
      solutions: ["Oracle SCM", "Manufacturing Execution", "Quality Management", "Asset Management"],
    },
    {
      icon: <Landmark className="w-12 h-12 text-primary" />,
      title: "Finance",
      description: "Deliver secure, compliant financial services with robust ERP and CRM platforms designed for the financial sector.",
      solutions: ["Oracle Financials", "Compliance & Risk", "Customer Onboarding", "Regulatory Reporting"],
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Healthcare",
      description: "Enable better patient care and operational excellence with integrated healthcare management solutions.",
      solutions: ["Patient Management", "Oracle HCM", "Salesforce Health Cloud", "Compliance Systems"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Delivering specialized solutions across diverse sectors
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              {industries.map((industry, index) => (
                <Card key={industry.title} className="shadow-card hover:shadow-card-hover transition-all">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        {industry.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                        <p className="text-muted-foreground text-lg mb-4">
                          {industry.description}
                        </p>
                        <div>
                          <h4 className="font-semibold mb-2">Key Solutions:</h4>
                          <div className="flex flex-wrap gap-2">
                            {industry.solutions.map((solution) => (
                              <span
                                key={solution}
                                className="px-3 py-1 bg-secondary text-sm rounded-full"
                              >
                                {solution}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Industry Impact</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Industry Projects Delivered</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">Countries Served</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">Client Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
