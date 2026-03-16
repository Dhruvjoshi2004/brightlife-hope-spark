const BrightLifeFooter = () => (
  <footer className="bg-card pt-24 pb-12 border-t border-border">
    <div className="container-main">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">BrightLife</span>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            A global non-profit dedicated to creating sustainable health and
            education ecosystems for the world's most vulnerable communities.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-muted-foreground">
            Contact
          </h4>
          <p className="text-foreground/70 mb-2">hello@brightlife.org</p>
          <p className="text-foreground/70">+1 (555) 000-1234</p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-muted-foreground">
            Follow Us
          </h4>
          <div className="flex gap-4">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-yellow-300 transition-colors"
              >
                <div className="w-2 h-2 bg-foreground rounded-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2024 BrightLife Foundation. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Tax Exempt Status</a>
        </div>
      </div>
    </div>
  </footer>
);

export default BrightLifeFooter;
