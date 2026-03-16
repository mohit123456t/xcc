

// Client Dashboard pages
import { DashboardPage } from '../features/client-dashboard/pages/DashboardPage.jsx'
import { ProductsPage } from '../features/client-dashboard/pages/ProductsPage.jsx'
import { OrdersPage } from '../features/client-dashboard/pages/OrdersPage.jsx'
import { MarketingPage } from '../features/client-dashboard/pages/MarketingPage.jsx'
import { AdsPage } from '../features/client-dashboard/pages/AdsPage.jsx'
// Legacy paths adjusted:
import { DeliveryPage } from '../../pages/Delivery/DeliveryPage.jsx'
import { SupportPage } from '../../pages/Support/SupportPage.jsx'
import { BillingPage } from '../../pages/Billing/BillingPage.jsx'
import { SettingsPage } from '../../pages/Settings/SettingsPage.jsx'
import { NotificationsPage } from '../../pages/Notifications/NotificationsPage.jsx'
import { SocialMediaPage } from '../../pages/SocialMedia/SocialMediaPage.jsx'

// Staff Dashboard pages
import { StaffDashboardPage } from '../features/staff-dashboard/pages/StaffDashboardPage.jsx'
import { StaffProductsPage } from '../../pages/StaffDashboard/StaffProductsPage.jsx'
import { StaffOrdersPage } from '../../pages/StaffDashboard/StaffOrdersPage.jsx'
import { StaffMarketingPage } from '../../pages/StaffDashboard/StaffMarketingPage.jsx'
import { StaffAdsPage } from '../../pages/StaffDashboard/StaffAdsPage.jsx'
import { StaffDeliveryPage } from '../../pages/StaffDashboard/StaffDeliveryPage.jsx'
import { StaffSupportPage } from '../../pages/StaffDashboard/StaffSupportPage.jsx'
import { StaffAssignedBusinessesPage } from '../../pages/StaffDashboard/StaffAssignedBusinessesPage.jsx'
import { StaffBusinessWorkPanelPage } from '../../pages/StaffDashboard/StaffBusinessWorkPanelPage.jsx'
import { StaffAnalyticsPage } from '../../pages/StaffDashboard/StaffAnalyticsPage.jsx'
import { StaffBillingPage } from '../../pages/StaffDashboard/StaffBillingPage.jsx'
import { StaffSettingsPage } from '../../pages/StaffDashboard/StaffSettingsPage.jsx'
import { StaffNotificationsPage } from '../../pages/StaffDashboard/StaffNotificationsPage.jsx'
import { StaffSocialMediaPage } from '../../pages/StaffDashboard/StaffSocialMediaPage.jsx'

// Admin Panel pages
import { AdminOverviewPage } from '../features/admin-panel/pages/AdminOverviewPage.jsx'
import { AdminUsersPage } from '../../pages/AdminPanel/AdminUsersPage.jsx'
import { AdminStaffPage } from '../../pages/AdminPanel/AdminStaffPage.jsx'
import { AdminBusinessesPage } from '../../pages/AdminPanel/AdminBusinessesPage.jsx'
import { AdminPaymentsPage } from '../../pages/AdminPanel/AdminPaymentsPage.jsx'

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

