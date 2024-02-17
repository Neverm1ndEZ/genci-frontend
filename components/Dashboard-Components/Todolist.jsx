'use client';
import React, { useContext, useState } from 'react';
import { parse, format } from 'date-fns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { Modal, Box } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useAddTodo, useDeleteTodo } from '../../utils/query/TodoQuery';
import Dropdown from '../Select-Dropdown/Dropdown';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskDate, setTaskDate] = useState(null);
  const [taskDescription, settaskDescription] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const addTaskMutation = useAddTodo();
  const deleteTaskMutation = useDeleteTodo();

  const addTask = async () => {
    setOpenModal(true);
    if (newTask.trim() !== '' && taskDate) {
      const formattedDate = format(taskDate, 'yyyy-MM-dd');
      const newTaskData = {
        text: newTask,
        date: formattedDate,
        description: taskDescription,
      };

      setTasks([...tasks, newTaskData]);
      await addTaskMutation.mutateAsync(newTaskData);
      setNewTask('');
      setTaskDate(null);
      settaskDescription('');
      setOpenModal(false);
    }
  };

  const deleteTask = async (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    await deleteTaskMutation.mutateAsync(taskId);
  };

  const handleYearChange = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollTo(0, 0);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="bg-darkBackgroundSecondary text-white mx-2 mr-3 rounded-lg h-full overflow-y-scroll">
        <div className="w-full flex justify-between items-center p-4 ">
          <h1 className="text-lg font-semibold">Your Tasks</h1>
          <button
            className="px-2 py-2 rounded-lg bg-gradientPrimaryhover:bg-transparent transition-all duration-200 hover:scale-y-105 font-semibold not-italic"
            onClick={addTask}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M9.49001 21.6042C11.4884 22.0017 13.5598 21.7976 15.4423 21.0179C17.3247 20.2382 18.9337 18.9177 20.0657 17.2236C21.1977 15.5294 21.8019 13.5376 21.8019 11.5C21.8019 11.1031 21.4801 10.7813 21.0832 10.7813C20.6862 10.7813 20.3644 11.1031 20.3644 11.5C20.3644 13.2533 19.8445 14.9671 18.8705 16.4249C17.8964 17.8827 16.512 19.0189 14.8922 19.6898C13.2724 20.3608 11.49 20.5363 9.77045 20.1943C8.05089 19.8522 6.47137 19.008 5.23163 17.7682C3.9919 16.5285 3.14763 14.949 2.80559 13.2294C2.46355 11.5099 2.6391 9.72748 3.31003 8.10769C3.98097 6.4879 5.11717 5.10344 6.57494 4.12939C8.03272 3.15534 9.74659 2.63544 11.4998 2.63544C11.8968 2.63544 12.2186 2.31364 12.2186 1.91669C12.2186 1.51973 11.8968 1.19794 11.4998 1.19794C9.46228 1.19794 7.47048 1.80215 5.77631 2.93415C4.08214 4.06616 2.7617 5.67512 1.98196 7.55758C1.20222 9.44004 0.998202 11.5114 1.39571 13.5099C1.79322 15.5083 2.7744 17.3439 4.21517 18.7847C5.65594 20.2255 7.4916 21.2066 9.49001 21.6042Z"
                fill="white"
              />
              <path
                d="M11.4998 7.90627C11.8968 7.90627 12.2186 8.22807 12.2186 8.62502V10.7813H14.3748C14.7718 10.7813 15.0936 11.1031 15.0936 11.5C15.0936 11.897 14.7718 12.2188 14.3748 12.2188H12.2186L12.2186 14.375C12.2186 14.772 11.8968 15.0938 11.4998 15.0938C11.1029 15.0938 10.7811 14.772 10.7811 14.375V12.2188H8.62484C8.22789 12.2188 7.90609 11.897 7.90609 11.5C7.90609 11.1031 8.22789 10.7813 8.62484 10.7813H10.7811L10.7811 8.62502C10.7811 8.22807 11.1029 7.90627 11.4998 7.90627Z"
                fill="white"
              />
              <path
                d="M14.0748 1.52244C13.6904 1.4235 13.2986 1.65492 13.1996 2.03935C13.1007 2.42378 13.3321 2.81562 13.7165 2.91457C16.8305 3.71606 19.2837 6.16924 20.0852 9.28324C20.1841 9.66767 20.576 9.8991 20.9604 9.80015C21.3448 9.70121 21.5763 9.30936 21.4773 8.92493C20.5453 5.30373 17.696 2.45447 14.0748 1.52244Z"
                fill="white"
              />
            </svg>
          </button>
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="email-verification-modal"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 700,
                maxWidth: '90%',
                bgcolor: '#131619',
                boxShadow: 24,
                p: 4,
                textAlign: 'center',
                borderRadius: '12px',
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[1.5rem] leading-[1.875rem] font-bold">
                  Add Your Task
                </h2>
                <button
                  className="font-bold"
                  onClick={() => setOpenModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#DFDFDF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                      stroke="#DFDFDF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <hr className="bg-[#35373E] h-[1px] mb-6" />

              <div className="flex flex-col">
                <input
                  type="text"
                  variant="outlined"
                  className="bg-[#35373E] w-full h-[3.5rem] font-montserrat text-[#F7F7F7] border border-solid border-[#35373E] rounded-[0.625rem] mb-4 p-4"
                  placeholder="Title"
                  value={newTask}
                  size="small"
                  onChange={(e) => setNewTask(e.target.value)}
                />

                <DatePicker
                  className="bg-[#35373E] w-full h-[3.5rem] font-montserrat text-[#F7F7F7] border border-solid border-[#35373E] rounded-[0.625rem] mb-4 p-4"
                  value={taskDate}
                  onChange={(newValue) => setTaskDate(newValue)}
                  slotProps={{ textField: { size: 'small' } }}
                  placeholder="Select Date"
                />

                <textarea
                  name="message"
                  className="bg-[#35373E] w-full font-montserrat text-[#F7F7F7] border border-solid border-[#35373E] rounded-[0.625rem] mb-4 p-4"
                  rows="7"
                  placeholder="Short Description"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-[25%] px-4 h-[3.3125rem] text-[0.8125rem] leading-[1.88706rem] tracking-[0.11794rem] lg:h-[2.93rem] lg:leading-[2.00763rem] lg:text-[0.8365rem] lg:tracking-[0.1255rem] uppercase flex-shrink-0 bg-gradientPrimary rounded-xl hover:bg-transparent transition-all duration-200 hover:scale-y-105 font-semibold not-italic"
                onClick={addTask}
              >
                Add
              </button>
            </Box>
          </Modal>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="px-2.5 ">
              <div className="bg-[#0D0F10] rounded-[0.9375rem] flex flex-col justify-between gap-4 mb-5 border-l-4 border-[#D41275]">
                <div className="mx-4 py-2">
                  <h2 className="text-[1rem] leading-[3rem] font-semibold">
                    {task.text}
                  </h2>
                </div>
                {task.date && (
                  <div className="flex justify-end text-sm p-3 text-gray-400 ml-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M1.6665 9.99998C1.6665 6.85728 1.6665 5.28593 2.64281 4.30962C3.61913 3.33331 5.19047 3.33331 8.33317 3.33331H11.6665C14.8092 3.33331 16.3805 3.33331 17.3569 4.30962C18.3332 5.28593 18.3332 6.85728 18.3332 9.99998V11.6666C18.3332 14.8093 18.3332 16.3807 17.3569 17.357C16.3805 18.3333 14.8092 18.3333 11.6665 18.3333H8.33317C5.19047 18.3333 3.61913 18.3333 2.64281 17.357C1.6665 16.3807 1.6665 14.8093 1.6665 11.6666V9.99998Z"
                          stroke="#A5A6A9"
                          stroke-width="1.5"
                        />
                        <path
                          d="M5.8335 3.33331V2.08331"
                          stroke="#A5A6A9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M14.1665 3.33331V2.08331"
                          stroke="#A5A6A9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M2.0835 7.5H17.9168"
                          stroke="#A5A6A9"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M15.0002 14.1667C15.0002 14.6269 14.6271 15 14.1668 15C13.7066 15 13.3335 14.6269 13.3335 14.1667C13.3335 13.7064 13.7066 13.3333 14.1668 13.3333C14.6271 13.3333 15.0002 13.7064 15.0002 14.1667Z"
                          fill="#A5A6A9"
                        />
                        <path
                          d="M15.0002 10.8333C15.0002 11.2936 14.6271 11.6667 14.1668 11.6667C13.7066 11.6667 13.3335 11.2936 13.3335 10.8333C13.3335 10.3731 13.7066 10 14.1668 10C14.6271 10 15.0002 10.3731 15.0002 10.8333Z"
                          fill="#A5A6A9"
                        />
                        <path
                          d="M10.8332 14.1667C10.8332 14.6269 10.4601 15 9.99984 15C9.5396 15 9.1665 14.6269 9.1665 14.1667C9.1665 13.7064 9.5396 13.3333 9.99984 13.3333C10.4601 13.3333 10.8332 13.7064 10.8332 14.1667Z"
                          fill="#A5A6A9"
                        />
                        <path
                          d="M10.8332 10.8333C10.8332 11.2936 10.4601 11.6667 9.99984 11.6667C9.5396 11.6667 9.1665 11.2936 9.1665 10.8333C9.1665 10.3731 9.5396 10 9.99984 10C10.4601 10 10.8332 10.3731 10.8332 10.8333Z"
                          fill="#A5A6A9"
                        />
                        <path
                          d="M6.66667 14.1667C6.66667 14.6269 6.29357 15 5.83333 15C5.3731 15 5 14.6269 5 14.1667C5 13.7064 5.3731 13.3333 5.83333 13.3333C6.29357 13.3333 6.66667 13.7064 6.66667 14.1667Z"
                          fill="#A5A6A9"
                        />
                        <path
                          d="M6.66667 10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333C5 10.3731 5.3731 10 5.83333 10C6.29357 10 6.66667 10.3731 6.66667 10.8333Z"
                          fill="#A5A6A9"
                        />
                      </svg>
                    </span>
                    <span className="pl-3">
                      {format(
                        parse(task.date, 'yyyy-MM-dd', new Date()),
                        'MM-dd-yyyy'
                      )}
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </LocalizationProvider>
  );
}
