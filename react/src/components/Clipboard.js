/* jshint esversion: 6*/
.then(fetch(`/api/v1/locations/${appointment.location_id}`, {
  credentials: 'same-origin'
})
.then(response => {
  if (response.ok) {
    return response;
  } else {
    let errorMessage = `${response.status}, (${response.statusText})`;
    let error = new Error(errorMessage);
    throw(error);
  }
})
.then(response => response.json())
.then(body => {
  let locationName = body.location.name;
  debugger;
.then(fetch(`/api/v1/timeslots/${appointment.timeslot_id}`, {
  credentials: 'same-origin'
})
.then(response => {
  if (response.ok) {
    return response;
  } else {
    let errorMessage = `${response.status}, (${response.statusText})`;
    let error = new Error(errorMessage);
    throw(error);
  }
})
.then(response => response.json())
.then(body => {
  let timeslotDay = body.timeslot.day;
  let timeslotTime = body.timeslot.time;
  debugger;
