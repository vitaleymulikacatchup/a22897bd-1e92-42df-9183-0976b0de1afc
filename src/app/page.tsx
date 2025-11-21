"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Target, BookOpen, Layers, DollarSign, BarChart, Users, MessageSquare, Building, HelpCircle, Rocket, Sparkles, Crown, Star, Github, Linkedin } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: 'About', id: 'about' },
            { name: 'Courses', id: 'courses' },
            { name: 'Contact', id: 'contact' }
          ]}
          brandName="Global Coder"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="GLOBAL CODER"
          description="Transform your career with cutting-edge IT education. Learn programming, web development, data science, and more from industry experts."
          buttons={[
            { text: 'Start Learning', href: 'contact' },
            { text: 'View Courses', href: 'courses' }
          ]}
          slides={[
            {
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738559054-1l998plc.png',
              imageAlt: 'Students learning programming in modern classroom'
            },
            {
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738560358-6jift1ty.png',
              imageAlt: 'Web development bootcamp training session'
            },
            {
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738561630-fdt4rx0l.jpg',
              imageAlt: 'IT professionals in coding workshop'
            }
          ]}
          autoplayDelay={4000}
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="About Global Coder"
          description="We are dedicated to providing world-class IT education that prepares students for successful careers in technology. Our comprehensive programs combine theoretical knowledge with hands-on practical experience."
          tag="Our Mission"
          tagIcon={Target}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738562769-h5jr4tiy.jpg"
          imageAlt="Modern IT training center"
          imagePosition="right"
          bulletPoints={[
            {
              title: 'Expert Instructors',
              description: 'Learn from industry professionals with years of real-world experience',
              icon: Users
            },
            {
              title: 'Hands-on Learning',
              description: 'Build real projects and gain practical skills employers demand'
            },
            {
              title: 'Career Support',
              description: 'Get personalized guidance and job placement assistance'
            },
            {
              title: 'Flexible Schedule',
              description: 'Choose from full-time, part-time, and online learning options'
            }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Courses"
          description="Comprehensive IT programs designed to take you from beginner to professional"
          tag="Learn"
          tagIcon={BookOpen}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: '01',
              title: 'Web Development',
              description: 'Master HTML, CSS, JavaScript, React, and Node.js to build modern web applications',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738563898-vtrke2vp.png',
              imageAlt: 'Web development course materials'
            },
            {
              id: '02',
              title: 'Python Programming',
              description: 'Learn Python fundamentals, automation, and backend development',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738565090-yxfnwmxo.png',
              imageAlt: 'Python programming course'
            },
            {
              id: '03',
              title: 'Data Science',
              description: 'Explore data analysis, machine learning, and AI with Python and R',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738566284-yi3ulym5.jpg',
              imageAlt: 'Data science and analytics course'
            },
            {
              id: '04',
              title: 'Mobile Development',
              description: 'Create iOS and Android apps using React Native and Flutter',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738567375-j598er2j.jpg',
              imageAlt: 'Mobile app development course'
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardTwo
          title="Training Programs"
          description="Choose the perfect learning path for your career goals"
          tag="Programs"
          tagIcon={Layers}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: '1',
              brand: 'Global Coder',
              name: 'Foundation Program',
              price: '$2,999',
              rating: 5,
              reviewCount: '1.2k',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738568431-wvhhnfrm.jpg',
              imageAlt: 'Foundation programming course'
            },
            {
              id: '2',
              brand: 'Global Coder',
              name: 'Professional Bootcamp',
              price: '$5,999',
              rating: 5,
              reviewCount: '2.1k',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738569547-j5uc586i.jpg',
              imageAlt: 'Professional coding bootcamp'
            },
            {
              id: '3',
              brand: 'Global Coder',
              name: 'Enterprise Training',
              price: '$9,999',
              rating: 5,
              reviewCount: '450',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738570777-9gj8lgdm.jpg',
              imageAlt: 'Enterprise software development training'
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Plan"
          description="Flexible pricing options to fit your learning needs and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: 'basic',
              badge: 'Popular',
              badgeIcon: Star,
              price: '$199/mo',
              subtitle: 'Perfect for beginners starting their IT journey',
              features: [
                'Access to foundation courses',
                '24/7 online support',
                'Certificate of completion',
                'Community access'
              ]
            },
            {
              id: 'professional',
              badge: 'Most Popular',
              badgeIcon: Sparkles,
              price: '$399/mo',
              subtitle: 'Comprehensive program for career switchers',
              features: [
                'All foundation courses',
                'Advanced specialization tracks',
                '1-on-1 mentoring sessions',
                'Career placement assistance',
                'Portfolio development'
              ]
            },
            {
              id: 'enterprise',
              badge: 'Premium',
              badgeIcon: Crown,
              price: '$699/mo',
              subtitle: 'Full-stack training with enterprise focus',
              features: [
                'Complete curriculum access',
                'Corporate training modules',
                'Dedicated career counselor',
                'Interview preparation',
                'Job guarantee program'
              ]
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Our Success Metrics"
          description="Numbers that showcase our commitment to student success"
          tag="Impact"
          tagIcon={BarChart}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: '1',
              icon: Users,
              title: 'Graduates',
              value: '5,000+'
            },
            {
              id: '2',
              title: 'Job Placement Rate',
              value: '94%'
            },
            {
              id: '3',
              icon: DollarSign,
              title: 'Average Salary Increase',
              value: '$45K'
            },
            {
              id: '4',
              title: 'Industry Partnerships',
              value: '150+'
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Instructors"
          description="Learn from industry experts with real-world experience"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: '1',
              name: 'Sarah Chen',
              role: 'Senior Full Stack Instructor',
              description: 'Former lead developer at Google with 8 years experience in web development and cloud architecture.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738571971-0lixfd4o.jpg',
              imageAlt: 'Sarah Chen portrait',
              socialLinks: [
                { icon: Github, url: 'https://github.com' },
                { icon: Linkedin, url: 'https://linkedin.com' }
              ]
            },
            {
              id: '2',
              name: 'Michael Rodriguez',
              role: 'Data Science Director',
              description: 'PhD in Computer Science, previously data scientist at Netflix specializing in machine learning and AI.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738572795-pz44oltt.jpg',
              imageAlt: 'Michael Rodriguez portrait',
              socialLinks: [
                { icon: Github, url: 'https://github.com' },
                { icon: Linkedin, url: 'https://linkedin.com' }
              ]
            },
            {
              id: '3',
              name: 'Jessica Park',
              role: 'Mobile Development Lead',
              description: 'Former iOS engineer at Apple with expertise in React Native and Flutter development.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738574010-qumnju5x.jpg',
              imageAlt: 'Jessica Park portrait',
              socialLinks: [
                { icon: Github, url: 'https://github.com' },
                { icon: Linkedin, url: 'https://linkedin.com' }
              ]
            },
            {
              id: '4',
              name: 'David Kim',
              role: 'DevOps Specialist',
              description: 'Senior DevOps engineer from Amazon with deep expertise in cloud infrastructure and CI/CD.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738575202-wg1mxvkc.jpg',
              imageAlt: 'David Kim portrait',
              socialLinks: [
                { icon: Github, url: 'https://github.com' },
                { icon: Linkedin, url: 'https://linkedin.com' }
              ]
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Student Success Stories"
          description="Hear from our graduates who transformed their careers"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: '1',
              name: 'Emma Thompson',
              role: 'Software Developer at Microsoft',
              testimonial: 'Global Coder completely transformed my career. The instructors are amazing and the curriculum is incredibly practical. I landed my dream job within 3 months of graduating.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738576170-m36ohzd8.jpg',
              imageAlt: 'Emma Thompson portrait'
            },
            {
              id: '2',
              name: 'Carlos Martinez',
              role: 'Data Analyst at Netflix',
              testimonial: 'The data science program exceeded my expectations. The hands-on projects and mentorship helped me transition from marketing to tech seamlessly.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738577150-zekfkl8v.jpg',
              imageAlt: 'Carlos Martinez portrait'
            },
            {
              id: '3',
              name: 'Priya Patel',
              role: 'Full Stack Developer at Spotify',
              testimonial: 'Best investment I ever made. The web development bootcamp was intensive but worth every minute. The career support was exceptional.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738578176-bjntmj2w.jpg',
              imageAlt: 'Priya Patel portrait'
            },
            {
              id: '4',
              name: 'James Wilson',
              role: 'Mobile Developer at Uber',
              testimonial: 'From zero coding experience to mobile developer in 6 months. The instructors made complex concepts easy to understand and the job placement program worked perfectly.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738579487-xg4lczdt.jpg',
              imageAlt: 'James Wilson portrait'
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Our graduates work at top tech companies worldwide"
          tag="Partners"
          tagIcon={Building}
          textboxLayout="default"
          logos={[
            'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738580777-gd6z009y.jpg',
            'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738582349-zowf1y19.jpg',
            'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738583634-tt7eelnr.jpg',
            'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738584590-njb0u77q.jpg',
            'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738585993-147kgsmx.jpg',
            'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738587191-0qwd1r21.jpg',
            'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738588413-l9bglrc7.jpg'
          ]}
          speed={35}
          showCard={true}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about our programs"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: '1',
              title: 'Do I need prior programming experience?',
              content: 'No prior experience required! Our programs are designed for beginners. We start with fundamentals and gradually build up to advanced concepts.'
            },
            {
              id: '2',
              title: 'How long are the programs?',
              content: 'Program lengths vary: Foundation (3 months), Professional Bootcamp (6 months), Enterprise Training (9 months). All include flexible scheduling options.'
            },
            {
              id: '3',
              title: 'Do you provide job placement assistance?',
              content: 'Yes! We offer comprehensive career support including resume review, interview preparation, and job placement assistance with our 150+ industry partners.'
            },
            {
              id: '4',
              title: 'Are the courses available online?',
              content: 'We offer both in-person and online options. Online students get access to live sessions, recorded lectures, and 24/7 support.'
            },
            {
              id: '5',
              title: 'What technologies will I learn?',
              content: 'Technologies vary by track but include HTML/CSS, JavaScript, Python, React, Node.js, databases, cloud platforms, and modern development tools.'
            },
            {
              id: '6',
              title: 'Is financing available?',
              content: 'Yes, we offer flexible payment plans, income share agreements, and partnerships with financing companies to make education accessible.'
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Career?"
          description="Join thousands of students who have successfully launched their tech careers with Global Coder. Start your journey today."
          tagIcon={Rocket}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738589548-enfictme.jpg"
          imageAlt="Global Coder campus building"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Enroll Now"
          termsText="By enrolling, you agree to receive course information and updates. Unsubscribe anytime."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Global Coder"
          copyrightText="© 2025 Global Coder. All rights reserved."
          columns={[
            {
              title: 'Programs',
              items: [
                { label: 'Web Development', href: 'feature' },
                { label: 'Data Science', href: 'feature' },
                { label: 'Mobile Development', href: 'feature' },
                { label: 'Python Programming', href: 'feature' }
              ]
            },
            {
              title: 'Company',
              items: [
                { label: 'About Us', href: 'about' },
                { label: 'Our Team', href: 'team' },
                { label: 'Success Stories', href: 'testimonial' },
                { label: 'Partners', href: 'social-proof' }
              ]
            },
            {
              title: 'Support',
              items: [
                { label: 'FAQ', href: 'faq' },
                { label: 'Contact Us', href: 'contact' },
                { label: 'Student Portal', href: 'https://portal.globalcoder.com' },
                { label: 'Career Services', href: 'https://careers.globalcoder.com' }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}