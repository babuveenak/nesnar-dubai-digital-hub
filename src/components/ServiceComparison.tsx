import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
const ServiceComparison = () => {
  const comparisonData = [{
    category: "Core Capabilities",
    oracle: ["Enterprise ERP Suite", "Cloud Infrastructure", "Database Management", "Supply Chain Solutions"],
    salesforce: ["CRM Platform", "Sales Automation", "Service Cloud", "Marketing Automation"]
  }, {
    category: "Implementation Timeline",
    oracle: ["6-12 months for ERP", "3-6 months for Cloud", "Phased rollout approach", "Extensive customization"],
    salesforce: ["3-6 months typical", "Rapid deployment options", "Agile implementation", "Quick time-to-value"]
  }, {
    category: "Best Use Cases",
    oracle: ["Large enterprises", "Complex financial operations", "Manufacturing & logistics", "Public sector"],
    salesforce: ["Sales-driven organizations", "Customer service teams", "Marketing automation", "SMB to enterprise"]
  }, {
    category: "Integration",
    oracle: ["Deep ERP integration", "Legacy system connectivity", "On-premise & cloud hybrid", "Enterprise middleware"],
    salesforce: ["API-first architecture", "AppExchange marketplace", "Third-party integrations", "Cloud-native platform"]
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
      </div>
    </section>;
};
export default ServiceComparison;