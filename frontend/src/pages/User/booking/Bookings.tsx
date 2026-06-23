import BookingCard from "@/features/booking/components/BookingCard"
import bookings from "@/data/Bookings"

function Bookings(){
 return(
    <div className="p-15 h-full">
        <section>
        <p className="text-3xl font-bold tracking-wide">My bookings</p>
          <p>
            Manage your booked destinations, tour packages and blogs
          </p>        
          </section>
         <section>
            <BookingCard Bookings={bookings}/>
            </section>         
    </div>)
}
export default Bookings