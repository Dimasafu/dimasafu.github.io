export interface Project {
  title: string;
  description: string;
  technologies: string[];
  screenshots: string[];
  challenge: string;
  solution: string;
  impact: string;
}

export const projects: Project[] = [
  {
    title: 'Healthcare Website Platform',
    description:
      'A comprehensive healthcare management platform connecting patients with providers across multiple facilities, featuring appointment scheduling, electronic medical records, and admin dashboards.',
    technologies: ['Laravel', 'Livewire', 'MySQL', 'TailwindCSS', 'Alpine.js'],
    screenshots: [
      '/images/projects/healthcare/hero.svg',
      '/images/projects/healthcare/dashboard.svg',
      '/images/projects/healthcare/services.svg',
      '/images/projects/healthcare/admin.svg',
    ],
    challenge:
      'Complex patient data management with strict regulatory compliance requirements. Needed role-based access for doctors, patients, and administrators across multiple healthcare facilities with disparate systems.',
    solution:
      'Built modular multi-tenant architecture with granular permissions and end-to-end encryption. Implemented real-time appointment scheduling, integrated electronic medical record management, and unified patient portal.',
    impact:
      'Serving 50,000+ patients across 12 healthcare facilities. Reduced administrative workload by 35% and improved patient satisfaction scores by 28%.',
  },
  {
    title: 'Travel & Rental Platform',
    description:
      'A multi-vendor travel booking and property rental marketplace with real-time availability, dynamic pricing, and integrated payment processing for vendors and customers.',
    technologies: ['Laravel', 'Alpine.js', 'PostgreSQL', 'Redis', 'Stripe'],
    screenshots: [
      '/images/projects/travel-rental/hero.svg',
      '/images/projects/travel-rental/booking.svg',
      '/images/projects/travel-rental/cars.svg',
      '/images/projects/travel-rental/dashboard.svg',
    ],
    challenge:
      'Real-time availability management across hundreds of vendors. Complex booking conflicts, payment splitting between multiple parties, and dynamic pricing models that change based on demand.',
    solution:
      'Event-driven architecture with queue-based booking system. Integrated Stripe Connect for marketplace payments and built real-time availability caching with Redis. Dynamic pricing engine with demand-based adjustments.',
    impact:
      '3x increase in booking conversion rate. 200+ vendors onboarded in the first 6 months. Platform processes $2M+ in monthly transactions.',
  },
  {
    title: 'Gym Management SaaS',
    description:
      'A complete software-as-a-service platform for gym and fitness center management including membership tiers, class scheduling, trainer management, billing, and reporting.',
    technologies: ['Laravel', 'Livewire', 'MySQL', 'Filament', 'REST API'],
    screenshots: [
      '/images/projects/gym-management/dashboard.svg',
      '/images/projects/gym-management/members.svg',
      '/images/projects/gym-management/qr-checkin.svg',
      '/images/projects/gym-management/packages.svg',
      '/images/projects/gym-management/reports.svg',
    ],
    challenge:
      'Complex membership management with multiple tiers, scheduling conflicts across trainers and facilities, automated payment tracking with invoice generation, and QR-based check-in system.',
    solution:
      'Built comprehensive admin panel using Filament with multi-tenant support. Automated billing with recurring invoice generation and real-time schedule conflict detection. QR code check-in with mobile-first design.',
    impact:
      '200+ gyms onboarded to the platform. 40% reduction in administrative overhead for gym owners. 99.9% uptime since launch.',
  },
  {
    title: 'Power BI Dashboards & Power Apps',
    description:
      'Enterprise business intelligence dashboards providing real-time operational insights, KPI tracking, and data-driven decision making for executive leadership.',
    technologies: ['Power BI', 'DAX', 'SQL', 'Azure', 'ETL'],
    screenshots: [
      '/images/projects/powerbi/offering-trend.svg',
      '/images/projects/powerbi/production-plan.svg',
      '/images/projects/powerbi/executive-dashboard.svg',
      '/images/projects/powerbi/kpi-overview.svg',
    ],
    challenge:
      'Data fragmentation across multiple departments with inconsistent reporting. Leadership lacked real-time visibility into key operational metrics, causing delayed decision-making.',
    solution:
      'Built unified data model with automated ETL pipelines from multiple data sources. Designed interactive dashboards with drill-through capabilities, real-time data refresh using Power BI Premium, and mobile-optimized views.',
    impact:
      '60% faster strategic decision-making cycle. Identified $500K in annual operational savings. Replaced manual spreadsheets with automated real-time dashboards used daily by C-suite executives.',
  },
];
