import {useState} from "#app";

export const useCalendar = () => {
    const mySchedule = useState('mySchedule',() => [])
    const myEvents = useState('myEvents',() => [])


    return {

    }
}