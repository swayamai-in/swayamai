"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Brain, Database, LineChart, Lightbulb, Workflow, ArrowRight, BarChart4, PieChart, Layers, Menu, X, ChevronDown } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Swayam AI</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/temp" className="text-sm font-medium hover:text-primary transition-colors">Solutions</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">How It Works</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Case Studies</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log In
            </Button>
            <Button size="sm" className="hidden md:flex">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-secondary py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-2 rounded-full bg-primary/10 mb-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Transform Your Data into Actionable Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Unlock the full potential of your data with Swayam AI's analytics solutions. 
              From raw data to optimized workflows, we help businesses make smarter decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute -bottom-1 left-0 right-0 h-20 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-muted-foreground">TRUSTED BY INNOVATIVE COMPANIES</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="flex items-center justify-center h-8">
              <div className="w-24 h-8 bg-foreground/80 mask-image-[url('https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg')] mask-size-contain mask-position-center mask-repeat-no-repeat mask-type-alpha"></div>
            </div>
            <div className="flex items-center justify-center h-8">
              <div className="w-24 h-8 bg-foreground/80 mask-image-[url('https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg')] mask-size-contain mask-position-center mask-repeat-no-repeat mask-type-alpha"></div>
            </div>
            <div className="flex items-center justify-center h-8">
              <div className="w-24 h-8 bg-foreground/80 mask-image-[url('https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg')] mask-size-contain mask-position-center mask-repeat-no-repeat mask-type-alpha"></div>
            </div>
            <div className="flex items-center justify-center h-8">
              <div className="w-24 h-8 bg-foreground/80 mask-image-[url('https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg')] mask-size-contain mask-position-center mask-repeat-no-repeat mask-type-alpha"></div>
            </div>
            <div className="flex items-center justify-center h-8">
              <div className="w-24 h-8 bg-foreground/80 mask-image-[url('https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg')] mask-size-contain mask-position-center mask-repeat-no-repeat mask-type-alpha"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI & Data Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive services to transform your raw data into valuable business insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] bg-gradient-to-br from-background to-secondary/20">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transform raw data into structured, usable formats ready for analysis and integration.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] bg-gradient-to-br from-background to-secondary/20">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leverage machine learning and AI to uncover hidden patterns and predictive insights.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] bg-gradient-to-br from-background to-secondary/20">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Workflow Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrate data insights directly into your business processes for maximum efficiency.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">OUR PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Transform Your Data</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven process takes you from raw data to actionable business intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Data Collection</h3>
              <p className="text-muted-foreground">We gather and organize your raw data from multiple sources</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Processing & Cleaning</h3>
              <p className="text-muted-foreground">Transform unstructured data into clean, usable formats</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. AI Analysis</h3>
              <p className="text-muted-foreground">Apply advanced algorithms to uncover insights and patterns</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Implementation</h3>
              <p className="text-muted-foreground">Integrate insights into your workflows for tangible results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">SUCCESS STORIES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our solutions have transformed businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              </div>
              <CardHeader>
                <CardTitle>E-commerce Optimization</CardTitle>
                <CardDescription>Retail Industry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Increased conversion rates by 37% through AI-powered customer journey analysis and personalization.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary flex items-center group">
                  Read case study <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              </div>
              <CardHeader>
                <CardTitle>Supply Chain Intelligence</CardTitle>
                <CardDescription>Manufacturing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduced operational costs by 22% through predictive analytics and workflow optimization.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary flex items-center group">
                  Read case study <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              </div>
              <CardHeader>
                <CardTitle>Healthcare Analytics</CardTitle>
                <CardDescription>Medical Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Improved patient outcomes by 28% with predictive analytics for treatment planning.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary flex items-center group">
                  Read case study <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-xl">Client Satisfaction</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <p className="text-5xl font-bold mb-2">250+</p>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <p className="text-5xl font-bold mb-2">35%</p>
              <p className="text-xl">Average ROI Increase</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-xl">Support & Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-primary/10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Data?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Schedule a consultation with our data experts and discover how Swayam AI solutions can optimize your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                  <BarChart3 className="h-24 w-24 text-primary" />
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce" style={{ animationDuration: "3s" }}>
                  <PieChart className="h-8 w-8 text-blue-600" />
                </div>
                <div className="absolute bottom-4 left-0 w-20 h-20 bg-primary/15 rounded-full flex items-center justify-center animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
                  <BarChart4 className="h-10 w-10 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 mr-2 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Swayam AI</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Transforming raw data into actionable business intelligence with AI-powered analytics.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Data Processing</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">AI Analytics</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Workflow Optimization</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">hello@swayamai.com</li>
                <li className="text-muted-foreground">+1 (555) 123-4567</li>
                <li className="text-muted-foreground">123 Analytics Way, Tech City, TC 10101</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 Swayam AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}