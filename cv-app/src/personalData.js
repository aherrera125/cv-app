import './personalData.css';

function PersonalData(Prop) {
    return (
        <div className="right">
            <div className="margins">
                <div className="margin-inherit">
                    <h1>Prop.name</h1>
                    <h4><b>Date of birth:</b>Prop.dateOfBirth</h4>
                    <h4><b>Nationality: </b>Prop.nationality</h4>
                    <h4><b>Gender: </b>Prop.gender</h4>
                    <h4><b>Phone number: </b>Prop.phoneNumber</h4>
                    <h4><b>Email address: </b>Prop.email</h4>
                    <h4><b>LinkeddIn: </b><a
                        href="https://www.linkedin.com/in/alejandro-herrera-23910a52/">Prop.linkedIn</a>
                    </h4>
                    <h4><b>Address: </b>Prop.address</h4>
                </div>
            </div>
        </div>
    );
}

export default PersonalData;