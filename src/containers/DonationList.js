import React from 'react';
import Donations from '../components/Donations';
const DonationsList = (props) => {

    return (
        <ul class="col-4 list-unstyled recent-donations">
            <h5 class='my-4'>Recent Donations</h5>
            {(props.donations.length > 0) ? 
            props.donations.map((obj, i) => { 
                return <Donations name={obj.name} amount={obj.amount
                } caption={obj.caption} key={i} /> 
            }): <h3> No Donations</h3>}
        </ul>
    )
}

export default DonationsList;