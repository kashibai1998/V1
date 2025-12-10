import React from 'react';
import modelData from '../../../mock/MicroInteractionTab/ModelData.json'
import ModalView from '../../../components/modal/ModelView';

const SelectionDetails = ({ selectedNodes, date, userId,jsonPost }) => {
   
    const message = selectedNodes.reduce((result, current) => result + ' ' + current, '');
    let i;
    let arr = [];
    let transcript = [];
    if (selectedNodes.length != 0) { 
        console.log("inside selected node loop",selectedNodes )
        let nodeId = selectedNodes[0]
        modelData.map((item) => {
            console.log(userId)
            if (item.id == userId) {
               //  console.log(userId, "selectionDe")
                item.modalData.map((itemData) => {
                 //    console.log(itemData.date)
                    let todayDate = new Date()
                    let JsonDate = todayDate.setDate(todayDate.getDate() - itemData.date);
                    let convertJsonDate = convertDate(JsonDate);
                    // console.log(convertJsonDate)
                    // console.log(convertDate(date))
                    if (convertJsonDate === convertDate(date)) {
                        // console.log(itemData)
                        itemData.data.map((insideItem) => {
                            console.log(insideItem)
                            if (insideItem.id == nodeId) {
                                arr.push(insideItem.event)
                            }
                            if (insideItem.id === 3 && nodeId === 3) {
                                transcript.push(insideItem.transcript)
                            }
                        })
                    }
                    else{
                        itemData.data.map((insideItem) => {
                            console.log(insideItem)
                            if (insideItem.id == nodeId) {
                                arr.push(insideItem.event)
                            }
                            if (insideItem.id === 3 && nodeId === 3) {
                                transcript.push(insideItem.transcript)
                            }
                        })
                    }
                })
            }
        })
        // for (i = 0; i < modelData.length; i++) {

        //     let todayDate = new Date()
        //     let JsonDate = todayDate.setDate(todayDate.getDate() - modelData[i].date);
        //     let convertJsonDate = convertDate(JsonDate);
        //     if (convertJsonDate === convertDate(date)) {
        //         let j=0;
        //         for(j=0;j<modelData[i].data.length;j++){
        //             if(modelData[i].data[j].id === nodeId){
        //                 arr.push(modelData[i].data[j].event)
        //             }
        //             if(modelData[i].data[j].id === 3 && nodeId === 3){
        //                 transcript.push(modelData[i].data[j].transcript)
        //             }
        //         }

        //     }
        // }
    }
    function convertDate(time) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(time)
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-')
    }
    console.log("filled araray after clicking node",arr)
    return (
        <div>
            {selectedNodes.length != 0 && <ModalView message={message} data={arr} transcript={transcript}
             jsonPost = {jsonPost}
            />}
        </div>
    )
};

export default SelectionDetails;
