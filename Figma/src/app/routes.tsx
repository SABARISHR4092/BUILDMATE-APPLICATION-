import { createBrowserRouter } from "react-router";

// Authentication & Onboarding
import LogoIntroScreen from "./components/LogoIntroScreen";
import SplashScreen from "./components/SplashScreen";
import OnboardingOne from "./components/OnboardingOne";
import OnboardingTwo from "./components/OnboardingTwo";
import OnboardingThree from "./components/OnboardingThree";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";
import OTPVerificationScreen from "./components/OTPVerificationScreen";
import LoginProgressScreen from "./components/LoginProgressScreen";
import LogoutProgressScreen from "./components/LogoutProgressScreen";

// Main App
import HomeScreenNew from "./components/HomeScreenNew";
import CreateProjectScreen from "./components/CreateProjectScreen";
import BuildingTypeScreen from "./components/BuildingTypeScreen";
import FloorRoomConfigScreen from "./components/FloorRoomConfigScreen";
import StructuralInputsScreen from "./components/StructuralInputsScreen";
import CADUploadScreen from "./components/CADUploadScreen";
import AIProcessingScreen from "./components/AIProcessingScreen";
import EstimationResultsScreen from "./components/EstimationResultsScreen";
import MaterialBreakdownScreen from "./components/MaterialBreakdownScreen";
import CostAnalysisScreen from "./components/CostAnalysisScreen";
import SavedProjectsScreenNew from "./components/SavedProjectsScreenNew";
import NotificationsScreen from "./components/NotificationsScreen";
import MaterialRateEditorScreen from "./components/MaterialRateEditorScreen";
import ReportsScreen from "./components/ReportsScreen";
import AnalyticsScreen from "./components/AnalyticsScreen";
import ProfileScreen from "./components/ProfileScreen";
import SettingsScreen from "./components/SettingsScreen";
import HelpScreen from "./components/HelpScreen";
import AboutScreen from "./components/AboutScreen";
import LogoutConfirmationScreen from "./components/LogoutConfirmationScreen";
import SuccessScreen from "./components/SuccessScreen";

export const router = createBrowserRouter([
  // 1. Logo Intro (Entry Point)
  {
    path: "/",
    Component: LogoIntroScreen,
  },

  // 2. Splash Screen
  {
    path: "/splash",
    Component: SplashScreen,
  },

  // 3-5. Onboarding (3 screens)
  {
    path: "/onboarding-1",
    Component: OnboardingOne,
  },
  {
    path: "/onboarding-2",
    Component: OnboardingTwo,
  },
  {
    path: "/onboarding-3",
    Component: OnboardingThree,
  },

  // 6. Login
  {
    path: "/login",
    Component: LoginScreen,
  },

  // 7. Sign Up
  {
    path: "/signup",
    Component: SignUpScreen,
  },

  // 8. Forgot Password
  {
    path: "/forgot-password",
    Component: ForgotPasswordScreen,
  },

  // 9. OTP Verification
  {
    path: "/otp-verification",
    Component: OTPVerificationScreen,
  },

  // 10. Login Progress
  {
    path: "/login-progress",
    Component: LoginProgressScreen,
  },

  // 11. Home Dashboard
  {
    path: "/home",
    Component: HomeScreenNew,
  },

  // 12. New Project Creation
  {
    path: "/create-project",
    Component: CreateProjectScreen,
  },

  // 13. Building Type Selection
  {
    path: "/building-type",
    Component: BuildingTypeScreen,
  },

  // 14. Floor & Room Configuration
  {
    path: "/floor-room-config",
    Component: FloorRoomConfigScreen,
  },

  // 15. Structural Inputs
  {
    path: "/structural-inputs",
    Component: StructuralInputsScreen,
  },

  // 16. CAD/Blueprint Upload
  {
    path: "/cad-upload",
    Component: CADUploadScreen,
  },

  // 17. AI Processing
  {
    path: "/ai-processing",
    Component: AIProcessingScreen,
  },

  // 18. Estimation Results Dashboard
  {
    path: "/estimation-results",
    Component: EstimationResultsScreen,
  },

  // 19. Material Breakdown
  {
    path: "/material-breakdown",
    Component: MaterialBreakdownScreen,
  },

  // 20. Cost Analysis
  {
    path: "/cost-analysis",
    Component: CostAnalysisScreen,
  },

  // 21. Saved Projects
  {
    path: "/saved-projects",
    Component: SavedProjectsScreenNew,
  },

  // 22. Notifications Center
  {
    path: "/notifications",
    Component: NotificationsScreen,
  },

  // 23. Material Rates Management
  {
    path: "/material-rates",
    Component: MaterialRateEditorScreen,
  },

  // 24. Reports & Export
  {
    path: "/reports",
    Component: ReportsScreen,
  },

  // 25. Analytics Dashboard
  {
    path: "/analytics",
    Component: AnalyticsScreen,
  },

  // 26. User Profile
  {
    path: "/profile",
    Component: ProfileScreen,
  },

  // 27. Settings
  {
    path: "/settings",
    Component: SettingsScreen,
  },

  // 28. Help & Support
  {
    path: "/help",
    Component: HelpScreen,
  },

  // 29. About Application
  {
    path: "/about",
    Component: AboutScreen,
  },

  // 30. Logout Confirmation
  {
    path: "/logout-confirmation",
    Component: LogoutConfirmationScreen,
  },

  // 31. Logout Progress
  {
    path: "/logout-progress",
    Component: LogoutProgressScreen,
  },

  // 32. Success Screen
  {
    path: "/success",
    Component: SuccessScreen,
  },
]);
