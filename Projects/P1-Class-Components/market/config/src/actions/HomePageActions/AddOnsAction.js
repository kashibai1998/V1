import { GET_ADD_ONS_DATA } from '../../constants/actionconstants';
import billings from '../../mock/billing.json';

function addOnsData(id) {
    const data = getAddOnsData(id)
    return { type: GET_ADD_ONS_DATA, data };
}
export default addOnsData;

function getAddOnsData(id) {
    if (id === "undefined") {
        id = 1
    }
    let billing = billings[0], i, j, uId;
    for (i = 0; i < billings.length; i++) {
        if (billings[i].userId === id) {
            billing = billings[i]
            break;
        }
    }
    return billing.addOns;
}


//here data fetch from api