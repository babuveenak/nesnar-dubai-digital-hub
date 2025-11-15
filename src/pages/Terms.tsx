import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const Terms = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last Updated: January 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily access the materials on Nesnar Software Services LLC's website for personal, non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The materials on Nesnar's website are provided on an 'as is' basis. Nesnar makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitations</h2>
              <p className="text-muted-foreground mb-4">
                In no event shall Nesnar Software Services LLC or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Information</h2>
              <p className="text-muted-foreground">For questions about these Terms &amp; Conditions, please contact us at sales@nesnar.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Terms;