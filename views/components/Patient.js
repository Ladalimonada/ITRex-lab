export class Patient {
    constructor({avatar, firstName,lastName, status, description, time}) {
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = status;
        this.description = description;
        this.time = time;
    }
    displayPatient()  {
        return `
        <div class="patient-element">
                        <div class="patient-element-header">
                            <img src=${this.avatar}>
                            <div class="patient-element-header-container">
                                <h3>${this.firstName} ${this.lastName}</h3>
                                <p>${this.status}</p>
                            </div>
                        </div>
                        <div class="patient-element-time">
                            <img src="./source/img/clock-three.png">
                            <h4>${this.time}</h4>
                        </div>
                        <div class="patient-element-desc">
                            <img src="./source/img/clipboard-blank.png">
                            <p>${this.description}</p>
                        </div>
                    </div>
                    `
    }
}