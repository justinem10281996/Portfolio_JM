// src/data/portfolio-data.ts

export interface OverviewItem {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
}

export interface Technology {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
}

// ✅ Per-image metadata
export interface SubImage {
  src: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  subtitle?: string;
  image: string;
  subimage: SubImage[];
  techimage: string[];
  link: string;
  description: string;
}

export interface PersonalProject {
  id: number;
  name: string;
  subtitle?: string;
  image: string;
  subimage: SubImage[];
  techimage: string[];
  link: string;
  github?: string;
  tiktok?: string;
  description: string;
}

export interface Career {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  image: string;
  link: string;
  description: string;
  systemUsage: string;
  techStack: string[];
}

export interface SocialLink {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
}

const getAssetPath = (path: string) => `${process.env.PUBLIC_URL}/${path}`;

export const overviewData: OverviewItem[] = [
  { id: 1, name: "Website Development", image: getAssetPath("assets/just-icon/website-development.png"), description: "Building websites from start to finish using various technologies.", link: "https://example.com/website-development" },
  { id: 2, name: "Software Development", image: getAssetPath("assets/just-icon/software-development-.png"), description: "Creating software applications for various platforms.", link: "https://example.com/software-development" },
  { id: 3, name: "Third-Party Integration", image: getAssetPath("assets/just-icon/thrid-party.png"), description: "Integrating third-party services and APIs into existing applications.", link: "https://example.com/third-party-integration" }
];

