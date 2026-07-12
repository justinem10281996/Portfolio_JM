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
  // {
  //   id: 1,
  //   name: "My Portfolio",
  //   subtitle: "Personal Branding",
  //   image: getAssetPath("assets/project-icon/soon.jpg"),
  //   subimage: [
  //     {
  //       src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121552.jpg"),
  //       title: "Hero — Landing Page",
  //       subtitle: "First Impression",
  //       description: "The hero section of my personal portfolio featuring my name, role, and call-to-action buttons. Designed with a blurred background, smooth entrance animations, and a scroll indicator for a polished first impression."
  //     },
  //     {
  //       src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121613.png"),
  //       title: "Overview — What I Do",
  //       subtitle: "Skills Summary",
  //       description: "A concise overview section highlighting my core competencies as a Full Stack Developer, including website development, software development, and third-party integrations."
  //     },
  //     {
  //       src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121637.png"),
  //       title: "Technologies — Tech Stack",
  //       subtitle: "Tools & Languages",
  //       description: "An interactive technology showcase displaying all the tools, frameworks, and languages I work with — from HTML and CSS to React, Laravel, TypeScript, and more."
  //     },
  //     {
  //       src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121654.png"),
  //       title: "Personal Projects",
  //       subtitle: "My Own Builds",
  //       description: "A carousel showcasing projects I built independently, each with tech stack icons, descriptions, and links to live sites or GitHub repositories."
  //     },
  //     {
  //       src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121729.png"),
  //       title: "Supporting Projects — Detail",
  //       subtitle: "Team Project Gallery",
  //       description: "Detailed view of a supporting project with a full screenshot carousel, tech stack, description, and a link to the live site for in-depth exploration."
  //     },
  //     {
  //       src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121818.png"),
  //       title: "Career — Work Experience",
  //       subtitle: "Professional Journey",
  //       description: "A timeline-style career section listing my work experience, including company names, positions, durations, tech stacks used, and key contributions at each role."
  //     },
  //     {
  //       src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121832.png"),
  //       title: "Footer — Contact & Socials",
  //       subtitle: "Get In Touch",
  //       description: "The footer section featuring my social media links including GitHub, LinkedIn, Facebook, Gmail, and Indeed — making it easy for recruiters and collaborators to reach out."
  //     },
  //   ],
  //   techimage: [
  //     getAssetPath("assets/dev-icon/html5.png"),
  //     getAssetPath("assets/dev-icon/css.png"),
  //     getAssetPath("assets/dev-icon/react-js.png"),
  //     getAssetPath("assets/dev-icon/ts.png"),
  //     getAssetPath("assets/dev-icon/shadcn.png"),
  //   ],
  //   link: "",
  //   github: "https://github.com/JustineMHIL28/portfolio",
  //   description: "A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Features include smooth animations, dark mode support, project showcases with detailed descriptions, and an interactive contact form. Built with React, TypeScript, and Shadcn UI for a clean and professional look."
  // },
  {
    id: 1,
    name: "Document Management System",
    subtitle: "File Organization",
    image: getAssetPath("assets/project-icon/soon.jpg"),
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
    description: "A comprehensive document management system for organizing, storing, and retrieving files efficiently. Features include file upload and download, folder organization, search functionality, version control, and user permissions. Built with React and integrated with cloud storage APIs for secure file management."
  },
  {
    id: 2,
    name: "InvoTrucking 360",
    subtitle: "Inventory Trucking System",
    image: getAssetPath("assets/project-icon/backup.png"),
    subimage: [
      {
        src: getAssetPath("assets/project-icon/invotrucking360/1.png"),
        title: "System Login",
        subtitle: "Authentication Screen",
        description: "Login page for InvoTrucking 360 with username and password fields."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/2.png"),
        title: "Dashboard Overview",
        subtitle: "Main Dashboard",
        description: "Main dashboard displaying KPIs, charts, and operational summaries across all modules."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/3.png"),
        title: "System Navigation",
        subtitle: "Sidebar Menu",
        description: "Complete navigation sidebar showing all available modules and sections."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_34_13.png"),
        title: "Dashboard",
        subtitle: "Overview",
        description: "Main dashboard showing KPIs, charts, and shortcuts for inventory, purchasing, sales, and finance summaries."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_36_03.png"),
        title: "Dashboard",
        subtitle: "List View",
        description: "Main dashboard showing KPIs, charts, and shortcuts for inventory, purchasing, sales, and finance summaries."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_36_14.png"),
        title: "Dashboard",
        subtitle: "Create Form",
        description: "Main dashboard showing KPIs, charts, and shortcuts for inventory, purchasing, sales, and finance summaries."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_36_21.png"),
        title: "Dashboard",
        subtitle: "Details & Fields",
        description: "Main dashboard showing KPIs, charts, and shortcuts for inventory, purchasing, sales, and finance summaries."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_36_29.png"),
        title: "Dashboard",
        subtitle: "Actions & Filters",
        description: "Main dashboard showing KPIs, charts, and shortcuts for inventory, purchasing, sales, and finance summaries."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_36_36.png"),
        title: "Brands",
        subtitle: "Overview",
        description: "Manage product brands with manufacturer linking, logo upload, and activation controls."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_36_44.png"),
        title: "Brands",
        subtitle: "List View",
        description: "Manage product brands with manufacturer linking, logo upload, and activation controls."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_36_51.png"),
        title: "Brands",
        subtitle: "Create Form",
        description: "Manage product brands with manufacturer linking, logo upload, and activation controls."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_37_02.png"),
        title: "Brands",
        subtitle: "Details & Fields",
        description: "Manage product brands with manufacturer linking, logo upload, and activation controls."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_37_11.png"),
        title: "Brands",
        subtitle: "Actions & Filters",
        description: "Manage product brands with manufacturer linking, logo upload, and activation controls."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_37_17.png"),
        title: "Manufacturers",
        subtitle: "Overview",
        description: "Create and manage manufacturer records with contact details, brand linking, and status management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_37_24.png"),
        title: "Manufacturers",
        subtitle: "List View",
        description: "Create and manage manufacturer records with contact details, brand linking, and status management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_37_32.png"),
        title: "Manufacturers",
        subtitle: "Create Form",
        description: "Create and manage manufacturer records with contact details, brand linking, and status management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_37_39.png"),
        title: "Manufacturers",
        subtitle: "Details & Fields",
        description: "Create and manage manufacturer records with contact details, brand linking, and status management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_37_48.png"),
        title: "Manufacturers",
        subtitle: "Actions & Filters",
        description: "Create and manage manufacturer records with contact details, brand linking, and status management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_37_54.png"),
        title: "Categories",
        subtitle: "Overview",
        description: "Hierarchical product categorization with parent/child structure for reporting and POS filtering."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_38_12.png"),
        title: "Categories",
        subtitle: "List View",
        description: "Hierarchical product categorization with parent/child structure for reporting and POS filtering."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_38_28.png"),
        title: "Categories",
        subtitle: "Create Form",
        description: "Hierarchical product categorization with parent/child structure for reporting and POS filtering."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_38_39.png"),
        title: "Categories",
        subtitle: "Details & Fields",
        description: "Hierarchical product categorization with parent/child structure for reporting and POS filtering."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_38_47.png"),
        title: "Categories",
        subtitle: "Actions & Filters",
        description: "Hierarchical product categorization with parent/child structure for reporting and POS filtering."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_38_53.png"),
        title: "Unit Models",
        subtitle: "Overview",
        description: "Define unit conversion models for multi-UOM support on product variants."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_39_00.png"),
        title: "Unit Models",
        subtitle: "List View",
        description: "Define unit conversion models for multi-UOM support on product variants."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_39_18.png"),
        title: "Unit Models",
        subtitle: "Create Form",
        description: "Define unit conversion models for multi-UOM support on product variants."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_39_25.png"),
        title: "Unit Models",
        subtitle: "Details & Fields",
        description: "Define unit conversion models for multi-UOM support on product variants."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_39_36.png"),
        title: "Unit Models",
        subtitle: "Actions & Filters",
        description: "Define unit conversion models for multi-UOM support on product variants."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_39_43.png"),
        title: "Units Measurement",
        subtitle: "Overview",
        description: "Base units of measure (PCS, BOX, SET) used by Unit Models and Product Variants."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_40_01.png"),
        title: "Units Measurement",
        subtitle: "List View",
        description: "Base units of measure (PCS, BOX, SET) used by Unit Models and Product Variants."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_40_23.png"),
        title: "Units Measurement",
        subtitle: "Create Form",
        description: "Base units of measure (PCS, BOX, SET) used by Unit Models and Product Variants."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_40_34.png"),
        title: "Units Measurement",
        subtitle: "Details & Fields",
        description: "Base units of measure (PCS, BOX, SET) used by Unit Models and Product Variants."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_40_40.png"),
        title: "Units Measurement",
        subtitle: "Actions & Filters",
        description: "Base units of measure (PCS, BOX, SET) used by Unit Models and Product Variants."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_40_47.png"),
        title: "Product Models",
        subtitle: "Overview",
        description: "Master product definitions with shared attributes like Category, Brand, and Manufacturer."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_40_55.png"),
        title: "Product Models",
        subtitle: "List View",
        description: "Master product definitions with shared attributes like Category, Brand, and Manufacturer."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_40_59.png"),
        title: "Product Models",
        subtitle: "Create Form",
        description: "Master product definitions with shared attributes like Category, Brand, and Manufacturer."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_41_05.png"),
        title: "Product Models",
        subtitle: "Details & Fields",
        description: "Master product definitions with shared attributes like Category, Brand, and Manufacturer."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_41_12.png"),
        title: "Product Models",
        subtitle: "Actions & Filters",
        description: "Master product definitions with shared attributes like Category, Brand, and Manufacturer."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_41_23.png"),
        title: "Product Variants",
        subtitle: "Overview",
        description: "Sellable SKU level with individual pricing, stock, serial tracking, and Unit Model support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_41_28.png"),
        title: "Product Variants",
        subtitle: "List View",
        description: "Sellable SKU level with individual pricing, stock, serial tracking, and Unit Model support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_41_35.png"),
        title: "Product Variants",
        subtitle: "Create Form",
        description: "Sellable SKU level with individual pricing, stock, serial tracking, and Unit Model support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_41_43.png"),
        title: "Product Variants",
        subtitle: "Details & Fields",
        description: "Sellable SKU level with individual pricing, stock, serial tracking, and Unit Model support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_41_50.png"),
        title: "Product Variants",
        subtitle: "Actions & Filters",
        description: "Sellable SKU level with individual pricing, stock, serial tracking, and Unit Model support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_41_54.png"),
        title: "Item Kits",
        subtitle: "Overview",
        description: "Bundle multiple variants into one sellable package with its own SKU and discount."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_42_03.png"),
        title: "Item Kits",
        subtitle: "List View",
        description: "Bundle multiple variants into one sellable package with its own SKU and discount."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_42_07.png"),
        title: "Item Kits",
        subtitle: "Create Form",
        description: "Bundle multiple variants into one sellable package with its own SKU and discount."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_42_19.png"),
        title: "Item Kits",
        subtitle: "Details & Fields",
        description: "Bundle multiple variants into one sellable package with its own SKU and discount."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_42_30.png"),
        title: "Item Kits",
        subtitle: "Actions & Filters",
        description: "Bundle multiple variants into one sellable package with its own SKU and discount."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_42_59.png"),
        title: "Price Lists",
        subtitle: "Overview",
        description: "Manage per-variant pricing for different customers with approval workflow and discount capping."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_43_08.png"),
        title: "Price Lists",
        subtitle: "List View",
        description: "Manage per-variant pricing for different customers with approval workflow and discount capping."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_43_17.png"),
        title: "Price Lists",
        subtitle: "Create Form",
        description: "Manage per-variant pricing for different customers with approval workflow and discount capping."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_43_42.png"),
        title: "Price Lists",
        subtitle: "Details & Fields",
        description: "Manage per-variant pricing for different customers with approval workflow and discount capping."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_43_51.png"),
        title: "Price Lists",
        subtitle: "Actions & Filters",
        description: "Manage per-variant pricing for different customers with approval workflow and discount capping."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_43_59.png"),
        title: "Locations",
        subtitle: "Overview",
        description: "Physical warehouse location hierarchy (Zone, Aisle, Rack, Shelf, Bin) for directed putaway."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_44_05.png"),
        title: "Locations",
        subtitle: "List View",
        description: "Physical warehouse location hierarchy (Zone, Aisle, Rack, Shelf, Bin) for directed putaway."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_44_11.png"),
        title: "Locations",
        subtitle: "Create Form",
        description: "Physical warehouse location hierarchy (Zone, Aisle, Rack, Shelf, Bin) for directed putaway."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_45_00.png"),
        title: "Locations",
        subtitle: "Details & Fields",
        description: "Physical warehouse location hierarchy (Zone, Aisle, Rack, Shelf, Bin) for directed putaway."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_45_10.png"),
        title: "Locations",
        subtitle: "Actions & Filters",
        description: "Physical warehouse location hierarchy (Zone, Aisle, Rack, Shelf, Bin) for directed putaway."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_45_15.png"),
        title: "Branches",
        subtitle: "Overview",
        description: "Company branches with hierarchical support, location linking, and POS terminal assignment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_45_20.png"),
        title: "Branches",
        subtitle: "List View",
        description: "Company branches with hierarchical support, location linking, and POS terminal assignment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_45_31.png"),
        title: "Branches",
        subtitle: "Create Form",
        description: "Company branches with hierarchical support, location linking, and POS terminal assignment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_45_36.png"),
        title: "Branches",
        subtitle: "Details & Fields",
        description: "Company branches with hierarchical support, location linking, and POS terminal assignment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_45_47.png"),
        title: "Branches",
        subtitle: "Actions & Filters",
        description: "Company branches with hierarchical support, location linking, and POS terminal assignment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_45_56.png"),
        title: "Departments",
        subtitle: "Overview",
        description: "Organizational units for user assignment, approval routing, and department-level reporting."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_46_02.png"),
        title: "Departments",
        subtitle: "List View",
        description: "Organizational units for user assignment, approval routing, and department-level reporting."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_46_14.png"),
        title: "Departments",
        subtitle: "Create Form",
        description: "Organizational units for user assignment, approval routing, and department-level reporting."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_46_35.png"),
        title: "Departments",
        subtitle: "Details & Fields",
        description: "Organizational units for user assignment, approval routing, and department-level reporting."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_46_47.png"),
        title: "Departments",
        subtitle: "Actions & Filters",
        description: "Organizational units for user assignment, approval routing, and department-level reporting."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_46_53.png"),
        title: "Warehouses",
        subtitle: "Overview",
        description: "Physical storage locations with multi-warehouse stock views and transfer support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_46_59.png"),
        title: "Warehouses",
        subtitle: "List View",
        description: "Physical storage locations with multi-warehouse stock views and transfer support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_47_10.png"),
        title: "Warehouses",
        subtitle: "Create Form",
        description: "Physical storage locations with multi-warehouse stock views and transfer support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_47_21.png"),
        title: "Warehouses",
        subtitle: "Details & Fields",
        description: "Physical storage locations with multi-warehouse stock views and transfer support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_47_26.png"),
        title: "Warehouses",
        subtitle: "Actions & Filters",
        description: "Physical storage locations with multi-warehouse stock views and transfer support."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_47_36.png"),
        title: "Serial Numbers",
        subtitle: "Overview",
        description: "Per-unit tracking from receiving to sale with immutable audit trail for compliance."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_47_42.png"),
        title: "Serial Numbers",
        subtitle: "List View",
        description: "Per-unit tracking from receiving to sale with immutable audit trail for compliance."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_47_49.png"),
        title: "Serial Numbers",
        subtitle: "Create Form",
        description: "Per-unit tracking from receiving to sale with immutable audit trail for compliance."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_47_56.png"),
        title: "Serial Numbers",
        subtitle: "Details & Fields",
        description: "Per-unit tracking from receiving to sale with immutable audit trail for compliance."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_48_03.png"),
        title: "Serial Numbers",
        subtitle: "Actions & Filters",
        description: "Per-unit tracking from receiving to sale with immutable audit trail for compliance."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_48_08.png"),
        title: "Customers",
        subtitle: "Overview",
        description: "Buyer records with Price List assignment, tax status, credit limits, and blocking controls."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_48_13.png"),
        title: "Customers",
        subtitle: "List View",
        description: "Buyer records with Price List assignment, tax status, credit limits, and blocking controls."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_48_24.png"),
        title: "Customers",
        subtitle: "Create Form",
        description: "Buyer records with Price List assignment, tax status, credit limits, and blocking controls."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_48_33.png"),
        title: "Customers",
        subtitle: "Details & Fields",
        description: "Buyer records with Price List assignment, tax status, credit limits, and blocking controls."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_48_40.png"),
        title: "Customers",
        subtitle: "Actions & Filters",
        description: "Buyer records with Price List assignment, tax status, credit limits, and blocking controls."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_48_45.png"),
        title: "Suppliers",
        subtitle: "Overview",
        description: "Vendor records with payment terms, contact info, and Purchase Order dependency management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_48_50.png"),
        title: "Suppliers",
        subtitle: "List View",
        description: "Vendor records with payment terms, contact info, and Purchase Order dependency management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_48_56.png"),
        title: "Suppliers",
        subtitle: "Create Form",
        description: "Vendor records with payment terms, contact info, and Purchase Order dependency management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_49_00.png"),
        title: "Suppliers",
        subtitle: "Details & Fields",
        description: "Vendor records with payment terms, contact info, and Purchase Order dependency management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_49_09.png"),
        title: "Suppliers",
        subtitle: "Actions & Filters",
        description: "Vendor records with payment terms, contact info, and Purchase Order dependency management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_49_16.png"),
        title: "Purchase Requests",
        subtitle: "Overview",
        description: "Internal purchase requests with multi-stage approval workflow before PO conversion."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_49_26.png"),
        title: "Purchase Requests",
        subtitle: "List View",
        description: "Internal purchase requests with multi-stage approval workflow before PO conversion."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_49_31.png"),
        title: "Purchase Requests",
        subtitle: "Create Form",
        description: "Internal purchase requests with multi-stage approval workflow before PO conversion."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_49_36.png"),
        title: "Purchase Requests",
        subtitle: "Details & Fields",
        description: "Internal purchase requests with multi-stage approval workflow before PO conversion."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_49_43.png"),
        title: "Purchase Requests",
        subtitle: "Actions & Filters",
        description: "Internal purchase requests with multi-stage approval workflow before PO conversion."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_49_51.png"),
        title: "Purchase Orders",
        subtitle: "Overview",
        description: "Formal supplier order documents with approval workflow, GRN tracking, and status management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_49_55.png"),
        title: "Purchase Orders",
        subtitle: "List View",
        description: "Formal supplier order documents with approval workflow, GRN tracking, and status management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_50_04.png"),
        title: "Purchase Orders",
        subtitle: "Create Form",
        description: "Formal supplier order documents with approval workflow, GRN tracking, and status management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_50_49.png"),
        title: "Purchase Orders",
        subtitle: "Details & Fields",
        description: "Formal supplier order documents with approval workflow, GRN tracking, and status management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_51_02.png"),
        title: "Purchase Orders",
        subtitle: "Actions & Filters",
        description: "Formal supplier order documents with approval workflow, GRN tracking, and status management."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_51_13.png"),
        title: "Goods Receipts",
        subtitle: "Overview",
        description: "Receive goods into inventory with quantity validation, serial assignment, and auto Purchase Invoice generation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_51_20.png"),
        title: "Goods Receipts",
        subtitle: "List View",
        description: "Receive goods into inventory with quantity validation, serial assignment, and auto Purchase Invoice generation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_51_29.png"),
        title: "Goods Receipts",
        subtitle: "Create Form",
        description: "Receive goods into inventory with quantity validation, serial assignment, and auto Purchase Invoice generation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_51_41.png"),
        title: "Goods Receipts",
        subtitle: "Details & Fields",
        description: "Receive goods into inventory with quantity validation, serial assignment, and auto Purchase Invoice generation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_51_50.png"),
        title: "Goods Receipts",
        subtitle: "Actions & Filters",
        description: "Receive goods into inventory with quantity validation, serial assignment, and auto Purchase Invoice generation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_51_57.png"),
        title: "Landed Costs",
        subtitle: "Overview",
        description: "Allocate freight, insurance, and customs costs to received items for accurate stock valuation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_52_11.png"),
        title: "Landed Costs",
        subtitle: "List View",
        description: "Allocate freight, insurance, and customs costs to received items for accurate stock valuation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_52_17.png"),
        title: "Landed Costs",
        subtitle: "Create Form",
        description: "Allocate freight, insurance, and customs costs to received items for accurate stock valuation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_52_29.png"),
        title: "Landed Costs",
        subtitle: "Details & Fields",
        description: "Allocate freight, insurance, and customs costs to received items for accurate stock valuation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_52_46.png"),
        title: "Landed Costs",
        subtitle: "Actions & Filters",
        description: "Allocate freight, insurance, and customs costs to received items for accurate stock valuation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_52_54.png"),
        title: "Purchase Returns",
        subtitle: "Overview",
        description: "Record items sent back to supplier with stock decrease on posting and serial status updates."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_53_02.png"),
        title: "Purchase Returns",
        subtitle: "List View",
        description: "Record items sent back to supplier with stock decrease on posting and serial status updates."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_53_10.png"),
        title: "Purchase Returns",
        subtitle: "Create Form",
        description: "Record items sent back to supplier with stock decrease on posting and serial status updates."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_53_18.png"),
        title: "Purchase Returns",
        subtitle: "Details & Fields",
        description: "Record items sent back to supplier with stock decrease on posting and serial status updates."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_53_24.png"),
        title: "Purchase Returns",
        subtitle: "Actions & Filters",
        description: "Record items sent back to supplier with stock decrease on posting and serial status updates."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_53_30.png"),
        title: "Quotations",
        subtitle: "Overview",
        description: "Pre-sale documents with Price List integration and conversion to Sales Orders upon approval."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_53_38.png"),
        title: "Quotations",
        subtitle: "List View",
        description: "Pre-sale documents with Price List integration and conversion to Sales Orders upon approval."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_53_47.png"),
        title: "Quotations",
        subtitle: "Create Form",
        description: "Pre-sale documents with Price List integration and conversion to Sales Orders upon approval."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_53_56.png"),
        title: "Quotations",
        subtitle: "Details & Fields",
        description: "Pre-sale documents with Price List integration and conversion to Sales Orders upon approval."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_54_06.png"),
        title: "Quotations",
        subtitle: "Actions & Filters",
        description: "Pre-sale documents with Price List integration and conversion to Sales Orders upon approval."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_54_16.png"),
        title: "Sales Orders",
        subtitle: "Overview",
        description: "Official purchase documents with credit limit checks, approval workflow, and fulfillment tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_54_21.png"),
        title: "Sales Orders",
        subtitle: "List View",
        description: "Official purchase documents with credit limit checks, approval workflow, and fulfillment tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_54_35.png"),
        title: "Sales Orders",
        subtitle: "Create Form",
        description: "Official purchase documents with credit limit checks, approval workflow, and fulfillment tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_54_44.png"),
        title: "Sales Orders",
        subtitle: "Details & Fields",
        description: "Official purchase documents with credit limit checks, approval workflow, and fulfillment tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_54_51.png"),
        title: "Sales Orders",
        subtitle: "Actions & Filters",
        description: "Official purchase documents with credit limit checks, approval workflow, and fulfillment tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_55_01.png"),
        title: "Point of Sale",
        subtitle: "Overview",
        description: "Fast walk-in checkout with Price List integration, discount rules, tax computation, and POS fulfillment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_55_04.png"),
        title: "Point of Sale",
        subtitle: "List View",
        description: "Fast walk-in checkout with Price List integration, discount rules, tax computation, and POS fulfillment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_55_12.png"),
        title: "Point of Sale",
        subtitle: "Create Form",
        description: "Fast walk-in checkout with Price List integration, discount rules, tax computation, and POS fulfillment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_55_19.png"),
        title: "Point of Sale",
        subtitle: "Details & Fields",
        description: "Fast walk-in checkout with Price List integration, discount rules, tax computation, and POS fulfillment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_55_28.png"),
        title: "Point of Sale",
        subtitle: "Actions & Filters",
        description: "Fast walk-in checkout with Price List integration, discount rules, tax computation, and POS fulfillment."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_55_34.png"),
        title: "Deliveries",
        subtitle: "Overview",
        description: "Outbound shipments with pick-pack-dispatch workflow and stock deduction at dispatch point."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_55_39.png"),
        title: "Deliveries",
        subtitle: "List View",
        description: "Outbound shipments with pick-pack-dispatch workflow and stock deduction at dispatch point."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_55_46.png"),
        title: "Deliveries",
        subtitle: "Create Form",
        description: "Outbound shipments with pick-pack-dispatch workflow and stock deduction at dispatch point."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_55_55.png"),
        title: "Deliveries",
        subtitle: "Details & Fields",
        description: "Outbound shipments with pick-pack-dispatch workflow and stock deduction at dispatch point."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_56_06.png"),
        title: "Deliveries",
        subtitle: "Actions & Filters",
        description: "Outbound shipments with pick-pack-dispatch workflow and stock deduction at dispatch point."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_56_12.png"),
        title: "Sales Returns",
        subtitle: "Overview",
        description: "Customer return processing with warehouse restock or supplier return options."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_56_17.png"),
        title: "Sales Returns",
        subtitle: "List View",
        description: "Customer return processing with warehouse restock or supplier return options."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_56_22.png"),
        title: "Sales Returns",
        subtitle: "Create Form",
        description: "Customer return processing with warehouse restock or supplier return options."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_56_29.png"),
        title: "Sales Returns",
        subtitle: "Details & Fields",
        description: "Customer return processing with warehouse restock or supplier return options."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_56_34.png"),
        title: "Sales Returns",
        subtitle: "Actions & Filters",
        description: "Customer return processing with warehouse restock or supplier return options."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_56_43.png"),
        title: "Purchase Invoices",
        subtitle: "Overview",
        description: "Supplier financial obligations with 3-way matching, payment recording, and GL journal entries."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_56_52.png"),
        title: "Purchase Invoices",
        subtitle: "List View",
        description: "Supplier financial obligations with 3-way matching, payment recording, and GL journal entries."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_57_00.png"),
        title: "Purchase Invoices",
        subtitle: "Create Form",
        description: "Supplier financial obligations with 3-way matching, payment recording, and GL journal entries."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_57_10.png"),
        title: "Purchase Invoices",
        subtitle: "Details & Fields",
        description: "Supplier financial obligations with 3-way matching, payment recording, and GL journal entries."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_57_22.png"),
        title: "Purchase Invoices",
        subtitle: "Actions & Filters",
        description: "Supplier financial obligations with 3-way matching, payment recording, and GL journal entries."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_57_28.png"),
        title: "Sales Invoices",
        subtitle: "Overview",
        description: "Customer billing with auto-generated Official Receipts and balance tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_57_41.png"),
        title: "Sales Invoices",
        subtitle: "List View",
        description: "Customer billing with auto-generated Official Receipts and balance tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_58_06.png"),
        title: "Sales Invoices",
        subtitle: "Create Form",
        description: "Customer billing with auto-generated Official Receipts and balance tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_58_14.png"),
        title: "Sales Invoices",
        subtitle: "Details & Fields",
        description: "Customer billing with auto-generated Official Receipts and balance tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_58_24.png"),
        title: "Sales Invoices",
        subtitle: "Actions & Filters",
        description: "Customer billing with auto-generated Official Receipts and balance tracking."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_58_30.png"),
        title: "Stocks",
        subtitle: "Overview",
        description: "Real-time inventory view per variant per warehouse showing Total, Reserved, and Available quantities."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_58_39.png"),
        title: "Stocks",
        subtitle: "List View",
        description: "Real-time inventory view per variant per warehouse showing Total, Reserved, and Available quantities."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_58_44.png"),
        title: "Stocks",
        subtitle: "Create Form",
        description: "Real-time inventory view per variant per warehouse showing Total, Reserved, and Available quantities."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_58_51.png"),
        title: "Stocks",
        subtitle: "Details & Fields",
        description: "Real-time inventory view per variant per warehouse showing Total, Reserved, and Available quantities."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_58_58.png"),
        title: "Stocks",
        subtitle: "Actions & Filters",
        description: "Real-time inventory view per variant per warehouse showing Total, Reserved, and Available quantities."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_59_27.png"),
        title: "Stock Transfers",
        subtitle: "Overview",
        description: "Move inventory between warehouses with atomic source decrease and destination increase on completion."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_59_35.png"),
        title: "Stock Transfers",
        subtitle: "List View",
        description: "Move inventory between warehouses with atomic source decrease and destination increase on completion."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_59_41.png"),
        title: "Stock Transfers",
        subtitle: "Create Form",
        description: "Move inventory between warehouses with atomic source decrease and destination increase on completion."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_59_48.png"),
        title: "Stock Transfers",
        subtitle: "Details & Fields",
        description: "Move inventory between warehouses with atomic source decrease and destination increase on completion."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-13_59_54.png"),
        title: "Stock Transfers",
        subtitle: "Actions & Filters",
        description: "Move inventory between warehouses with atomic source decrease and destination increase on completion."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_00_01.png"),
        title: "Stock Adjustments",
        subtitle: "Overview",
        description: "Correct inventory discrepancies with approval workflow and stock movement audit trail."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_00_10.png"),
        title: "Stock Adjustments",
        subtitle: "List View",
        description: "Correct inventory discrepancies with approval workflow and stock movement audit trail."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_00_15.png"),
        title: "Stock Adjustments",
        subtitle: "Create Form",
        description: "Correct inventory discrepancies with approval workflow and stock movement audit trail."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_00_23.png"),
        title: "Stock Adjustments",
        subtitle: "Details & Fields",
        description: "Correct inventory discrepancies with approval workflow and stock movement audit trail."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_00_29.png"),
        title: "Stock Adjustments",
        subtitle: "Actions & Filters",
        description: "Correct inventory discrepancies with approval workflow and stock movement audit trail."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_00_40.png"),
        title: "Stock Movements",
        subtitle: "Overview",
        description: "Immutable audit trail of every stock change across all modules for compliance and investigation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_00_47.png"),
        title: "Stock Movements",
        subtitle: "List View",
        description: "Immutable audit trail of every stock change across all modules for compliance and investigation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_00_56.png"),
        title: "Stock Movements",
        subtitle: "Create Form",
        description: "Immutable audit trail of every stock change across all modules for compliance and investigation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_01_05.png"),
        title: "Stock Movements",
        subtitle: "Details & Fields",
        description: "Immutable audit trail of every stock change across all modules for compliance and investigation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_01_14.png"),
        title: "Stock Movements",
        subtitle: "Actions & Filters",
        description: "Immutable audit trail of every stock change across all modules for compliance and investigation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_01_22.png"),
        title: "Inventory Reports",
        subtitle: "Overview",
        description: "Pre-built reports for stock valuation, aging, ABC analysis, and reorder suggestions."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_01_30.png"),
        title: "Inventory Reports",
        subtitle: "List View",
        description: "Pre-built reports for stock valuation, aging, ABC analysis, and reorder suggestions."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_01_37.png"),
        title: "Inventory Reports",
        subtitle: "Create Form",
        description: "Pre-built reports for stock valuation, aging, ABC analysis, and reorder suggestions."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_01_45.png"),
        title: "Inventory Reports",
        subtitle: "Details & Fields",
        description: "Pre-built reports for stock valuation, aging, ABC analysis, and reorder suggestions."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_01_53.png"),
        title: "Inventory Reports",
        subtitle: "Actions & Filters",
        description: "Pre-built reports for stock valuation, aging, ABC analysis, and reorder suggestions."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_02_00.png"),
        title: "Sales Reports",
        subtitle: "Overview",
        description: "Revenue analytics by period, customer, product, salesperson, and channel performance."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_02_06.png"),
        title: "Sales Reports",
        subtitle: "List View",
        description: "Revenue analytics by period, customer, product, salesperson, and channel performance."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_02_16.png"),
        title: "Sales Reports",
        subtitle: "Create Form",
        description: "Revenue analytics by period, customer, product, salesperson, and channel performance."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_02_24.png"),
        title: "Sales Reports",
        subtitle: "Details & Fields",
        description: "Revenue analytics by period, customer, product, salesperson, and channel performance."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_02_36.png"),
        title: "Sales Reports",
        subtitle: "Actions & Filters",
        description: "Revenue analytics by period, customer, product, salesperson, and channel performance."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_02_42.png"),
        title: "Purchase Reports",
        subtitle: "Overview",
        description: "Spend analysis, supplier scorecards, PO cycle time, and landed cost breakdowns."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_03_14.png"),
        title: "Purchase Reports",
        subtitle: "List View",
        description: "Spend analysis, supplier scorecards, PO cycle time, and landed cost breakdowns."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_03_25.png"),
        title: "Purchase Reports",
        subtitle: "Create Form",
        description: "Spend analysis, supplier scorecards, PO cycle time, and landed cost breakdowns."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_03_34.png"),
        title: "Purchase Reports",
        subtitle: "Details & Fields",
        description: "Spend analysis, supplier scorecards, PO cycle time, and landed cost breakdowns."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_03_39.png"),
        title: "Purchase Reports",
        subtitle: "Actions & Filters",
        description: "Spend analysis, supplier scorecards, PO cycle time, and landed cost breakdowns."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_03_44.png"),
        title: "Users",
        subtitle: "Overview",
        description: "User account management with role assignment, department linking, 2FA, and password policy."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_03_51.png"),
        title: "Users",
        subtitle: "List View",
        description: "User account management with role assignment, department linking, 2FA, and password policy."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_03_59.png"),
        title: "Users",
        subtitle: "Create Form",
        description: "User account management with role assignment, department linking, 2FA, and password policy."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_04_15.png"),
        title: "Users",
        subtitle: "Details & Fields",
        description: "User account management with role assignment, department linking, 2FA, and password policy."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_04_30.png"),
        title: "Users",
        subtitle: "Actions & Filters",
        description: "User account management with role assignment, department linking, 2FA, and password policy."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_04_43.png"),
        title: "Roles",
        subtitle: "Overview",
        description: "Permission sets with granular module-level access control and built-in system roles."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_04_52.png"),
        title: "Roles",
        subtitle: "List View",
        description: "Permission sets with granular module-level access control and built-in system roles."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_04_59.png"),
        title: "Roles",
        subtitle: "Create Form",
        description: "Permission sets with granular module-level access control and built-in system roles."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_05_04.png"),
        title: "Roles",
        subtitle: "Details & Fields",
        description: "Permission sets with granular module-level access control and built-in system roles."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_05_13.png"),
        title: "Roles",
        subtitle: "Actions & Filters",
        description: "Permission sets with granular module-level access control and built-in system roles."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_05_21.png"),
        title: "Approvals",
        subtitle: "Overview",
        description: "Central approval inbox for pending transactions routed by multi-stage workflow configuration."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_05_30.png"),
        title: "Approvals",
        subtitle: "List View",
        description: "Central approval inbox for pending transactions routed by multi-stage workflow configuration."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-dashboard-2026-07-12-14_05_38.png"),
        title: "Approvals",
        subtitle: "Create Form",
        description: "Central approval inbox for pending transactions routed by multi-stage workflow configuration."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-profile-2026-07-12-14_06_23.png"),
        title: "Approvals",
        subtitle: "Details & Fields",
        description: "Central approval inbox for pending transactions routed by multi-stage workflow configuration."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-settings-2026-07-12-14_06_39.png"),
        title: "Approvals",
        subtitle: "Actions & Filters",
        description: "Central approval inbox for pending transactions routed by multi-stage workflow configuration."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-settings-2026-07-12-14_06_45.png"),
        title: "Workflows",
        subtitle: "Overview",
        description: "Configure multi-stage approval chains with no-approver fallback actions and deadline escalation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-settings-2026-07-12-14_07_06.png"),
        title: "Workflows",
        subtitle: "List View",
        description: "Configure multi-stage approval chains with no-approver fallback actions and deadline escalation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-settings-notification-2026-07-12-14_06_54.png"),
        title: "Workflows",
        subtitle: "Create Form",
        description: "Configure multi-stage approval chains with no-approver fallback actions and deadline escalation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-settings-subscription-2026-07-12-14_07_14.png"),
        title: "Workflows",
        subtitle: "Details & Fields",
        description: "Configure multi-stage approval chains with no-approver fallback actions and deadline escalation."
      },
      {
        src: getAssetPath("assets/project-icon/invotrucking360/screencapture-127-0-0-1-8000-system-guide-2026-07-12-14_07_22.png"),
        title: "Workflows",
        subtitle: "Actions & Filters",
        description: "Configure multi-stage approval chains with no-approver fallback actions and deadline escalation."
      }
    ],
    techimage: [
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "",
    description: "A comprehensive inventory tracking and management system for trucking operations, providing real-time inventory monitoring and reporting across multiple warehouse locations. Features include stock level management with automated low-stock alerts and reorder point configuration, purchase order management with supplier tracking and delivery status updates, inventory receiving and inspection workflows with quality control checks, stock transfer management between branches and warehouses with real-time tracking, batch and expiry date tracking for perishable goods, barcode and QR code scanning for efficient stock intake and counting, inventory valuation and costing (FIFO, LIFO, weighted average), detailed reporting suite (stock movement, inventory valuation, stock aging, slow-moving items, inventory turnover), cycle counting and physical inventory reconciliation, role-based access control for warehouse staff and managers, audit trails for all inventory transactions, and integration with procurement and sales modules for end-to-end supply chain visibility. Built with React and TypeScript with Shadcn UI, powered by Laravel backend and MySQL database."
  },
  {
    id: 3,
    name: "BioTrucking 360",
    subtitle: "Biometric Trucking 360 System",
    image: getAssetPath("assets/project-icon/backup.png"),
    techimage: [
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
    description: "A comprehensive biometric attendance system for trucking companies, integrating with fingerprint scanner hardware for real-time employee clock-in/out tracking. Features include daily time record (DTR) management with automated log processing and hours computation, duty and roster scheduling with shift rules and flexi-duty assignments, employee self-service portal for attendance views and day-off requests, multi-level approval workflows for DTR modifications, biometric device management for fingerprint upload/download and time synchronization, detailed reporting suite (DTR summaries, tardiness, overtime, absences, perfect attendance, incomplete logs), administrative controls with role-based permissions and activity audit trails, import/export for bulk data operations, company and branch/location/department/position configuration, subscription-based billing with plan tiers and Stripe integration, 2FA security, AES-256-CBC data encryption, and a real-time biometric monitoring dashboard. Built with React and TypeScript with Shadcn UI, powered by Laravel backend, MySQL database, and integrated with biometric fingerprint hardware via serial port communication.",
    subimage: [
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-2026-06-18-15_31_20.jpg"),
        title: "Landing Page",
        subtitle: "Welcome Screen",
        description: "The public-facing welcome page introducing BioTrucking 360 attendance management system with a clean layout and navigation options."
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
        description: "Secure login and registration screen for authorized users to access the attendance management system using their credentials."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_04_08.png"),
        title: "Dashboard",
        subtitle: "System Overview",
        description: "Main dashboard displaying real-time attendance status, key metrics, and quick-access navigation for efficient workforce management."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_04_19.jpg"),
        title: "Dashboard — Attendance Stats",
        subtitle: "Attendance Summary",
        description: "Attendance summary cards showing total employees present, late, on leave, and absent for the current day."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_04_34.png"),
        title: "Dashboard — Approval Queue",
        subtitle: "Pending Approvals",
        description: "Approval queue displaying pending leave and overtime requests requiring manager action."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_04_42.png"),
        title: "Dashboard — Charts",
        subtitle: "Attendance Analytics",
        description: "Analytics charts showing attendance by department, monthly trends, and workforce breakdown."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_05_05.png"),
        title: "Dashboard — HR Statistics",
        subtitle: "HR Metrics",
        description: "HR statistics panel showing employee headcount, department distribution, and workforce composition."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_05_12.png"),
        title: "Dashboard — Activity Log",
        subtitle: "Recent Activity",
        description: "Recent biometric logs and system activity feed showing clock-in/out events and user actions."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_05_30.png"),
        title: "Dashboard — Notifications",
        subtitle: "System Alerts",
        description: "Notifications panel showing system alerts, reminders, and important updates requiring user attention."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_05_39.png"),
        title: "Dashboard — Quick Actions",
        subtitle: "Shortcut Menu",
        description: "Quick action shortcuts providing one-click access to common tasks like processing logs and generating reports."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_01.png"),
        title: "Dashboard — Sidebar Menu",
        subtitle: "Navigation",
        description: "Sidebar navigation menu expanded showing all available modules including attendance, employees, reports, and settings."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_10.png"),
        title: "Dashboard — Search",
        subtitle: "Global Search",
        description: "Global search functionality allowing users to quickly find employees, attendance records, and system configurations."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_16.png"),
        title: "Dashboard — Filters",
        subtitle: "Data Filtering",
        description: "Advanced filter panel for refining dashboard data views by date range, department, and attendance status."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_24.png"),
        title: "Dashboard — Table View",
        subtitle: "Data Table",
        description: "Tabular view of attendance data with sortable columns, pagination, and row-level actions for detailed record management."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_33.png"),
        title: "Dashboard — Card View",
        subtitle: "Visual Cards",
        description: "Card-based layout presenting employee attendance with visual status badges and key information at a glance."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_42.png"),
        title: "Dashboard — Export",
        subtitle: "Data Export",
        description: "Export configuration panel allowing users to download attendance data in CSV, Excel, and PDF formats."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_06_56.png"),
        title: "Dashboard — Print View",
        subtitle: "Printable Report",
        description: "Print-optimized view of dashboard reports formatted for physical documentation and distribution."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_07_13.png"),
        title: "Dashboard — Mobile View",
        subtitle: "Responsive Layout",
        description: "Mobile-responsive dashboard layout optimized for smaller screens with touch-friendly controls."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_09_20.png"),
        title: "Employees — Overview",
        subtitle: "Employee List",
        description: "Complete employee listing page with search, filter, and sort capabilities for efficient workforce management."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_09_32.png"),
        title: "Employees — Details",
        subtitle: "Employee Profile",
        description: "Detailed employee profile view showing personal information, employment details, and biometric enrollment status."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_09_43.png"),
        title: "Employees — Add",
        subtitle: "New Employee",
        description: "Form for registering a new employee with personal info, employment details, and biometric ID assignment."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_09_50.png"),
        title: "Employees — Edit",
        subtitle: "Update Employee",
        description: "Edit form for updating existing employee information including status changes and biometric reassignment."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_04.png"),
        title: "Attendance — Overview",
        subtitle: "DTR Management",
        description: "Daily time record management page displaying employee attendance logs with processing status."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_13.png"),
        title: "Attendance — Download Logs",
        subtitle: "Log Download",
        description: "Log download interface for fetching raw biometric clock-in/out data from connected fingerprint devices."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_22.png"),
        title: "Attendance — Process Logs",
        subtitle: "Log Processing",
        description: "Log processing page where raw biometric data is converted into structured daily time records."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_29.png"),
        title: "Attendance — Calculate Hours",
        subtitle: "Hours Computation",
        description: "Hours calculation interface for computing total work hours, overtime, late minutes, and undertime per employee."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_36.png"),
        title: "Attendance — Modify DTR",
        subtitle: "DTR Modification",
        description: "DTR modification page for manually adjusting employee time entries with approval tracking."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_48.png"),
        title: "Attendance — DTR Periods",
        subtitle: "Cut-off Setup",
        description: "DTR period configuration for setting up payroll cut-off dates used for grouping attendance records."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_16_58.png"),
        title: "Duty Management — Setup Rules",
        subtitle: "Shift Rules",
        description: "Shift rule configuration page for defining standard shift schedules, grace periods, and overtime policies."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_17_07.png"),
        title: "Duty Management — Roster",
        subtitle: "Roster Creation",
        description: "Roster creation page for building weekly or monthly duty schedules with shift assignments."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_17_16.png"),
        title: "Duty Management — Assign",
        subtitle: "Roster Assignment",
        description: "Roster assignment interface for bulk or individual assignment of duty schedules to employees."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_17_24.png"),
        title: "Unlimited Duty — Setup",
        subtitle: "Flexi Duty Config",
        description: "Configuration page for unlimited/flexible duty assignments where employees can log any time."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_17_34.png"),
        title: "Unlimited Duty — Rosters",
        subtitle: "Flexi Rosters",
        description: "Unlimited duty roster management for flexible-hour employees and field workers."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_18_25.png"),
        title: "Day Off — Setup",
        subtitle: "Rest Day Config",
        description: "Day off configuration page for setting employee weekly rest days and holiday schedules."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_18_33.png"),
        title: "Holidays — Calendar",
        subtitle: "Holiday Management",
        description: "Holiday calendar management for configuring regular holidays and special non-working days."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_20_26.png"),
        title: "Work Codes — Setup",
        subtitle: "Attendance Codes",
        description: "Work codes configuration for defining attendance code types used in DTR computation."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_20_37.png"),
        title: "Locations — Setup",
        subtitle: "Location Management",
        description: "Location management page for setting up company locations and offices."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_20_50.png"),
        title: "Branches — Setup",
        subtitle: "Branch Management",
        description: "Branch management page for adding and managing company branches under locations."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_21_32.png"),
        title: "Departments — Setup",
        subtitle: "Department Management",
        description: "Department management page for organizing company structure by department."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_21_46.png"),
        title: "Positions — Setup",
        subtitle: "Position Management",
        description: "Job position management page for defining job titles and positions in the organization."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_01.png"),
        title: "Cost Centres — Setup",
        subtitle: "Cost Center Management",
        description: "Cost centre management page for setting up budgeting and reporting cost centers."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_06.png"),
        title: "Reports — DTR Summary",
        subtitle: "DTR Report",
        description: "DTR summary report showing consolidated daily time records per payroll cutoff period."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_12.png"),
        title: "Reports — Daily Attendance",
        subtitle: "Attendance Report",
        description: "Daily attendance report showing who is present, absent, or on leave for a specific date."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_19.png"),
        title: "Reports — Timesheet",
        subtitle: "Timesheet Report",
        description: "Employee timesheet report with detailed time-in/time-out logs and computed hours."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_30.png"),
        title: "Reports — Late Report",
        subtitle: "Tardiness Report",
        description: "Late report identifying employees who arrived past their scheduled start time."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_49.png"),
        title: "Reports — Absent Report",
        subtitle: "Absence Report",
        description: "Absence report showing employees marked absent for the selected date range."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_22_58.png"),
        title: "Reports — Overtime",
        subtitle: "OT Report",
        description: "Overtime report displaying employees who rendered overtime hours and their OT details."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_06.png"),
        title: "Reports — Perfect Attendance",
        subtitle: "Perfect Attendance Report",
        description: "Perfect attendance report showing employees with no lates, absences, or incomplete logs."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_14.png"),
        title: "Reports — Incomplete Logs",
        subtitle: "Missing Logs Report",
        description: "Incomplete logs report identifying employees with missing clock-in or clock-out entries."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_21.png"),
        title: "Reports — Without Roster",
        subtitle: "No Schedule Report",
        description: "Report showing employees who have no assigned duty schedule or roster."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_32.png"),
        title: "Reports — Employee Master List",
        subtitle: "Employee Directory",
        description: "Complete employee master list report with all registered employee information."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_42.png"),
        title: "Biometric Devices — FP Machines",
        subtitle: "Device Management",
        description: "Biometric device management page for registering and configuring fingerprint scanner hardware."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_23_53.png"),
        title: "Devices — Download FP",
        subtitle: "Download Fingerprints",
        description: "Interface for downloading employee fingerprint templates and attendance logs from biometric devices."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_24_05.png"),
        title: "Devices — Upload FP",
        subtitle: "Upload Fingerprints",
        description: "Interface for uploading employee fingerprint templates to biometric devices for clock-in access."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_24_22.png"),
        title: "Devices — Upload Employee Info",
        subtitle: "Sync Employee Data",
        description: "Employee data sync interface for uploading employee demographics to biometric devices."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_24_29.png"),
        title: "Devices — Date/Time Sync",
        subtitle: "Device Time Sync",
        description: "Device date and time synchronization page to keep biometric clocks accurate."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_24_37.png"),
        title: "BioTrucking Config — Company Profile",
        subtitle: "Company Info",
        description: "Company profile configuration page for updating company name, address, contact info, and logo."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_24_44.png"),
        title: "BioTrucking Config — System Parameters",
        subtitle: "System Settings",
        description: "System parameters configuration for setting timezone, OT rates, night differential, and company-wide policies."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_24_50.png"),
        title: "BioTrucking Config — Front-End Terminal",
        subtitle: "Terminal Settings",
        description: "Front-end terminal configuration for managing real-time biometric clock-in/out monitoring stations."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_03.png"),
        title: "BioTrucking Config — Backup",
        subtitle: "Data Backup",
        description: "Database backup configuration for scheduling automated or manual system backups."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_07.png"),
        title: "Administration — Users",
        subtitle: "User Management",
        description: "User management page for creating and managing system users with login credentials and role assignments."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_13.png"),
        title: "Administration — Roles",
        subtitle: "Role Management",
        description: "Role management page for defining user roles with specific permissions and access levels."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_19.png"),
        title: "Administration — Permissions",
        subtitle: "Permission Settings",
        description: "Permission configuration for fine-grained access control to individual system features."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_34.png"),
        title: "Administration — Workflow",
        subtitle: "Approval Workflow",
        description: "Workflow configuration for setting up multi-level approval chains for DTR modifications."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_44.png"),
        title: "Administration — Activity Logs",
        subtitle: "Audit Trail",
        description: "Activity logs page displaying complete audit trail of all system actions and user activities."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_25_54.png"),
        title: "Dashboard — Employee View",
        subtitle: "My Dashboard",
        description: "Employee self-service dashboard showing personal attendance summary, schedule, and day-off calendar."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_02.png"),
        title: "Dashboard — My Attendance",
        subtitle: "Personal Attendance",
        description: "Personal attendance log view for employees to track their own time records and history."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_14.png"),
        title: "Dashboard — My Schedule",
        subtitle: "Personal Schedule",
        description: "Employee schedule view showing assigned duty rosters, shifts, and upcoming work days."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_23.png"),
        title: "Dashboard — My Day Off",
        subtitle: "Day Off Calendar",
        description: "Employee day-off calendar showing scheduled rest days and leave balances."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_30.png"),
        title: "Dashboard — System Notices",
        subtitle: "Announcements",
        description: "System notices tab showing holiday announcements, company alerts, reminders, and general announcements."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_39.png"),
        title: "Dashboard — Dark Mode",
        subtitle: "Dark Theme",
        description: "Dashboard displayed in dark mode theme for reduced eye strain and improved usability."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_45.png"),
        title: "Dashboard — Settings Access",
        subtitle: "Settings Menu",
        description: "User settings dropdown with access to account settings, appearance, and notification preferences."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_50.png"),
        title: "Settings — Account",
        subtitle: "Account Settings",
        description: "Account settings page for managing profile information, security credentials, and 2FA configuration."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_26_57.png"),
        title: "Settings — Appearance",
        subtitle: "Theme Settings",
        description: "Appearance settings for customizing theme mode, accent color, sidebar style, and font preferences."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_27_16.png"),
        title: "Settings — Notifications",
        subtitle: "Notification Prefs",
        description: "Notification preferences for configuring email, in-app, and SMS alert settings."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_27_24.png"),
        title: "Subscription — Plans",
        subtitle: "Plan Selection",
        description: "Subscription plan selection page showing available tiers with features and pricing."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_27_29.png"),
        title: "Subscription — Billing",
        subtitle: "Billing Info",
        description: "Subscription billing page showing current plan, payment history, and billing details."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_27_50.png"),
        title: "Subscription — Activation Key",
        subtitle: "Key Entry",
        description: "Activation key entry page for entering subscription keys received from MyMoney portal."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_27_56.png"),
        title: "Subscription — Invoices",
        subtitle: "Invoice History",
        description: "Invoice history page showing payment records, invoice numbers, and payment status."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_04.png"),
        title: "Approval Request — Pending",
        subtitle: "Pending Approvals",
        description: "Pending approval requests page for reviewing and approving DTR modification requests."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_12.png"),
        title: "Approval Request — History",
        subtitle: "Approval History",
        description: "Approval history page showing previously approved and rejected DTR modification requests."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_20.png"),
        title: "Import — Data Import",
        subtitle: "Bulk Import",
        description: "Bulk data import page for uploading employee records, attendance data, and reference tables via CSV/Excel."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_30.png"),
        title: "Import — Preview",
        subtitle: "Import Preview",
        description: "Import preview page showing parsed data with status badges before confirmation."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_37.png"),
        title: "Import — History",
        subtitle: "Import History",
        description: "Import history log showing previous import operations with success and error counts."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_45.png"),
        title: "Export — Data Export",
        subtitle: "Data Export",
        description: "Data export page for downloading system data in CSV, Excel, or JSON formats."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_28_52.png"),
        title: "Export — History",
        subtitle: "Export History",
        description: "Export history page showing recent export operations for re-download."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_30_47.png"),
        title: "Dashboard — Real-time Monitoring",
        subtitle: "Live Feed",
        description: "Real-time biometric monitoring dashboard showing live clock-in/out events as they happen."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-dashboard-2026-06-18-15_31_02.png"),
        title: "Dashboard — Executive Summary",
        subtitle: "Executive View",
        description: "Executive summary dashboard providing high-level overview of key attendance metrics and insights."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-profile-2026-06-18-15_29_58.jpg"),
        title: "Profile",
        subtitle: "User Profile",
        description: "User profile page displaying personal information, account settings, and activity history."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-settings-2026-06-18-15_30_09.png"),
        title: "Settings — General",
        subtitle: "General Settings",
        description: "General settings panel for configuring system preferences, default values, and company-wide configurations."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-settings-2026-06-18-15_30_22.png"),
        title: "Settings — Password",
        subtitle: "Password Change",
        description: "Password change page for updating account password with current password verification."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-settings-2026-06-18-15_30_27.png"),
        title: "Settings — 2FA",
        subtitle: "Two-Factor Auth",
        description: "Two-factor authentication setup page for enabling email OTP or Google Authenticator."
      },
      {
        src: getAssetPath("assets/project-icon/biotrucking360/screencapture-biotrucking360-production-up-railway-app-settings-notification-2026-06-18-15_30_38.png"),
        title: "Settings — Notification Prefs",
        subtitle: "Alert Preferences",
        description: "Notification preferences panel for configuring email and in-app notification settings."
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
    id: 4,
    name: "MyMoney",
    subtitle: "Subscription & Billing Management",
    image: getAssetPath("assets/project-icon/backup.png"),
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
    description: "A billing, subscription, and account activation portal serving as the backend payment system for an HR/attendance SaaS platform. Features include 6 subscription tiers (Trial, Starter, SME, Business, Enterprise, Corporate) with configurable billing intervals (monthly, quarterly, semi-annual, yearly), Stripe payment processing with GCash and Maya support, automatic 20-character activation key generation (XXXX-XXXX-XXXX-XXXX-XXXX), billing invoice management (INV-000001 format), role-based access control, two-factor authentication via email OTP or Google Authenticator, AES-256-CBC data encryption, HMAC-SHA256 API signature verification for webhook security, and comprehensive activity auditing with 365-day retention. Built with React and TypeScript with Shadcn UI, powered by Laravel backend and MySQL database."
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
    description: "• Developed an Inventory Managament System project for internal business operations.\n• Designed and implemented inventory tracking and management modules.\n• Built full-stack features using modern web technologies.",
    systemUsage: "Inventory Management System",
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