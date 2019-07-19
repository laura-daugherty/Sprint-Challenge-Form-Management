import React, {useEffect, useState} from 'react';
import { axiosAuth } from './axiosAuth';

const DataList = (props) => {
  console.log(props)
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axiosAuth()
      .get('http://localhost:5000/api/restricted/data')
      .then(response => {
        setDatas(response.data)
      })
      .catch(err => console.log(err))
  }, [])
      
  return (
    <div>
      <div>
        {datas.map(data => {
          return (
            <div
              key={data.name}
            >
              {data.name}
              {data.couse}
              {data.ingredients}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default DataList
    
  
