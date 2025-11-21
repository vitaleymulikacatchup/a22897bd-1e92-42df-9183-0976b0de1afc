"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Rocket, HelpCircle } from 'lucide-react';

export default function ContactPage() {
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
            { name: 'Home', id: '/' },
            { name: 'About', id: '/about' },
            { name: 'Courses', id: '/courses' }
          ]}
          brandName="Global Coder"
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
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Global Coder"
          copyrightText="© 2025 Global Coder. All rights reserved."
          columns={[
            {
              title: 'Programs',
              items: [
                { label: 'Web Development', href: '/courses' },
                { label: 'Data Science', href: '/courses' },
                { label: 'Mobile Development', href: '/courses' },
                { label: 'Python Programming', href: '/courses' }
              ]
            },
            {
              title: 'Company',
              items: [
                { label: 'About Us', href: '/about' },
                { label: 'Our Team', href: '/about' },
                { label: 'Success Stories', href: '/' },
                { label: 'Partners', href: '/' }
              ]
            },
            {
              title: 'Support',
              items: [
                { label: 'FAQ', href: '/contact' },
                { label: 'Contact Us', href: '/contact' },
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