export const technologiesData: Technology[] = [
  { id: 1, name: "HTML", image: getAssetPath("assets/dev-icon/html5.png"), description: "Markup language for creating web pages.", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { id: 2, name: "CSS", image: getAssetPath("assets/dev-icon/css.png"), description: "Style sheet language for beautifying web pages.", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { id: 3, name: "JavaScript", image: getAssetPath("assets/dev-icon/js.png"), description: "Programming language used in web development.", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: 4, name: "TypeScript", image: getAssetPath("assets/dev-icon/ts.png"), description: "A superset of JavaScript that provides static typing.", link: "https://www.typescriptlang.org/" },
  { id: 5, name: "React", image: getAssetPath("assets/dev-icon/react-js.png"), description: "JavaScript library for building user interfaces.", link: "https://reactjs.org/" },
  { id: 6, name: "AntDesign", image: getAssetPath("assets/dev-icon/ant-design.png"), description: "UI design language and React UI library providing pre-designed components.", link: "https://ant.design/" },
  { id: 7, name: "Shadcn", image: getAssetPath("assets/dev-icon/shadcn.png"), description: "Modern UI component library built with Tailwind CSS.", link: "https://ui.shadcn.com/docs/components" },
  { id: 8, name: "PHP", image: getAssetPath("assets/dev-icon/php.png"), description: "A popular server-side scripting language for building dynamic web applications.", link: "https://www.php.net/" },
  { id: 9, name: "Node.js", image: getAssetPath("assets/dev-icon/node-js.png"), description: "JavaScript runtime used for server-side development.", link: "https://nodejs.org/" },
  { id: 10, name: "Laravel", image: getAssetPath("assets/dev-icon/laravel.png"), description: "PHP framework for building robust web applications.", link: "https://laravel.com/" },
  { id: 11, name: "MySql", image: getAssetPath("assets/dev-icon/mysql.png"), description: "Relational database management system for data storage.", link: "https://www.mysql.com/" },
  { id: 12, name: "MsSql", image: getAssetPath("assets/dev-icon/mssql.png"), description: "Database management system from Microsoft.", link: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads" },
  { id: 13, name: "Git", image: getAssetPath("assets/dev-icon/git.png"), description: "Version control system for tracking code changes.", link: "https://git-scm.com/" }
];

export const personalProjectsData: PersonalProject[] = [
  {
    id: 1,
    name: "Document Management System",
    subtitle: "File Organization",
    image: getAssetPath("assets/project-icon/soon.jpg"),
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "",
    github: "https://github.com/justinem10281996/dms",
    tiktok: "https://www.tiktok.com/@justinem1996/video/7613367989903084807",
    description: "A comprehensive document management system built for internal company use, designed for organizing, storing, and retrieving files efficiently. Features include file upload and download, folder organization, search functionality, version control, and user permissions. Built with React and integrated with cloud storage APIs for secure file management. Developed as a client project for internal business operations.",
    subimage: [
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-landing-page-2026-03-07-08_13_12.jpg"),
        title: "Landing Page",
        subtitle: "Welcome Screen",
        description: "The public-facing welcome page introducing the Document Management System with a clean layout and call-to-action buttons for login and registration."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-login-2026-03-07-08_12_56.jpg"),
        title: "Login",
        subtitle: "User Authentication",
        description: "Secure login screen where users enter their email and password to access the system. Includes a forgot password link for account recovery."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-register-2026-03-07-08_13_12.png"),
        title: "Register",
        subtitle: "New Account Creation",
        description: "Registration screen allowing new users to create an account by providing their name, email, and password to gain access to the system."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-forgot-password-2026-03-07-08_12_56.png"),
        title: "Forgot Password",
        subtitle: "Password Recovery",
        description: "Password recovery screen where users enter their registered email address to receive a password reset link and regain access to their account."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_16_47.jpg"),
        title: "Dashboard",
        subtitle: "System Overview",
        description: "Main dashboard displaying key metrics, recent activities, document summaries, and quick-access shortcuts for efficient system navigation."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_17_00.png"),
        title: "Documents",
        subtitle: "Document List",
        description: "Complete list of all uploaded documents with filtering, sorting, and search capabilities. Displays document name, category, department, and date uploaded."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_17_42.png"),
        title: "Documents — Add",
        subtitle: "Upload New Document",
        description: "Document upload form where users can attach files, assign categories, select departments, and add relevant metadata before submitting."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_17_54.png"),
        title: "Documents — Edit",
        subtitle: "Update Document",
        description: "Form for uploading and updating documents, including file attachment, category assignment, department selection, and metadata input."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_18_26.png"),
        title: "Documents — Details",
        subtitle: "View Document Details",
        description: "Detailed view of a document showing its information, file preview, version history, download options, and activity logs."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_18_33.png"),
        title: "Documents — Preview",
        subtitle: "Reports Index",
        description: "Index page listing all reports with options to preview, download, or upload new files."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_18_38.png"),
        title: "Documents — Activity Log",
        subtitle: "Document Change History",
        description: "Chronological log showing all actions performed on a document including uploads, edits, downloads, and permission changes."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_18_47.png"),
        title: "Documents — Visibility",
        subtitle: "Public, Private or by Department",
        description: "Page to manage document visibility settings including public access, private restrictions, or department-specific permissions."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_18_53.png"),
        title: "Documents — By Department",
        subtitle: "All Departments You Are Member Of",
        description: "Page showing documents filtered by departments the user belongs to."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_07.png"),
        title: "Department — Overview",
        subtitle: "All Department",
        description: "Overview of all departments with structured view, including status indicators and tracking."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_15.png"),
        title: "Department — Add",
        subtitle: "Department Add",
        description: "Form for creating a new department including department name and details."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_26.png"),
        title: "Department — Edit",
        subtitle: "Department Edit",
        description: "Form for editing existing department details."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_33.png"),
        title: "Department — View all Details",
        subtitle: "Department Management",
        description: "Page displaying all department details and management options."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_40.png"),
        title: "Department — Invite Users",
        subtitle: "Department",
        description: "Form for inviting new users to a department."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_47.png"),
        title: "Department — Gmail Invite",
        subtitle: "Department",
        description: "Page to send department invitations via Gmail to users."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_53.png"),
        title: "Department — Invite User via Email",
        subtitle: "Create New Department",
        description: "Form for sending a department invitation by email."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_20_09.png"),
        title: "Department — Delete",
        subtitle: "User Management Index",
        description: "Page to remove a department from the system."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_20_27.png"),
        title: "Department — Archive",
        subtitle: "Create New User Account",
        description: "Page displaying archived departments with options to review or restore."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_20_38.png"),
        title: "Category — Overview",
        subtitle: "Category Overview",
        description: "Page listing all categories with options to manage them."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_20_47.png"),
        title: "Category — Add",
        subtitle: "Add New Category",
        description: "Form to create a new document category."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_21_05.png"),
        title: "Category — Edit",
        subtitle: "Edit Category",
        description: "Form to update existing category details."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_21_16.png"),
        title: "Category — Delete",
        subtitle: "Delete Category",
        description: "Confirmation page for removing a category."
      },
      {
        src: getAssetPath("assets/project-icon/dms/Screenshot 2026-03-07 112554.png"),
        title: "Category — Archive",
        subtitle: "Archive Category",
        description: "Page showing archived categories with options to review or restore them."
      },
      {
        src: getAssetPath("assets/project-icon/dms/Screenshot 2026-03-07 111922.png"),
        title: "Category — Details",
        subtitle: "Details Category",
        description: "Detailed view of a category including assigned members and related documents."
      },
      {
        src: getAssetPath("assets/project-icon/dms/Screenshot 2026-03-07 112012.png"),
        title: "Category — Add Member",
        subtitle: "Add Member Category",
        description: "Form for adding a member to a specific category for document access and collaboration."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_04.png"),
        title: "User Management — Overview",
        subtitle: "Overview",
        description: "Page displaying all system users."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_11.png"),
        title: "User Management — Add",
        subtitle: "Add User",
        description: "Form to create a new user account."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_23.png"),
        title: "User Management — Edit",
        subtitle: "Edit User",
        description: "Form to update user account details."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_32.png"),
        title: "User Management — Permissions",
        subtitle: "Permissions",
        description: "Page to assign roles and access permissions to users."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_39.png"),
        title: "User Management — View Changes",
        subtitle: "Change History",
        description: "Page showing modifications performed on user accounts."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_44.png"),
        title: "User Management — Change History",
        subtitle: "Activity Log",
        description: "Log of user actions and system activities."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_52.png"),
        title: "Audit Log — Overview",
        subtitle: "Audit Trail",
        description: "Page showing all system audit logs including user and admin activities."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_58.png"),
        title: "Settings — Overview",
        subtitle: "Settings Overview",
        description: "Page providing access to all system configuration settings."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_06.png"),
        title: "Profile",
        subtitle: "Profile Overview",
        description: "Page showing user personal details, role, department, and recent activity."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_13.png"),
        title: "Profile — Change Background",
        subtitle: "Edit Personal Information",
        description: "Form to update personal details such as name, email, contact information, and profile photo."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_21.png"),
        title: "Profile — Change Profile",
        subtitle: "Password Update",
        description: "Form for updating account password securely."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_26.png"),
        title: "Profile — Update Information",
        subtitle: "Update Information",
        description: "Form allowing users to update their personal information including name, email, and other profile details."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_33.png"),
        title: "Profile — Update Email",
        subtitle: "Update Email",
        description: "Interface for users to change their registered email address with verification and confirmation."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_40.png"),
        title: "Profile — Change Password",
        subtitle: "Change Password",
        description: "Secure page where users can update their account password by entering the current password and a new one."
      }
    ],
  },
  {
    id: 2,
    name: "Inventory POS / Materials Management System",
    subtitle: "Inventory & POS Management System",
    image: getAssetPath("assets/project-icon/backup.png"),
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "",
    github: "",
    tiktok: "",
    description: "A combined inventory and point-of-sale (POS) system built for internal use by a small to medium-sized business (SME). Designed to manage stock levels, track raw materials and supplies, and streamline daily sales transactions in one integrated platform. Features include inventory tracking with stock in/out monitoring, materials management for production or supply use, point-of-sale processing for over-the-counter transactions, and basic reporting for stock and sales activity. Built with React and TypeScript with Shadcn UI, powered by Laravel backend and MySQL database. Developed as a client project for internal business operations.",
    subimage: []
  },
  {
    id: 3,
    name: "InvoTrucking 360",
    subtitle: "Inventory Management System",
    image: getAssetPath("assets/project-icon/backup.png"),
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "https://invotrucking360-production.up.railway.app/",
    github: "https://github.com/justinem10281996/InvoTrucking_360",
    tiktok: "https://www.tiktok.com/@justinem1996/video/7663835878837538069",
    description: "A comprehensive inventory tracking and management system for trucking operations, providing real-time inventory monitoring and reporting across multiple warehouse locations. Features include stock level management with automated low-stock alerts and reorder point configuration, purchase order management with supplier tracking and delivery status updates, inventory receiving and inspection workflows with quality control checks, stock transfer management between branches and warehouses with real-time tracking, batch and expiry date tracking for perishable goods, barcode and QR code scanning for efficient stock intake and counting, inventory valuation and costing (FIFO, LIFO, weighted average), a built-in point-of-sale (POS) module for over-the-counter sales of categorized items such as spare parts, electronics, and other trucking-related supplies, detailed reporting suite (stock movement, inventory valuation, stock aging, slow-moving items, inventory turnover), cycle counting and physical inventory reconciliation, role-based access control for warehouse staff and managers, audit trails for all inventory transactions, and integration with procurement and sales modules for end-to-end supply chain visibility. Built with React and TypeScript with Shadcn UI, powered by Laravel backend and MySQL database. This project is under continued development for future updates. This is a personal project, open for collaboration or commission.",
    subimage: [
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_20_51.png"),
        title: "Landing Page — Overview",
        subtitle: "Welcome Screen",
        description: "Public-facing landing page introducing the system's core modules with a call-to-action to sign in or request a demo."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_20_52.png"),
        title: "Login",
        subtitle: "Authentication",
        description: "Secure login screen with email/username and password fields, remember-me option, and link to password recovery."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_20_53.png"),
        title: "Forget Password",
        subtitle: "Password Recovery",
        description: "Password reset flow where users request a reset link via email to regain access to their account."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_21_42.png"),
        title: "Dashboard — Overview",
        subtitle: "System Overview",
        description: "Main dashboard displaying real-time inventory metrics, low stock alerts, recent transactions, and key performance indicators for trucking inventory management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_21_52.png"),
        title: "Brands — Management",
        subtitle: "Brand Catalog",
        description: "Brand master data management with logo upload, description, and product association tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_22_02.png"),
        title: "Manufacturers — List",
        subtitle: "Manufacturer Directory",
        description: "Manufacturer master records with contact information, lead times, and associated product lines."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_22_09.png"),
        title: "Categories — List",
        subtitle: "Product Categories",
        description: "Master data management for product categories with hierarchical structure, search, and bulk operations."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_22_22.png"),
        title: "Unit Models — Configuration",
        subtitle: "Model Variants",
        description: "Unit model management for product variants with specifications, dimensions, and compatibility matrix."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_22_28.png"),
        title: "Units — Unit of Measure",
        subtitle: "UOM Management",
        description: "Unit of measure master data with conversion factors, base units, and precision settings for inventory accuracy."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_22_43.png"),
        title: "Product Models — Catalog",
        subtitle: "Product Master",
        description: "Product model master data with categories, brands, manufacturers, units, and variant configurations."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_22_52.png"),
        title: "Product Variants — Matrix",
        subtitle: "Variant Management",
        description: "Product variant matrix with attributes, SKUs, barcodes, pricing, and inventory tracking per variant."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_23_02.png"),
        title: "Item Kits — Assembly",
        subtitle: "Kit/BOM Management",
        description: "Item kit and bill of materials management for assembled products with component tracking and costing."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_23_12.png"),
        title: "Price Lists — Pricing",
        subtitle: "Multi-Price Management",
        description: "Price list management with customer-specific pricing, volume discounts, validity periods, and currency support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_23_26.png"),
        title: "Locations — Bin Management",
        subtitle: "Storage Locations",
        description: "Storage location/bin management within warehouses with zone, aisle, rack, shelf hierarchy and capacity tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_23_34.png"),
        title: "Branches — Multi-Branch",
        subtitle: "Branch Management",
        description: "Branch/outlet management with separate inventory, users, and reporting for multi-location operations."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_23_43.png"),
        title: "Warehouses — Locations",
        subtitle: "Warehouse Master",
        description: "Warehouse master data with address, contact, capacity, zones, and default location assignments."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_23_53.png"),
        title: "Serial Numbers — Tracking",
        subtitle: "Serial Management",
        description: "Serial number tracking for high-value items with warranty, maintenance history, and ownership records."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_24_12.png"),
        title: "Suppliers — Vendor Master",
        subtitle: "Supplier Management",
        description: "Supplier master records with contact details, payment terms, performance ratings, and document management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_24_03.png"),
        title: "Customers — Client Master",
        subtitle: "Customer Management",
        description: "Customer master data with credit limits, pricing tiers, shipping addresses, and transaction history."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_24_24.png"),
        title: "Purchase Requests — Requisition",
        subtitle: "PR Workflow",
        description: "Purchase request creation, approval workflow, and conversion to purchase orders with budget validation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_24_32.png"),
        title: "Purchase Orders — PO Management",
        subtitle: "Order Processing",
        description: "Purchase order lifecycle management: draft, approval, dispatch, receipt, and closure with supplier tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_24_40.png"),
        title: "Goods Receipts — Receiving",
        subtitle: "GRN Processing",
        description: "Goods receipt note processing with quantity verification, quality inspection, and automatic stock update."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_24_47.png"),
        title: "Landed Costs — Cost Allocation",
        subtitle: "Landed Cost Calculation",
        description: "Landed cost allocation across received items including freight, insurance, duties, and handling charges."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_24_53.png"),
        title: "Purchase Returns — Returns",
        subtitle: "Return Management",
        description: "Purchase return processing with reason codes, credit note generation, and supplier reconciliation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_25_17.png"),
        title: "POS — Point of Sale",
        subtitle: "Retail Sales",
        description: "Point of sale interface for walk-in sales with barcode scanning, payment processing, and receipt printing."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_25_30.png"),
        title: "Quotations — Quotes",
        subtitle: "Quote Management",
        description: "Sales quotation creation with validity, versioning, conversion to orders, and follow-up tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_25_39.png"),
        title: "Sales Orders — Order Entry",
        subtitle: "SO Processing",
        description: "Sales order management from entry to fulfillment with availability checks, pricing, and delivery scheduling."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_25_45.png"),
        title: "Deliveries — Dispatch",
        subtitle: "Delivery Management",
        description: "Delivery note creation, packing, dispatch tracking, and proof of delivery with customer acknowledgment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_25_50.png"),
        title: "Sales Returns — Returns",
        subtitle: "Return Processing",
        description: "Sales return workflow with inspection, restocking, credit notes, and replacement order generation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_26_00.png"),
        title: "Purchase Invoices — AP Invoices",
        subtitle: "Vendor Billing",
        description: "Purchase invoice matching with PO/GRN, three-way matching, and payment scheduling for accounts payable."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_26_06.png"),
        title: "Sales Invoices — Billing",
        subtitle: "Invoice Generation",
        description: "Sales invoice creation from deliveries/orders with tax computation, payment terms, and aging tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_26_12.png"),
        title: "Stocks — Inventory View",
        subtitle: "Stock Inquiry",
        description: "Real-time stock inquiry with multi-warehouse view, available/committed/on-order quantities, and valuation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_26_18.png"),
        title: "Stock Transfer — Inter-Warehouse",
        subtitle: "Transfer Management",
        description: "Inter-warehouse stock transfer with request, approval, dispatch, in-transit, and receipt confirmation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_26_26.png"),
        title: "Adjustments — Stock Adjustment",
        subtitle: "Adjustment Entry",
        description: "Stock adjustment entry for write-offs, write-ups, cycle count variances with reason codes and approval."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_26_36.png"),
        title: "Stock Movements — History",
        subtitle: "Movement Log",
        description: "Complete stock movement history with filters by item, warehouse, date range, transaction type, and user."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_27_05.png"),
        title: "Sales Reports — Analytics",
        subtitle: "Sales Analysis",
        description: "Sales performance reports by product, customer, salesperson, and period with trends, rankings, and variance analysis."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_26_52.png"),
        title: "Inventory Reports — Stock Reports",
        subtitle: "Inventory Analytics",
        description: "Inventory reports: stock status, aging, valuation, turnover, slow-moving, dead stock, and reorder analysis."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_27_20.png"),
        title: "Purchase Reports — Procurement",
        subtitle: "Purchase Analytics",
        description: "Purchase reports: supplier performance, spend analysis, lead times, price variance, and order accuracy."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_26_57.png"),
        title: "Stock Movement Reports — Movements",
        subtitle: "Movement Analysis",
        description: "Detailed stock movement reports with inbound/outbound analysis, velocity, and exception reporting."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_27_11.png"),
        title: "Customer Sales Reports — Customer Analytics",
        subtitle: "Customer Performance",
        description: "Customer sales analysis with purchase patterns, profitability, credit utilization, and retention metrics."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_27_28.png"),
        title: "Supplier Purchase Reports — Vendor Analytics",
        subtitle: "Supplier Performance",
        description: "Supplier purchase analysis with spend, quality, delivery performance, and strategic sourcing insights."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_27_40.png"),
        title: "Roles — RBAC Roles",
        subtitle: "Role Management",
        description: "Role-based access control with role definitions, permission assignments, and role hierarchy management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_27_51.png"),
        title: "Users — User Management",
        subtitle: "User Administration",
        description: "User account management with profile, role assignment, branch access, password policies, and audit trail."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_28_00.png"),
        title: "Department — Management",
        subtitle: "Department Master",
        description: "Department master data management for organizing users, cost centers, and approval routing by division."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_28_09.png"),
        title: "Workflows — Approval Flows",
        subtitle: "Workflow Designer",
        description: "Approval workflow configuration with multi-level routing, conditions, escalations, and delegation rules."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_28_17.png"),
        title: "Approvals — Pending Approvals",
        subtitle: "Approval Queue",
        description: "Centralized approval dashboard for managers to review, approve, reject, or delegate pending requests."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_28_29.png"),
        title: "Backup Data — Backup & Restore",
        subtitle: "Data Protection",
        description: "Automated and manual database backup with scheduling, retention policies, and point-in-time recovery."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_28_38.png"),
        title: "Activity Logs — Audit Trail",
        subtitle: "System Audit",
        description: "Comprehensive system activity logs with user actions, data changes, login history, and compliance reporting."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_28_52.png"),
        title: "Company Profile — Organization",
        subtitle: "Company Settings",
        description: "Company profile management with logo, address, registration details, and default configurations."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_31_34.png"),
        title: "Payment Terms — Configuration",
        subtitle: "Terms Setup",
        description: "Payment term master data with due days, discount periods, and automatic application to customers/vendors."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_31_47.png"),
        title: "Payment Terms — Due Dates",
        subtitle: "Due Date Tracking",
        description: "Automated due date calculation and tracking based on assigned payment terms for receivables and payables."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_32_01.png"),
        title: "Payment Terms — Aging Report",
        subtitle: "Aging Analysis",
        description: "Receivables and payables aging report grouped by due-date buckets to monitor overdue balances."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_29_09.png"),
        title: "Discount Settings — Promotions",
        subtitle: "Discount Rules",
        description: "Discount configuration with tier pricing, promotional discounts, customer-specific deals, and validity periods."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_29_01.png"),
        title: "Currency Settings — Multi-Currency",
        subtitle: "Currency Management",
        description: "Multi-currency configuration for transactions across customers, suppliers, and branches with base currency setup."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-23_18_49.png"),
        title: "Currency Settings — Exchange Rates",
        subtitle: "Rate Management",
        description: "Exchange rate management with manual entry or automated updates and historical rate tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-23_19_03.png"),
        title: "Currency Settings — General Settings",
        subtitle: "Currency Preferences",
        description: "General currency preferences including rounding rules, display format, and default currency per branch."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_31_01.png"),
        title: "Tax Settings — Tax Configuration",
        subtitle: "Tax Management",
        description: "Tax code management with rates, jurisdictions, exemptions, and automatic tax calculation on transactions."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_31_08.png"),
        title: "Inventory Valuation — Method List",
        subtitle: "Valuation Setup",
        description: "Inventory valuation method configuration: FIFO, LIFO, weighted average, and standard cost with periodic revaluation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_31_16.png"),
        title: "Inventory Valuation — Standard Cost",
        subtitle: "Standard Cost Setup",
        description: "Standard cost entry and revision per item with variance tracking against actual purchase costs."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_31_22.png"),
        title: "Inventory Valuation — Analysis",
        subtitle: "Valuation Analysis",
        description: "Valuation comparison and variance analysis across costing methods to support pricing and margin decisions."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_32_15.png"),
        title: "Reorder System — Reorder Alerts",
        subtitle: "Low Stock Alerts",
        description: "Automated reorder alerts triggered when stock falls below configured reorder points per item and warehouse."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-21_32_24.png"),
        title: "Reorder System — Product Reorder Rules",
        subtitle: "Reorder Configuration",
        description: "Per-product reorder point and reorder quantity configuration with supplier and lead-time defaults."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-profile-2026-07-12-21_32_32.png"),
        title: "User Profile — My Account",
        subtitle: "Profile Management",
        description: "User profile page with personal info, password change, notification preferences, and API token management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-settings-2026-07-12-21_32_47.png"),
        title: "Settings — Notifications",
        subtitle: "Alert Configuration",
        description: "Notification preferences for email, in-app, and push alerts for low stock, approvals, and system events."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-settings-2026-07-12-21_32_42.png"),
        title: "Settings — Account",
        subtitle: "Account Management",
        description: "Account-level settings covering login security, connected devices, and general preferences."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-settings-2026-07-12-21_32_55.png"),
        title: "Settings — Appearance",
        subtitle: "Theme & Display",
        description: "Appearance settings for theme, layout density, and display preferences across the application."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-settings-subscription-2026-07-12-21_33_01.png"),
        title: "Subscription — Billing Details",
        subtitle: "Billing Portal",
        description: "Detailed billing portal with invoice history, payment methods, usage analytics, and cancellation workflow."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-system-guide-2026-07-12-21_33_08.png"),
        title: "System Guide — Documentation",
        subtitle: "User Manual",
        description: "Comprehensive system guide with searchable documentation, video tutorials, FAQs, and context-sensitive help."
      }
    ],
  },
  {
    id: 4,
    name: "BioTrucking 360",
    subtitle: "Attendance Management System",
    image: getAssetPath("assets/project-icon/backup.png"),
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "https://biotrucking360-production.up.railway.app/",
    github: "https://github.com/justinem10281996/BioTrucking_360",
    tiktok: "https://www.tiktok.com/@justinem1996/video/7648679999704288528",
    description: "A comprehensive biometric attendance system for trucking companies, integrating with fingerprint scanner hardware for real-time employee clock-in/out tracking. Features include daily time record (DTR) management with automated log processing and hours computation, duty and roster scheduling with shift rules and flexi-duty assignments, employee self-service portal for attendance views and day-off requests, multi-level approval workflows for DTR modifications, biometric device management for fingerprint upload/download and time synchronization, detailed reporting suite (DTR summaries, tardiness, overtime, absences, perfect attendance, incomplete logs), administrative controls with role-based permissions and activity audit trails, import/export for bulk data operations, company and branch/location/department/position configuration, subscription-based billing with plan tiers and Stripe integration, 2FA security, AES-256-CBC data encryption, and a real-time biometric monitoring dashboard. Built with React and TypeScript with Shadcn UI, powered by Laravel backend, MySQL database, and integrated with biometric fingerprint hardware via serial port communication. This project is under continued development for future updates. This is a personal project, open for collaboration or commission.",
    subimage: [
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-2026-06-18-15_31_20.jpg"),
        title: "Landing Page",
        subtitle: "Welcome Screen",
        description: "The public-facing landing page introducing BioTrucking 360, featuring a clean layout with easy navigation to key sections of the system."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-3Nqo51WPOk7l-2026-06-18-15_31_28.png"),
        title: "Forgot Password",
        subtitle: "Password Recovery",
        description: "Password recovery screen where users enter their registered email to receive a reset link and regain access to their account."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-AlVQPND5Y03D-2026-06-18-15_31_34.png"),
        title: "Login / Register",
        subtitle: "User Authentication",
        description: "Secure login and registration screen allowing authorized users to access the attendance management system with their credentials."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_04_08.png"),
        title: "Dashboard",
        subtitle: "System Overview",
        description: "Main dashboard displaying real-time attendance status, key metrics, and quick-access shortcuts for efficient workforce management."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_04_19.jpg"),
        title: "System Guide",
        subtitle: "Help Center",
        description: "In-app system guide accessible from the dashboard, offering quick reference tips and onboarding help for new users."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_04_34.png"),
        title: "Locations",
        subtitle: "Location Management",
        description: "Master data management for work locations and sites used to track employee attendance across different areas."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_05_05.png"),
        title: "Branches",
        subtitle: "Branch Management",
        description: "Branch and outlet master data management with separate employee records and reporting per location."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_05_30.png"),
        title: "Departments",
        subtitle: "Department Management",
        description: "Department master data management for organizing employees and structuring attendance reporting by division."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_01.png"),
        title: "Positions",
        subtitle: "Position Management",
        description: "Job position and title master data used to classify employees and set position-based duty rules."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_16.png"),
        title: "Cost Centres",
        subtitle: "Cost Centre Management",
        description: "Cost centre master data management used for allocating labor costs and payroll expenses by unit or project."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_33.png"),
        title: "Work Codes",
        subtitle: "Work Code Management",
        description: "Work code master data defining shift types, pay codes, and time categories used in attendance processing."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_56.png"),
        title: "Holidays",
        subtitle: "Holiday Management",
        description: "Holiday calendar setup for defining regular and special non-working days used in attendance and payroll calculations."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_09_20.png"),
        title: "Employees",
        subtitle: "Employee List",
        description: "Complete employee listing with search, filter, and sort capabilities for efficient workforce management."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_09_32.png"),
        title: "Employee Profile",
        subtitle: "Employee Details",
        description: "Detailed employee profile view showing personal information, employment details, and biometric enrollment status."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_09_43.png"),
        title: "Update Employee",
        subtitle: "Edit Employee",
        description: "Form for editing an employee's personal information, employment details, and department or position assignment."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_09_50.png"),
        title: "Set Biometric",
        subtitle: "Biometric Enrollment",
        description: "Form for updating an employee's biometric enrollment status and setting new fingerprint templates."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_04.png"),
        title: "Day Off Setup",
        subtitle: "Day Off Configuration",
        description: "Configuration screen for defining day-off types and eligibility rules applied to employees or groups."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_13.png"),
        title: "Generate Day Off",
        subtitle: "Day Off Generation",
        description: "Batch generation of day-off entries for employees based on configured rules and selected date ranges."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_29.png"),
        title: "Duty Management",
        subtitle: "Module Menu",
        description: "Main navigation menu for the duty management module, covering roster-based and unlimited duty configurations."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_36.png"),
        title: "Roster-Based Rules",
        subtitle: "Duty Rules",
        description: "List of roster-based duty rules used to define fixed shift patterns and rotation schedules for employees."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_48.png"),
        title: "Roster-Based Rule Details",
        subtitle: "Rule Details",
        description: "Detailed view of a specific roster-based rule, showing shift sequence, cycle length, and assigned employees."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_58.png"),
        title: "Edit Roster-Based Rule",
        subtitle: "Update Rule",
        description: "Form for editing an existing roster-based duty rule, including shift sequence and rotation settings."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_17_07.png"),
        title: "Unlimited Duty Rules",
        subtitle: "Duty Rules",
        description: "List of unlimited duty rules used for employees with flexible or non-fixed shift schedules."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_17_16.png"),
        title: "Unlimited Rule Details",
        subtitle: "Rule Details",
        description: "Detailed view of a specific unlimited duty rule, showing time boundaries and applicable employee groups."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_17_24.png"),
        title: "Edit Unlimited Rule",
        subtitle: "Update Rule",
        description: "Form for editing an existing unlimited duty rule and its associated time and eligibility settings."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_17_34.png"),
        title: "Roster-Based Duty",
        subtitle: "Duty List",
        description: "List of assigned roster-based duties, showing employee schedules generated from roster rules."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_18_25.png"),
        title: "Edit Roster-Based Duty",
        subtitle: "Update Duty",
        description: "Form for modifying an assigned roster-based duty entry for a selected employee and date."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_18_33.png"),
        title: "Roster-Based Duty Adjustment",
        subtitle: "Duty Adjustment",
        description: "Detailed duty adjustment form for correcting or overriding a specific roster-based duty assignment."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_20_26.png"),
        title: "Unlimited Duty",
        subtitle: "Duty List",
        description: "List of assigned unlimited duties, showing flexible schedules generated from unlimited duty rules."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_20_37.png"),
        title: "Edit Unlimited Duty",
        subtitle: "Update Duty",
        description: "Form for modifying an assigned unlimited duty entry for a selected employee and date."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_20_50.png"),
        title: "Unlimited Duty Adjustment",
        subtitle: "Duty Adjustment",
        description: "Detailed duty adjustment form for correcting or overriding a specific unlimited duty assignment."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_21_32.png"),
        title: "Assign Duty Roster",
        subtitle: "Roster Assignment",
        description: "Screen for assigning duty rosters to individual employees or employee groups in bulk."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_19.png"),
        title: "Attendance Management",
        subtitle: "Module Menu",
        description: "Main navigation menu for the attendance management module, covering logs, processing, and DTR tools."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_30.png"),
        title: "Download Logs",
        subtitle: "Log Download",
        description: "Tool for downloading raw attendance logs captured from biometric devices for a selected date range."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_49.png"),
        title: "Process Logs",
        subtitle: "Log Processing",
        description: "Tool for processing raw attendance logs into structured time-in and time-out records for payroll and reporting."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_58.png"),
        title: "Calculate Hours",
        subtitle: "Hours Calculation",
        description: "Tool for calculating rendered hours, overtime, and undertime from processed attendance logs."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_06.png"),
        title: "Roster DTR Correction",
        subtitle: "DTR Correction",
        description: "Tool for manually correcting daily time record entries for employees under roster-based duty schedules."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_14.png"),
        title: "Unlimited DTR Correction",
        subtitle: "DTR Correction",
        description: "Tool for manually correcting daily time record entries for employees under unlimited duty schedules."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_21.png"),
        title: "Daily Time Records",
        subtitle: "DTR Logs",
        description: "Consolidated view of daily time records for all employees, with filtering by date, department, or branch."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_32.png"),
        title: "Approval Requests",
        subtitle: "Pending Approvals",
        description: "Centralized queue for reviewing and approving or rejecting pending employee attendance and leave requests."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_42.png"),
        title: "Generate Reports",
        subtitle: "Reports Module",
        description: "Landing screen for the reporting module, providing access to available attendance and payroll reports."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_53.png"),
        title: "Report Catalog",
        subtitle: "List of Reports",
        description: "Catalog of available report templates that can be generated, filtered by category and date range."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_24_05.png"),
        title: "Report Details",
        subtitle: "View Report",
        description: "Detailed view of a generated report with options to preview, export, or print the results."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_24_22.png"),
        title: "Import Data",
        subtitle: "Data Import",
        description: "Tool for importing external data files, such as employee or attendance data, into the system."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_24_37.png"),
        title: "Export Data",
        subtitle: "Data Export",
        description: "Tool for exporting attendance, employee, and payroll data to external file formats for offline use."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_24_50.png"),
        title: "Biometric Devices",
        subtitle: "Module Menu",
        description: "Main navigation menu for managing biometric devices, terminals, and related data sync tools."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_03.png"),
        title: "Device List",
        subtitle: "Registered Devices",
        description: "List of registered biometric devices with connection status, location, and last sync information."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_07.png"),
        title: "Connect Device",
        subtitle: "Device Connection",
        description: "Screen for registering and connecting a new biometric device to the system via IP address or serial connection."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_13.png"),
        title: "Set Device Departments",
        subtitle: "Department Assignment",
        description: "Screen for assigning which departments or employee groups a specific biometric device covers."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_19.png"),
        title: "Update Device Details",
        subtitle: "Device Settings",
        description: "Form for editing a registered biometric device's connection details, name, and location assignment."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_34.png"),
        title: "Download Fingerprints",
        subtitle: "Fingerprint Download",
        description: "Tool for downloading enrolled employee fingerprint templates from a connected biometric device."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_44.png"),
        title: "Upload Fingerprints",
        subtitle: "Fingerprint Upload",
        description: "Tool for uploading employee fingerprint templates to a connected biometric device for enrollment."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_54.png"),
        title: "Download Employee Info",
        subtitle: "Info Download",
        description: "Tool for downloading employee information stored directly on a connected biometric device."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_02.png"),
        title: "Upload Employee Info",
        subtitle: "Info Upload",
        description: "Tool for uploading employee information from the system to a connected biometric device."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_14.png"),
        title: "Device Time Sync",
        subtitle: "Date/Time Sync",
        description: "Tool for viewing and synchronizing the date and time settings of connected biometric devices."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_23.png"),
        title: "Front End Terminals",
        subtitle: "Terminal List",
        description: "List of registered front-end terminals used for employee clock-in and clock-out at designated stations."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_30.png"),
        title: "Add Terminal",
        subtitle: "New Terminal",
        description: "Form for registering a new front-end terminal, including its name, location, and connection settings."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_39.png"),
        title: "Configurations",
        subtitle: "Module Menu",
        description: "Main navigation menu for system-wide configuration settings such as company profile and parameters."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_39.png"),
        title: "Company Profile",
        subtitle: "Company Settings",
        description: "Company profile configuration including business name, logo, address, and default system settings."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_45.png"),
        title: "System Parameters",
        subtitle: "Global Settings",
        description: "Configuration screen for system-wide parameters controlling attendance rules, rounding, and grace periods."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_57.png"),
        title: "Auto Shift Settings",
        subtitle: "Keyboard Entry",
        description: "Configuration for automatic shift detection and keyboard-based entry behavior during manual attendance input."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_27_16.png"),
        title: "Backup",
        subtitle: "Data Protection",
        description: "Backup configuration screen for scheduling and managing automated database backups."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_27_24.png"),
        title: "Backup History",
        subtitle: "Backup Details",
        description: "Detailed view of backup history with timestamps, file sizes, and restore options."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_27_56.png"),
        title: "Account Management",
        subtitle: "Module Menu",
        description: "Main navigation menu for managing user accounts, roles, and access permissions."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_04.png"),
        title: "Roles",
        subtitle: "Role List",
        description: "List of defined user roles with their associated permission levels across the system."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_12.png"),
        title: "Role Details",
        subtitle: "View Role",
        description: "Detailed view of a specific role showing its assigned permissions and the users linked to it."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_20.png"),
        title: "Manage Roles",
        subtitle: "Role Permissions",
        description: "Screen for creating and editing roles, including toggling module-level and action-level permissions."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_37.png"),
        title: "User Accounts",
        subtitle: "User List",
        description: "List of system user accounts with their assigned roles, branch access, and account status."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_45.png"),
        title: "Manage Access",
        subtitle: "Access Control",
        description: "Screen for assigning or revoking a user's role, branch, and module-level access permissions."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-profile-2026-06-18-15_29_58.jpg"),
        title: "Profile",
        subtitle: "User Profile",
        description: "User profile page displaying personal information, account settings, and activity history."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-settings-2026-06-18-15_30_09.png"),
        title: "Account Settings",
        subtitle: "Settings",
        description: "Account-level settings covering login credentials, security options, and general account preferences."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-settings-2026-06-18-15_30_22.png"),
        title: "Appearance",
        subtitle: "Theme & Display",
        description: "Appearance settings for theme, layout density, and display preferences across the application."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-settings-2026-06-18-15_30_27.png"),
        title: "Notifications",
        subtitle: "Notification Settings",
        description: "Overview screen for managing how and when the system sends notifications to users."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-settings-notification-2026-06-18-15_30_38.png"),
        title: "Notification Preferences",
        subtitle: "Alert Preferences",
        description: "Notification preferences panel for configuring email and in-app notification settings."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_30_47.png"),
        title: "Subscriptions",
        subtitle: "Billing & Plan",
        description: "Subscription overview showing current plan, billing cycle, and available upgrade options."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_31_02.png"),
        title: "System Guide",
        subtitle: "Help & Documentation",
        description: "In-app help center providing searchable guides and quick answers for common system tasks."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-privacy-2026-06-18-15_31_50.png"),
        title: "Privacy Policy",
        subtitle: "Privacy Notice",
        description: "Privacy policy page outlining data collection, usage practices, and user data protection rights."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-terms-2026-06-18-15_31_58.png"),
        title: "Terms of Service",
        subtitle: "Terms & Conditions",
        description: "Terms of service page detailing user agreements and acceptable use policies for the system."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-docs-2026-06-18-15_32_06.png"),
        title: "Documentation",
        subtitle: "System Guide",
        description: "System documentation page providing user guides, API documentation, and technical references."
      },
    ],
  },
  {
    id: 5,
    name: "MyMoney",
    subtitle: "Subscription & Billing Management",
    image: getAssetPath("assets/project-icon/backup.png"),
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "https://mymoney-production-136e.up.railway.app/",
    github: "https://github.com/justinem10281996/my_money",
    tiktok: "https://www.tiktok.com/@justinem1996/video/7647798735145078023",
    description: "A billing, subscription, and account activation portal serving as a standalone payment gateway system, designed to power subscription and licensing management for SaaS platforms like BioTrucking 360 and InvoTrucking 360. Features include 6 subscription tiers (Trial, Starter, SME, Business, Enterprise, Corporate) with configurable billing intervals (monthly, quarterly, semi-annual, yearly), Stripe payment processing with GCash and Maya support, automatic 20-character activation key generation (XXXX-XXXX-XXXX-XXXX-XXXX), billing invoice management (INV-000001 format), role-based access control, two-factor authentication via email OTP or Google Authenticator, AES-256-CBC data encryption, HMAC-SHA256 API signature verification for webhook security, and comprehensive activity auditing with 365-day retention. Built with React and TypeScript with Shadcn UI, powered by Laravel backend and MySQL database. This is a personal project, open for collaboration or commission.",
    subimage: [
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-2026-06-18-14_58_20.png"), title: "Landing Page", subtitle: "Welcome Screen", description: "The public-facing welcome page for MyMoney subscription management system introducing the platform's features and directing users to sign in or create an account." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-login-2026-06-18-14_58_34.png"), title: "Login", subtitle: "User Authentication", description: "Secure login screen for authorized users to access their subscription dashboard using registered email and password credentials." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-register-2026-06-18-14_58_53.png"), title: "Register", subtitle: "Create Account", description: "New user registration form for creating an account with the MyMoney platform to manage subscriptions and billing." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-forgot-password-2026-06-18-14_58_44.png"), title: "Forgot Password", subtitle: "Password Recovery", description: "Password recovery page where users can submit their registered email to receive instructions for resetting their account password." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-dashboard-2026-06-18-14_59_54.png"), title: "Dashboard", subtitle: "Account Overview", description: "Main dashboard displaying subscription summaries, active plans, billing status, recent transactions, and quick-access navigation for account management." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-docs-2026-06-18-14_59_06.png"), title: "Documentation", subtitle: "User Guide", description: "System documentation page providing user guides, API references, and helpful resources for using the MyMoney subscription platform." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-plans-2026-06-18-15_00_44.jpg"), title: "Plans & Pricing", subtitle: "Subscription Plans", description: "Pricing page displaying available subscription tiers, features per plan, and pricing options for users to choose their preferred plan." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-subscriptions-2026-06-18-15_01_22.png"), title: "Subscriptions", subtitle: "Plan Management", description: "Subscriptions overview page listing all active and expired subscriptions with plan details, renewal dates, and management options." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-subscriptions-1-2026-06-18-15_01_28.png"), title: "Subscription Detail", subtitle: "Plan Details", description: "Detailed view of a specific subscription showing plan features, billing cycle, payment history, and options to upgrade or cancel." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-activation-2026-06-18-15_01_32.png"), title: "Activation", subtitle: "Account Activation", description: "Activation page for enabling new subscriptions or accounts using activation codes or license keys." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-activation-key-1-2026-06-18-15_01_38.png"), title: "Activation Key", subtitle: "Key Entry", description: "Activation key entry page for entering subscription keys received from MyMoney portal to unlock premium features." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-billing-invoices-2026-06-18-15_01_44.png"), title: "Billing Invoices", subtitle: "Invoice List", description: "Billing invoices page listing all generated invoices with dates, amounts, payment status, and download options for record keeping." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-billing-invoices-1-2026-06-18-15_01_51.png"), title: "Invoice Detail", subtitle: "Invoice Breakdown", description: "Detailed invoice view showing line items, charges, taxes, payment method, and the total amount due for a specific billing period." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-settings-2026-06-18-15_01_58.png"), title: "Settings", subtitle: "Account Settings", description: "General settings page for updating account information, notification preferences, and configuring profile details." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-settings-2026-06-18-15_02_05.png"), title: "Settings — Notifications", subtitle: "Alert Preferences", description: "Notification settings panel for configuring email alerts, billing reminders, and subscription renewal notifications." },
      { src: getAssetPath("assets/project-icon/mymoney/screencapture-mymoney-production-136e-up-railway-app-settings-2026-06-18-15_02_22.png"), title: "Settings — Profile", subtitle: "Personal Information", description: "Profile settings page for managing personal information, contact details, and account security preferences." },
    ],
  }
];

