import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, TrendingUp, Globe, Award } from "lucide-react";
const Careers = () => {
  const benefits = [{
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Career Growth",
    description: "Continuous learning opportunities and clear career progression paths"
  }, {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "Global Exposure",
    description: "Work with international clients"
  }, {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Cutting-Edge Technology",
    description: "Work with Latest technologies"
  }, {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Collaborative Culture",
    description: "Be part of a team of passionate professionals"
  }];
  const openings = [{
    title: "Oracle Fusion Consultant",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "5+ years"
  }, {
    title: "Salesforce Developer",
    location: "Dubai, UAE / Remote",
    type: "Full-time",
    experience: "3+ years"
  }, {
    title: "Oracle EBS Technical Consultant",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "4+ years"
  }, {
    title: "Salesforce Admin",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "2+ years"
  }];
  return <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Build your career with a leading Oracle and Salesforce consulting firm
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Nesnar?</h2>
              <p className="text-xl text-muted-foreground">
                Be part of a dynamic team that's shaping the future of enterprise technology in the Middle East
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map(benefit => <Card key={benefit.title} className="text-center shadow-card hover:shadow-card-hover transition-all">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        

        {/* Employee Value Proposition */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Culture</h2>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    At Nesnar, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team members work on challenging projects that make a real impact on leading organizations across the Middle East.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We invest in our people through training programs, certifications, and career development opportunities. Join us and be part of a team that values excellence, integrity, and innovation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Careers;