
import './AllEmployees.css';
import LeafImage from '../../img/leaf.png'
import EmployeeCard from './EmployeeCard/EmployeeCard';


const AllEmployees = () => {
    let data = [
        {
            emp_name: "Harry Joenasir",
            emp_available: true

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: false

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: true

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: false

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: true

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: false

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: true

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: false

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: true

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: false

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: true

        },
        {
            emp_name: "Harry Joenasir",
            emp_available: false

        }
    ]

    return (

        <>
            <div className="cover_image">
                {/* <img src={ScheduleImage} alt="" /> */}
                <p className="reception_heading">
                    Employees
                </p>

            </div>

            <div>
                <img src={LeafImage} alt="" className="leaf leaf_pos" />
            </div>

            <div className="allemployees_container">
                <div className="all_emp_heading">
                    Employees
                </div>

                <div className='emp_cards_positioning'>
                    {data.map((data) => (
                        <EmployeeCard data={data} />
                    ))}

                </div>





            </div>

        </>
    )
}

export default AllEmployees;