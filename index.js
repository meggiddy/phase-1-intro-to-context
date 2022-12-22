// Your code here
function createEmployeeRecord(employeeRecord) {
  const [firstName, familyName, title, payPerHour] = employeeRecord;
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
}
function createEmployeeRecords(employeeDataArray) {
  return employeeDataArray.map(createEmployeeRecord);
}
function createTimeInEvent(employeeRecord, date) {
  let newDate = date.split(" ");
  employeeRecord.timeInEvents.push({
    date: newDate[0],
    type: "TimeIn",
    hour: parseInt(newDate[1], 10),
  });
  return employeeRecord;
}
function createTimeOutEvent(employeeRecord, date) {
  let newDate = date.split(" ");
  employeeRecord.timeOutEvents.push({
    date: newDate[0],
    type: "TimeOut",
    hour: parseInt(newDate[1], 10),
  });
  return employeeRecord;
}
function hoursWorkedOnDate(employeeRecord, date) {
  let timeInEvent = employeeRecord.timeInEvents.find(
    (event) => event.date == date
  );
  let timeOutEvent = employeeRecord.timeOutEvents.find(
    (event) => event.date == date
  );
  //if not found 0
  if (!timeInEvent || !timeOutEvent) {
    return 0;
  }
  let workHours = (timeOutEvent.hour - timeInEvent.hour) / 100;
  return workHours;
}
function wagesEarnedOnDate(employeeRecord, date) {
  let workHours = hoursWorkedOnDate(employeeRecord, date);
  return workHours * 27;
}
function allWagesFor(employeeRecord) {
  let totalPay = 0;

  employeeRecord.timeInEvent.forEach((timeInEvent, i) => {
    const timeOutEvent = employeeRecord.timeOutEvents[i];
    const hourOut = timeOutEvent.hour;
    const hourIn = timeInEvent.hour;
    const hoursWorked = hourOut - hourIn;
    const pay = hoursWorked * 27;
    //totalPay += wagesEarnedOnDate(employeeRecord, date); calculate by date pay
  });
}

const cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27]);
// Earns 324
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900");
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100");
// Earns 54
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900");
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1700");
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-16 0900");
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-16 1100");
console.log(updatedBpRecord);
console.log(updatedBpRecord.timeInEvents);
console.log(updatedBpRecord.timeOutEvents[0]);
console.log(updatedBpRecord.timeInEvents[0].hour);
console.log(updatedBpRecord.timeOutEvents[0].hour);
//console.log(allWagesFor(updatedBpRecord));
