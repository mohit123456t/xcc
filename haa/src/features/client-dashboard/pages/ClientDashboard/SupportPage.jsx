import '../../features/client-dashboard/styles/support.module.css'
import { dashboardData } from '../../features/client-dashboard/data'
import { SupportToolbar } from '../../features/client-dashboard/support/support-toolbar'
import { SupportTicketForm } from '../../features/client-dashboard/support/support-ticket-form'
import { MyTicketsTable } from '../../features/client-dashboard/support/my-tickets-table'
import { LiveChatPanel } from '../../features/client-dashboard/support/live-chat-panel'
import { FaqSection } from '../../features/client-dashboard/support/faq-section'
import { ContactInfoPanel } from '../../features/client-dashboard/support/contact-info-panel'
import { RequestServicesPanel } from '../../features/client-dashboard/support/request-services-panel'

export function SupportPage() {
  const { support } = dashboardData

  return (
    <>
      <header className="page-header glass-panel">
        <SupportToolbar header={support.header} />
      </header>

      <section className="support-layout">
        <div className="support-main-column">
          <SupportTicketForm form={support.ticketForm} />
          <MyTicketsTable tickets={support.tickets} />
          <FaqSection faq={support.faq} />
        </div>

        <div className="support-side-column">
          <LiveChatPanel options={support.liveChat} />
          <ContactInfoPanel contact={support.contact} />
          <RequestServicesPanel services={support.services} />
        </div>
      </section>
    </>
  )
}
