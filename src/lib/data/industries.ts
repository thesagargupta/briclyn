export interface IndustryRole {
  icon: string;
  title: string;
  desc: string;
}

export interface IndustryCategory {
  id: string;
  icon: string;
  title: string;
  desc: string;
  roles: IndustryRole[];
}

export const industryCategories: IndustryCategory[] = [
  {
    id: "construction",
    icon: "apartment",
    title: "Construction",
    desc: "Heavy civil, commercial, and residential construction demands a resilient workforce. We supply certified operators, skilled trades, and general labor to keep sites moving safely and on schedule.",
    roles: [
      {
        icon: "business",
        title: "Tower Crane Operators",
        desc: "Certified professionals managing high-altitude heavy lifting and material placement safely.",
      },
      {
        icon: "foundation",
        title: "Concrete Finishers",
        desc: "Specialists in pouring, smoothing, and setting structural and decorative concrete.",
      },
      {
        icon: "architecture",
        title: "Scaffolding Specialists",
        desc: "Experts in erecting and dismantling temporary structural frameworks for site access.",
      },
      {
        icon: "local_shipping",
        title: "Heavy Earthmoving Operators",
        desc: "Experienced drivers for excavators, bulldozers, and trenchers during site prep.",
      },
      {
        icon: "handyman",
        title: "Masonry Experts",
        desc: "Skilled block, stone, and bricklayers for foundational walls and exterior facades.",
      },
      {
        icon: "health_and_safety",
        title: "Site Safety Officers",
        desc: "Dedicated personnel enforcing OSHA standards and conducting daily risk assessments.",
      }
    ]
  },
  {
    id: "infrastructure",
    icon: "foundation",
    title: "Infrastructure",
    desc: "From highway systems to utility networks, infrastructure requires large-scale coordination. Our teams are experienced in complex, long-term public and private works projects.",
    roles: [
      {
        icon: "edit_road",
        title: "Highway Paving Crew",
        desc: "Asphalt layers, roller operators, and traffic control personnel for roadworks.",
      },
      {
        icon: "architecture",
        title: "Bridge Inspection Technicians",
        desc: "Specialized evaluators assessing structural integrity and material stress of bridges.",
      },
      {
        icon: "train",
        title: "Tunneling Equipment Operators",
        desc: "Technicians skilled in operating boring machines and managing subterranean environments.",
      },
      {
        icon: "water_drop",
        title: "Utility Locators",
        desc: "Experts mapping and marking underground water, gas, and electrical lines prior to digging.",
      },
      {
        icon: "build_circle",
        title: "Structural Welders",
        desc: "Certified heavy-duty welders for infrastructure steel frameworks and pipelines.",
      },
      {
        icon: "my_location",
        title: "Surveying Assistants",
        desc: "Support staff assisting topographers and land surveyors in measuring site boundaries.",
      }
    ]
  },
  {
    id: "manufacturing",
    icon: "factory",
    title: "Manufacturing",
    desc: "Precision and consistency define the factory floor. We provide trained assembly line workers, quality control specialists, and machinery operators to maintain high throughput and safety standards.",
    roles: [
      {
        icon: "memory",
        title: "CNC Machine Operators",
        desc: "Specialists programming and running computer-controlled manufacturing equipment.",
      },
      {
        icon: "conveyor_belt",
        title: "Assembly Line Technicians",
        desc: "Fast and precise workers assembling components along high-speed production lines.",
      },
      {
        icon: "electrical_services",
        title: "Industrial Electricians",
        desc: "Troubleshooting and maintaining high-voltage manufacturing equipment and circuitry.",
      },
      {
        icon: "verified",
        title: "Quality Assurance Inspectors",
        desc: "Detail-oriented staff monitoring production outputs for defects and compliance.",
      },
      {
        icon: "supervisor_account",
        title: "Production Supervisors",
        desc: "Floor managers coordinating shifts, resolving bottlenecks, and ensuring output goals.",
      },
      {
        icon: "build",
        title: "Tool & Die Makers",
        desc: "Highly skilled machinists creating and repairing custom tools, jigs, and fixtures.",
      }
    ]
  },
  {
    id: "warehousing",
    icon: "warehouse",
    title: "Warehousing",
    desc: "Efficient distribution centers rely on speed and accuracy. Our warehouse personnel, including forklift drivers and inventory clerks, are vetted for reliability in fast-paced environments.",
    roles: [
      {
        icon: "forklift",
        title: "Forklift & Reach Truck Operators",
        desc: "Certified drivers safely moving heavy pallets in narrow-aisle storage systems.",
      },
      {
        icon: "fact_check",
        title: "Inventory Auditors",
        desc: "Specialists maintaining cycle counts and ensuring stock accuracy via WMS software.",
      },
      {
        icon: "inventory_2",
        title: "Order Pickers & Packers",
        desc: "Efficient staff fulfilling outgoing orders with speed and precision.",
      },
      {
        icon: "input",
        title: "Dock Receiving Clerks",
        desc: "Personnel managing incoming shipments, verifying manifests, and logging damages.",
      },
      {
        icon: "manage_accounts",
        title: "Warehouse Shift Supervisors",
        desc: "Leaders overseeing warehouse staff, managing daily KPIs, and enforcing safety.",
      },
      {
        icon: "shopping_cart",
        title: "Pallet Jack Operators",
        desc: "Support workers manually transporting goods across the facility floor.",
      }
    ]
  },
  {
    id: "logistics",
    icon: "local_shipping",
    title: "Logistics",
    desc: "Keeping supply chains intact requires a dedicated logistical workforce. We supply fleet managers, loaders, and coordinators to ensure materials reach their destination without delay.",
    roles: [
      {
        icon: "support_agent",
        title: "Fleet Dispatchers",
        desc: "Coordinators managing driver routes, schedules, and real-time transit communication.",
      },
      {
        icon: "local_shipping",
        title: "CDL Transport Drivers",
        desc: "Commercially licensed drivers for long-haul and regional freight transportation.",
      },
      {
        icon: "route",
        title: "Route Optimization Planners",
        desc: "Logistics analysts maximizing fuel efficiency and reducing delivery turnaround times.",
      },
      {
        icon: "luggage",
        title: "Freight Handlers",
        desc: "Robust workforce for rapid loading and unloading of cargo at distribution hubs.",
      },
      {
        icon: "account_tree",
        title: "Supply Chain Coordinators",
        desc: "Liaisons tracking material movement from procurement to final destination.",
      },
      {
        icon: "health_and_safety",
        title: "Logistics Safety Auditors",
        desc: "Inspectors ensuring transportation compliance with state and federal transport laws.",
      }
    ]
  },
  {
    id: "healthcare",
    icon: "medical_services",
    title: "Healthcare Facilities",
    desc: "Supporting the operation of medical centers requires specialized facility management staff. We provide maintenance technicians, environmental service workers, and security personnel trained for sensitive environments.",
    roles: [
      {
        icon: "sanitizer",
        title: "Bio-hazard Cleaning Specialists",
        desc: "Trained environmental service workers for sanitizing operating rooms and clinical areas.",
      },
      {
        icon: "medical_information",
        title: "Medical Equipment Maintenance Techs",
        desc: "Specialists calibrating and repairing diagnostic and patient monitoring machines.",
      },
      {
        icon: "local_police",
        title: "Hospital Security Personnel",
        desc: "Guards trained in de-escalation and access control in sensitive patient environments.",
      },
      {
        icon: "accessible_forward",
        title: "Patient Transport Assistants",
        desc: "Compassionate staff assisting in moving patients between wards and testing facilities.",
      },
      {
        icon: "hvac",
        title: "Clinical HVAC Specialists",
        desc: "Technicians maintaining critical positive/negative pressure and HEPA filtration systems.",
      },
      {
        icon: "folder_shared",
        title: "Medical Records Clerks",
        desc: "Administrative staff managing physical and digital patient filing and data entry.",
      }
    ]
  }
];

export function getIndustryById(id: string): IndustryCategory | undefined {
  return industryCategories.find((i) => i.id === id);
}
