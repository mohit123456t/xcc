

// Client Dashboard pages
import { DashboardPage } from '../features/client-dashboard/pages/ClientDashboard/DashboardPage.jsx'
import { ProductsPage } from '../features/client-dashboard/pages/ClientDashboard/ProductsPage.jsx'
import { OrdersPage } from '../features/client-dashboard/pages/ClientDashboard/OrdersPage.jsx'
import { MarketingPage } from '../features/client-dashboard/pages/ClientDashboard/MarketingPage.jsx'
import { AdsPage } from '../features/client-dashboard/pages/ClientDashboard/AdsPage.jsx'
import { DeliveryPage } from '../features/client-dashboard/pages/ClientDashboard/DeliveryPage.jsx'
import { SupportPage } from '../features/client-dashboard/pages/ClientDashboard/SupportPage.jsx'
import { BillingPage } from '../features/client-dashboard/pages/ClientDashboard/BillingPage.jsx'
import { SettingsPage } from '../features/client-dashboard/pages/ClientDashboard/SettingsPage.jsx'
import { NotificationsPage } from '../features/client-dashboard/pages/ClientDashboard/NotificationsPage.jsx'
import { SocialMediaPage } from '../features/client-dashboard/pages/ClientDashboard/SocialMediaPage.jsx'

// Staff Dashboard pages
import { StaffDashboardPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffDashboardPage.jsx'
import { StaffProductsPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffProductsPage.jsx'
import { StaffOrdersPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffOrdersPage.jsx'
import { StaffMarketingPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffMarketingPage.jsx'
import { StaffAdsPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffAdsPage.jsx'
import { StaffDeliveryPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffDeliveryPage.jsx'
import { StaffSupportPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffSupportPage.jsx'
import { StaffAssignedBusinessesPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffAssignedBusinessesPage.jsx'
import { StaffBusinessWorkPanelPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffBusinessWorkPanelPage.jsx'
import { StaffAnalyticsPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffAnalyticsPage.jsx'
import { StaffBillingPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffBillingPage.jsx'
import { StaffSettingsPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffSettingsPage.jsx'
import { StaffNotificationsPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffNotificationsPage.jsx'
import { StaffSocialMediaPage } from '../features/staff-dashboard/pages/StaffDashboard/StaffSocialMediaPage.jsx'

// Admin Panel pages
import { AdminOverviewPage } from '../features/admin-panel/pages/AdminPanel/AdminOverviewPage.jsx'
import { AdminUsersPage } from '../features/admin-panel/pages/AdminPanel/AdminUsersPage.jsx'
import { AdminStaffPage } from '../features/admin-panel/pages/AdminPanel/AdminStaffPage.jsx'
import { AdminBusinessesPage } from '../features/admin-panel/pages/AdminPanel/AdminBusinessesPage.jsx'
import { AdminPaymentsPage } from '../features/admin-panel/pages/AdminPanel/AdminPaymentsPage.jsx'

// Page arrays
export const dashboardPages = [
  {
    path: '',
    title: 'Dashboard',
    component: DashboardPage,
  },
  {
    path: 'products',
    title: 'Products', // Use data later if needed
    component: ProductsPage,
  },
  {
    path: 'orders',
    title: 'Orders',
    component: OrdersPage,
  },
  {
    path: 'marketing',
    title: 'Marketing',
    component: MarketingPage,
  },
  {
    path: 'ads',
    title: 'Ads',
    component: AdsPage,
  },
  {
    path: 'delivery',
    title: 'Delivery',
    component: DeliveryPage,
  },
  {
    path: 'support',
    title: 'Support',
    component: SupportPage,
  },
  {
    path: 'billing',
    title: 'Billing',
    component: BillingPage,
  },
  {
    path: 'settings',
    title: 'Settings',
    component: SettingsPage,
  },
  {
    path: 'notifications',
    title: 'Notifications',
    component: NotificationsPage,
  },
  {
    path: 'social-media',
    title: 'Social Media',
    component: SocialMediaPage,
  },
]

export const staffDashboardPages = [
  {
    path: '',
    title: 'Dashboard',
    component: StaffDashboardPage,
  },
  {
    path: 'assigned-businesses',
    title: 'Assigned Businesses',
    component: StaffAssignedBusinessesPage,
  },
  {
    path: 'assigned-businesses/:businessId',
    title: 'Business Work Panel',
    component: StaffBusinessWorkPanelPage,
  },
  {
    path: 'products',
    title: 'Products',
    component: StaffProductsPage,
  },
  {
    path: 'orders',
    title: 'Orders',
    component: StaffOrdersPage,
  },
  {
    path: 'marketing',
    title: 'Marketing',
    component: StaffMarketingPage,
  },
  {
    path: 'ads',
    title: 'Ads',
    component: StaffAdsPage,
  },
  {
    path: 'delivery',
    title: 'Delivery',
    component: StaffDeliveryPage,
  },
  {
    path: 'support',
    title: 'Support',
    component: StaffSupportPage,
  },
  {
    path: 'analytics',
    title: 'Analytics',
    component: StaffAnalyticsPage,
  },
  {
    path: 'billing',
    title: 'Billing',
    component: StaffBillingPage,
  },
  {
    path: 'settings',
    title: 'Settings',
    component: StaffSettingsPage,
  },
  {
    path: 'notifications',
    title: 'Notifications',
    component: StaffNotificationsPage,
  },
  {
    path: 'social-media',
    title: 'Social Media',
    component: StaffSocialMediaPage,
  },
]

export const adminPanelPages = [
  {
    path: '',
    title: 'Admin Dashboard',
    component: AdminOverviewPage,
  },
  {
    path: 'users',
    title: 'Users',
    component: AdminUsersPage,
  },
  {
    path: 'staff',
    title: 'Staff',
    component: AdminStaffPage,
  },
  {
    path: 'businesses',
    title: 'Businesses',
    component: AdminBusinessesPage,
  },
  {
    path: 'payments',
    title: 'Payments',
    component: AdminPaymentsPage,
  },
]
