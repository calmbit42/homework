let qaAutomation = {
    firstName: "Robin",
    lastName: "Good",
    capacityInHours: 80,
    workloadInPercentage: 200,
    vacationDaysAvailable: 20,
    vacationDaysRequested: 0,
    sickLeaveDaysAvailable: 15,
    sickLeaveDaysRequested: 0,
    getInfo: function() {
        let info = "";

        for (let prop in this) {
            info += prop + ": " + this[prop] + "\n";
        }

        console.log(info);
    }
};