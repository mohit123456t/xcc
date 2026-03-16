import { dashboardData } from '../client-dashboard/data'

export const staffDashboardData = {
  ...dashboardData,
  header: {
    pills: [
      { label: 'Assigned Businesses', value: '5', icon: '🏬' },
      { label: 'Active Campaigns', value: '3', icon: '📢' },
      { label: 'Running Ads', value: '4', icon: '📣' },
    ],
  },
  navigation: dashboardData.navigation.map((item) => ({
    ...item,
    path:
      item.path === '/dashboard'
        ? '/staff-dashboard'
        : item.path.replace('/dashboard/', '/staff-dashboard/'),
  })),
  overview: {
    assignedBusinesses: {
      title: 'Assigned Businesses',
      emoji: '🏢',
      total: '5',
      businesses: [
        'ABC Clothing',
        'XYZ Cosmetics',
        'Fresh Food Store',
        'Urban Bags Studio',
        'Nova Home Decor',
      ],
    },
    activeCampaigns: {
      title: 'Active Campaigns',
      emoji: '📢',
      total: '3',
      campaigns: [
        { name: 'Summer Collection Launch', business: 'ABC Clothing' },
        { name: 'Glow Kit Awareness', business: 'XYZ Cosmetics' },
        { name: 'Weekend Combo Push', business: 'Fresh Food Store' },
      ],
    },
    runningAds: {
      title: 'Running Ads',
      emoji: '🚀',
      total: '4',
      platforms: ['Facebook', 'Instagram', 'Google'],
      ads: [
        'Retargeting Sale Ad',
        'Festival Offer Ad',
        'Brand Reach Ad',
        'Store Visit Campaign',
      ],
    },
    pendingTasks: {
      title: 'Pending Tasks',
      emoji: '📝',
      items: [
        'Post Instagram Reel',
        'Launch Ads Campaign',
        'Reply Support Ticket',
        'Send weekly performance update',
      ],
    },
    notifications: {
      title: 'Notifications',
      emoji: '🔔',
      items: [
        {
          label: 'New business assigned',
          value: 'Nova Home Decor added to your queue today',
        },
        {
          label: 'Campaign update',
          value: 'Summer Collection Launch reached 18k people',
        },
        {
          label: 'Support request',
          value: 'XYZ Cosmetics needs a response on ad billing',
        },
      ],
    },
    performanceSummary: {
      title: 'Performance Summary',
      emoji: '📈',
      metrics: [
        { label: 'Ads Performance', value: '82%', fill: 82 },
        { label: 'Marketing Reach', value: '74%', fill: 74 },
        { label: 'Engagement', value: '68%', fill: 68 },
      ],
    },
    quickActions: {
      title: 'Quick Actions',
      emoji: '⚡',
      actions: [
        'Create Campaign',
        'Create Ad',
        'Upload Post',
        'Reply Support Ticket',
      ],
    },
  },
  marketingPage: {
    header: {
      title: 'Marketing',
      description:
        'Create and manage staff-side marketing campaigns, schedule content and track performance for assigned businesses.',
    },
    overview: [
      { label: 'Total Campaigns', value: '8', icon: '📦' },
      { label: 'Active Campaigns', value: '3', icon: '🟢' },
      { label: 'Completed Campaigns', value: '4', icon: '✅' },
      { label: 'Total Reach', value: '50,000', icon: '📈' },
    ],
    createCampaign: {
      buttonLabel: 'Create Marketing Campaign',
      fields: [
        { label: 'Campaign Name', value: 'Summer Sale Push', type: 'text' },
        {
          label: 'Business Selection',
          value: 'ABC Clothing',
          type: 'select',
          options: [
            'ABC Clothing',
            'XYZ Cosmetics',
            'Fresh Food Store',
            'Urban Bags Studio',
          ],
        },
        {
          label: 'Platform',
          value: 'Instagram',
          type: 'select',
          options: ['Instagram', 'Facebook', 'YouTube'],
        },
        { label: 'Start Date', value: '2026-03-18', type: 'date' },
        { label: 'End Date', value: '2026-03-28', type: 'date' },
      ],
    },
    campaigns: [
      {
        name: 'Summer Sale',
        businessName: 'ABC Clothing',
        platform: 'Instagram',
        status: 'Active',
        statusStyle: 'active',
        startDate: '18 Mar 2026',
      },
      {
        name: 'Glow Launch',
        businessName: 'XYZ Cosmetics',
        platform: 'Facebook',
        status: 'Paused',
        statusStyle: 'warning',
        startDate: '12 Mar 2026',
      },
      {
        name: 'Weekend Grocery Push',
        businessName: 'Fresh Food Store',
        platform: 'YouTube',
        status: 'Completed',
        statusStyle: 'info',
        startDate: '05 Mar 2026',
      },
    ],
    contentPlanning: [
      {
        type: 'Reel',
        title: 'Summer collection teaser',
        postDate: '15 Jun',
        platform: 'Instagram',
      },
      {
        type: 'Post',
        title: 'Product benefits carousel',
        postDate: '17 Jun',
        platform: 'Facebook',
      },
      {
        type: 'Story',
        title: 'Offer reminder set',
        postDate: '18 Jun',
        platform: 'Instagram',
      },
    ],
    performance: [
      { label: 'Views', value: '28,400', fill: 76 },
      { label: 'Engagement', value: '6.8%', fill: 68 },
      { label: 'Reach', value: '50,000', fill: 84 },
    ],
    uploads: {
      images: ['summer-banner.jpg', 'offer-card.png'],
      reels: ['collection-teaser.mp4', 'founder-message.mp4'],
      captions: [
        'Fresh looks, faster checkouts, better reach.',
        'Weekend offers are live now.',
      ],
    },
  },
  adsPage: {
    header: {
      title: 'Ads',
      description:
        'Create, monitor and control paid campaigns for assigned businesses from one focused staff ads workspace.',
    },
    overview: [
      { label: 'Total Ad Campaigns', value: '9', icon: '📣' },
      { label: 'Active Ads', value: '4', icon: '🟢' },
      { label: 'Total Ad Spend', value: '₹12,000', icon: '💸' },
      { label: 'Total Conversions', value: '186', icon: '🎯' },
    ],
    createAdCampaign: {
      buttonLabel: 'Create New Ad',
      fields: [
        {
          label: 'Business Selection',
          value: 'ABC Clothing',
          type: 'select',
          options: [
            'ABC Clothing',
            'XYZ Cosmetics',
            'Fresh Food Store',
            'Urban Bags Studio',
          ],
        },
        {
          label: 'Product Selection',
          value: 'Summer Collection Set',
          type: 'select',
          options: [
            'Summer Collection Set',
            'Glow Kit Combo',
            'Weekend Grocery Bundle',
            'Travel Daypack',
          ],
        },
        {
          label: 'Platform',
          value: 'Instagram',
          type: 'select',
          options: ['Facebook', 'Instagram', 'Google'],
        },
        { label: 'Budget', value: '₹5000', type: 'text' },
        { label: 'Start Date', value: '2026-03-19', type: 'date' },
        { label: 'End Date', value: '2026-03-30', type: 'date' },
      ],
    },
    campaigns: [
      {
        name: 'Summer Ads',
        businessName: 'ABC Clothing',
        platform: 'Instagram',
        budget: '₹5000',
        status: 'Active',
        statusStyle: 'active',
      },
      {
        name: 'Glow Product Push',
        businessName: 'XYZ Cosmetics',
        platform: 'Facebook',
        budget: '₹4200',
        status: 'Paused',
        statusStyle: 'warning',
      },
      {
        name: 'Store Visit Boost',
        businessName: 'Fresh Food Store',
        platform: 'Google',
        budget: '₹2800',
        status: 'Completed',
        statusStyle: 'info',
      },
    ],
    performance: [
      { label: 'Impressions', value: '1,24,000', fill: 84 },
      { label: 'Clicks', value: '8,420', fill: 72 },
      { label: 'Conversions', value: '186', fill: 61 },
      { label: 'Cost Per Click', value: '₹14.25', fill: 58 },
    ],
    creatives: {
      images: ['summer-ad-01.jpg', 'retargeting-card.png'],
      videos: ['collection-ad.mp4', 'offer-cut.mp4'],
      text: [
        'New season, sharper style, limited-time savings.',
        'Tap now to grab the weekend deal before it ends.',
      ],
    },
    controls: [
      { label: 'Pause Ads', value: 'Pause underperforming campaigns instantly' },
      { label: 'Resume Ads', value: 'Restart paused campaigns when budget is ready' },
      { label: 'Edit Budget', value: 'Adjust daily or campaign-level ad spend' },
    ],
  },
  deliveryPage: {
    header: {
      title: 'Delivery',
      description:
        'Prepare orders, create Shiprocket shipments, monitor tracking states and resolve delivery issues for assigned businesses.',
    },
    ordersReadyToShip: [
      {
        id: 'ORD-2041',
        customer: 'Rohan Mehta',
        address: 'Andheri West, Mumbai',
      },
      {
        id: 'ORD-2038',
        customer: 'Sana Kapoor',
        address: 'Sector 22, Noida',
      },
      {
        id: 'ORD-2035',
        customer: 'Dev Arora',
        address: 'Banashankari, Bengaluru',
      },
    ],
    shiprocket: [
      { label: 'Ship with Shiprocket', value: 'Create shipment and assign courier instantly' },
      { label: 'Courier Preference', value: 'Auto-select fastest courier partner' },
    ],
    trackingStatus: [
      { label: 'Shipped', value: '14 orders' },
      { label: 'In Transit', value: '9 orders' },
      { label: 'Delivered', value: '41 orders' },
    ],
    deliveryIssues: [
      { label: 'Delayed Orders', value: '3 orders need follow-up today' },
      { label: 'Failed Delivery', value: '2 orders need customer confirmation' },
    ],
  },
  supportPage: {
    header: {
      title: 'Support',
      description:
        'Reply to customer tickets and business owner queries, manage priority inboxes and keep communication moving.',
    },
    summary: [
      { label: 'Open Tickets', value: '18', icon: '🎫' },
      { label: 'Owner Queries', value: '6', icon: '🏬' },
      { label: 'Replies Today', value: '24', icon: '💬' },
    ],
    customerTickets: [
      {
        id: 'TKT-401',
        from: 'Aarav Shah',
        issue: 'Order delayed beyond ETA',
        priority: 'High',
        priorityStyle: 'out',
      },
      {
        id: 'TKT-398',
        from: 'Naina Rao',
        issue: 'Wrong size received',
        priority: 'Medium',
        priorityStyle: 'warning',
      },
    ],
    ownerQueries: [
      {
        business: 'ABC Clothing',
        owner: 'Rahul Sharma',
        query: 'Need ad spend update before evening call',
      },
      {
        business: 'XYZ Cosmetics',
        owner: 'Neha Kapoor',
        query: 'Please review campaign comments and reply',
      },
    ],
    replyDrafts: [
      'Share campaign summary with owner',
      'Reply to delayed delivery ticket',
      'Escalate failed payment screenshot to billing team',
    ],
  },
  billingPage: {
    header: {
      title: 'Billing & Payments',
      description:
        'Let staff review payment status, business billing history, pending invoices and payout-related updates from one page.',
    },
    overview: [
      { label: 'Total Payments Reviewed', value: '126', icon: '💳' },
      { label: 'Pending Invoices', value: '7', icon: '🧾' },
      { label: 'Successful Payments', value: '114', icon: '✅' },
      { label: 'Payment Value', value: '₹3,48,000', icon: '₹' },
    ],
    paymentHistory: [
      {
        business: 'ABC Clothing',
        invoice: 'INV-204',
        amount: '₹18,000',
        status: 'Paid',
        statusStyle: 'active',
      },
      {
        business: 'XYZ Cosmetics',
        invoice: 'INV-201',
        amount: '₹24,500',
        status: 'Pending',
        statusStyle: 'warning',
      },
      {
        business: 'Fresh Food Store',
        invoice: 'INV-196',
        amount: '₹9,800',
        status: 'Overdue',
        statusStyle: 'out',
      },
    ],
    paymentChecks: [
      { label: 'Pending Owner Follow-ups', value: '4 businesses need payment reminders' },
      { label: 'Auto-Reconciliation', value: 'Enabled for 9 active plans' },
    ],
    invoices: [
      'Download March billing summary',
      'Review pending invoice screenshots',
      'Match manual transfer confirmations',
    ],
  },
  analyticsPage: {
    header: {
      title: 'Analytics',
      description:
        'Track campaign performance, ads results and social media growth for all businesses assigned to the staff team.',
    },
    overview: [
      { label: 'Campaign Performance', value: '82%', icon: '📢' },
      { label: 'Ads Results', value: '186 conversions', icon: '📣' },
      { label: 'Social Growth', value: '+12.4%', icon: '📱' },
    ],
    campaignPerformance: [
      { label: 'Reach', value: '50,000', fill: 84 },
      { label: 'Engagement', value: '6.8%', fill: 68 },
      { label: 'Content Completion', value: '79%', fill: 79 },
    ],
    adsResults: [
      { label: 'Impressions', value: '1,24,000', fill: 83 },
      { label: 'Clicks', value: '8,420', fill: 72 },
      { label: 'Conversions', value: '186', fill: 61 },
    ],
    socialGrowth: [
      { label: 'Follower Growth', value: '+2,140', fill: 74 },
      { label: 'Reel Reach', value: '34,800', fill: 81 },
      { label: 'Story Replies', value: '426', fill: 58 },
    ],
  },
  productsPage: {
    header: {
      title: 'Products',
      description:
        'Review business product catalogs, stock health and update requests across assigned stores.',
    },
    overview: [
      { label: 'Managed Products', value: '34', icon: '📦' },
      { label: 'Low Stock Alerts', value: '5', icon: '⚠️' },
      { label: 'Pending Updates', value: '7', icon: '🛠️' },
    ],
    products: [
      {
        business: 'ABC Clothing',
        name: 'Classic Cotton Tee',
        category: 'Fashion',
        stock: '128',
        status: 'Active',
        statusStyle: 'active',
      },
      {
        business: 'XYZ Cosmetics',
        name: 'Glow Kit Combo',
        category: 'Beauty',
        stock: '24',
        status: 'Low Stock',
        statusStyle: 'warning',
      },
      {
        business: 'Urban Bags Studio',
        name: 'Travel Daypack',
        category: 'Accessories',
        stock: '0',
        status: 'Out of Stock',
        statusStyle: 'out',
      },
    ],
    actions: [
      'Approve product content edits',
      'Coordinate restock update',
      'Review catalog sync issues',
    ],
  },
  ordersPage: {
    header: {
      title: 'Orders',
      description:
        'Track orders across assigned businesses, resolve payment or shipping blockers and keep order flow moving.',
    },
    overview: [
      { label: 'Total Orders', value: '122', icon: '📦' },
      { label: 'Pending Orders', value: '18', icon: '⏳' },
      { label: 'Escalations', value: '4', icon: '🚨' },
    ],
    orders: [
      {
        id: 'ORD-1042',
        business: 'ABC Clothing',
        customer: 'Aarav Mehta',
        amount: '₹1,798',
        status: 'Processing',
        statusStyle: 'info',
      },
      {
        id: 'ORD-1038',
        business: 'XYZ Cosmetics',
        customer: 'Riya Sharma',
        amount: '₹2,499',
        status: 'Shipped',
        statusStyle: 'warning',
      },
      {
        id: 'ORD-1031',
        business: 'Fresh Food Store',
        customer: 'Kabir Jain',
        amount: '₹980',
        status: 'Cancelled',
        statusStyle: 'out',
      },
    ],
    queue: [
      'Check delayed COD confirmations',
      'Update delivery ETA for high-priority orders',
      'Escalate cancelled refund follow-up',
    ],
  },
  settingsPage: {
    header: {
      title: 'Settings',
      description:
        'Manage staff profile, security controls, notification preferences and connected work channels.',
    },
    profile: [
      { label: 'Staff Name', value: 'Mohit Sharma' },
      { label: 'Role', value: 'Operations Staff' },
      { label: 'Region', value: 'North India Accounts' },
    ],
    security: [
      { label: '2FA', value: 'Enabled on all staff logins' },
      { label: 'Last Password Update', value: '03 Mar 2026' },
      { label: 'Device Review', value: '2 active trusted devices' },
    ],
    notifications: [
      { label: 'Ticket Alerts', value: 'Instant' },
      { label: 'Owner Query Alerts', value: 'Email + Dashboard' },
      { label: 'Billing Reminders', value: 'Daily digest' },
    ],
    connections: [
      'Slack workspace connected',
      'Meta business account linked',
      'Shiprocket team access active',
    ],
  },
  staffNotificationsPage: {
    header: {
      title: 'Notifications',
      description:
        'See staff alerts for orders, campaigns, billing, delivery and owner conversations in one inbox.',
    },
    groups: [
      {
        title: 'Order Alerts',
        icon: '📦',
        items: [
          'ABC Clothing received 3 new orders in the last hour',
          'Fresh Food Store has 1 urgent COD confirmation pending',
        ],
      },
      {
        title: 'Marketing Updates',
        icon: '📢',
        items: [
          'Summer Sale campaign crossed 18k reach',
          'Glow Launch campaign comments need review',
        ],
      },
      {
        title: 'Billing Alerts',
        icon: '💳',
        items: [
          'XYZ Cosmetics invoice is still pending',
          'Manual transfer screenshot uploaded by ABC Clothing',
        ],
      },
      {
        title: 'Support Alerts',
        icon: '🎫',
        items: [
          '2 high priority tickets waiting for reply',
          'Owner query from Rahul Sharma needs response today',
        ],
      },
    ],
  },
  socialMediaPageStaff: {
    header: {
      title: 'Social Media',
      description:
        'Manage publishing, track growth and monitor platform engagement for all assigned businesses.',
    },
    overview: [
      { label: 'Scheduled Posts', value: '14', icon: '🗓️' },
      { label: 'Reels in Queue', value: '5', icon: '🎥' },
      { label: 'Engagement Rate', value: '6.4%', icon: '💬' },
    ],
    posts: [
      {
        title: 'Summer look carousel',
        business: 'ABC Clothing',
        platform: 'Instagram',
        schedule: '18 Mar 2026, 6 PM',
      },
      {
        title: 'Glow routine short',
        business: 'XYZ Cosmetics',
        platform: 'YouTube',
        schedule: '19 Mar 2026, 11 AM',
      },
      {
        title: 'Weekend combo story set',
        business: 'Fresh Food Store',
        platform: 'Instagram',
        schedule: '20 Mar 2026, 9 AM',
      },
    ],
    growth: [
      { label: 'Follower Growth', value: '+2,140', fill: 74 },
      { label: 'Reel Reach', value: '34,800', fill: 81 },
      { label: 'Story Replies', value: '426', fill: 58 },
    ],
  },
  assignedBusinessesPage: {
    header: {
      title: 'Assigned Businesses',
      description:
        'View every business assigned to you, search by owner or business, and jump into the work panel from one place.',
    },
    search: {
      businessName: 'ABC Clothing',
      ownerName: 'Rahul Sharma',
    },
    filters: {
      planType: ['All Plans', 'Starter', 'Growth', 'Pro'],
      category: ['All Categories', 'Fashion', 'Beauty', 'Grocery', 'Accessories'],
      status: ['All Statuses', 'Active', 'Inactive'],
    },
    businesses: [
      {
        id: 'abc-clothing',
        name: 'ABC Clothing',
        owner: 'Rahul Sharma',
        category: 'Fashion',
        plan: 'Growth',
        planStyle: 'info',
        assignedDate: '12 Mar 2026',
        status: 'Active',
        statusStyle: 'active',
        summary: {
          products: '5',
          campaigns: '2',
          adsStatus: 'Running',
        },
        workPanel: {
          title: 'ABC Clothing Work Panel',
          description:
            'Manage campaigns, ads, social media and content for ABC Clothing from one staff workspace.',
          marketing: [
            { label: 'Campaigns Live', value: '2 active pushes' },
            { label: 'Upcoming Task', value: 'Weekend launch banner approval' },
          ],
          ads: [
            { label: 'Ads Running', value: 'Facebook + Instagram retargeting' },
            { label: 'Budget Status', value: '78% of monthly budget used' },
          ],
          socialMedia: [
            { label: 'Next Post', value: 'Instagram reel scheduled for 6 PM' },
            { label: 'Engagement', value: '6.4% average interaction rate' },
          ],
          contentUploads: [
            'Upload summer collection carousel',
            'Add product launch reel cover',
            'Refresh homepage banner copy',
          ],
        },
      },
      {
        id: 'xyz-cosmetics',
        name: 'XYZ Cosmetics',
        owner: 'Neha Kapoor',
        category: 'Beauty',
        plan: 'Pro',
        planStyle: 'active',
        assignedDate: '10 Mar 2026',
        status: 'Active',
        statusStyle: 'active',
        summary: {
          products: '12',
          campaigns: '3',
          adsStatus: 'Running',
        },
        workPanel: {
          title: 'XYZ Cosmetics Work Panel',
          description:
            'Track paid growth, influencer activity and support follow-ups for XYZ Cosmetics.',
          marketing: [
            { label: 'Campaigns Live', value: '3 beauty funnel campaigns' },
            { label: 'Upcoming Task', value: 'Approve influencer content draft' },
          ],
          ads: [
            { label: 'Ads Running', value: 'Google search + Meta awareness ads' },
            { label: 'Budget Status', value: 'Healthy pacing at 64%' },
          ],
          socialMedia: [
            { label: 'Next Post', value: 'Product demo short scheduled tomorrow' },
            { label: 'Engagement', value: '8.1% average interaction rate' },
          ],
          contentUploads: [
            'Upload glow kit ad creatives',
            'Update review highlight cover',
            'Publish skincare routine post set',
          ],
        },
      },
      {
        id: 'fresh-food-store',
        name: 'Fresh Food Store',
        owner: 'Aman Verma',
        category: 'Grocery',
        plan: 'Starter',
        planStyle: 'warning',
        assignedDate: '08 Mar 2026',
        status: 'Inactive',
        statusStyle: 'out',
        summary: {
          products: '8',
          campaigns: '1',
          adsStatus: 'Paused',
        },
        workPanel: {
          title: 'Fresh Food Store Work Panel',
          description:
            'Handle local promotions, paused ads and daily content updates for Fresh Food Store.',
          marketing: [
            { label: 'Campaigns Live', value: '1 weekend combo campaign' },
            { label: 'Upcoming Task', value: 'Prepare festive grocery offer copy' },
          ],
          ads: [
            { label: 'Ads Running', value: 'Google local ads paused' },
            { label: 'Budget Status', value: 'Needs recharge before relaunch' },
          ],
          socialMedia: [
            { label: 'Next Post', value: 'Fresh produce story set pending upload' },
            { label: 'Engagement', value: '4.2% average interaction rate' },
          ],
          contentUploads: [
            'Upload weekly combo creative',
            'Refresh delivery banner artwork',
            'Add story highlights for offers',
          ],
        },
      },
      {
        id: 'urban-bags-studio',
        name: 'Urban Bags Studio',
        owner: 'Karan Malhotra',
        category: 'Accessories',
        plan: 'Growth',
        planStyle: 'info',
        assignedDate: '07 Mar 2026',
        status: 'Active',
        statusStyle: 'active',
        summary: {
          products: '9',
          campaigns: '2',
          adsStatus: 'Running',
        },
        workPanel: {
          title: 'Urban Bags Studio Work Panel',
          description:
            'Coordinate product pushes, ad launches and social media planning for Urban Bags Studio.',
          marketing: [
            { label: 'Campaigns Live', value: '2 product line campaigns' },
            { label: 'Upcoming Task', value: 'Launch travel daypack teaser' },
          ],
          ads: [
            { label: 'Ads Running', value: 'Instagram reels ads + Meta catalog ads' },
            { label: 'Budget Status', value: 'On track at 52%' },
          ],
          socialMedia: [
            { label: 'Next Post', value: 'Behind the scenes reel in review' },
            { label: 'Engagement', value: '5.8% average interaction rate' },
          ],
          contentUploads: [
            'Upload founder story post',
            'Replace catalog hero image',
            'Add backpack close-up carousel',
          ],
        },
      },
    ],
  },
}
