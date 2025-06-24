import income from '../../../assets/income.png'
import { transaction } from '../../../utilis'

export default function Income(){
    
    const transactions = transaction.map((item, index) => {
        return (
            <div className='income-transaction-div' key={index}>
                <h1>${item.price}</h1>
                <p> {item.time} </p>
            </div>
        )
    })


    return (
        <section className="income-section">
            <div className="income-first-section">
                <h1>Income</h1>
                <p>Last <span>30 days</span> </p>
                <h1>$2,260</h1>
                <div className="income-img-section">
                    <img src={income} alt={'Image of a income graph'} />
                </div>
            </div>

            <div className='income-last-section'>
                <div className='income-last-section-info'>
                    <h1>Your transactions ({transaction.length})</h1>
                    <p>Last <span>30 days</span> </p>
                </div>
                {transactions}
            </div>
        </section>
    )
}