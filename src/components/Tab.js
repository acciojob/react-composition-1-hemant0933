import React,{useState} from 'react';

const Tab = ({tabs}) => {
    const [active,setActive] = useState(0);

    const handleClick = (index) => {
      
        setActive(index);
    }

  return (
    <div>
      <ul>
        {
            tabs.map((val,index) => (
                <li 
                 key={index}
                 className={`tab-item ${index === active ? 'active' : ''}`}
                 onClick={()=> handleClick(index)}>{val}</li>
            ))
        }
      </ul> <br/><br/>
      <p>This is the content for {tabs[active]}.</p>

    </div>
  );
}

export default Tab;
