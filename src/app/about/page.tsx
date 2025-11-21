"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from 'next/link';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Target, Users, Github, Linkedin, Code, TrendingUp, Clock } from 'lucide-react';

export default function AboutPage() {
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
            { name: 'Courses', id: '/courses' },
            { name: 'Contact', id: '/contact' }
          ]}
          brandName="Global Coder"
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
              description: 'Build real projects and gain practical skills employers demand',
              icon: Code
            },
            {
              title: 'Career Support',
              description: 'Get personalized guidance and job placement assistance',
              icon: TrendingUp
            },
            {
              title: 'Flexible Schedule',
              description: 'Choose from full-time, part-time, and online learning options',
              icon: Clock
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
                { label: 'FAQ', href: '/' },
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