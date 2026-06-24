import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-accent text-dark-accent-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2">Shahab Ahmed</div>
              <p className="text-sm opacity-80">Unity Expert & NVIDIA AI Developer</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/shahabahmeddev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-glow transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shahabahmeddev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-glow transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:shahabahmeddev@gmail.com"
                className="hover:text-primary-glow transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <div className="flex items-center space-x-1">
              <span>© {currentYear} Shahab Ahmed. All rights reserved.</span>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <a href="#" className="hover:text-primary-glow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-glow transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
