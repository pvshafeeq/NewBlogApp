import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table, Button, Segment, Container } from 'semantic-ui-react'
import axios from 'axios';
import ReadMoreReact from 'read-more-react';
import { Link } from 'react-router-dom'

const BlogList = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/blog')
      .then((getData) => {
        setApiData(getData.data);
        console.log(getData.data)
      })
  }, [])

  const setData = (id, title, category, author, content) => {
    localStorage.setItem('ID', id);
    localStorage.setItem('title', title);
    localStorage.setItem('category', category);
    localStorage.setItem('author', author);
    localStorage.setItem('content', content);
  }

  const getData = () => {
    axios.get('http://localhost:8082/api/blog')
      .then((getData) => {
        setApiData(getData.data);
        console.log(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8082/api/blog/${id}`)
      .then(() => {
        getData();
      })
  }

  const getUserName = () => {
    return sessionStorage.getItem("username");
  }

  return (
    <Container>
      <br></br>
      <p className="label">
        Welcome User: <strong>{getUserName()}</strong>
      </p>
      <div className="p-3 mb-2 bg-secondary text-white"><b>Blog Settings</b></div>


      <Segment>
        <Button primary>
          <Link to='/newblog' style={{ color: '#FFF' }}>Add New</Link>
        </Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Author</Table.HeaderCell>
              <Table.HeaderCell>Content</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {apiData.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.title}</Table.Cell>
                  <Table.Cell>{data.category}</Table.Cell>
                  <Table.Cell>{data.author}</Table.Cell>
                  <Table.Cell>{data.content}</Table.Cell>
                  <Table.Cell>
                    <Link to='/editblog'>
                      <Button color='green' onClick={() => setData(data._id, data.title, data.category, data.author, data.content)}>Edit</Button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Button color='red' onClick={() => onDelete(data._id)}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </Segment>
    </Container>
  )
}

export default BlogList