// TodoQuery.js
import Cookies from 'js-cookie';

import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchTodos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/todos`, {
      headers: {
        Authorization: Cookies.get('access_token'),
      },
    });
    console.log('Fetch Todos Response:', response.data);
    return response.data;
  } catch (error) {
    // console.error('Error fetching todos:', error);
    // throw new Error('Error fetching todos');
  }
};

const addTodo = async (newTask) => {
  console.log(newTask);
  try {
    const response = await axios.post(`${API_BASE_URL}/api/todos/`, newTask, {
      headers: {
        Authorization: Cookies.get('access_token'),
      },
    });
    console.log('Add Todo Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding todo:', error);
    // throw new Error('Error adding todo');
  }
};

const deleteTodo = async (taskId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/todos/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw new Error('Error deleting todo');
  }
};

export function useTodos() {
  return useQuery('todos', fetchTodos);
}

export function useAddTodo() {
  const queryClient = useQueryClient();

  return useMutation(addTodo, {
    onSuccess: (newTask) => {
      try {
        const previousTasks = queryClient.getQueryData('todos') || [];
        queryClient.setQueryData('todos', [...previousTasks, newTask]);
      } catch (error) {
        console.error('Error updating cache after adding todo:', error);
      }
    },
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
}
