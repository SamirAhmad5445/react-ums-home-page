import {
  Gear,
  Gears,
  BookOpen,
  ArrowsRotate,
  Medal,
  User,
  Star,
  Bookmark,
  Link,
  Pen,
} from "./assets";

export const features = [
  { label: "Login", icon: User, url: "#Login" },
  {
    label: "Early Admission Request For Bachelor's students",
    icon: Pen,
    url: "#EarlyAdmission",
  },
  {
    label: "Graduates Association Services",
    icon: Bookmark,
    url: "#GraduatesAssociationServices",
  },
  { label: "Faculties Services", icon: Gears, url: "#FacultiesServices" },
  { label: "Centers Services", icon: Star, url: "#CentersServices" },
  { label: "University Conference", icon: Gear, url: "#UniversityConference" },
  {
    label: "Application for postgraduate studies",
    icon: Link,
    url: "#EarlyAdmissionForPostGrade",
  },
  {
    label: "Blended Learning Admission",
    icon: Medal,
    url: "#BlendedLearningAdmission",
  },
  {
    label: "Documentation Of Certificates",
    icon: ArrowsRotate,
    url: "#CertificatesDocumentation",
  },
  { label: "Book Coursera", icon: BookOpen, url: "#Coursera" },
];

export const ourServices = [
  {
    name: "Students Services",
    services: [
      "User Profile",
      "Completing / modifying data",
      "Schedule",
      "QR Code",
      "YearworkGrades",
      "Grades",
      "Course Registration",
      "Open Course Request",
      "Withdraw Course Request",
      "Payments",
      "Payment History",
      "Appeal",
      "Complaints / Suggestions",
      "Bifurcation",
    ],
  },
  {
    name: "Alumni Services",
    services: [
      "Applying for Post Graduate Studies",
      "Get Graduation Certificate",
      "Track External Services",
      "Join the Alumni Association",
      "Get ICDL Course",
      "Get Grading Certificate",
      "Documentation Of Certificates",
      "Request Subscription for Univeristy Conference",
    ],
  },
  {
    name: "Postgraduate Students",
    services: [
      "User Profile",
      "Completing / modifying data",
      "Applying for Post Graduate Studies",
      "Courses",
      "My Thesis",
      "Grades",
      "YearworkGrades",
      "Appeal",
      "Other Services",
    ],
  },
  {
    name: "Vaccine Service",
    services: ["Request Certificate", "Inquiry About All Certificates"],
  },
  {
    name: "Other Services",
    services: [
      "Coursera Courses",
      "Early Admission Request For Bachelor's students",
      "University Conference",
    ],
  },
];
