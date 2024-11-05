import PropTypes from 'prop-types';
export const CompanyView = ({company,title}) => {
    return (
        <>
        <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">{company.name}</li>
                <li className="list-group-item">{company.fisicalNumber}</li>
            </ul>

        </>
    )
}
CompanyView.protoTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired
}