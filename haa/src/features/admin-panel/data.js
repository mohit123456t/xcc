export const adminPanelData = {
  navigation: [
    { label: 'Dashboard', path: '/admin-panel', icon: '🛡️' },
    { label: 'Users', path: '/admin-panel/users', icon: '👥' },
    { label: 'Staff', path: '/admin-panel/staff', icon: '🧑‍💼' },
    { label: 'Businesses', path: '/admin-panel/businesses', icon: '🏢' },
    { label: 'Payments', path: '/admin-panel/payments', icon: '💳' },
  ],
  overviewPage: {
    header: {
      pills: [
        { label: 'Total Users', value: '1,248', icon: '👤' },
        { label: 'Active Staff', value: '24', icon: '🧑‍💼' },
        { label: 'Managed Businesses', value: '86', icon: '🏢' },
      ],
    },
    summary: [
      { label: 'Platform Users', value: '1,248', icon: '👥' },
      { label: 'Staff Members', value: '24', icon: '🧩' },
      { label: 'Active Businesses', value: '86', icon: '🏬' },
      { label: 'Pending Approvals', value: '9', icon: '⏳' },
    ],
    actions: [
      'Add Staff Member',
      'Review User Report',
      'Approve New Business',
      'Check Payments',
    ],
  },
  usersPage: {
    header: {
      title: 'Users Management',
      description:
        'View customer accounts, monitor account health, and take action on user activity from one admin workspace.',
    },
    overview: [
      { label: 'Total Users', value: '1,248', icon: '👥' },
      { label: 'Active Users', value: '1,031', icon: '✅' },
      { label: 'Blocked Users', value: '12', icon: '⛔' },
    ],
    users: [
      {
        name: 'Aarav Mehta',
        email: 'aarav@example.com',
        role: 'Customer',
        status: 'Active',
        statusStyle: 'active',
      },
      {
        name: 'Riya Sharma',
        email: 'riya@example.com',
        role: 'Customer',
        status: 'Pending',
        statusStyle: 'warning',
      },
      {
        name: 'Kabir Jain',
        email: 'kabir@example.com',
        role: 'Customer',
        status: 'Blocked',
        statusStyle: 'out',
      },
    ],
  },
  staffPage: {
    header: {
      title: 'Staff Management',
      description:
        'Manage staff accounts, monitor assigned work and update access for operations, support and marketing teams.',
    },
    overview: [
      { label: 'Active Staff', value: '24', icon: '🧑‍💼' },
      { label: 'New Requests', value: '3', icon: '📨' },
      { label: 'Assigned Teams', value: '6', icon: '🧭' },
    ],
    staff: [
      {
        name: 'Mohit Sharma',
        department: 'Operations',
        businesses: '8',
        status: 'Active',
        statusStyle: 'active',
      },
      {
        name: 'Neha Arora',
        department: 'Support',
        businesses: '5',
        status: 'On Hold',
        statusStyle: 'warning',
      },
      {
        name: 'Amit Verma',
        department: 'Marketing',
        businesses: '10',
        status: 'Active',
        statusStyle: 'active',
      },
    ],
  },
  businessesPage: {
    header: {
      title: 'Business Control',
      description:
        'Track business accounts, ownership, plans and approval actions from the admin side.',
    },
    overview: [
      { label: 'Total Businesses', value: '86', icon: '🏢' },
      { label: 'Growth Plan', value: '31', icon: '📈' },
      { label: 'Pending Approval', value: '9', icon: '🕒' },
    ],
    businesses: [
      {
        name: 'ABC Clothing',
        owner: 'Rahul Sharma',
        plan: 'Growth',
        status: 'Approved',
        statusStyle: 'active',
      },
      {
        name: 'XYZ Cosmetics',
        owner: 'Neha Kapoor',
        plan: 'Pro',
        status: 'Approved',
        statusStyle: 'active',
      },
      {
        name: 'Nova Home Decor',
        owner: 'Ishita Rao',
        plan: 'Starter',
        status: 'Pending',
        statusStyle: 'warning',
      },
    ],
  },
  paymentsPage: {
    header: {
      title: 'Payments Control',
      description:
        'Review payment health for users and businesses, track settlements and audit pending invoices.',
    },
    overview: [
      { label: 'Total Settlements', value: '₹12.4L', icon: '₹' },
      { label: 'Pending Invoices', value: '7', icon: '🧾' },
      { label: 'Failed Payments', value: '3', icon: '⚠️' },
    ],
    payments: [
      {
        entity: 'ABC Clothing',
        type: 'Business Invoice',
        amount: '₹18,000',
        status: 'Paid',
        statusStyle: 'active',
      },
      {
        entity: 'XYZ Cosmetics',
        type: 'Business Invoice',
        amount: '₹24,500',
        status: 'Pending',
        statusStyle: 'warning',
      },
      {
        entity: 'Aarav Mehta',
        type: 'Customer Refund',
        amount: '₹1,798',
        status: 'Failed',
        statusStyle: 'out',
      },
    ],
  },
}
