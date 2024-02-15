// JobCard.js
import React from 'react';
import dayjs from 'dayjs';

const JobCard = (props) => {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff("1/5/2003", 'day');

    return (
        <div className='mx-40 mb-4'>
            <div className='flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-400 via-indigo-600 to-purple-800 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
                <div className='flex flex-col items-start gap-3 text-white'>
                    <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                    <p>{props.type} &#x2002; {props.experience} &#x2002; {props.location}</p>
                    <div className='flex items-center gap-2'>
                        <p>{props.skills} &#x2002;</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='text-gray-500'>Posted 1 days ago</p>
                    <a href={props.job_Link}>
                        <button className='text-white bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 px-10 py-2 rounded-md'>Apply</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
