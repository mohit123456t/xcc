import '../../../client-dashboard/styles/products.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../data'
import { StaffProductsToolbar } from '../../products/staff-products-toolbar'
import { StaffProductsOverview } from '../../products/staff-products-overview'
import { StaffProductsTable } from '../../products/staff-products-table'
import { ProductActionsPanel } from '../../products/product-actions-panel'

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
