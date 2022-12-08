import React from 'react'



import('./donor.css')

const Donors = ({ donation }) => {



    return (
        <section>
            <div className='donor-box'>
                <div className='donor-user-details'>
                    {/* 
                    <img
                        className='donorImage'
                        src={donation.donor.image}
                        alt='user'
                    /> */}
                    <div className='donatedContainer'>
                        <div className='donor-username'>
                            {donation.donor.firstName}
                            donated :
                            {donation.donationAmount.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'PHP',
                                })}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Donors;