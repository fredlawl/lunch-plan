import DatePicker from "react-date-picker";
import {Link} from "react-router-dom";

export const DateNavigation = (props) => {
    const nextDate = (date) => {
        return calculateDate(date, +1).toDateString();
    }

    const prevDate = (date) => {
        let prev = calculateDate(date, -1);
        if (prev < props.today) {
            prev = new Date(props.today);
        }

        return prev.toDateString();
    }

    const calculateDate = (date, days) => {
        const copy = new Date(date);
        copy.setDate(date.getDate() + days);
        return copy;
    }

    return (
        <>
            <Link replace={true} to={"?date=" + encodeURIComponent(prevDate(props.selectedDate))} className={"text-4xl inline-block py-2 px-4 " + ((props.selectedDate < props.today) ? "text-gray-500 cursor-not-allowed" : "text-white")}>&lt;</Link>
            <DatePicker value={props.selectedDate} onChange={props.onChange} />
            <Link replace={true} to={"?date=" + encodeURIComponent(nextDate(props.selectedDate))} className={"text-4xl inline-block py-2 px-4 text-white"}>&gt;</Link>
        </>
    );
};