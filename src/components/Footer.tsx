import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import nesnarLogo from "@/assets/nesnar-logo.png";
const Footer = () => {
  return <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={nesnarLogo} alt="Nesnar Software Services" className="h-20 md:h-28 mb-4" />
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/nesnar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/share/1BbUebXD7x/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/nesnartech?t=NbZRYS1DHURKqm_sNB5X2g&s=09" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center w-5 h-5">
                <span className="font-bold text-lg leading-none">𝕏</span>
              </a>
              <a href="https://www.instagram.com/nesnartechnologies?igsh=eGw4cm1qenEybjZl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Oracle  </li>
              <li className="text-muted-foreground">Salesforce</li>
              <li className="text-muted-foreground">Mobility Solutions</li>
              <li className="text-muted-foreground">Cloud Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Emirates Financial Towers, DIFC, Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={18} />
                <span>+971 50 897 9544</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={18} />
                <a href="mailto:sales@nesnar.com" className="hover:text-primary transition-colors">
                  sales@nesnar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2015-2025 Nesnar Software Services LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </footer>;
};
export default Footer;