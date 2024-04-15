import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableAppoinements from '../AvailableAppointments/AvailableAppointments';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import dayjs from 'dayjs';

const Appointment = () => {
    const currentDate = new Date();
    const [date, setDate] = React.useState(dayjs(currentDate));
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppoinements date={date}></AvailableAppoinements>
        </div>
    );
};

export default Appointment;