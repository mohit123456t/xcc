import { useState } from 'react'
import '../../features/client-dashboard/styles/marketing.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { AssignedBusinessesToolbar } from '../../features/staff-dashboard/assigned-businesses/assigned-businesses-toolbar'
import { AssignedBusinessesSearch } from '../../features/staff-dashboard/assigned-businesses/assigned-businesses-search'
import { AssignedBusinessesFilters } from '../../features/staff-dashboard/assigned-businesses/assigned-businesses-filters'
import { BusinessSummaryCards } from '../../features/staff-dashboard/assigned-businesses/business-summary-cards'
import { AssignedBusinessesTable } from '../../features/staff-dashboard/assigned-businesses/assigned-businesses-table'
import { BusinessSummaryList } from '../../features/staff-dashboard/assigned-businesses/business-summary-list'

export function StaffAssignedBusinessesPage() {
  const page = staffDashboardData.assignedBusinessesPage
  const [search, setSearch] = useState(page.search)
  const [filters, setFilters] = useState({
    planType: page.filters.planType[0],
    category: page.filters.category[0],
    status: page.filters.status[0],
  })

  const filteredBusinesses = page.businesses.filter((business) => {
    const matchesBusinessName = business.name
      .toLowerCase()
      .includes(search.businessName.toLowerCase())
    const matchesOwnerName = business.owner
      .toLowerCase()
      .includes(search.ownerName.toLowerCase())
    const matchesPlan =
      filters.planType === 'All Plans' || business.plan === filters.planType
    const matchesCategory =
      filters.category === 'All Categories' ||
      business.category === filters.category
    const matchesStatus =
      filters.status === 'All Statuses' || business.status === filters.status

    return (
      matchesBusinessName &&
      matchesOwnerName &&
      matchesPlan &&
      matchesCategory &&
      matchesStatus
    )
  })

  const handleSearchChange = (field, nextValue) => {
    setSearch((current) => ({
      ...current,
      [field]: nextValue,
    }))
  }

  const handleFilterChange = (field, nextValue) => {
    setFilters((current) => ({
      ...current,
      [field]: nextValue,
    }))
  }

  return (
    <>
      <header className="page-header glass-panel">
        <AssignedBusinessesToolbar header={page.header} />
      </header>

      <section className="marketing-layout">
        <div className="marketing-main-column">
          <AssignedBusinessesSearch
            value={search}
            onChange={handleSearchChange}
          />
          <BusinessSummaryCards businesses={filteredBusinesses} />
        </div>

        <div className="marketing-side-column">
          <AssignedBusinessesFilters
            options={page.filters}
            value={filters}
            onChange={handleFilterChange}
          />
        </div>
      </section>

      <AssignedBusinessesTable businesses={filteredBusinesses} />
      <BusinessSummaryList businesses={filteredBusinesses} />
    </>
  )
}
