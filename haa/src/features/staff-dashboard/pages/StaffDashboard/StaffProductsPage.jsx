import '../../features/client-dashboard/styles/products.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { StaffProductsToolbar } from '../../features/staff-dashboard/products/staff-products-toolbar'
import { StaffProductsOverview } from '../../features/staff-dashboard/products/staff-products-overview'
import { StaffProductsTable } from '../../features/staff-dashboard/products/staff-products-table'
import { ProductActionsPanel } from '../../features/staff-dashboard/products/product-actions-panel'

export function StaffProductsPage() {
  const page = staffDashboardData.productsPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffProductsToolbar header={page.header} />
      </header>

      <section className="products-layout">
        <div className="products-main-column">
          <StaffProductsOverview items={page.overview} />
          <StaffProductsTable items={page.products} />
        </div>

        <div className="products-side-column">
          <ProductActionsPanel items={page.actions} />
        </div>
      </section>
    </>
  )
}
