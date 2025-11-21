"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from "next/link";
import { Layers, DollarSign, Star, Sparkles, Crown, HelpCircle } from 'lucide-react';

export default function CoursesPage() {
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
              id: "1",
              brand: "Global Coder",
              name: "Foundation Program",
              price: "$2,999",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738568431-wvhhnfrm.jpg",
              imageAlt: "Foundation programming course"
            },
            {
              id: "2",
              brand: "Global Coder",
              name: "Professional Bootcamp",
              price: "$5,999",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738569547-j5uc586i.jpg",
              imageAlt: "Professional coding bootcamp"
            },
            {
              id: "3",
              brand: "Global Coder",
              name: "Enterprise Training",
              price: "$9,999",
              rating: 5,
              reviewCount: "450",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738570777-9gj8lgdm.jpg",
              imageAlt: "Enterprise software development training"
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
              id: "basic",
              badge: "Popular",
              badgeIcon: Star,
              price: "$199/mo",
              subtitle: "Perfect for beginners starting their IT journey",
              features: [
                "Access to foundation courses",
                "24/7 online support",
                "Certificate of completion",
                "Community access"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$399/mo",
              subtitle: "Comprehensive program for career switchers",
              features: [
                "All foundation courses",
                "Advanced specialization tracks",
                "1-on-1 mentoring sessions",
                "Career placement assistance",
                "Portfolio development"
              ]
            },
            {
              id: "enterprise",
              badge: "Premium",
              badgeIcon: Crown,
              price: "$699/mo",
              subtitle: "Full-stack training with enterprise focus",
              features: [
                "Complete curriculum access",
                "Corporate training modules",
                "Dedicated career counselor",
                "Interview preparation",
                "Job guarantee program"
              ]
            }
          ]}
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
              id: "1",
              title: "Do I need prior programming experience?",
              content: "No prior experience required! Our programs are designed for beginners. We start with fundamentals and gradually build up to advanced concepts."
            },
            {
              id: "2",
              title: "How long are the programs?",
              content: "Program lengths vary: Foundation (3 months), Professional Bootcamp (6 months), Enterprise Training (9 months). All include flexible scheduling options."
            },
            {
              id: "3",
              title: "Do you provide job placement assistance?",
              content: "Yes! We offer comprehensive career support including resume review, interview preparation, and job placement assistance with our 150+ industry partners."
            },
            {
              id: "4",
              title: "Are the courses available online?",
              content: "We offer both in-person and online options. Online students get access to live sessions, recorded lectures, and 24/7 support."
            },
            {
              id: "5",
              title: "What technologies will I learn?",
              content: "Technologies vary by track but include HTML/CSS, JavaScript, Python, React, Node.js, databases, cloud platforms, and modern development tools."
            },
            {
              id: "6",
              title: "Is financing available?",
              content: "Yes, we offer flexible payment plans, income share agreements, and partnerships with financing companies to make education accessible."
            }
          ]}
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
              { label: "FAQ", href: "/contact" },
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