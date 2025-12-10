import React, { useState,useContext, useEffect } from 'react';
import { Table, Input } from 'semantic-ui-react';
import {FilteredDataContext} from '../../UnifiedExperienceCenter/ModalFilter/UnifiedFilter';
const dataList = [
    {
        "id": "100001",
        "TimeStamp": "10-12-20 9:30:33PM",
        "Channel": "Online",
        "Sentiment": "Positive",
        "ResolutionStatus": "Open",
        "Initiatedby": "Agent",
        "Duration": "10 Minutes",
        "ChannelJump": "Yes",
        "Reasonforcontact": "BroadBand Issue",
        "Feedback": "Good",
        "SLAStatus": "Breached "
    },
    {
        "id": "100002",
        "TimeStamp": "10-13-20 10:45:00PM",
        "Channel": "ChatBot",
        "Sentiment": "Negative ",
        "ResolutionStatus": "Closed",
        "Initiatedby": "Customer",
        "Duration": "12 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Call Network Issue",
        "Feedback": "Bad",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100003",
        "TimeStamp": "10-14-20 5:00:00AM",
        "Channel": "IVR",
        "Sentiment": "Nuetral",
        "ResolutionStatus": "Closed",
        "Initiatedby": "Customer",
        "Duration": "14 Minutes",
        "ChannelJump": "yes",
        "Reasonforcontact": "Modem Issue",
        "Feedback": "Bad",
        "SLAStatus": "Breached "
    },
    {
        "id": "100004",
        "TimeStamp": "10/15/2020 10:45:00PM",
        "Channel": "Call Center",
        "Sentiment": "Positive",
        "ResolutionStatus": "Open",
        "Initiatedby": "Agent",
        "Duration": "16 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "BroadBand Issue",
        "Feedback": "Good",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100005",
        "TimeStamp": "10/16/2020 5:00:00AM",
        "Channel": "Mobile",
        "Sentiment": "Negative ",
        "ResolutionStatus": "Open",
        "Initiatedby": "Agent",
        "Duration": "18 Minutes",
        "ChannelJump": "Yes",
        "Reasonforcontact": "Call Network Issue",
        "Feedback": "Good",
        "SLAStatus": "Breached "
    },
    {
        "id": "100006",
        "TimeStamp": "10/17/2020 11:11:11AM",
        "Channel": "Online",
        "Sentiment": "Nuetral",
        "ResolutionStatus": "Open",
        "Initiatedby": "Customer",
        "Duration": "20 Minutes",
        "ChannelJump": "Yes",
        "Reasonforcontact": "Modem Issue",
        "Feedback": "Bad",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100007",
        "TimeStamp": "10/18/2020 1:00:22PM",
        "Channel": "ChatBot",
        "Sentiment": "Positive",
        "ResolutionStatus": "Closed",
        "Initiatedby": "Customer",
        "Duration": "22 Minutes",
        "ChannelJump": "Yes",
        "Reasonforcontact": "BroadBand Issue",
        "Feedback": "Bad",
        "SLAStatus": "Breached "
    },
    {
        "id": "100008",
        "TimeStamp": "10/19/2020 4:27:00PM",
        "Channel": "IVR",
        "Sentiment": "Negative ",
        "ResolutionStatus": "Closed",
        "Initiatedby": "Agent",
        "Duration": "24 Minutes",
        "ChannelJump": "Yes",
        "Reasonforcontact": "Call Network Issue",
        "Feedback": "Good",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100009",
        "TimeStamp": "10/20/2020 9:30:21AM",
        "Channel": "Call Center",
        "Sentiment": "Nuetral",
        "ResolutionStatus": "Open",
        "Initiatedby": "Agent",
        "Duration": "26 Minutes",
        "ChannelJump": "Yes",
        "Reasonforcontact": "Modem Issue",
        "Feedback": "Good",
        "SLAStatus": "Breached "
    },
    {
        "id": "100010",
        "TimeStamp": "10/21/2020 11:51:38AM",
        "Channel": "Store",
        "Sentiment": "Positive",
        "ResolutionStatus": "Open",
        "Initiatedby": "Customer",
        "Duration": "28 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "BroadBand Issue",
        "Feedback": "Bad",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100011",
        "TimeStamp": "10-22-20 6:59:59PM",
        "Channel": "Online",
        "Sentiment": "Negative ",
        "ResolutionStatus": "Open",
        "Initiatedby": "Customer",
        "Duration": "30 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Call Network Issue",
        "Feedback": "Bad",
        "SLAStatus": "Breached "
    },
    {
        "id": "100012",
        "TimeStamp": "10/23/2020 1:46:52PM",
        "Channel": "ChatBot",
        "Sentiment": "Nuetral",
        "ResolutionStatus": "Closed",
        "Initiatedby": "Agent",
        "Duration": "32 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Modem Issue",
        "Feedback": "Good",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100013",
        "TimeStamp": "10/24/2020 5:45:00AM",
        "Channel": "Mobile",
        "Sentiment": "Positive",
        "ResolutionStatus": "Closed",
        "Initiatedby": "Agent",
        "Duration": "34 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "BroadBand Issue",
        "Feedback": "Good",
        "SLAStatus": "Breached "
    },
    {
        "id": "100014",
        "TimeStamp": "10/25/2020 6:59:59PM",
        "Channel": "Call Center",
        "Sentiment": "Negative ",
        "ResolutionStatus": "Open",
        "Initiatedby": "Customer",
        "Duration": "36 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Call Network Issue",
        "Feedback": "Bad",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100015",
        "TimeStamp": "10/26/2020 11:59:59PM",
        "Channel": "Store",
        "Sentiment": "Nuetral",
        "ResolutionStatus": "Open",
        "Initiatedby": "Customer",
        "Duration": "38 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Modem Issue",
        "Feedback": "Bad",
        "SLAStatus": "Breached "
    },
    {
        "id": "100016",
        "TimeStamp": "10/27/2020 3:00:12AM",
        "Channel": "Online",
        "Sentiment": "Positive",
        "ResolutionStatus": "Open",
        "Initiatedby": "Agent",
        "Duration": "40 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "BroadBand Issue",
        "Feedback": "Good",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100017",
        "TimeStamp": "10/28/2020 4:44:00PM",
        "Channel": "Mobile",
        "Sentiment": "Negative ",
        "ResolutionStatus": "Closed",
        "Initiatedby": "Agent",
        "Duration": "42 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Call Network Issue",
        "Feedback": "Good",
        "SLAStatus": "Breached "
    },
    {
        "id": "100018",
        "TimeStamp": "10/29/2020 2:33:00AM",
        "Channel": "IVR",
        "Sentiment": "Nuetral",
        "ResolutionStatus": "Closed",
        "Initiatedby": "Customer",
        "Duration": "44 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Modem Issue",
        "Feedback": "Bad",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100019",
        "TimeStamp": "10/30/2020 9:30:33PM",
        "Channel": "Call Center",
        "Sentiment": "Positive",
        "ResolutionStatus": "Open",
        "Initiatedby": "Customer",
        "Duration": "46 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "BroadBand Issue",
        "Feedback": "Bad",
        "SLAStatus": "Breached "
    },
    {
        "id": "100020",
        "TimeStamp": "10/31/2020 6:30:33PM",
        "Channel": "Store",
        "Sentiment": "Negative ",
        "ResolutionStatus": "Open",
        "Initiatedby": "Agent",
        "Duration": "48 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Call Network Issue",
        "Feedback": "Good",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100021",
        "TimeStamp": "11/1/2020 12:12:12AM",
        "Channel": "Online",
        "Sentiment": "Nuetral",
        "ResolutionStatus": "Open",
        "Initiatedby": "Agent",
        "Duration": "50 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Modem Issue",
        "Feedback": "Good",
        "SLAStatus": "Breached "
    },
    {
        "id": "100022",
        "TimeStamp": "11/2/2020 7:23:00PM",
        "Channel": "ChatBot",
        "Sentiment": "Positive",
        "ResolutionStatus": "Closed",
        "Initiatedby": "Customer",
        "Duration": "52 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "BroadBand Issue",
        "Feedback": "Bad",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100023",
        "TimeStamp": "11/3/2020 8:12:20PM",
        "Channel": "IVR",
        "Sentiment": "Negative ",
        "ResolutionStatus": "Closed",
        "Initiatedby": "Customer",
        "Duration": "54 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Call Network Issue",
        "Feedback": "Bad",
        "SLAStatus": "Breached "
    },
    {
        "id": "100024",
        "TimeStamp": "11/4/2020 6:30:00PM",
        "Channel": "Call Center",
        "Sentiment": "Nuetral",
        "ResolutionStatus": "Open",
        "Initiatedby": "Agent",
        "Duration": "56 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "Modem Issue",
        "Feedback": "Good",
        "SLAStatus": "Achieved"
    },
    {
        "id": "100025",
        "TimeStamp": "11/5/2020 5:44:00AM",
        "Channel": "Store",
        "Sentiment": "Positive",
        "ResolutionStatus": "Open",
        "Initiatedby": "Agent",
        "Duration": "58 Minutes",
        "ChannelJump": "No",
        "Reasonforcontact": "BroadBand Issue",
        "Feedback": "Good",
        "SLAStatus": "Breached "
    }
];
export const DataContext = React.createContext(dataList);

