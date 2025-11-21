"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from 'next/link';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Layers, DollarSign, Star, Sparkles, Crown } from 'lucide-react';

export default function CoursesPage() {
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
            { name: 'Contact', id: '/contact' }
          ]}
          brandName="Global Coder"
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