export interface Role {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceCategory {
  id: string;
  icon: string;
  title: string;
  desc: string;
  roles: Role[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "construction",
    icon: "construction",
    title: "Construction Workforce",
    desc: "Deploy certified, specialized construction personnel for infrastructure projects. From master builders to heavy machinery operators, we provide the backbone of your site execution.",
    roles: [
      {
        icon: "handyman",
        title: "Certified Masons",
        desc: "Expert bricklayers and stone masons for foundational and structural work.",
      },
      {
        icon: "carpenter",
        title: "Structural Carpenters",
        desc: "Skilled framing and formwork professionals for complex concrete structures.",
      },
      {
        icon: "architecture",
        title: "Bar Benders & Steel Fixers",
        desc: "Specialists in reinforcement steel preparation and installation for maximum structural integrity.",
      },
      {
        icon: "local_shipping",
        title: "Heavy Machinery Operators",
        desc: "Licensed operators for excavators, cranes, loaders, and other heavy construction equipment.",
      },
      {
        icon: "engineering",
        title: "General Site Helpers",
        desc: "Reliable unskilled and semi-skilled labor to support daily site operations and material handling.",
      },
      {
        icon: "foundation",
        title: "Concrete Finishing Specialists",
        desc: "Experts in pouring, leveling, and finishing concrete for slabs and foundations.",
      }
    ]
  },
  {
    id: "engineering",
    icon: "engineering",
    title: "Engineering Staff",
    desc: "Access top-tier structural, civil, and mechanical engineers. We embed technical experts directly into your workflow to ensure architectural integrity and regulatory compliance.",
    roles: [
      {
        icon: "architecture",
        title: "Structural Engineers",
        desc: "Experts in designing and evaluating load-bearing structures for safety and durability.",
      },
      {
        icon: "foundation",
        title: "Civil Engineers",
        desc: "On-site managers for infrastructure planning, execution, and quality control.",
      },
      {
        icon: "precision_manufacturing",
        title: "Mechanical & Electrical Engineers",
        desc: "Specialists in MEP systems, ensuring seamless integration of utilities within the build.",
      },
      {
        icon: "supervisor_account",
        title: "Site Supervisors",
        desc: "Experienced foremen overseeing daily labor deployment, safety, and timeline adherence.",
      },
      {
        icon: "calculate",
        title: "Project Estimators",
        desc: "Professionals specialized in calculating costs, material requirements, and resource allocation.",
      },
      {
        icon: "fact_check",
        title: "QA/QC Engineers",
        desc: "Ensuring all structural output meets stringent regulatory and enterprise quality standards.",
      }
    ]
  },
  {
    id: "security",
    icon: "security",
    title: "Security Services",
    desc: "Robust perimeter control and asset protection for active sites. Our protocol-driven security teams minimize risk and maintain operational continuity 24/7.",
    roles: [
      {
        icon: "local_police",
        title: "Site Security Guards",
        desc: "Trained personnel for 24/7 perimeter defense, asset protection, and deterrence.",
      },
      {
        icon: "shield",
        title: "Asset Protection Officers",
        desc: "Specialized guards focused on preventing theft and securing high-value materials and equipment.",
      },
      {
        icon: "admin_panel_settings",
        title: "Access Control Specialists",
        desc: "Managing site entry points, maintaining logs, and ensuring only authorized personnel enter the site.",
      },
      {
        icon: "videocam",
        title: "CCTV & Surveillance Operators",
        desc: "Trained personnel for monitoring site security feeds and identifying potential threats.",
      },
      {
        icon: "directions_car",
        title: "Mobile Patrol Units",
        desc: "Rapid-response patrol teams for large infrastructure and industrial complexes.",
      },
      {
        icon: "emergency_home",
        title: "Emergency Response Teams",
        desc: "Specialized personnel trained for rapid intervention during safety or security incidents.",
      }
    ]
  },
  {
    id: "facility",
    icon: "business",
    title: "Facility Management",
    desc: "End-to-end lifecycle management of physical assets. We handle maintenance, compliance, and spatial optimization to maximize the longevity of your real estate investments.",
    roles: [
      {
        icon: "plumbing",
        title: "Maintenance Technicians",
        desc: "Plumbers, electricians, and handymen for regular upkeep and emergency repairs.",
      },
      {
        icon: "cleaning_services",
        title: "Commercial Cleaning Staff",
        desc: "Dedicated housekeeping and deep-cleaning crews for maintaining safe and hygienic environments.",
      },
      {
        icon: "hvac",
        title: "HVAC Technicians",
        desc: "Certified professionals managing heating, ventilation, and air conditioning systems.",
      },
      {
        icon: "park",
        title: "Landscaping & Groundskeepers",
        desc: "Maintaining exterior aesthetics and functional outdoor spaces for commercial properties.",
      },
      {
        icon: "pest_control",
        title: "Pest Control Specialists",
        desc: "Ensuring hygienic compliance through systematic and preventative pest management.",
      },
      {
        icon: "delete",
        title: "Waste Management Coordinators",
        desc: "Handling site-wide disposal, recycling protocols, and environmental compliance.",
      }
    ]
  },
  {
    id: "hr",
    icon: "support_agent",
    title: "HR Outsourcing",
    desc: "Streamline industrial human resources. We manage payroll, complex compliance matrices, and workforce relations, allowing your leadership to focus on core operational output.",
    roles: [
      {
        icon: "account_balance",
        title: "Payroll Managers",
        desc: "Ensuring timely and compliant wage distribution for large-scale temporary and permanent workforces.",
      },
      {
        icon: "fact_check",
        title: "Compliance Officers",
        desc: "Experts navigating PF, ESIC, labor laws, and site-specific regulatory requirements.",
      },
      {
        icon: "groups",
        title: "Workforce Relations Specialists",
        desc: "Handling on-site grievances, worker welfare, and maintaining a productive labor environment.",
      },
      {
        icon: "person_search",
        title: "Recruitment Coordinators",
        desc: "Sourcing, vetting, and mobilizing high-volume workforce requirements rapidly.",
      },
      {
        icon: "model_training",
        title: "Training & Onboarding Specialists",
        desc: "Conducting site safety inductions and operational training for new deployments.",
      },
      {
        icon: "query_stats",
        title: "Performance Management Consultants",
        desc: "Implementing SLA tracking and productivity optimization protocols for the workforce.",
      }
    ]
  },
  {
    id: "industrial",
    icon: "precision_manufacturing",
    title: "Industrial Workforce",
    desc: "Scalable labor solutions for manufacturing and heavy industrial environments. We source and deploy rapid-response teams calibrated for high-efficiency production lines.",
    roles: [
      {
        icon: "conveyor_belt",
        title: "Assembly Line Workers",
        desc: "Trained personnel for consistent, high-speed manufacturing and assembly tasks.",
      },
      {
        icon: "verified",
        title: "Quality Control Specialists",
        desc: "Detail-oriented staff responsible for inspecting outputs and maintaining rigorous quality standards.",
      },
      {
        icon: "inventory_2",
        title: "Logistics & Inventory Coordinators",
        desc: "Warehouse staff ensuring accurate tracking, picking, and dispatching of materials.",
      },
      {
        icon: "forklift",
        title: "Forklift & Equipment Operators",
        desc: "Licensed operators for precise material handling within industrial and warehouse environments.",
      },
      {
        icon: "local_shipping",
        title: "Packaging & Dispatch Staff",
        desc: "Teams specialized in preparing finished goods for safe and compliant transportation.",
      },
      {
        icon: "engineering",
        title: "Machine Maintenance Crew",
        desc: "Dedicated technicians for preventative maintenance and rapid repair of production line machinery.",
      }
    ]
  }
];

export function getServiceById(id: string): ServiceCategory | undefined {
  return serviceCategories.find((s) => s.id === id);
}