function FilterTable(props) {
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(dataList);
    props.sendDataList(dataList);
    // exclude column list from filter
    const excludeColumns = ["year", "name"];

    // handle change event of search input
    const handleChange = value => {
        setSearchText(value);
        filterData(value);
    };

    // filter records by search text
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(dataList);
        else {
            const filteredData = dataList.filter(item => {
                return Object.keys(item).some(key =>
                    excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            setData(filteredData);
        }
    }

    return (


        <div className="App">
            <Input
                icon={{ name: 'search', circular: false, link: true }}
                style={{ marginLeft: 550, width: 500 }}
                type="text"
                placeholder="Search with customer Id"
                value={searchText}
                onChange={e => handleChange(e.target.value)}
            />
            <div className="box-container">
                <Table textAlign="center">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Customer ID</Table.HeaderCell>
                            <Table.HeaderCell>Time Stamp</Table.HeaderCell>
                            <Table.HeaderCell>Channel</Table.HeaderCell>
                            <Table.HeaderCell>Sentiment</Table.HeaderCell>
                            <Table.HeaderCell>Resolution Status</Table.HeaderCell>
                            <Table.HeaderCell>SLAStatus</Table.HeaderCell>

                            <Table.HeaderCell>Initiated by</Table.HeaderCell>
                            <Table.HeaderCell>Duration</Table.HeaderCell>
                            <Table.HeaderCell>Channel Jump</Table.HeaderCell>
                            <Table.HeaderCell>Reason for contact</Table.HeaderCell>
                            <Table.HeaderCell>Feedback</Table.HeaderCell>
                            <Table.HeaderCell>SLA Status</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                    {

                        props.filterdata.map((d, i) => {
                            return (


                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>{d.id}</Table.Cell>
                                        <Table.Cell>{d.TimeStamp}</Table.Cell>
                                        <Table.Cell>{d.Channel}</Table.Cell>
                                        <Table.Cell>{d.Sentiment}</Table.Cell>
                                        <Table.Cell>{d.ResolutionStatus}</Table.Cell>
                                        <Table.Cell>Achieved</Table.Cell>
                                        <Table.Cell>{d.Initiatedby}</Table.Cell>
                                        <Table.Cell>{d.Duration}</Table.Cell>
                                        <Table.Cell>{d.ChannelJump}</Table.Cell>
                                        <Table.Cell>{d.Reasonforcontact}</Table.Cell>
                                        <Table.Cell>{d.Feedback}</Table.Cell>
                                        <Table.Cell>{d.SLAStatus}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>


                            )
                        })}
                </Table>

                <div className="clearboth"></div>
                {data.length === 0 && <span>No records found to display!</span>}
            </div>


        </div>


    );
}

export default FilterTable;