export const suppotingprojectsData: Project[] = [
  {
    id: 1,
    name: "Contract Management System",
    subtitle: "Contract Tracking",
    image: getAssetPath("assets/project-icon/soon.jpg"),
    subimage: [
      { src: getAssetPath("assets/project-icon/accas/accas-main-page.png"), title: "Landing Page", subtitle: "Welcome Screen", description: "Public-facing welcome page for the Contract Management System introducing key features and providing navigation to login." },
      { src: getAssetPath("assets/project-icon/accas/accas-login-page.png"), title: "Login", subtitle: "User Authentication", description: "Secure login screen for authorized users to access the contract management system using their credentials." },
      { src: getAssetPath("assets/project-icon/accas/accas-dashboard-page.png"), title: "Dashboard", subtitle: "System Overview", description: "Main dashboard displaying contract summaries, recent activity, key metrics, and quick-access navigation for efficient workflow." },
      { src: getAssetPath("assets/project-icon/accas/accas-branch-page.png"), title: "Branch", subtitle: "Branch List", description: "Index page listing all registered branches with their details, status, and management options for the organization." },
      { src: getAssetPath("assets/project-icon/accas/accas-branch-add-page.png"), title: "Branch — Add", subtitle: "Create New Branch", description: "Form for registering a new branch by entering branch name, location, and contact details into the system." },
      { src: getAssetPath("assets/project-icon/accas/accas-branch-edit-page.png"), title: "Branch — Edit", subtitle: "Update Branch Details", description: "Edit form for updating existing branch information such as name, address, and contact details as needed." },
      { src: getAssetPath("assets/project-icon/accas/accas-copier-models-page.png"), title: "Copier Models", subtitle: "Model List", description: "Index of all registered copier machine models with specifications and current inventory count per model type." },
      { src: getAssetPath("assets/project-icon/accas/accas-copier-models-add-page.png"), title: "Copier Models — Add", subtitle: "Register New Model", description: "Form for adding a new copier model by entering model name, specifications, and other relevant equipment details." },
      { src: getAssetPath("assets/project-icon/accas/accas-copier-models-edit-page.png"), title: "Copier Models — Edit", subtitle: "Update Model Details", description: "Edit form to update an existing copier model's specifications, name, or other details in the equipment catalog." },
      { src: getAssetPath("assets/project-icon/accas/accas-customers-page.png"), title: "Customers", subtitle: "Customer List", description: "List of all registered customers with contact information, assigned branch, and contract status for relationship management." },
      { src: getAssetPath("assets/project-icon/accas/accas-customers-add-page.png"), title: "Customers — Add", subtitle: "Register New Customer", description: "Form for adding a new customer to the system including name, contact details, address, and branch assignment." },
      { src: getAssetPath("assets/project-icon/accas/accas-customers-edit-page.png"), title: "Customers — Edit", subtitle: "Update Customer Details", description: "Edit form for modifying existing customer information to keep contact details and assignments current and accurate." },
      { src: getAssetPath("assets/project-icon/accas/accas-equipment-page.png"), title: "Equipment", subtitle: "Equipment Inventory", description: "Equipment inventory listing all assets under management with serial numbers, model types, status, and assigned customer details." },
      { src: getAssetPath("assets/project-icon/accas/accas-equipment-add-page.png"), title: "Equipment — Add", subtitle: "Register New Equipment", description: "Form for registering new equipment into the system including model, serial number, customer assignment, and installation date." },
      { src: getAssetPath("assets/project-icon/accas/accas-equipment-edit-page.png"), title: "Equipment — Edit", subtitle: "Update Equipment Details", description: "Edit form for updating equipment details such as assigned customer, status, or maintenance notes for accurate tracking." },
      { src: getAssetPath("assets/project-icon/accas/accas-work-order-page.png"), title: "Work Orders", subtitle: "Work Order Index", description: "Index of all work orders showing request details, assigned technician, status, and scheduled service dates for tracking." },
      { src: getAssetPath("assets/project-icon/accas/accas-work-order-add-page.png"), title: "Work Orders — Add", subtitle: "Create New Work Order", description: "Form for creating a new work order by specifying the equipment, issue description, assigned technician, and scheduled service date." },
      { src: getAssetPath("assets/project-icon/accas/accas-work-order-edit-page.png"), title: "Work Orders — Edit", subtitle: "Update Work Order", description: "Edit form for updating work order details including status changes, technician reassignment, and resolution notes." },
      { src: getAssetPath("assets/project-icon/accas/accas-report-meter-count-page.png"), title: "Reports — Meter Count", subtitle: "Meter Count Report", description: "Report page displaying meter count readings per equipment unit, used for billing and usage tracking across all customers." },
    ],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "https://dev.accas.able.com.pg/",
    description: "A comprehensive web application designed to streamline contract lifecycle management from creation to reporting. Features include contract creation and tracking, monitoring dashboards, automated reporting, branch management, customer relationship management, and equipment tracking. Built with React and TypeScript for the frontend, Laravel for backend operations, and MySQL for data storage, with Shadcn UI providing a modern interface."
  },
  {
    id: 2,
    name: "Internal Software License Portal",
    subtitle: "License Tracking",
    image: getAssetPath("assets/project-icon/soon.jpg"),
    subimage: [
      { src: getAssetPath("assets/project-icon/islp/welcomePage.png"), title: "Landing Page", subtitle: "Welcome Screen", description: "Public welcome page for the Internal Software License Portal introducing the platform features and directing users to login." },
      { src: getAssetPath("assets/project-icon/islp/login.png"), title: "Login", subtitle: "User Authentication", description: "Secure login page for authorized personnel to access the software license management portal using their credentials." },
      { src: getAssetPath("assets/project-icon/islp/forgot.png"), title: "Forgot Password", subtitle: "Password Recovery", description: "Password recovery page where users submit their email to receive a reset link for regaining account access." },
      { src: getAssetPath("assets/project-icon/islp/dashboard.png"), title: "Dashboard", subtitle: "System Overview", description: "Main dashboard summarizing total licenses, active subscriptions, pending requests, expiry alerts, and key system metrics at a glance." },
      { src: getAssetPath("assets/project-icon/islp/branch.png"), title: "Branch", subtitle: "Branch List", description: "List of all registered company branches with details and license assignment counts for branch-level management." },
      { src: getAssetPath("assets/project-icon/islp/branchCreate.png"), title: "Branch — Create", subtitle: "Add New Branch", description: "Form to register a new branch by entering its name, location, and contact information into the portal." },
      { src: getAssetPath("assets/project-icon/islp/branchUpdate.png"), title: "Branch — Update", subtitle: "Edit Branch Details", description: "Edit form for updating existing branch information to maintain accurate records in the license portal." },
      { src: getAssetPath("assets/project-icon/islp/brandList.png"), title: "Brand List", subtitle: "Software Brand Management", description: "Management page listing all software brands registered in the system for product categorization and license assignment." },
      { src: getAssetPath("assets/project-icon/islp/categoryList.png"), title: "Category List", subtitle: "License Category Management", description: "List of license categories used to classify software products and organize licenses within the portal effectively." },
      { src: getAssetPath("assets/project-icon/islp/customerList.png"), title: "Customer List", subtitle: "Customer Management", description: "Index of all customers registered in the system with license details, assigned products, and account status." },
      { src: getAssetPath("assets/project-icon/islp/expiryNotifRules.png"), title: "Expiry Notification Rules", subtitle: "Alert Rule Index", description: "Index of all expiry notification rules configured to alert users before software licenses reach their expiration dates." },
      { src: getAssetPath("assets/project-icon/islp/expiryNotifRulesCreate.png"), title: "Expiry Rules — Create", subtitle: "Add Notification Rule", description: "Form to create a new expiry notification rule by defining the days-before-expiry threshold and target recipients." },
      { src: getAssetPath("assets/project-icon/islp/expiryNotifRulesUpdate.png"), title: "Expiry Rules — Update", subtitle: "Edit Notification Rule", description: "Edit form for updating an existing expiry notification rule including threshold days and recipient configurations." },
      { src: getAssetPath("assets/project-icon/islp/expiryTracker.png"), title: "Expiry Tracker", subtitle: "License Expiry Monitoring", description: "Real-time tracker showing all licenses nearing expiration with days remaining, product name, and assigned customer details." },
      { src: getAssetPath("assets/project-icon/islp/licensesList.png"), title: "Licenses List", subtitle: "All Licenses", description: "Complete list of all software licenses in the system with product, customer, expiry date, and current status information." },
      { src: getAssetPath("assets/project-icon/islp/licensesListCreate.png"), title: "Licenses — Create", subtitle: "Add New License", description: "Form for adding a new software license entry including product, customer, license key, and expiry date details." },
      { src: getAssetPath("assets/project-icon/islp/licensesUsageReport.png"), title: "License Usage Report", subtitle: "Usage Analytics", description: "Report page showing license usage statistics per product and customer, helping identify underutilized or over-allocated licenses." },
      { src: getAssetPath("assets/project-icon/islp/productList.png"), title: "Product List", subtitle: "Software Product Index", description: "Index of all software products registered in the system with brand, category, license type, and availability details." },
      { src: getAssetPath("assets/project-icon/islp/productListCreate.png"), title: "Product — Create", subtitle: "Add New Product", description: "Form for registering a new software product into the system including name, brand, category, and pricing information." },
      { src: getAssetPath("assets/project-icon/islp/productListUpdate.png"), title: "Product — Update", subtitle: "Edit Product Details", description: "Edit form for updating existing software product details such as pricing, category, availability, and product description." },
      { src: getAssetPath("assets/project-icon/islp/requestForm.png"), title: "Request Form", subtitle: "License Request Index", description: "Index of all submitted license requests showing requester details, requested product, status, and submission date." },
      { src: getAssetPath("assets/project-icon/islp/requestFormCreate.png"), title: "Request Form — Create", subtitle: "Submit License Request", description: "Form for users to submit a new license request by selecting the product, quantity, and providing a justification." },
      { src: getAssetPath("assets/project-icon/islp/approve-reject-request.png"), title: "Approve / Reject Request", subtitle: "Request Review", description: "Review panel for admins to approve or reject pending license requests with comments and status update notifications." },
      { src: getAssetPath("assets/project-icon/islp/softwareProductInvoice.png"), title: "Software Product Invoice", subtitle: "Invoice Management", description: "Invoice page for software product purchases displaying item details, quantities, pricing, and payment status for billing." },
      { src: getAssetPath("assets/project-icon/islp/typeManagementList.png"), title: "Type Management", subtitle: "License Type Index", description: "Management page for license types such as perpetual, subscription, or trial, used to classify software licenses in the portal." },
      { src: getAssetPath("assets/project-icon/islp/vendorList.png"), title: "Vendor List", subtitle: "Vendor Management", description: "Index of all registered software vendors with contact details, associated products, and vendor account management options." },
    ],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "https://lms.able.com.pg/",
    description: "A comprehensive web application designed to manage and track software licenses efficiently. Features include license lifecycle management, request approval workflows, expiry tracking with automated notifications, vendor and product management, and detailed usage reporting. Built with React and TypeScript for the frontend, Laravel for backend operations, and MySQL for data storage, with Shadcn UI providing a modern interface."
  },
  {
    id: 3,
    name: "Assets Management System",
    subtitle: "Asset Inventory",
    image: getAssetPath("assets/project-icon/soon.jpg"),
    subimage: [
      { src: getAssetPath("assets/project-icon/ams/ams-login-page.jpg"), title: "Login", subtitle: "User Authentication", description: "Secure login screen for authorized users to access the Assets Management System using their registered credentials." },
      { src: getAssetPath("assets/project-icon/ams/ams-dashboard-page.png"), title: "Dashboard", subtitle: "System Overview", description: "Main dashboard displaying total assets, recent activities, asset status breakdown, and quick-access navigation for the system." },
      { src: getAssetPath("assets/project-icon/ams/ams-backup-page.png"), title: "Backup", subtitle: "System Backup Management", description: "Backup management page for creating, scheduling, and downloading system data backups to prevent data loss." },
      { src: getAssetPath("assets/project-icon/ams/ams-import-page.png"), title: "Import", subtitle: "Data Import", description: "Data import page allowing admins to bulk upload asset records using CSV or Excel file formats into the system." },
      { src: getAssetPath("assets/project-icon/ams/ams-requestable-item-page.png"), title: "Requestable Items", subtitle: "Asset Request Management", description: "Management page for items that users can request, showing availability, assigned assets, and pending request counts." },
      { src: getAssetPath("assets/project-icon/ams/ams-settings-page.png"), title: "Settings", subtitle: "System Configuration", description: "Settings panel for configuring system preferences including company details, default values, and general application behavior." },
      { src: getAssetPath("assets/project-icon/ams/ams-status-label-page.png"), title: "Status Labels", subtitle: "Asset Status Management", description: "Management page for creating and customizing asset status labels such as Active, Inactive, Under Repair, and Disposed." },
      { src: getAssetPath("assets/project-icon/ams/ams-subscription-page.png"), title: "Subscription", subtitle: "Plan Management", description: "Subscription management page for viewing and managing the current plan, billing details, and available system features." },
    ],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "https://ams.able.com.pg/login",
    description: "A comprehensive web application designed for asset tracking and management operations. Features include asset lifecycle management, backup functionality, data import and export capabilities, requestable items management, detailed status tracking, and comprehensive labeling. Built with React and TypeScript for the frontend, Laravel for backend operations, and MySQL for data storage, with Shadcn UI providing a modern interface."
  },
  {
    id: 4,
    name: "EN - Engineer Inventory",
    subtitle: "Inventory Monitoring",
    image: getAssetPath("assets/project-icon/backup.png"),
    subimage: [],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/js.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ant-design.png"),
      getAssetPath("assets/dev-icon/mssql.png"),
      getAssetPath("assets/dev-icon/node-js.png"),
    ],
    link: "",
    description: "A comprehensive web application designed for engineering inventory tracking and management. Features include real-time inventory monitoring, automated stock level alerts, supplier management, procurement workflows, batch tracking, and advanced reporting capabilities. Built with React and JavaScript for the frontend, MS SQL for data storage, with Ant Design providing a modern interface."
  },
  {
    id: 5,
    name: "SCM - Supply Chain Management",
    subtitle: "Logistics Tracking",
    image: getAssetPath("assets/project-icon/backup.png"),
    subimage: [],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/js.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ant-design.png"),
      getAssetPath("assets/dev-icon/mssql.png"),
      getAssetPath("assets/dev-icon/node-js.png"),
    ],
    link: "",
    description: "A comprehensive web application designed to optimize supply chain operations from procurement to delivery. Features include inventory management, supplier relationship management, order processing, warehouse management, logistics tracking, real-time analytics, automated workflows, and demand forecasting. Built with React and JavaScript for the frontend, MS SQL for data storage, with Ant Design providing a modern interface."
  },
];

