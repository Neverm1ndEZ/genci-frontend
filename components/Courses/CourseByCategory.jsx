'use client';
import React, { useState } from 'react';
import {
  Container,
  Grid,
  IconButton,
  Card,
  CardContent,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.css';
import CategoryCards from './CategoryCards';
const categories = ['BlockChain', 'Crypto', 'App-development'];
const courses = [
  {
    id: 0,
    imagesrc:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagealt: 'Sunset in the mountains',
    name: 'Instructor name',
    caption: 'A small course description in one-two line. lorem epsum dabadu',
    button: 'Show More',
    category: 'BlockChain',
  },
  {
    id: 1,
    imagesrc:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagealt: 'Sunset in the mountains',
    name: 'Instructor name',
    caption: 'A small course description in one-two line. lorem epsum dabadu',
    button: 'Show More',
    category: 'Crypto',
  },
  {
    id: 2,
    imagesrc:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagealt: 'Sunset in the mountains',
    name: 'Instructor name',
    caption: 'A small course description in one-two line. lorem epsum dabadu',
    button: 'Show More',
    category: 'App-development',
  },
  {
    id: 3,
    imagesrc:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagealt: 'Sunset in the mountains',
    name: 'Instructor name',
    caption: 'A small course description in one-two line. lorem epsum dabadu',
    button: 'Show More',
    category: 'Blockchain',
  },
  {
    id: 4,
    imagesrc:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagealt: 'Sunset in the mountains',
    name: 'Instructor name',
    caption: 'A small course description in one-two line. lorem epsum dabadu',
    button: 'Show More',
    category: 'Blockchain',
  },
  {
    id: 5,
    imagesrc:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagealt: 'Sunset in the mountains',
    name: 'Instructor name',
    caption: 'A small course description in one-two line. lorem epsum dabadu',
    button: 'Show More',
    category: 'Blockchain',
  },
  {
    id: 6,
    imagesrc:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagealt: 'Sunset in the mountains',
    name: 'Instructor name',
    caption: 'A small course description in one-two line. lorem epsum dabadu',
    button: 'Show More',
    category: 'Blockchain',
  },
  {
    id: 7,
    imagesrc:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagealt: 'Sunset in the mountains',
    name: 'Instructor name',
    caption: 'A small course description in one-two line. lorem epsum dabadu',
    button: 'Show More',
    category: 'Blockchain',
  },
];

const CourseByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategorySelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    setAnchorEl(null);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  return (
    <Container className="p-4">
      <IconButton
        color="primary"
        aria-controls="filter-menu"
        aria-haspopup="true"
        onClick={handleFilterClick}
      >
        <i className="fas fa-bars"></i>
      </IconButton>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseFilter}
      >
        {categories.map((category) => (
          <MenuItem
            key={category}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
      <Grid container spacing={1} className="mt-3">
        {filteredCourses.map((course, index) => (
          <Grid item key={index} xs={12} sm={8} md={5}>
            <CategoryCards courses={[course]} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseByCategory;
