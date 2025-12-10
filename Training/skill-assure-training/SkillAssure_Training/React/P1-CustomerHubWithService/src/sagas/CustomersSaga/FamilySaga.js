import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import url from '../../constants/urlConstants';

export function* getFamilyData(payload) {
    console.log(payload)
    let accountId=payload.userId.accountId
    const FamilyDataJson = yield fetch(`${url.GetFamilyMembersByAcc}${accountId}`).then(response => response.json(),);
    console.log(FamilyDataJson)
    let Data = {
        profileImage: null,
        name: null,
        age: null
    }
    let family = [];
    for (let k = 0; k < FamilyDataJson.length; k++) {
        Data.profileImage = FamilyDataJson[k].firstName + ".jpg"
        Data.name = FamilyDataJson[k].firstName + " " + FamilyDataJson[k].lastName
        Data.age = FamilyDataJson[k].age;
        family[k] = Data;
        Data = {
            profileImage: null,
            name: null,
            age: null
        }
    }
    yield put({
        type: ActionTypes.GET_FAMILY_DATA_RES,
        familyData: family
    });
}


/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_FAMILY_DATA_REQ, getFamilyData);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_FAMILY_DATA_REQ, getFamilyData)]);
}
