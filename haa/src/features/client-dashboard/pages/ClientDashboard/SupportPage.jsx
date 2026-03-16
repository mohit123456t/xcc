import '../../../client-dashboard/styles/support.module.css'
import { dashboardData } from '../../data'
import { SupportToolbar } from '../../support/support-toolbar'
import { SupportTicketForm } from '../../support/support-ticket-form'
import { MyTicketsTable } from '../../support/my-tickets-table'
import { LiveChatPanel } from '../../support/live-chat-panel'
import { FaqSection } from '../../support/faq-section'
import { ContactInfoPanel } from '../../support/contact-info-panel'
import { RequestServicesPanel } from '../../support/request-services-panel'

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
