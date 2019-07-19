import React, {useEffect, useState} from 'react';
import { axiosAuth } from './axiosAuth';

const DataList = (props) => {
  console.log(props)
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosAuth()
      .get('restricted/data')
      .then(response => {
        console.log("response", response)
        setData(response.data)
      .catch(err => console.log(err))
    }, [])
    return (
      <div>
        {data.map(data => {
          return (
            <div>
              <div>DataList</div>
              <div
                key={data.id}
              >
                {data}
              </div>
            </div>
          )
        })}
      </div>
    )
  })
}
export default DataList
    
  
