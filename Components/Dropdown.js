import React,{useState} from 'react'

function Dropdown(props) {
    const {id,data}=props
    const [selectedCount, setSelectedCount] = useState(0);
    const handleButtonClick = () => {
        const dropdown = document.getElementById(id);
        dropdown.classList.toggle('hidden');
    };
    const handleCheckboxChange = (e) => {
        const checkbox = e.target;
        setSelectedCount((prevCount) => (checkbox.checked ? prevCount + 1 : prevCount - 1));
    };
    return (
        <div className='relative'>
            <button onClick={handleButtonClick} className="text-white px-4 py-2 flex justify-center items-center gap-2 group">
                <span className='group-hover:underline capitalize'>{id}</span>
                <i className=" text-xs fa-solid fa-chevron-down"></i>
            </button>
            <div id={id} className="hidden absolute top-10 left- z-10 mt-2 w-64 bg-white border border-gray-300 shadow-lg">
                <div className='flex flex-col p-5 gap-4'>
                    <div>
                        <span className='text-lg text-black'>{selectedCount} Selected</span>
                    </div>
                    <hr className='w-full' />
                    {data.map((item) => {
                        return (
                            <div key={item} className='flex items-center gap-5'>
                                <input type="checkbox" id={item} name={item} value={item} onChange={handleCheckboxChange} />
                                <label className='text-lg text-black' htmlFor={item}>{item}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dropdown