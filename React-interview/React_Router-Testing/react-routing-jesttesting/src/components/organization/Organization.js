import * as QueryString from 'query-string';
import { useHistory } from 'react-router';

const Organization = (props) => {
    const allQueryParams = QueryString.parse(props.location.search);
    const firstName = allQueryParams.firstName;
    const lastName = allQueryParams.lastName;
    console.log(firstName);
    console.log(lastName);

    let history = useHistory();
    const goToHome = () => {
        history.push('/about');
    }

    return (
        <div>
            <h1>Organization Component by {firstName} and {lastName}</h1><br /><br />
            <input type="button" value="Home" onClick={goToHome} />
        </div>
    )
}
export default Organization;