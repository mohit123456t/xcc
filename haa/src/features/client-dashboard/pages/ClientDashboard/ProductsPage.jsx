import '../../features/client-dashboard/styles/products.module.css'
import { dashboardData } from '../../features/client-dashboard/data'
import { ProductToolbar } from '../../features/client-dashboard/products/product-toolbar'
import { ProductFilters } from '../../features/client-dashboard/products/product-filters'
import { ProductTable } from '../../features/client-dashboard/products/product-table'
import { AddProductForm } from '../../features/client-dashboard/products/add-product-form'
import { ProductMedia } from '../../features/client-dashboard/products/product-media'
import { InventoryPanel } from '../../features/client-dashboard/products/inventory-panel'
import { ProductPerformance } from '../../features/client-dashboard/products/product-performance'

export function ProductsPage() {
  const { products } = dashboardData

  return (
    <>
      <header className="page-header glass-panel">
        <ProductToolbar header={products.header} />
      </header>

      <section className="products-layout">
        <div className="products-main-column">
          <ProductFilters filters={products.filters} />
          <ProductTable products={products.items} />
        </div>

        <div className="products-side-column">
          <InventoryPanel inventory={products.inventory} />
          <ProductMedia media={products.media} />
        </div>
      </section>

      <section className="products-bottom-grid">
        <AddProductForm form={products.form} />
        <ProductPerformance performance={products.performance} />
      </section>
    </>
  )
}
