import DatePicker from "react-date-picker";
import {addDays, isAfter} from "date-fns";

export const DateNavigation = (props) => {
    const nextDate = (date) => {
        return addDays(date, 1);
    }

    const prevDate = (date) => {
        return addDays(date, -1);
    }

    return (
        <>
            {isAfter(props.selectedDate, props.today) ? (
                <button onClick={() => {
                    props.onChange(prevDate(props.selectedDate));
                }} className={"focus:outline-none text-4xl inline-block py-2 px-4 text-white"}>&lt;</button>
            ) : (
                <button disabled={true} className={"focus:outline-none text-gray-500 cursor-not-allowed text-4xl inline-block py-2 px-4"}>&lt;</button>
            )}
            <DatePicker value={props.selectedDate} onChange={props.onChange} />
            <button onClick={() => {
                props.onChange(nextDate(props.selectedDate));
            }} className={"focus:outline-none text-4xl inline-block py-2 px-4 text-white"}>&gt;</button>
        </>
    );
}