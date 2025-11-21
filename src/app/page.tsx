"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from "next/link";
import { BookOpen, Code, Users, TrendingUp, Clock, Layers, Star, Sparkles, Crown, Building, MessageSquare } from 'lucide-react';

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="GLOBAL CODER"
          description="Transform your career with cutting-edge IT education. Learn programming, web development, data science, and more from industry experts."
          buttons={[
            {
              text: "Start Learning",
              href: "/contact"
            },
            {
              text: "View Courses",
              href: "/courses"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738559054-1l998plc.png",
              imageAlt: "Students learning programming in modern classroom"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738560358-6jift1ty.png",
              imageAlt: "Web development bootcamp training session"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738561630-fdt4rx0l.jpg",
              imageAlt: "IT professionals in coding workshop"
            }
          ]}
          autoplayDelay={4000}
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
              id: "01",
              title: "Web Development",
              description: "Master HTML, CSS, JavaScript, React, and Node.js to build modern web applications",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738563898-vtrke2vp.png",
              imageAlt: "Web development course materials"
            },
            {
              id: "02",
              title: "Python Programming",
              description: "Learn Python fundamentals, automation, and backend development",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738565090-yxfnwmxo.png",
              imageAlt: "Python programming course"
            },
            {
              id: "03",
              title: "Data Science",
              description: "Explore data analysis, machine learning, and AI with Python and R",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738566284-yi3ulym5.jpg",
              imageAlt: "Data science and analytics course"
            },
            {
              id: "04",
              title: "Mobile Development",
              description: "Create iOS and Android apps using React Native and Flutter",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738567375-j598er2j.jpg",
              imageAlt: "Mobile app development course"
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
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738580777-gd6z009y.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738582349-zowf1y19.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738583634-tt7eelnr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738584590-njb0u77q.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738585993-147kgsmx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738587191-0qwd1r21.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738588413-l9bglrc7.jpg"
          ]}
          speed={35}
          showCard={true}
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
              id: "1",
              name: "Emma Thompson",
              role: "Software Developer at Microsoft",
              testimonial: "Global Coder completely transformed my career. The instructors are amazing and the curriculum is incredibly practical. I landed my dream job within 3 months of graduating.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738576170-m36ohzd8.jpg",
              imageAlt: "Emma Thompson portrait"
            },
            {
              id: "2",
              name: "Carlos Martinez",
              role: "Data Analyst at Netflix",
              testimonial: "The data science program exceeded my expectations. The hands-on projects and mentorship helped me transition from marketing to tech seamlessly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738577150-zekfkl8v.jpg",
              imageAlt: "Carlos Martinez portrait"
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