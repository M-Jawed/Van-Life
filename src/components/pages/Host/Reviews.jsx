import { hostReviews } from "../../../utilis"
import reviewImage from '../../../assets/review.png'
import frame27 from '../../../assets/Frame 27.png'
export default function Reviews(){

    const reviews = hostReviews.map((item, index) => {
        return (
            <div className="host-reviews">
                <h1> {item.reviews} </h1>
                <p> {item.name} <span> {item.date} </span> </p>
                <p> {item.description} </p>
            </div>
        )
    })

    return (
        <section className="host-reviews-section">
            <h1> Your reviews</h1>
            <p>Last <span>30 days</span></p>
            <div className="host-review-img-div">
                <img src={reviewImage} alt="Image of a review bar with 5 the most rated bar" />
            </div>

            <div className="host-user-reviews">
                <h1> Reviews ( {hostReviews.length} ) </h1>
                {reviews}
            </div>
        </section>
    )
}