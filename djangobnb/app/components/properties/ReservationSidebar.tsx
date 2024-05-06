'use client'

import {useState, useEffect} from  'react';
import { Range } from 'react-date-range';
import { differenceInDays, eachDayOfInterval, format} from 'date-fns';
import Decimal from 'decimal.js';
import DatePicker from '../forms/Calendar';
import apiService from '@/app/services/apiService';
import useLoginModel from '@/app/hooks/useLoginModel';

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

export type Property ={
    id: string;
    guests: number;
    price_per_night: number;
}

interface ReservationSidebarProps {
    userId: string | null,
    property: Property
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
    property,
    userId
}) => {
    const loginModal = useLoginModel();

    const [fee, setFee] = useState<number>(0);
    const [nights, setNights] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [minDate, setMinDate] = useState<Date>(new Date());
    const [bookedDates, setBookedDates] = useState<Date[]>([]);
    const [guests, setGuests] = useState<string>('1');
    const guestsRange = Array.from({ length: property.guests }, (_, index) => index + 1)

    const performBooking = async () => {
        console.log('performBooking', userId);

        if (userId) {
            if (dateRange.startDate && dateRange.endDate) {
                const formData = new FormData();
                formData.append('guests', guests);
                formData.append('start_date', format(dateRange.startDate, 'yyyy-MM-dd'));
                formData.append('end_date', format(dateRange.endDate, 'yyyy-MM-dd'));
                formData.append('number_of_nights', nights.toString());
                formData.append('total_price', totalPrice.toString());

                const response = await apiService.post(`/api/properties/${property.id}/book/`, formData);

                if (response.success) {
                    console.log('Booking successful')
                } else {
                    console.log('Something went wrong...');
                }
            }
        } else {
            loginModal.open();
        }
    }

    const _setDateRange = (selection: any) => {
        const newStartDate = new Date(selection.startDate);
        const newEndDate = new Date(selection.endDate);

        if (newEndDate <= newStartDate) {
            newEndDate.setDate(newStartDate.getDate() + 1);
        }

        setDateRange({
            ...dateRange,
            startDate: newStartDate,
            endDate: newEndDate
        })
    }

    const getReservations = async () => {
        const reservations = await apiService.get(`/api/properties/${property.id}/reservations/`)

        let dates: Date[] = [];

        reservations.forEach((reservation: any) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.start_date),
                end: new Date(reservation.end_date)
            });

            dates = [...dates, ...range];
        })

        setBookedDates(dates);
    }

    // calculate fee and total amount
    useEffect(() => {
        getReservations();

        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInDays(
                dateRange.endDate,
                dateRange.startDate
            );
            if (dayCount > 0 && property.price_per_night) {
                const nights = new Decimal(dayCount);  
                const nightlyRate = new Decimal(property.price_per_night);  
                const feeRate = new Decimal(5).div(100);  // 5%
    
                const fee = nightlyRate.mul(nights).mul(feeRate); 
                const total = nightlyRate.mul(nights).plus(fee);  
    
                setFee(fee.toNumber());  
                setTotalPrice(total.toNumber());
                setNights(dayCount);  
            } else {
                const nightlyRate = new Decimal(property.price_per_night);
                const fee = nightlyRate.mul(new Decimal(0.05));  // 計算單晚費用的 5%
                
                setFee(fee.toNumber());
                setTotalPrice(nightlyRate.plus(fee).toNumber());
                setNights(1);
            }
        }
    }, [dateRange, property.price_per_night]);
    
    


    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">$ {property.price_per_night} per might</h2>

            <DatePicker
                value={dateRange}
                bookedDates={bookedDates}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label htmlFor="" className="mb-2 block font-bold text-ml">Guests</label>

                <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full -ml-1 text-xm" name="Guests" id=""
                >
                    {guestsRange.map(
                        number =>(
                            <option key={number} value={number}>{number}</option>
                        ))}
                </select>
            </div>

            <div
                onClick={performBooking}
                className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
                Book
            </div>
        
        
            <div className="mb-4 flex justify-between align-center">
                <p>${property.price_per_night} * {nights} nights</p>

                <p>${property.price_per_night * nights}</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Djangobnb fee</p>

                <p>${fee}</p>
            </div>

            <hr />
            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total price</p>

                <p>${totalPrice}</p>
            </div>
        </aside>
    )
}

export default ReservationSidebar;