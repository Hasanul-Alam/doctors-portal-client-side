import React from 'react';
import AvailableAppoinements from '../AvailableAppointments/AvailableAppointments';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import dayjs from 'dayjs';

const Appointment = () => {
    const currentDate = new Date();
    const [date, setDate] = React.useState(dayjs(currentDate));
    return (
        <div>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppoinements date={date}></AvailableAppoinements>
        </div>
    );
};

export default Appointment;