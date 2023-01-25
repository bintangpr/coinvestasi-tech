import React, { useState } from 'react';
import RelatedResponse from '../component/relatedResponse';

function Related(){
    const [data, setData] = useState([]);
    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}berita?tags=281`)
          .then(response => response.json())
          .then(data => setData(data.slice(0, 3)))
      
    }, []);
    
    
    return(
        <div className="ml-6">
            <h2 className="font-poppins font-bold text-xl mb-4">Related</h2>
            <div className='mt-4'>
                {data.map(item => (
                    // MASUKIN GET LAGI BUAT AUTHOR DAN TAGS
                    <RelatedResponse key={item.id} theme={item.id} title={item.title.rendered} author={item.author} date={item.date_gmt} url={item.link} />
                ))}
            </div>
        </div>
    )
}

export default Related