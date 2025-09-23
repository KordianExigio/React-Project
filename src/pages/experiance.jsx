import Sidebar from "../components/SideBar";
import Gallery from "../components/Gallery";
import Seats from "../components/Seats";
import BookingSummary from "../components/BookingSummary";
import AuthForms from "../components/AuthForms";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sidebar (hidden until opened) */}
      <Sidebar />

      {/* Gallery */}
      <section className="p-6">
        <Gallery />
      </section>

      {/* Auth Forms */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      {/* <AuthForms/>   */}
      <Seats/>     
    </div>

      {/* Booking Summary */}
      <BookingSummary />
    </div>
  );
}

