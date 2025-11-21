"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from "next/link";
import { Rocket } from 'lucide-react';

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="small"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Global Coder"
          button={{
            text: "Enroll Now",
            href: "/contact"
          }}
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

      <FooterBase
        logoText="Global Coder"
        copyrightText="© 2025 Global Coder. All rights reserved."
        columns={[
          {
            title: "Programs",
            items: [
              { label: "Web Development", href: "/courses" },
              { label: "Data Science", href: "/courses" },
              { label: "Mobile Development", href: "/courses" },
              { label: "Python Programming", href: "/courses" }
            ]
          },
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Our Team", href: "/about" },
              { label: "Success Stories", href: "/" },
              { label: "Partners", href: "/" }
            ]
          },
          {
            title: "Support",
            items: [
              { label: "FAQ", href: "/courses" },
              { label: "Contact Us", href: "/contact" },
              { label: "Student Portal", href: "https://portal.globalcoder.com" },
              { label: "Career Services", href: "https://careers.globalcoder.com" }
            ]
          }
        ]}
      />
    </ThemeProvider>
  );
}