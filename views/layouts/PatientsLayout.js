import { Patient } from "../components/Patient.js"

export default class PatientsLayout {
    displayPatients (patients){
        return patients.map((patient) => {
            const PatientComponent = new Patient(patient);
             return PatientComponent.displayPatient()
        }).join("")
    }
   getHtml(patients) {
        return `<body>
        <div class="wrapper-patients">
            <div class="header">
                <img src="./source/img/logo.png" width="132" height="32">
                <div class="logo-container">
                    <div class="doctor-name">
                        <h2>Miranda Nelson</h2>
                        <p>Doctor</p>
                    </div>
                    <div>
                        <img src="./source/img/avatar.png">
                    </div>
                </div>
            </div>
            <div class="container-patients">
                <div class="patients-button-container">
                    <a class="patients-button" href="#patients">Patients</a>
                    <a class="patients-button" href="#resolutions">Resolutions</a>
                </div>
                <h2>My Patients</h2>
                <div class="patient-box">
                    ${this.displayPatients(patients)}
            </div>
        </div>
    </body>
    
    `
    }
}

