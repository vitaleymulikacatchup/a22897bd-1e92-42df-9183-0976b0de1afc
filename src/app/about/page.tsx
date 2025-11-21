"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from "next/link";
import { Target, Users, Code, TrendingUp, Clock, BarChart, DollarSign, Award, Github, Linkedin } from 'lucide-react';

export default function AboutPage() {
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
              title: "Expert Instructors",
              description: "Learn from industry professionals with years of real-world experience",
              icon: Users
            },
            {
              title: "Hands-on Learning",
              description: "Build real projects and gain practical skills employers demand",
              icon: Code
            },
            {
              title: "Career Support",
              description: "Get personalized guidance and job placement assistance",
              icon: TrendingUp
            },
            {
              title: "Flexible Schedule",
              description: "Choose from full-time, part-time, and online learning options",
              icon: Clock
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
              id: "1",
              icon: Users,
              title: "Graduates",
              value: "5,000+"
            },
            {
              id: "2",
              icon: TrendingUp,
              title: "Job Placement Rate",
              value: "94%"
            },
            {
              id: "3",
              icon: DollarSign,
              title: "Average Salary Increase",
              value: "$45K"
            },
            {
              id: "4",
              icon: Award,
              title: "Industry Partnerships",
              value: "150+"
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
              id: "1",
              name: "Sarah Chen",
              role: "Senior Full Stack Instructor",
              description: "Former lead developer at Google with 8 years experience in web development and cloud architecture.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738571971-0lixfd4o.jpg",
              imageAlt: "Sarah Chen portrait",
              socialLinks: [
                {
                  icon: Github,
                  url: "https://github.com"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Data Science Director",
              description: "PhD in Computer Science, previously data scientist at Netflix specializing in machine learning and AI.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763738572795-pz44oltt.jpg",
              imageAlt: "Michael Rodriguez portrait",
              socialLinks: [
                {
                  icon: Github,
                  url: "https://github.com"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
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