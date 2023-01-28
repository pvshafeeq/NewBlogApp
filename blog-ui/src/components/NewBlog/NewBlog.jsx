import React, { useState } from 'react';
import { Icon, Label, Menu, Table, Button, Segment, Container, Form, TextArea, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-dropdown/style.css';

const categoryOptions = [
  {
    key: 'Food',
    text: 'Food',
    value: 'Food'
  },
  {
    key: 'Travel',
    text: 'Travel',
    value: 'Travel'
  },
  {
    key: 'Technology',
    text: 'Technology',
    value: 'Technology'
  },
  {
    key: 'Politics',
    text: 'Politics',
    value: 'Politics'
  },
  {
    key: 'Lifestyle',
    text: 'Lifestyle',
    value: 'Lifestyle'
  }
]


const NewBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const sendDataToAPI = () => {
    const blogData = {
      "title": title,
      "category": category,
      "author": author,
      "content": content
    };

    axios.post('http://localhost:8082/api/blog', blogData)
      .then(() => {
        navigate('/cpanel');
      })
  }

  return (
    <Container>
      <br></br>
      <div className="p-3 mb-2 bg-secondary text-white"><b>New Blog</b></div>
      <Segment>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input name='title' value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Category</label>
            <Dropdown placeholder='Select Category' fluid selection options={categoryOptions} value={category} onChange={(e, data) => setCategory(data.value)} />

          </Form.Field>

          <Form.Field>
            <label>Author</label>
            <input name='author' value={author} placeholder='Author' onChange={(e) => setAuthor(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Content</label>
            <TextArea rows={5} name='content' placeholder='Content' onChange={(e) => setContent(e.target.value)} />
          </Form.Field>

          <Button color='grey' type='submit' onClick={sendDataToAPI}>Submit</Button>
          {/* <Button color='grey'>
            <Link to='/cpanel' style={{ color: '#FFF' }}>Cancel</Link>
          </Button> */}
           <Button color='grey'>
            <Link to='/cpanel' style={{ color: '#FFF' }}>Cancel</Link>
          </Button>
        </Form>
      </Segment>
    </Container>
  )
}

export default NewBlog