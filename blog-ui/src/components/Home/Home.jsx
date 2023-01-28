import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table, Button, Segment, Container } from 'semantic-ui-react'
import axios from 'axios';

const Home = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/blog')
      .then((getData) => {
        setApiData(getData.data);
      })
  }, [])

  const getData = () => {
    axios.get('http://localhost:8082/api/blog')
      .then((getData) => {
        setApiData(getData.data);
        console.log(getData.data);
      })
  }

  return (
    <div className="container">
      <div className="row">
        
        <div className="col clo-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="p-3 mb-2 mt-2 bg-secondary text-white"><b>Blogs</b></div>
          <div className="row g-3 mt-2">
            
            {/* Card 1 starts here */}
            {apiData.map(
              (item, key) => {
                return <div className="clo-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 border-success">
                  <div className="card mb-3 ">
                    <div className="row g-0">

                      <div className="col-md-12">
                        <div className="card-header bg-transparent border-success">{item.category}</div>
                        <div className="card-body text-success">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.content}</p>
                        </div>
                        <div className="card-footer bg-transparent border-success text-align-right">- {item.author}</div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home