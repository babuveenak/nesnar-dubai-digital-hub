import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const ServiceComparison = () => {
  const comparisonData = [
    {
      category: "Core Capabilities",
      oracle: ["Enterprise ERP Suite", "Cloud Infrastructure", "Database Management", "Supply Chain Solutions"],
      salesforce: ["CRM Platform", "Sales Automation", "Service Cloud", "Marketing Automation"],
    },
    {
      category: "Implementation Timeline",
      oracle: ["6-12 months for ERP", "3-6 months for Cloud", "Phased rollout approach", "Extensive customization"],
      salesforce: ["3-6 months typical", "Rapid deployment options", "Agile implementation", "Quick time-to-value"],
    },
    {
      category: "Best Use Cases",
      oracle: ["Large enterprises", "Complex financial operations", "Manufacturing & logistics", "Public sector"],
      salesforce: ["Sales-driven organizations", "Customer service teams", "Marketing automation", "SMB to enterprise"],
    },
    {
      category: "Integration",
      oracle: ["Deep ERP integration", "Legacy system connectivity", "On-premise & cloud hybrid", "Enterprise middleware"],
      salesforce: ["API-first architecture", "AppExchange marketplace", "Third-party integrations", "Cloud-native platform"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Oracle vs Salesforce</h2>
            <p className="text-xl text-muted-foreground">
              Compare capabilities to choose the right solution for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {comparisonData.map((section) => (
              <Card key={section.category} className="shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">{section.category}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-3 h-3 bg-[#FF0000] rounded-full"></span>
                        Oracle
                      </h4>
                      <ul className="space-y-2">
                        {section.oracle.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-3 h-3 bg-[#00A1E0] rounded-full"></span>
                        Salesforce
                      </h4>
                      <ul className="space-y-2">
                        {section.salesforce.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