export const careerData: Career[] = [
  {
    id: 1,
    position: "Contract Web Developer",
    company: "Independent Contract",
    location: "Remote",
    duration: "January 2026 - June 2026",
    period: "",
    image: getAssetPath("assets/company-icon/freelance.jpg"),
    link: "",
    description: "• Developed a Document Management System for internal company use, enabling efficient file organization, storage, and retrieval.\n• Built an Inventory POS / Materials Management System for an SME client, combining stock tracking with point-of-sale transaction processing.\n• Designed and implemented inventory tracking and management modules, including stock monitoring, materials handling, and sales reporting.\n• Built full-stack features using modern web technologies for internal business operations.",
    systemUsage: "Document Management System, Inventory POS / Materials Management System",
    techStack: ["HTML", "CSS", "React", "TypeScript", "Laravel", "PHP", "MySQL", "RESTful APIs", "Git", "GitHub"]
  },
  {
    id: 2,
    position: "Junior Programmer",
    company: "Bangalow Proprietary Limited Company (BPLC)",
    location: "Worked on systems supporting international operations for Able Home and Office and Tawamist Proprietary Limited Philippines, Papua New Guinea, Australia",
    duration: "April 2025 - January 2026",
    period: "",
    image: getAssetPath("assets/company-icon/bangalow.jpg"),
    link: "https://www.linkedin.com/company/bangalow/posts/?feedView=all",
    description: "• Contributed to the development and maintenance of internal and client-facing web applications.\n• Assisted in implementing features, fixing bugs, and enhancing system performance.\n• Collaborated with senior developers to meet project requirements and deadlines.\n• Participated in code reviews and followed best practices for maintainable code.",
    systemUsage: "",
    techStack: ["HTML", "CSS", "React", "TypeScript", "Laravel", "PHP", "ShadCN UI", "Tailwind CSS", "MySQL", "RESTful APIs", "Git", "GitHub"]
  },
  {
    id: 3,
    position: "Contract Web Developer",
    company: "Independent Contract",
    location: "Remote",
    duration: "September 2024 - March 2025",
    period: "",
    image: getAssetPath("assets/company-icon/freelance.jpg"),
    link: "",
    description: "• Developed an HR Management System project for internal business operations.\n• Designed and implemented modules including employee records, attendance tracking, and HR workflows.\n• Built full-stack features using modern web technologies.",
    systemUsage: "HR Management System",
    techStack: ["HTML", "CSS", "React", "TypeScript", "Laravel", "PHP", "Tailwind CSS", "MySQL", "RESTful APIs", "Git", "GitHub"]
  },
  {
    id: 4,
    position: "Junior Programmer",
    company: "Lloyd Laboratories, Inc.",
    location: "Malolos City, Bulacan",
    duration: "June 2023 - December 2023",
    period: "",
    image: getAssetPath("assets/company-icon/lloyd-laboratoties-inc.jpeg"),
    link: "https://www.linkedin.com/company/lloyd-laboratories-inc/posts/?feedView=all",
    description: "• Built and maintained internal web applications for business operations.\n• Enhanced system features and resolved technical issues efficiently.\n• Worked closely with the development team to meet project milestones.\n• Applied coding best practices to ensure maintainable and reliable code.",
    systemUsage: "",
    techStack: ["HTML", "CSS", "Ant Design", "React", "JavaScript", "Node.js", "Express.js", "MSSQL", "RESTful APIs", "Git", "GitHub"]
  },
  {
    id: 5,
    position: "Software Engineer",
    company: "GP Next Solution, Inc.",
    location: "Quezon City",
    duration: "November 2021 - January 2023",
    period: "",
    image: getAssetPath("assets/company-icon/gp-next-solution-inc.png"),
    link: "https://www.linkedin.com/company/gp-next-inc/posts/?feedView=all",
    description: "• Designed, developed, and maintained web applications for external clients.\n• Built reusable and efficient front-end and back-end components.\n• Collaborated with cross-functional teams on UI, backend logic, and database design.\n• Ensured system reliability, performance, and code quality.",
    systemUsage: "",
    techStack: ["HTML", "CSS", "Ant Design", "React", "JavaScript", "Node.js", "Express.js", "MSSQL", "RESTful APIs", "Git", "GitHub"]
  }
];

export const footerData: SocialLink[] = [
  { id: 2, name: "Gmail", image: getAssetPath("assets/social-icon/email.png"), link: "https://mail.google.com/mail/u/0/#inbox", description: "Contact me via email." },
  { id: 3, name: "Facebook", image: getAssetPath("assets/social-icon/facebook.png"), link: "https://www.facebook.com/JustineM1996", description: "Check out my profile on Facebook." },
  { id: 4, name: "GitHub", image: getAssetPath("assets/social-icon/github.png"), link: "https://github.com/justinem10281996", description: "Explore my projects on GitHub." },
  { id: 5, name: "Indeed", image: getAssetPath("assets/social-icon/indeed.webp"), link: "https://profile.indeed.com/p/justineh-4y483th", description: "Check out my profile on Indeed." },
  { id: 6, name: "LinkedIn", image: getAssetPath("assets/social-icon/linkin.png"), link: "https://www.linkedin.com/in/justine-m-hilario-432431359", description: "Check out my profile on LinkedIn." },
  { id: 7, name: "TikTok", image: getAssetPath("assets/social-icon/tiktok.png"), link: "https://www.tiktok.com/@justinem1996", description: "Follow me on TikTok." },
];